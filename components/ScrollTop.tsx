'use client';

import Image from 'next/image';
import Portal from './Portal';
import { useEffect, useState } from 'react';
import clsx from 'clsx';

export default function ScrollTop() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        if (!isOpen) {
          setIsOpen(true);
          setTimeout(() => setIsVisible(true), 100);
        }
      } else {
        if (isOpen) {
          setIsVisible(false);
          setTimeout(() => setIsOpen(false), 500);
        }
      }
    };
    if (window.scrollY > 100) {
      setIsOpen(true);
      setTimeout(() => setIsVisible(true), 100);
    }
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen]);

  const onScroll = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <>
      {isOpen && (
        <Portal isOpen={isOpen} referenceId="body">
          <div
            onClick={onScroll}
            className={clsx(
              'cursor-pointer transition-opacity duration-500 ease-in-out fixed z-30 bottom-10 right-5 md:right-10 xl:bottom-14 xl:right-32 border-2 bg-white/50 border-black rounded-full py-3 px-4 scale-75 md:scale-100',
              isVisible ? 'opacity-100' : 'opacity-0'
            )}
          >
            <Image
              src="/home/components/slideTop.png"
              width={17}
              height={26}
              alt=""
            />
          </div>
        </Portal>
      )}
    </>
  );
}
