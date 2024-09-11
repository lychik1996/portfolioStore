'use client';
import Portal from '@/components/Portal';
import clsx from 'clsx';
import { useRef, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import ItemsOptions from './ItemsOptions';
import useWindowWidth from '@/hooks/use-windowWidth';
import { FiFilter } from "react-icons/fi";
const collections = [
  'All products',
  'Best sellers',
  'New arrivals',
  'Accessories',
];
export default function ItemsChoose() {
  const windowWidth = useWindowWidth();
  const [isOpen, setIsOpen] = useState(false);
  const dropSelectRef = useRef<HTMLDivElement>(null);
  const [select, setSelect] = useState(0);

  return (
    <div className="relative cursor-pointer" ref={dropSelectRef}>
      {windowWidth > 768?(
        <>
        <p onClick={() => setIsOpen(!isOpen)} className="text-sm md:text-base">
        {collections[select]}
        <FaChevronDown
          className={clsx(
            'inline-block ml-1 lg:ml-2 cursor-pointer transition-all duration-300 ease-in-out',
            isOpen && 'rotate-180'
          )}
          size="12px"
        />
      </p>
      <Portal isOpen={isOpen} reference={dropSelectRef}>
        <div className="absolute z-10 mt-2 lg:mt-3 py-1 lg:py-2 left-1/2 transform -translate-x-1/2 bg-white flex flex-col gap-1 lg:gap-2 items-center border rounded-md shadow-md">
          {collections.map((collection, i) => (
            <ItemsOptions
              key={i}
              name={collection}
              setSelect={setSelect}
              index={i}
              setIsOpen={setIsOpen}
            />
          ))}
        </div>
      </Portal>
        </>
      ):(
        <div className='flex flex-row items-center'><h4>Filter</h4><FiFilter/></div>
      )}
    </div>
  );
}
