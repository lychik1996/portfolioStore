import { useState } from 'react';

import HeaderFilterComponent from './HeaderFilterComponent';
import clsx from 'clsx';
import { useFilterStore } from '@/store/use-filterStore';
import { useRouter } from 'next/navigation';
const brandsArr = [
  'Minimog',
  'Retrolie',
  'Brook',
  'Learts',
  'Vagabond',
  'Abby',
];
export default function Brands() {
  const { brands, setBrands } = useFilterStore();
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const toggle = (item: string) => {
    if (brands.includes(item)) {
      setBrands(brands.filter((i) => i !== item));
      router.push('/shop/page/1',{scroll:false})
    } else {
      setBrands([...brands, item]);
      router.push('/shop/page/1',{scroll:false})
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <HeaderFilterComponent
        name="Brands"
        setDefault={() => setBrands([])}
        action
        setOpen={setOpen}
        open={open}
        exist={brands}
      />
      <div
        className={clsx(
          'transition-all duration-500 ease-in-out overflow-hidden',
          open ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0'
        )}
      >
        <div className="flex flex-row flex-wrap gap-2 max-w-72">
          {brandsArr.map((item, i) => (
            <p
              key={i}
              onClick={() => toggle(item)}
              role="button"
              className={clsx(
                brands.includes(item) ? 'text-black' : 'text-slate-400'
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
