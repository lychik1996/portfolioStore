'use client';

import { useState } from 'react';
import Sizes from './FilterComponent/Sizes';
import Colors from './FilterComponent/Colors';
import Prices from './FilterComponent/Prices';
import Brands from './FilterComponent/Brands';
import Collections from './FilterComponent/Collections';
import Tags from './FilterComponent/Tags';

export default function Filter() {
  const [resetKey, setResetKey] = useState(0);

  const resetAll = () => {
    setResetKey(prevKey => prevKey + 1);
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-row justify-between items-center">
        <h3 className="text-xl lg:text-2xl">Filters</h3>
        <p
          onClick={resetAll}
          className='text-base cursor-pointer text-slate-500 active:text-black'
        >
          Reset
        </p>
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