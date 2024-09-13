'use client';
import Link from 'next/link';
import Item from '../_components/Drawer/Item';
import { useEffect, useState } from 'react';
import Subtotal from '../_components/Drawer/Subtotal';
import Subscribe from '../_components/subscribe/Subscribe';
import DrawerHead from './_components/DrawerHead';
const arr = [
  {
    src: '1',
    name: 'Denim Jacket',
    color: 'Red',
    price: 14.8,
    count: 1,
  },
  {
    src: '1',
    name: 'Denim Jack',
    color: 'Red',
    price: 14.8,
    count: 1,
  },
  {
    src: '1',
    name: 'Denim Jackkket',
    color: 'Red',
    price: 12,
    count: 12,
  },
  {
    src: '1',
    name: 'Denim KKKKKKK',
    color: 'Blue',
    price: 16,
    count: 2,
  },
];
export default function Drawer() {
  const [items, setItems] = useState(arr);
  const [subtotal, setSubtotal] = useState(0);
  useEffect(() => {
    const newSubtotal = arr.reduce((acum, i) => acum + i.price * i.count, 0);
    setSubtotal(newSubtotal);
  }, [items]);
  const updateItemCount = (index: number, newCount: number) => {
    setItems((prevItems) => {
      const updatedItems = [...prevItems];
      if (newCount <= 0) {
        updatedItems.splice(index, 1);
      } else {
        updatedItems[index].count = newCount;
      }
      return updatedItems;
    });
  };
  return (
    <>
      <div className='flex flex-col w-5/6 xl:w-7/12 md:pt-4'>
        <DrawerHead/>
        <div className="flex-1 w-full p-0 border-b-[1px] border-slate-700  scrollbar-hide mt-3 overflow-y-scroll max-h-[450px]">
          <div className="flex flex-col gap-2">
            {arr.map((item, i) => ( 
              <Item
                key={i}
                item={item}
                index={i}
                onCountChange={(newCount) => updateItemCount(i, newCount)}
                styleDiv="flex flex-col sm:flex-row justify-between items-start w-full"
                styleBlock="border-2 rounded-md border-slate-400 text-sm"
                main
              />
            ))}
          </div>
        </div>
        <div className="w-full flex md:justify-end mt-2 md:mt-6">
            <div className='w-full md:w-[50%] flex flex-col gap-2'>
            <Subtotal subtotal={subtotal} />
        </div>
        </div>
      </div>
      <Subscribe/>
    </>
  );
}
