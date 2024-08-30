import Image from 'next/image';
import Rating from "@mui/material/Rating";

interface ItemData {
    src: string;
    name: string;
    review: number;
    price: number;
    rating: number;
  }
  
  interface ItemProps {
    item: ItemData;
  }
export default function Item({item}:ItemProps){
    return(
        <div
            style={{ boxShadow: '0px 40px 90px 0px rgba(0, 0, 0, 0.06)' }}
            className="flex flex-col gap-4 px-4 py-3 rounded-xl"
          >
            <Image
              src={`/home/newArriwals/${item.src}`}
                className='w-auto h-auto'
              width={240}
              height={100}
              alt={item.name}
            />
            <div className='flex justify-between' >
              <div className='flex flex-col gap-y-4 justify-between' style={{color:'rgb(72, 72, 72)'}}>
                <div>
                  <p className='text-lg mb-1 font-medium'>{item.name}</p>
                  <p className='text-xs text-slate-400'>Al Karam</p>
                </div>
                <p className='text-xs'>
                  (
                  {item.review > 1000
                    ? `${(item.review / 1000).toFixed(1)} k`
                    : item.review}
                  ) Customer Reviews
                </p>
                <p className='font-medium text-xl'>$ {item.price % 1 === 0 ? `${item.price}.00` : item.price.toFixed(2)}</p>
              </div>
              <div className='flex flex-col justify-between text-end'>
                <Rating value={item.rating} size='small' precision={0.5}/>
                <p className='text-xs text-red-500'>Almost Sold Out</p>
              </div>
            </div>
          </div>
    )
}