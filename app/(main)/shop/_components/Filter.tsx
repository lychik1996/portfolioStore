'use client';

import { useEffect} from 'react';
import Sizes from './FilterComponent/Sizes';
import Colors from './FilterComponent/Colors';
import Prices from './FilterComponent/Prices';
import Brands from './FilterComponent/Brands';
import Collections from './FilterComponent/Collections';
import Tags from './FilterComponent/Tags';
import useWindowWidth from '@/hooks/use-windowWidth';
import { IoMdClose } from 'react-icons/io';
import { useModalFilter } from '@/store/use-modalFilter';
import clsx from 'clsx';
import { useFilterStore } from '@/store/use-filterStore';
import { useRouter } from 'next/navigation';

export default function Filter() {
  const { isOpen, onClose } = useModalFilter((state) => state);
  const {setBrands,setCollections,setColors,setPrices,setSizes,setTags} = useFilterStore();
  const windowWidth = useWindowWidth();
  const router = useRouter();
  useEffect(() => {
    if (windowWidth > 768) {
      onClose();
    }
  }, [onClose, windowWidth]);

  const toggleReset = () => {
    setBrands([]);
    setCollections('All products');
    setColors([]);
    setPrices([]);
    setSizes([]);
    setTags([]);
    router.push('/shop/page/1',{scroll:false})
  };

  return (
    <div
      className={clsx(
        ' md:flex w-full md:w-auto  md:static bg-white  flex-col gap-3 z-10',
        isOpen ? 'flex' : 'hidden'
      )}
    >
      <div className="flex flex-row justify-between items-center">
        <h3 className="text-xl lg:text-2xl">Filters</h3>
        <div className="flex flex-row gap-2">
          <p
            onClick={toggleReset}
            className="text-base cursor-pointer text-slate-500 active:text-black"
          >
            Reset
          </p>

          <IoMdClose
            className=" block md:hidden size-6 sm:size-7 cursor-pointer"
            onClick={onClose}
          />
        </div>
      </div>
      <div className="flex flex-col gap-3 scrollbar-hide">
        <Sizes />
        <Colors />
        <Prices />
        <Brands />
        <Collections />
        <Tags />
      </div>
    </div>
  );
}
