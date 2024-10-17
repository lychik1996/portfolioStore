'use client';
import ColorButton from '@/components/ColorButton';
import { useFavoriteTrigger } from '@/store/use-favoriteTrigger';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState, useTransition } from 'react';
import { FaStar } from 'react-icons/fa';
import { FaRegStar } from "react-icons/fa6";
import { toast } from 'sonner';
interface IProps {
  name: string;
  src: string;
  price: number;
  oldPrice: number | null;
  colors: string[];
  counts: number;
  id:string;
  isFavorite:boolean;
  
}
interface ItemProps {
  item: IProps;
  email:string | null | undefined;
  favPage?:boolean;
  
}
export default function Item({ item,email,favPage}: ItemProps) {
  const [color, setColor] = useState(0);
  const [isFav, setIsFav] = useState(item.isFavorite);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [transition, setTransition] = useTransition();
  const {setTriggerFavorite} = useFavoriteTrigger();
  useEffect(() => {
    const scrollContainer = scrollRef.current;

    const handleWheele = (event: WheelEvent) => {
      event.preventDefault();
      if (scrollContainer) scrollContainer.scrollLeft += event.deltaY;
    };
    scrollContainer?.addEventListener('wheel', handleWheele);
    return () => {
      scrollContainer?.removeEventListener('wheel', handleWheele);
    };
  }, []);
  const toggleFavorite = ()=>{
    setTransition(async() =>{
        await axios.post('/api/products/favorite/toggle',{
          email,
          productId:item.id,
        })
        .then(()=>{
          toast.success("Favorite updated successfully");
          if(favPage){
            setTriggerFavorite();
          }
          setIsFav(!isFav)
          
        })
        .catch((error)=>{
          toast.error(error.response?.data.message)
        })
    })
  }
  
  
  return (
    <div className="flex flex-col gap-2 md:hover:scale-110 md:hover:z-10 md:hover:shadow-xl transition-all duration-300 ease-in-out p-1 bg-white relative">
      <Link
        href={`/products/${item.id}`}
        className="relative flex items-center justify-center cursor-pointer"
      >
        <Image
          src={`/products/${item.src}`}
          alt=""
          width={181}
          height={241}
          className="w-[145px] h-[193px] sm:w-[181px] sm:h-[241px]"
        />
        {item.counts < 1 && (
          <div className=" absolute flex justify-center items-center text-center bg-slate-500 text-white rounded-full size-12 uppercase text-xs">
            sold out
          </div>
        )}
        {email && <button className=" absolute rounded-full p-2 bg-white/30 top-2 right-2" disabled={transition} onClick={(e)=>{
          e.preventDefault(); 
          e.stopPropagation();
          toggleFavorite();
        }}>
          {isFav?<FaStar />:<FaRegStar/> }
          
          </button>}
        
        
      </Link>
      <div className="flex flex-col gap-2">
        <Link href={`/products/${item.id}`} className="cursor-pointer">
          <h4 className='max-w-36 md:max-w-44 truncate  md:whitespace-normal md:overflow-visible'>{item.name}</h4>
        </Link>

        <div className="flex flex-row gap-2">
          <p>
            ${' '}
            {item.price % 1 === 0 ? `${item.price}.00` : item.price.toFixed(2)}
          </p>
          {item.oldPrice && (
            <p className="text-slate-400 line-through">
              ${' '}
              {item.oldPrice % 1 === 0
                ? `${item.oldPrice}.00`
                : item.oldPrice.toFixed(2)}
            </p>
          )}
        </div>
        <div className='max-w-32 overflow-x-scroll scrollbar-hide' ref={scrollRef}>
          <div className="flex flex-row gap-2">
            {item.colors.map((cl, i) => (
              <ColorButton
                cl={cl}
                color={color}
                setColor={setColor}
                index={i}
                key={i}
                height="26px"
                width="26px"
              />
            ))}
          </div>
        </div>
      </div>
      
    </div>
  );
}
