'use client';

import { useModalDrawer } from '@/store/use-modalDrawer';
import { useCallback, useEffect, useRef, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import Item from './Item';
import Link from 'next/link';
import clsx from 'clsx';
import Subtotal from './Subtotal';
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
  const startX = useRef<number>(0);
  const startY = useRef<number>(0);
  const [translateX, setTranslateX] = useState<number>(0);
  const [shouldClose, setShouldClose] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const [checkHidden, setCheckHidden] = useState(false);

  const handleTouchStart = useCallback((e: TouchEvent) => {
    startX.current = e.touches[0].clientX;
    startY.current = e.touches[0].clientY;
    setTranslateX(0);
    setShouldClose(false);
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    const currentX = e.touches[0].clientX;
    const distance = currentX - startX.current;

    const currentY = e.touches[0].clientY; 
    const distanceY = distance>10?0:Math.abs(currentY - startY.current);
    
    if(distanceY<15){
      if (distance > 10) {
        setTranslateX(distance);
      }
      if(distance>20){
        setCheckHidden(true);
      }
      if (distance > 70) {
        setShouldClose(true);
      } else {
        setShouldClose(false);
      }
    }
  }, []);

  const debounceClose = useCallback(
    (time?: number) => {
      if (modalRef.current) {
        modalRef.current.style.transition = `transform ${
          time ? time : '0.5'
        }s ease-in-out `;
        modalRef.current.style.transform = 'translateX(100%)';
      }
      setTimeout(onClose, Number(`${time ? time * 1000 : 500}`));
    },
    [onClose]
  );

  const handleTouchEnd = useCallback(() => {
    if (shouldClose) {
      debounceClose(0.2);
    } else {
      setTranslateX(0);
    }
    setCheckHidden(false);
  }, [shouldClose, debounceClose]);

  useEffect(() => {
    if (!isOpen) {
      document.documentElement.style.overflow='';
      document.body.style.overflow='';
      setTranslateX(0);
    }else{
      document.documentElement.style.overflow='hidden';
      document.body.style.overflow='hidden';
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('touchstart', handleTouchStart);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleTouchEnd);

      return () => {
        document.removeEventListener('touchstart', handleTouchStart);
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleTouchEnd);
      };
    }
  }, [isOpen, handleTouchEnd, handleTouchMove, handleTouchStart]);

  ///del
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
      <div
        className={clsx(
          'fixed z-50 h-[100vh] w-full flex flex-row bg-black/30',
          isOpen ? 'block opacity-100' : 'opacity-0 pointer-events-none'
        )}
      >
        <div onClick={() => debounceClose()} className="flex-1"></div>
        <div
          ref={modalRef}
          className="bg-white flex flex-row p-6 md:p-10 w-full sm:w-[70%] md:w-[65%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] fixed right-0 top-0 h-full"
          style={{
            transform: isOpen
              ? `translateX(${translateX}px)`
              : `translateX(100%)`,
            transition: translateX > 0 ? 'none' : 'transform 0.5s ease-in-out',
          }}
        >
          <div className="w-[95%] flex flex-col">
            <div>
              <h3 className=" text-2xl xl:text-3xl mb-4">Shopping Cart</h3>
              <p className="text-base lg:text-lg text-slate-500">
                Buy <span className="font-bold text-black">$122.35</span>
                More And Get
                <span className="font-bold text-black">Free Shipping</span>
              </p>
            </div>
            <div
              className={clsx(
                'flex-1 border-b-[1px] border-slate-700  scrollbar-hide mt-3',
                checkHidden ? 'overflow-hidden' : 'overflow-y-scroll'
              )}
            >
              <div className="flex flex-col gap-2">
                {items.map((item, i) => (
                  <Item
                    key={i}
                    item={item}
                    onCountChange={(newCount) => updateItemCount(i, newCount)}
                    styleDiv="flex flex-col justify-start gap-1 pt-2 md:pt-4 md:gap-3"
                    styleBlock='bg-slate-100'
                  />
                ))}
              </div>
            </div>
            <Subtotal subtotal={subtotal}/>
            <Link
              href={'/drawer'}
              onClick={()=>debounceClose()}
              className="text-center underline font-bold text-base md:text-xl pt-4"
            >
              View Cart
            </Link>
          </div>
          <IoMdClose
            className="size-6 sm:size-7 cursor-pointer"
            onClick={() => debounceClose()}
          />
        </div>
      </div>
    </>
  );
}
