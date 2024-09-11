"use client";
import ColorButton from "@/components/ColorButton";
import Image from "next/image";
import { useState } from "react";

interface IProps {
  name: string;
  src: string;
  price: number;
  newPrice: null | number;
  colors: string[];
  count: number;
}
interface ItemProps {
  item: IProps;
}

export default function Item({ item }: ItemProps) {
    const [color, setColor] = useState(0);
  return (
    <div className="flex flex-col gap-2">
        <div className="relative flex items-center justify-center">
            <Image src={`/shop/${item.src}`} alt="" width={181} height={241} className="w-[181px] h-[241px]"/>
            {item.count<1 && (
                <div className=" absolute flex justify-center items-center text-center bg-slate-500 text-white rounded-full size-12 uppercase text-xs">
                    sold out
                </div>
            )}
        </div>
        <div className="flex flex-col gap-2">
            <h4>{item.name}</h4>
            <p>$ {item.price % 1 === 0 ? `${item.price}.00` : item.price.toFixed(2)}</p>
            <div className="flex flex-row gap-2">
                {item.colors.map((cl,i)=>(
                    <ColorButton cl={cl} color={color} setColor={setColor} index={i} key={i} height="26px" width="26px"/>
                ))}
            </div>
        </div>
    </div>
  );
}
