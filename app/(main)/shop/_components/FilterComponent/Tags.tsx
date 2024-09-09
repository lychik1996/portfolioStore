import { useState } from 'react';

import HeaderFilterComponent from './HeaderFilterComponent';
import clsx from 'clsx';
const tags = [
  'Fashion',
  'Hats',
  'Sandal',
  'Belt',
  'Bags',
  'Snacker',
  'Denim',
  'Minimog',
  'Vagabond',
  'Sunglasses',
  'Beachwear',
];
export default function Tags() {
  const [tag, setTag] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-3">
      <HeaderFilterComponent name="Tags" setDefault={setTag} />

      <div className="flex flex-row flex-wrap gap-2 max-w-72">
        {tags.map((tg, i) => (
          <p
            key={i}
            onClick={() => setTag(i)}
            role="button"
            className={clsx(i === tag ? 'text-black' : 'text-slate-400')}
          >
            {tg}
          </p>
        ))}
      </div>
    </div>
  );
}
