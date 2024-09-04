'use client';
import Portal from '@/components/Portal';
import { useModalDrawer } from '@/store/use-modalDrawer';
import { useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import Item from './Item';
import Link from 'next/link';
import clsx from 'clsx';
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
export default function ModalDrawer() {
  const { isOpen, onClose } = useModalDrawer((state) => state);
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
      {isOpen && (
        <Portal referenceId="body" isOpen={isOpen}>
          <div className="fixed z-50 h-[100vh] w-full flex flex-row bg-black/30">
            <div onClick={onClose} className="flex-1"></div>
            <div className=" bg-white flex flex-row p-6 md:p-10 w-full sm:w-[70%] md:w-[65%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
              <div className="w-[95%] flex flex-col">
                <div>
                  <h3 className=" text-2xl xl:text-3xl mb-4">Shopping Cart</h3>
                  <p className="text-base lg:text-lg text-slate-500">
                    Buy <span className="font-bold text-black">$122.35</span>{' '}
                    More And Get{' '}
                    <span className="font-bold text-black">Free Shipping</span>
                  </p>
                </div>
                <div className="flex-1 border-b-[1px] border-slate-700 overflow-y-scroll scrollbar-hide mt-3">
                  <div className="flex flex-col gap-2">
                    {items.map((item, i) => (
                      <Item
                        key={i}
                        item={item}
                        onCountChange={(newCount) =>
                          updateItemCount(i, newCount)
                        }
                      />
                    ))}
                  </div>
                </div>
                <label className="cursor-pointer flex flex-row gap-2 items-center border-b-[1px] py-4 border-slate-700">
                  <input type="checkbox" className="cursor-pointer size-5" />
                  <p className="text-base lg:text-lg text-slate-500">
                    For <span className="font-bold text-black">$10.00</span>{' '}
                    please wrap the product
                  </p>
                </label>
                <div className="flex flex-row items-center justify-between text-base lg:text-lg font-bold py-5">
                  <h3>Subtotal</h3>
                  <h3>
                    ${' '}
                    {subtotal % 1 === 0
                      ? `${subtotal}.00`
                      : `${subtotal.toFixed(2)}`}
                  </h3>
                </div>
                <Link href={'/'} className="button text-center py-1">
                  Checkut
                </Link>
                <Link
                  href={'/'}
                  className="text-center underline font-bold text-base md:text-xl pt-4"
                >
                  View Cart
                </Link>
              </div>
              <IoMdClose
                className="size-6 sm:size-7 cursor-pointer"
                onClick={onClose}
              />
            </div>
          </div>
        </Portal>
      )}
    </>
  );
}
