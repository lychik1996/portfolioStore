import clsx from 'clsx';
import { useState } from 'react';
import { MdOutlineDisabledByDefault } from 'react-icons/md';
import HeaderFilterComponent from './HeaderFilterComponent';
const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
export default function Sizes() {
  const [size, setSize] = useState<null | number>(null);
  return (
    <div className="flex flex-col gap-3 ">
      <HeaderFilterComponent setDefault={setSize} name="Size" />
      <div className="flex flex-row flex-wrap gap-3">
        {sizes.map((si, i) => (
          <div
            key={i}
            onClick={() => setSize(i)}
            role="button"
            className={clsx(
              'size-10 flex justify-center items-center rounded border-[1px]  cursor-pointer',
              i === size
                ? 'border-black text-black'
                : 'border-slate-400 text-slate-400'
            )}
          >
            {si}
          </div>
        ))}
      </div>
    </div>
  );
}
