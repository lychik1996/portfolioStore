import clsx from 'clsx';
import Image from 'next/image';
import { useEffect, useState } from 'react';
interface Item {
  id: string;
  countsDrawer: number;
  color: string;
  size: String;
  img: String;
  price: number;
  name: String;
}
interface ItemProps {
  item: Item;
  styleDiv?: string;
  styleBlock: string;
  main?: boolean;
  index?: number;
}
export default function Item({ item, styleDiv, main, styleBlock }: ItemProps) {
  const [total, setTolal] = useState(0);
  useEffect(()=>{
    setTolal(item.price*item.countsDrawer)
  },[item]);
  
  if (!item) {
    return <div>Failed get Item</div>;
  }
  return (
    <div className="flex flex-row gap-5">
      <div>
        <Image
          src={`/products/${item.img}`}
          className=" min-w-[100px] w-[100px] h-[135px] md:w-[168px] md:h-[auto]"
          width={168}
          height={225}
          alt=""
        />
      </div>
      <div className={styleDiv}>
        <div className="flex flex-col w-36 md:w-44 justify-between md:gap-4">
          <h3 className="text-xl lg:text-2xl max-w-36 md:max-w-44 truncate md:whitespace-normal md:overflow-visible">
            {item.name}
          </h3>
          <div className='flex flex-row gap-2 items-center'>
          <div className="flex flex-row gap-2 items-center">
            <p className="text-sm lg:text-lg text-slate-500">Color:</p>
            <div className="rounded-full flex items-center justify-center size-6">
              <div
                className="size-full rounded-full"
                style={{ backgroundColor: item.color }}
              ></div>
            </div>
          </div>
          <div className='flex flex-row gap-2 items-center'>
          <p className="text-sm lg:text-lg text-slate-500">Size:</p>
          <div
              className=
                "size-6 flex items-center justify-center border-[1px] rounded-[5px] cursor-pointer bg-white"
            >
              {item.size}
            </div>
          </div>
          </div>
          {main && (
            <p className="text-sm lg:text-lg text-slate-500 underline cursor-pointer max-w-fit">
              Remove
            </p>
          )}
        </div>

        <p className="text-xl w-28 ">
          $ {item.price % 1 === 0 ? `${item.price}.00` : item.price.toFixed(2)}
        </p>
        <div
          className={clsx(
            'flex flex-row items-center justify-between w-24 md:w-32 text-xl md:text-2xl',
            styleBlock
          )}
        >
          <div className="cursor-pointer size-9 md:size-11 flex items-center justify-center">
            -
          </div>
          <div className="text-slate-400">
            {item.countsDrawer > 9
              ? item.countsDrawer
              : `0${item.countsDrawer}`}
          </div>
          <div className="cursor-pointer size-9 md:size-11 flex items-center justify-center">
            +
          </div>
        </div>
        {main && (
          <p className="hidden md:inline text-xl w-28 text-end">
            $ {total % 1 === 0 ? `${total}.00` : total.toFixed(2)}
          </p>
        )}
      </div>
    </div>
  );
}
