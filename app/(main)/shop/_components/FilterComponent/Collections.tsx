import { useState } from 'react';

import HeaderFilterComponent from './HeaderFilterComponent';
import clsx from 'clsx';
const collections = [
  'All products',
  'Best sellers',
  'New arrivals',
  'Accessories',
];
export default function Collections() {
  const [collection, setCollection] = useState<number | null>(0);
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-3">
      <HeaderFilterComponent
        name="Collections"
        setDefault={setCollection}
        action
        setOpen={setOpen}
        open={open}
        exist={collection}
      />
      <div
        className={clsx(
          'transition-all duration-500 ease-in-out overflow-hidden',
          open ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0'
        )}
      >
        <div className="flex flex-col gap-2 max-w-72">
          {collections.map((cl, i) => (
            <p
              key={i}
              onClick={() => setCollection(i)}
              role="button"
              className={clsx(
                i === collection ? 'text-black' : 'text-slate-400'
              )}
            >
              {cl}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
