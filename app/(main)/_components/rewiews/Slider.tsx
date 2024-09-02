'use client';

import SliderButton from '@/components/SliderButton';
import { Rating } from '@mui/material';
import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';

const arr = [
  {
    name: 'Megen W.',
    rewiew:
      "“You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!”",
    rating: 5,
    job: 'Traveler',
    src: '1',
  },
  {
    name: 'Suzan B.',
    rewiew:
      "“Items That I ordered were the best investment I ever made. I can't say enough about your quality service.”",
    rating: 3,
    job: 'UI Designer',
    src: '3',
  },
  {
    name: 'Antonio B.',
    rewiew:
      "“Items That I ordered were the best investment I ever made. I can't say enough about your quality service.”",
    rating: 3.5,
    job: 'UI Designer',
    src: '2',
  },
  {
    name: 'Josh B.',
    rewiew:
      "“Items That I ordered were the best investment I ever made. I can't say enough about your quality service.”",
    rating: 4.5,
    job: 'UI Designer',
    src: '3',
  },
  {
    name: 'Megen W.',
    rewiew:
      '“Just what I was looking for. Thank you for making it painless, pleasant and most of all hassle free! All products are great.”',
    rating: 4,
    job: 'UI Designer',
    src: '2',
  },
];
export default function Slider() {
  const [count, setCount] = useState(0);

  const onClickLeft = () => {
    count > 0 && setCount(count - 1);
  };
  const onClickRight = () => {
    count < arr.length - 1 && setCount(count + 1);
  };
  const prevIndex = count > 0 ? count - 1 : arr.length - 1;
  const nextIndex = count < arr.length - 1 ? count + 1 : 0;
  const visibleItems = [arr[prevIndex], arr[count], arr[nextIndex]];
  return (
    <div className=" flex flex-col items-center justify-center mt-5 md:mt-8 lg:mt-12 gap-6 lg:gap-10">
      <div className=" w-full flex flex-row">
        {visibleItems.map((item, i) => (
          <div
            key={i}
            className={clsx(
              ' max-w-[360px] sm:max-w-[450px] md:max-w-[550px] lg:max-w-[600px] xl:max-w-[700px] flex items-center flex-row px-2 py-4 sm:px-4 sm:py-6 xl:px-8 xl:py-11 md:min-h-[191px] lg:min-h-[207px] xl:min-h-[299px]  bg-white rounded-lg ',
              item === arr[count] ? ' z-10 -mx-[200px] sm:-mx-[270px] md:-mx-[340px] lg:-mx-[400px] xl:-mx-[440px]' : 'scale-75'
            )}
            style={{ boxShadow: '0px 20px 60px 0px rgba(46, 33, 61, 0.08)' }}
          >
            <div
              className="relative min-w-20 w-20 h-20 sm:min-w-32 sm:w-32 sm:h-32 mr-4 sm:mr-6  xl:min-w-52 xl:h-52 xl:mr-16"
              style={{ backgroundColor: 'rgb(217, 217, 217)' }}
            >
              <div className="absolute z-10 w-20 h-20 sm:w-32 sm:h-32 xl:w-52 xl:h-52 bottom-2 left-2 xl:bottom-4 xl:left-4">
                <Image
                  className=""
                  src={`/home/rewiews/${item.src}.png`}
                  width={260}
                  height={200}
                  alt=""
                />
              </div>
            </div>
            <div className="flex flex-col justify-between sm:gap-1 md:gap-2 xl:gap-5">
              <p className="opacity-70 text-xs lg:text-sm min-w-40 sm:min-w-48 xl:min-w-96 line-clamp-3">
                {item.rewiew}
              </p>
              <Rating value={item.rating} size="small" precision={0.5} />
              <div className="w-3/5 h-[1px] bg-slate-800"></div>
              <h3 className="opacity-70 text-base md:text-lg lg:text-xl xl:text-2xl">
                {item.name}
              </h3>
              <p className="opacity-70 text-xs lg:text-sm">{item.job}</p>
            </div>
          </div>
        ))}
      </div>
      <div className=" flex flex-row gap-1">
        <SliderButton
          count={count}
          length={arr.length}
          onClickLeft={onClickLeft}
          onClickRight={onClickRight}
        />
      </div>
    </div>
  );
}
