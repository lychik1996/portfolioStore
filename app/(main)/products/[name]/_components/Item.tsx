'use client';

import { Rating } from '@mui/material';
import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';
import Timer from './Timer';
import SubInfo from './SubInfo';
import ChooseParams from './ChooseParams';

const item = {
  name: 'Denim Jacket',
  rating: 4.5,
  quaantityRating: 3,
  oldPrice: 59,
  newPrice: 39,
  peopleViewing: 24,
  saleTime: '2024-11-12T12:00:00',
  smallSrc: [
    'small1.jpg',
    'small2.jpg',
    'small3.jpg',
    'small4.jpg',
    'small5.jpg',
    'small6.jpg',
    'small7.jpg',
    'small8.jpg',
  ],
  baseSrc: [
    'base1.jpg',
    'base2.jpg',
    'base3.jpg',
    'base4.jpg',
    'base5.jpg',
    'base6.jpg',
    'base7.jpg',
    'base8.jpg',
  ],
  count: 9,
  size: ['M', 'L', 'XL', 'XXL'],
  color: ['lightblue', 'black', 'pink'],
  quantity: 1,
};

export default function Item() {
  const [src, setSrc] = useState(0);
  
  const [rating, setRating] = useState(item.rating);
  
  return (
    <div className="flex flex-col md:flex-row md:justify-between gap-4 w-5/6 xl:w-7/12 pb-8">
      <div className=" max-h-[393px] flex flex-row gap-3">
        <div className=" overflow-y-scroll scrollbar-hide pr-2">
          <div className="flex flex-col gap-3 cursor-pointer">
            {item.smallSrc.map((img, i) => (
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
            src={`/products/${item.baseSrc[src]}`}
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
          <h3 className="text-xl lg:text-2xl">Denim Jacket</h3>
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
            sx={{
              '& .MuiRating-iconFilled': {
                color: 'black',
              },
              '& .MuiRating-iconEmpty': {
                color: 'black',
              },
            }}
          />
          <p>({item.quaantityRating})</p>
        </div>
        <div className="flex flex-row items-center gap-2">
          <p className="volkhov text-2xl">
            ${' '}
            {item.oldPrice % 1 === 0
              ? `${item.oldPrice}.00`
              : item.oldPrice.toFixed(2)}
          </p>
          <p className="text-slate-400 line-through">
            ${' '}
            {item.newPrice % 1 === 0
              ? `${item.newPrice}.00`
              : item.newPrice.toFixed(2)}
          </p>
          <div className="w-24 h-5 flex items-center justify-center bg-red-500 text-white rounded-xl">
            Save {Math.floor((1 - item.newPrice / item.oldPrice) * 100)}%
          </div>
        </div>
        <div className="flex flex-row items-center gap-2">
          <Image src={`/products/eye.svg`} alt="" width={20} height={12.8} />
          <p className="text-slate-400">
            {item.peopleViewing} {''}people are viewing this right now
          </p>
        </div>
        <Timer saleTime={item.saleTime} />
        <div className="flex flex-col gap-3">
          <p className="text-slate-600">
            Only <span className="font-bold">{item.count} </span> item(s) left
            in stock!
          </p>
          <div className="w-full h-[5px] bg-slate-300 rounded">
            <div className="w-[29px] bg-red-700 h-[5px] rounded"></div>
          </div>
        </div>
        <ChooseParams colors={item.color} sizes={item.size}/>
        <SubInfo/>
      </div>
    </div>
  );
}
