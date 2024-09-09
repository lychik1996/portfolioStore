import { useState } from 'react';

import HeaderFilterComponent from './HeaderFilterComponent';
import clsx from 'clsx';
const brands = ['Minimog', 'Retrolie', 'Brook', 'Learts', 'Vagabond', 'Abby'];
export default function Brands() {
  const [brand, setBrand] = useState<number | null>(null);
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-3">
      <HeaderFilterComponent
        name="Brands"
        setDefault={setBrand}
        action
        setOpen={setOpen}
        open={open}
      />
      <div
        className={clsx(
          'transition-all duration-500 ease-in-out overflow-hidden',
          open ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0'
        )}
      >
        <div className="flex flex-row flex-wrap gap-2 max-w-72">
          {brands.map((br, i) => (
            <p
              key={i}
              onClick={() => setBrand(i)}
              role="button"
              className={clsx(i === brand ? 'text-black' : 'text-slate-400')}
            >
              {br}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
