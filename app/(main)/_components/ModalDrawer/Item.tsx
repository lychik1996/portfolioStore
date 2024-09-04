import Image from "next/image";
import { useState } from "react";
interface Item{
    src:string,
    color:string,
    name:string,
    price:number,
    count:number
}
interface ItemProps{
    item:Item,
    onCountChange: (newCount: number) => void;
}
export default function Item({item,onCountChange}:ItemProps) {
    const handleDecrement = () => {
        const newCount = item.count - 1;
        onCountChange(newCount);
      };
    
      const handleIncrement = () => {
        const newCount = item.count + 1;
        onCountChange(newCount);
      };
    
  return (
    <div className="flex flex-row  gap-5">
      <div>
        <Image
          src={`/home/modalDrawer/${item.src}.png`}
          className="w-[100px] h-[135px] md:w-auto md:h-auto"
          width={168}
          height={225}
          alt=""
        />
      </div>
      <div className="flex flex-col justify-start gap-1 pt-2 md:pt-4 md:gap-3">
        <h3 className="text-xl lg:text-2xl">{item.name}</h3>
        <p className="text-sm lg:text-lg text-slate-500">Color: {item.color}</p>
        <p className="text-xl">$ {item.price % 1 === 0 ? `${item.price}.00` : item.price.toFixed(2)}</p>
        <div className="flex flex-row items-center justify-between w-24 md:w-32 text-xl md:text-2xl bg-slate-100 py-2 px-4">
          <div className="cursor-pointer" onClick={handleDecrement}>-</div>
          <div className="text-slate-400">{item.count>9?item.count:`0${item.count}`}</div>
          <div className="cursor-pointer" onClick={handleIncrement}>+</div>
        </div>
      </div>
    </div>
  );
}
