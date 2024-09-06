'use client';

import { Rating } from '@mui/material';
import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';
import Timer from './Timer';
import Link from 'next/link';

const item = {
  name: 'Denim Jacket',
  rating: 4.5,
  quaantityRating: 3,
  oldPrice: 59,
  newPrice: 39,
  peopleViewing: 24,
  saleTime: '2024-09-12T12:00:00',
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
  const [size, setSize] = useState(0);
  const [color, setColor] = useState(0);
  const [rating, setRating] = useState(item.rating);
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="flex flex-col md:flex-row md:justify-between gap-4 w-5/6 xl:w-7/12 pb-8">
      <div className=" max-h-[393px] flex flex-row gap-3">
        <div className=" overflow-y-scroll scrollbar-hide">
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

        <div className="flex flex-col gap-3">
          <p className="volkhov">Size: {item.size[size]}</p>
          <div className="flex flex-row  gap-2">
            {item.size.map((it, i) => (
              <div
                key={i}
                onClick={() => setSize(i)}
                className={clsx(
                  'size-11 flex items-center justify-center border-[1px] rounded-[5px] cursor-pointer',
                  i === size && 'text-white bg-black border-black'
                )}
              >
                {it}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <p className="volkhov">Color: {item.color[color]}</p>
          <div className="flex flex-row  gap-2">
            {item.color.map((cl, i) => (
              <div
                key={i}
                onClick={() => setColor(i)}
                className={clsx(
                  'size-10 rounded-full flex items-center justify-center cursor-pointer',
                  i === color && ' border-2 border-black'
                )}
              >
                <div
                  className={clsx(
                    'size-full rounded-full',
                    i === color && 'scale-75'
                  )}
                  style={{ backgroundColor: cl }}
                ></div>
              </div>
            ))}
          </div>
        </div>
        <p className="mb-2 volkhov">Quantity</p>
        <div className="flex flex-row justify-between  gap-4">
          <div className="flex flex-row items-center border-[1px] rounded border-slate-300">
            <button
              className="w-11 h-12"
              onClick={() => {
                if (quantity > 1) {
                  setQuantity((prev) => prev - 1);
                }
              }}
            >
              -
            </button>
            <div className="w-10 h-11 flex items-center justify-center">
              {quantity}
            </div>
            <button
              onClick={() => setQuantity((prev) => prev + 1)}
              className="w-11 h-12"
            >
              +
            </button>
          </div>
          <button className="flex-1 border-[1px] rounded border-black">
            Add to Card
          </button>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-row flex-wrap justify-center gap-6 py-4 border-b-[1px]">
            <Link href={'/'} className="flex flex-row items-center gap-2">
              <Image
                src={'/products/compare.svg'}
                width={13.75}
                height={17.5}
                alt=""
              />
              Compare{' '}
            </Link>
            <Link href={'/'} className="flex flex-row items-center gap-2">
              <Image
                src={'/products/questions.svg'}
                width={20}
                height={20}
                alt=""
              />
              Ask a questions
            </Link>
            <Link href={'/'} className="flex flex-row items-center gap-2">
              <Image
                src={'/products/share.svg'}
                width={20}
                height={20}
                alt=""
              />
              Share
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row items-center justify-between gap-2 ">
              <div className='flex flex-row gap-2'>
                <Image
                  src={'/products/delivery.svg'}
                  width={20}
                  height={15}
                  alt=""
                />
                <p className='volkhov font-bold'>Estimated Delivery:</p>
              </div>{' '}
              <p className=" pl-1 text-end volkhov"> Jul 30 - Aug 03</p>
            </div>
            <div className="flex flex-row items-center justify-between gap-2 ">
              <div className='flex flex-row gap-2'>
                <Image
                  src={'/products/box.svg'}
                  width={20}
                  height={15}
                  alt=""
                />
                <p className='volkhov font-bold'>Free Shipping & Returns: </p>
              </div>
              <p className="font-normal volkhov pl-1 text-end">
                On all orders over $75
              </p>
            </div>
          </div>
          <div className='flex flex-col items-center justify-center w-full h-28 gap-3 bg-slate-50'>
              <Image src={'/products/cards.png'} className='border-dashed border-[1px]' width={300} height={25} alt=''/>
              <p className='volkhov'>Guarantee safe & secure checkout</p>
          </div>
        </div>
      </div>
    </div>
  );
}
