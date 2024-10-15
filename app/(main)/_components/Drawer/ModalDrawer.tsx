'use client';

import { useModalDrawer } from '@/store/use-modalDrawer';
import { Suspense, useCallback, useEffect, useRef, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import Item from './Item';
import Link from 'next/link';
import clsx from 'clsx';
import Subtotal from './Subtotal';
import useWindowWidth from '@/hooks/use-windowWidth';
import { useSession } from 'next-auth/react';
import axios from 'axios';

import { useDrawerTrigger } from '@/store/use-drawerTrigger';
import { CircularProgress } from '@mui/material';

interface ItemProps {
  id: string;
  countsDrawer: number;
  color: string;
  size: String;
  img: String;
  price: number;
  name: String;
  productId:string;
}
export default function ModalDrawer() {
  const { data: session } = useSession();
  const [items, setItems] = useState<ItemProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [wrapParams, setWrapParams] = useState(false);
  const { trigger } = useDrawerTrigger();

  const { isOpen, onClose } = useModalDrawer((state) => state);
  const startX = useRef<number>(0);
  const startY = useRef<number>(0);
  const [translateX, setTranslateX] = useState<number>(0);
  const [shouldClose, setShouldClose] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const [checkHidden, setCheckHidden] = useState(false);
  const windowWidth = useWindowWidth();
  
  useEffect(() => {
    const getItems = async () => {
      await axios
        .get('/api/products/drawer/get', {
          params: { email: session?.user.email },
        })
        .then((res) => {
          setItems(res.data.items);
          setWrapParams(res.data.wrap);
        })
        .catch(() => console.error('Error load'))
        .finally(() => setLoading(false));
    };
    if (session?.user.email) {
      getItems();
    }
  }, [session?.user.email, trigger]);

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
    const distanceY = distance > 10 ? 0 : Math.abs(currentY - startY.current);

    if (distanceY < 15) {
      if (distance > 10) {
        setTranslateX(distance);
      }
      if (distance > 20) {
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
      document.documentElement.style.overflow = '';
      if (windowWidth > 768) {
        document.documentElement.style.paddingRight = '';
      }
      setTranslateX(0);
    } else {
      document.documentElement.style.overflow = 'hidden';
      if (windowWidth > 768) {
        document.documentElement.style.paddingRight = '17px';
      }
    }
  }, [isOpen, windowWidth]);

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

  return (
    <>
      <div
        className={clsx(
          'fixed z-50 h-[100vh] w-full flex flex-row bg-black/30',
          isOpen ? 'block opacity-100' : 'opacity-0 pointer-events-none'
        )}
      >
        <div
          onClick={() => debounceClose()}
          className="flex-1 cursor-pointer"
        ></div>
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
                Buy <span className="font-bold text-black">$122.35 </span>
                More And Get{' '}
                <span className="font-bold text-black">Free Shipping</span>
              </p>
            </div>
            {loading ? (
              <div className="flex flex-1 justify-center items-center ">
                <div className="flex flex-row gap-5 ">
                  <h3 className="text-2xl">Loading...</h3>
                  <CircularProgress color="inherit" />
                </div>
              </div>
            ) : items.length < 1 ? (
              <div className="flex-1 flex justify-center items-center text-xl">
                Drawer is Empty
              </div>
            ) : (
              <>
                <div
                  className={clsx(
                    'flex-1 border-b-[1px] border-slate-700  scrollbar-hide mt-3 pr-2',
                    checkHidden ? 'overflow-hidden' : 'overflow-y-scroll'
                  )}
                >
                  <div className="flex flex-col gap-2">
                    {items?.map((item, i) => (
                      <Item
                        email={session?.user.email}
                        key={i} 
                        item={item}
                        debounceClose={debounceClose}
                        styleDiv="flex flex-col justify-start gap-1 pt-2 md:pt-4 md:gap-3"
                        styleBlock="bg-slate-100"
                      />
                    ))}
                  </div>
                </div>
                <Subtotal
                  wrapParams={wrapParams}
                  debounceClose={debounceClose}
                  email={session?.user.email}
                />
              </>
            )}
            <Link
              href={'/drawer'}
              onClick={() => debounceClose()}
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
