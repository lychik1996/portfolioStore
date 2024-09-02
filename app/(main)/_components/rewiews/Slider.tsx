'use client';

import SliderButton from '@/components/SliderButton';
import { Rating } from '@mui/material';
import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';
import Item from './Item';

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
            <Item arr={arr} item={item} count={count} key={i}/>
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
