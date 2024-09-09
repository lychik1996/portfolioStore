import { useState } from 'react';
import HeaderFilterComponent from './HeaderFilterComponent';
import clsx from 'clsx';
const prices = [
  '$0 - $50',
  '$50 - $100',
  '$100 - $150',
  '$150 - $200',
  '$200 - more',
];
export default function Prices() {
  const [price, setPrice] = useState<number | null>(null);
  return (
    <div className="flex flex-col gap-3 ">
      <HeaderFilterComponent setDefault={setPrice} name="Prices" />
      <div className="flex flex-col gap-2">
        {prices.map((pr, i) => (
          <div
            key={i}
            onClick={() => setPrice(i)}
            role="button"
            className={clsx(i === price ? 'text-black' : 'text-slate-400')}
          >
            {pr}
          </div>
        ))}
      </div>
    </div>
  );
}
