import { useState } from 'react';

import HeaderFilterComponent from './HeaderFilterComponent';
import clsx from 'clsx';
import { useFilterStore } from '@/store/use-filterStore';
import { useRouter } from 'next/navigation';
const collectionsArr = [
  'All products',
  'Best sellers',
  'New arrivals',
  'Accessories',
];
export default function Collections() {
  const { collections, setCollections } = useFilterStore();
  const [open, setOpen] = useState(false);
  const router = useRouter();
  return (
    <div className="flex flex-col gap-3">
      <HeaderFilterComponent
        name="Collections"
        setDefault={() => setCollections('All products')}
        action
        setOpen={setOpen}
        open={open}
        exist={collections}
      />
      <div
        className={clsx(
          'transition-all duration-500 ease-in-out overflow-hidden',
          open ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0'
        )}
      >
        <div className="flex flex-col gap-2 max-w-72">
          {collectionsArr.map((item, i) => (
            <p
              key={i}
              onClick={() => {
                setCollections(item);
                router.push('/shop/page/1',{scroll:false})
              }}
              role="button"
              className={clsx(
                collections === item ? 'text-black' : 'text-slate-400'
              )}
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
