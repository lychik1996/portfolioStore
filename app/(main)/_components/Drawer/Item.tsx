import clsx from 'clsx';
import Image from 'next/image';
import { useEffect, useState } from 'react';
interface Item {
  src: string;
  color: string;
  name: string;
  price: number;
  count: number;
}
interface ItemProps {
  item: Item;
  onCountChange: (newCount: number) => void;
  styleDiv?: string;
  styleBlock: string;
  main?: boolean;
  index?:number;
}
export default function Item({
  item,
  onCountChange,
  styleDiv,
  main,
  styleBlock,
  index
}: ItemProps) {
  const [total, setTolal] = useState(0);
  useEffect(()=>{
    setTolal(item.count*item.price)
  },[item.count,item.price])
  const handleDecrement = () => {
    const newCount = item.count - 1;
    onCountChange(newCount);
  };

  const handleIncrement = () => {
    const newCount = item.count + 1;
    onCountChange(newCount);
  };

  return (
    <div className="flex flex-row gap-5">
      <div>
        <Image
          src={`/home/modalDrawer/${item.src}.png`}
          className=" min-w-[100px] w-[100px] h-[135px] md:w-[168px] md:h-[auto]"
          width={168}
          height={225}
          alt=""
        />
      </div>
      <div className={styleDiv}>
        <div className="flex flex-col w-36 md:w-44 justify-between md:gap-4">
          <h3 className="text-xl lg:text-2xl max-w-36 md:max-w-44">{item.name}</h3>
          <p className="text-sm lg:text-lg text-slate-500">
            Color: {item.color}
          </p>
          {main && (
            <p className="text-sm lg:text-lg text-slate-500 underline cursor-pointer max-w-fit">Remove</p>
          )}
        </div>
         
        <p className="text-xl w-28 text-center">
          $ {item.price % 1 === 0 ? `${item.price}.00` : item.price.toFixed(2)}
        </p>
        <div
          className={clsx(
            'flex flex-row items-center justify-between w-24 md:w-32 text-xl md:text-2xl',
            styleBlock
          )}
        >
          <div className="cursor-pointer size-9 md:size-11 flex items-center justify-center" onClick={handleDecrement}>
            -
          </div>
          <div className="text-slate-400">
            {item.count > 9 ? item.count : `0${item.count}`}
          </div>
          <div className="cursor-pointer size-9 md:size-11 flex items-center justify-center" onClick={handleIncrement}>
            +
          </div>
        </div>
        {main && (
          <p className='hidden md:inline text-xl w-28 text-end'>$ {total % 1 === 0 ? `${total}.00` : total.toFixed(2)}</p>
        )}
      </div>
    </div>
  );
}
