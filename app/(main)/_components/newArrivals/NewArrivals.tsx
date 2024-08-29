'use client';

import { useState } from 'react';
import ScrollBar from './ScrollBar';
import Image from 'next/image';

const categories = [
  'Men’s Fashion',
  'Women’s Fashion',
  'Women Accessories',
  'Men Accessories',
  'Discount Deals',
];
const items = [
  [
    {
      src: '1.png',
      name: 'Shiny Dress',
      review: 4153,
      price: 95.5,
      rating: 4.3,
    },
    {
      src: '2.png',
      name: 'Long Dress',
      review: 4153,
      price: 95.5,
      rating: 4,
    },
    {
      src: '3.png',
      name: 'Full Sweater',
      review: 4153,
      price: 95.5,
      rating: 4.3,
    },
    {
      src: '4.png',
      name: 'White Dress',
      review: 456,
      price: 95.5,
      rating: 4.3,
    },
    {
      src: '5.png',
      name: 'Colorfull dress',
      review: 6300,
      price: 94,
      rating: 3.5,
    },
    {
      src: '6.png',
      name: 'White Shirt',
      review: 45,
      price: 95.5,
      rating: 4.8,
    },
  ],
  [
    {
      src: '1.png',
      name: 'Shiny Dress',
      review: 4153,
      price: 95.5,
      rating: 4.3,
    },
    {
      src: '2.png',
      name: 'Long Dress',
      review: 4153,
      price: 95.5,
      rating: 4,
    },
    {
      src: '3.png',
      name: 'Full Sweater',
      review: 4153,
      price: 95.5,
      rating: 4.3,
    },
    {
      src: '4.png',
      name: 'White Dress',
      review: 456,
      price: 95.5,
      rating: 4.3,
    },
    {
      src: '5.png',
      name: 'Colorfull dress',
      review: 6300,
      price: 94,
      rating: 3.5,
    },
    {
      src: '6.png',
      name: 'White Shirt',
      review: 45,
      price: 95.5,
      rating: 4.8,
    },
  ],
  [
    {
      src: '1.png',
      name: 'Shiny Dress',
      review: 4153,
      price: 95.5,
      rating: 4.3,
    },
    {
      src: '2.png',
      name: 'Long Dress',
      review: 4153,
      price: 95.5,
      rating: 4,
    },
    {
      src: '3.png',
      name: 'Full Sweater',
      review: 4153,
      price: 95.5,
      rating: 4.3,
    },
    {
      src: '4.png',
      name: 'White Dress',
      review: 456,
      price: 95.5,
      rating: 4.3,
    },
    {
      src: '5.png',
      name: 'Colorfull dress',
      review: 6300,
      price: 94,
      rating: 3.5,
    },
    {
      src: '6.png',
      name: 'White Shirt',
      review: 45,
      price: 95.5,
      rating: 4.8,
    },
  ],
  [
    {
      src: '1.png',
      name: 'Shiny Dress',
      review: 4153,
      price: 95.5,
      rating: 4.3,
    },
    {
      src: '2.png',
      name: 'Long Dress',
      review: 4153,
      price: 95.5,
      rating: 4,
    },
    {
      src: '3.png',
      name: 'Full Sweater',
      review: 4153,
      price: 95.5,
      rating: 4.3,
    },
    {
      src: '4.png',
      name: 'White Dress',
      review: 456,
      price: 95.5,
      rating: 4.3,
    },
    {
      src: '5.png',
      name: 'Colorfull dress',
      review: 6300,
      price: 94,
      rating: 3.5,
    },
    {
      src: '6.png',
      name: 'White Shirt',
      review: 45,
      price: 95.5,
      rating: 4.8,
    },
  ],
  [
    {
      src: '1.png',
      name: 'Shiny Dress',
      review: 4153,
      price: 95.5,
      rating: 4.3,
    },
    {
      src: '2.png',
      name: 'Long Dress',
      review: 4153,
      price: 95.5,
      rating: 4,
    },
    {
      src: '3.png',
      name: 'Full Sweater',
      review: 4153,
      price: 95.5,
      rating: 4.3,
    },
    {
      src: '4.png',
      name: 'White Dress',
      review: 456,
      price: 95.5,
      rating: 4.3,
    },
    {
      src: '5.png',
      name: 'Colorfull dress',
      review: 6300,
      price: 94,
      rating: 3.5,
    },
    {
      src: '6.png',
      name: 'White Shirt',
      review: 45,
      price: 95.5,
      rating: 4.8,
    },
  ],
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
      <p className="opacity-50 text-center text-xs md:text-sm lg:text-base  max-w-[600px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
        duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
        sollicitudin
      </p>
      <ScrollBar
        selected={selected}
        setSelected={setSelected}
        categories={categories}
      />
      <div>
        {items[selected].map((item, i) => (
          <div
            key={i}
            style={{ boxShadow: '0px 40px 90px 0px rgba(0, 0, 0, 0.06)' }}
            className="flex flex-col gap-4 px-3 py-2 rounded-xl"
          >
            <Image
              src={`/home/newArriwals/${item.src}`}
              width={192}
              height={100}
              alt={item.name}
            />
            <div>
              <div>
                <div>
                  <p>{item.name}</p>
                  <p>Al Karam</p>
                </div>
                <p>
                  (
                  {item.review > 1000
                    ? `${(item.review / 1000).toFixed(1)} k`
                    : item.review}
                  ) Customer Reviews
                </p>
              </div>
              <div>
                <div>{item.rating}</div>
                <p>Almost Sold Out</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
