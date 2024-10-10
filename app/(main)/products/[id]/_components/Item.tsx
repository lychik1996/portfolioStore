'use client';

import { CircularProgress, Rating } from '@mui/material';
import clsx from 'clsx';
import Image from 'next/image';
import { useEffect, useId, useState, useTransition } from 'react';
import Timer from './Timer';
import SubInfo from './SubInfo';
import ChooseParams from './ChooseParams';
import axios from 'axios';
import { toast } from 'sonner';
import { useSession } from 'next-auth/react';
import { v4 as uuidv4 } from 'uuid';

interface ItemProps{
  id:string,
  name:string,
  smallImg:string[],
  bigImgs:string[],
  price:number,
  oldPrice:number | null,
  counts:number,
  colors:string[],
  sizes:string[],
  discountTime: Date | null,
  rating:string,
  votesCount:number,
}
export default function Item({id}:{id:string}) {
  
  const {data:session} = useSession();
  const [product, setProduct] = useState<ItemProps | null>(null);
  const [src, setSrc] = useState(0);
  const [rating, setRating] = useState(0);
  const [votesCount, setVotesCount] = useState(0);
  const [loading,setLoading] = useState(true);
  const [transitionRating, setTransitionRating] = useTransition();
  

  useEffect(()=>{
    const getProduct = async()=>{
        const req = await axios.get('/api/products/getProduct',{params:{id}})
        .then(res=>{
          setProduct(res.data);
          setRating(res.data.rating);
          setVotesCount(res.data.votesCount);
        })
        .catch((error)=>toast.error(error.response?.data?.message))
        .finally(()=>setLoading(false))
    }
    getProduct()
  },[id]);
  const handleRatingChange = (newRating:number)=>{
    
      if(!session?.user.email){
        toast.error("You must be authorized to vote")
        return
      }
      setTransitionRating(async()=>{
        await axios.patch('/api/products/votesProduct',{
          rating:newRating,
          email:session.user.email,
          id:product?.id
        })
        .then((res)=>{
          setRating(res.data.rating);
          setVotesCount(res.data.votesCount);
          toast.success("Votes is success");
        })
        .catch((error)=>toast.error(error.response?.data?.message))
      });
  }
  
  if(loading){
    return(
      <div className="flex-1 flex justify-center w-full pt-32 sm:pt-52  min-h-[1300px] md:min-h-[855px]">
          <div className="flex flex-row gap-5">
          <h3 className="text-2xl">Loading...</h3>
          <CircularProgress color="inherit"/>
          </div>
      </div>
    )
  }
  if(!product){
    return(
      <div className='flex-1 flex justify-center w-full pt-32 sm:pt-52  min-h-[400px] sm:min-h-[855px] text-slate-400 text-xl'>
        Product not found
      </div>
    )}
  
  return (
    <div className="flex flex-col md:flex-row md:justify-between gap-4 w-5/6 xl:w-7/12 pb-8">
      <div className=" max-h-[393px] flex flex-row gap-3">
        <div className=" overflow-y-scroll scrollbar-hide pr-2">
          <div className="flex flex-col gap-3 cursor-pointer">
            {product?.smallImg.map((img, i) => (
              <div
                key={i}
                onClick={() => setSrc(i)}
                className={clsx('p-2', src === i && 'border-black border-2')}
              >
                <Image
                  key={i}
                  src={`/products/${img}`}
                  alt=""
                  width={58}
                  height={77}
                  className="w-[58] h-[77]"
                />
              </div>
            ))}
          </div>
        </div>
        <div className=" w-[295px] h-[393px] ">
          <Image
            src={`/products/${product?.bigImgs[src]}`}
            alt=""
            className=" w-[295px] h-[393px] "
            width={295}
            height={393}
          />
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-2">
        <h4 className="text-slate-400 text-sm">Fasco</h4>
        <div className="flex flex-row justify-between items-center">
          <h3 className="text-xl lg:text-2xl">{product?.name}</h3>
          <div className="rounded-full border-[1px] p-2 border-slate-200 cursor-pointer">
            <Image
              src="/products/favorite.svg"
              alt=""
              width={18.5}
              height={17.8}
              className="border-dashed border-[1px]"
            />
          </div>
        </div>
        <div className="flex flex-row items-center">
          <Rating
            value={rating}
            size="small"
            precision={0.5}
            onChange={(event, newValue) =>{
              newValue && handleRatingChange(newValue)
            } }
            disabled={transitionRating}
            sx={{
              '& .MuiRating-iconFilled': {
                color: 'black',
              },
              '& .MuiRating-iconEmpty': {
                color: 'black',
              },
            }}
          />
          <p className={clsx(
            transitionRating && 'text-slate-400'
          )}>({votesCount})</p>
        </div>
        <div className="flex flex-row items-center gap-2">
          <p className="volkhov text-2xl">
            ${' '}
            {product?.price && product?.price % 1 === 0
              ? `${product?.price}.00`
              : product?.price.toFixed(2)}
          </p>
          {product?.oldPrice &&
          <>
          <p className="text-slate-400 line-through">
            ${' '}
            {product.oldPrice % 1 === 0
              ? `${product.oldPrice}.00`
              :product.oldPrice.toFixed(2)}
          </p>
            <div className="w-24 h-5 flex items-center justify-center bg-red-500 text-white rounded-xl">
            Save {Math.floor((1 - product.price / product.oldPrice) * 100)}%
          </div>
          </>
          }
        </div>
        {product?.discountTime && <Timer saleTime={String(product.discountTime)}/>}
        <div className="flex flex-col gap-3">
          <p className="text-slate-600">
            Only <span className="font-bold">{product?.counts} </span> item(s) left
            in stock!
          </p>
          <div className="w-full h-[5px] bg-slate-300 rounded">
            <div className="w-[29px] bg-red-700 h-[5px] rounded"></div>
          </div>
        </div>
        <ChooseParams colors={product?.colors? product.colors :[]} sizes={product?.sizes? product.sizes :[]}/>
        <SubInfo/>
      </div>
    </div>
  );
}
