'use client';
import Portal from '@/components/Portal';
import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import ItemsOptions from './ItemsOptions';
import { FiFilter } from "react-icons/fi";
import { useModalFilter } from '@/store/use-modalFilter';
const collections = [
  'All products',
  'Best sellers',
  'New arrivals',
  'Accessories',
];
export default function ItemsChoose() {
  const {onOpen} = useModalFilter((state)=>state);
  const [isOpenPortal, setIsOpenPortal] = useState(false);
  const dropSelectRef = useRef<HTMLDivElement>(null);
  const [select, setSelect] = useState(0);
  
  const handleClickOutSide = (event: MouseEvent) => {
    if (
      dropSelectRef.current &&
      !dropSelectRef.current.contains(event.target as Node)
    ) {
      setIsOpenPortal(false);
    }
    
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutSide);
    return () => {
      document.removeEventListener('mousedown', handleClickOutSide);
    };
  }, []);
  return (
    <div className="relative cursor-pointer" ref={dropSelectRef}>
      <div className='hidden md:block'>
        <p onClick={() => setIsOpenPortal(!isOpenPortal)} className="text-sm md:text-base">
        {collections[select]}
        <FaChevronDown
          className={clsx(
            'inline-block ml-1 lg:ml-2 cursor-pointer transition-all duration-300 ease-in-out',
            isOpenPortal && 'rotate-180'
          )}
          size="12px"
        />
      </p>
      <Portal isOpen={isOpenPortal} reference={dropSelectRef}>
        <div className="absolute z-10 mt-2 lg:mt-3 py-1 lg:py-2 left-1/2 transform -translate-x-1/2 bg-white flex flex-col gap-1 lg:gap-2 items-center border rounded-md shadow-md">
          {collections.map((collection, i) => (
            <ItemsOptions
              key={i}
              name={collection}
              setSelect={setSelect}
              index={i}
              setIsOpen={setIsOpenPortal}
            />
          ))}
        </div>
      </Portal>
      </div>
        <div className='flex md:hidden flex-row items-center' onClick={onOpen}><h4>Filter</h4><FiFilter/></div>
      
    </div>
  );
}
