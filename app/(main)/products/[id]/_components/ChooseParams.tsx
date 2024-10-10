import ColorButton from "@/components/ColorButton";
import clsx from "clsx";
import { useState } from "react";

interface ChooseParamsProps {
  colors: string[];
  sizes: string[];
}

export default function ChooseParams({ colors, sizes }: ChooseParamsProps) {
  const [size, setSize] = useState(0);
  const [color, setColor] = useState(0);
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <div className="flex flex-col gap-3">
        <p className="volkhov">Size: {sizes[size]}</p>
        <div className="flex flex-row gap-2">
          {sizes.map((it, i) => (
            <div
              key={i}
              onClick={() => setSize(i)}
              className={clsx(
                "size-11 flex items-center justify-center border-[1px] rounded-[5px] cursor-pointer",
                i === size && "text-white bg-black border-black"
              )}
            >
              {it}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <p className="volkhov" >Color</p>
        <div className="flex flex-row gap-2">
          {colors.map((cl, i) => (
            <ColorButton key={i} cl={cl} color={color} index={i} setColor={setColor} width="40px" height="40px"/>
          ))}
        </div>
      </div>
      <p className="mb-2 volkhov">Quantity</p>
      <div className="flex flex-row justify-between gap-4">
        <div className="flex flex-row items-center border-[1px] rounded border-slate-300">
          <button
            className="w-11 h-12"
            onClick={() => {
              if (quantity > 1) {
                setQuantity((prev) => prev - 1);
              }
            }}
          >
            -
          </button>
          <div className="w-10 h-11 flex items-center justify-center">{quantity}</div>
          <button
            onClick={() => setQuantity((prev) => prev + 1)}
            className="w-11 h-12"
          >
            +
          </button>
        </div>
        <button className="flex-1 border-[1px] rounded border-black">
          Add to Card
        </button>
      </div>
    </>
  );
}
