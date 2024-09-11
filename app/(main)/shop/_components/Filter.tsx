'use client';

import { useState } from 'react';
import Sizes from './FilterComponent/Sizes';
import Colors from './FilterComponent/Colors';
import Prices from './FilterComponent/Prices';
import Brands from './FilterComponent/Brands';
import Collections from './FilterComponent/Collections';
import Tags from './FilterComponent/Tags';
import useWindowWidth from '@/hooks/use-windowWidth';
import { IoMdClose } from 'react-icons/io';
import { useModalFilter } from '@/store/use-modalFilter';


export default function Filter() {
  const { isOpen, onClose } = useModalFilter((state) => state);
  const [resetKey, setResetKey] = useState(0);
  const windowWidth = useWindowWidth();
  const resetAll = () => {
    setResetKey((prevKey) => prevKey + 1);
  };

  return (
    
      <div className=" absolute flex w-full h-full  md:w-auto md:static bg-white  flex-col gap-3">
      <div className="flex flex-row justify-between items-center">
        <h3 className="text-xl lg:text-2xl">Filters</h3>
        <div className='flex flex-row gap-2'>
          <p
            onClick={resetAll}
            className="text-base cursor-pointer text-slate-500 active:text-black"
          >
            Reset
          </p>
          {windowWidth <= 768 && (
            <IoMdClose className="size-6 sm:size-7 cursor-pointer" />
          )}
        </div>
      </div>
      <Sizes key={`sizes-${resetKey}`} />
      <Colors key={`colors-${resetKey}`} />
      <Prices key={`prices-${resetKey}`} />
      <Brands key={`brands-${resetKey}`} />
      <Collections key={`collections-${resetKey}`} />
      <Tags key={`tags-${resetKey}`} />
    </div>
    
  );
}
