'use client';

import { useState } from 'react';
import ScrollBar from './ScrollBar';
import Items from './Items';

const categories = [
  'Men’s Fashion',
  'Women’s Fashion',
  'Women Accessories',
  'Men Accessories',
  'Discount Deals',
];


export default function NewArrivals() {
  const [selected, setSelected] = useState(1);

  return (
    <div
      id="arrivals"
      className="flex flex-col items-center w-5/6 xl:w-7/12 py-8 md:py-16 justify-center gap-7"
    >
      <h2 className="opacity-70 text-xl md:text-2xl xl:text-3xl">
        New Arrivals
      </h2>
      <p className="opacity-50 text-center text-xs md:text-sm lg:text-base max-w-[600px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
        duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
        sollicitudin
      </p>
      <ScrollBar
        selected={selected}
        setSelected={setSelected}
        categories={categories}
      />
      <Items selected={selected}/>
      <button className='button px-5 lg:px-8'>View More</button>
    </div>
  );
}
