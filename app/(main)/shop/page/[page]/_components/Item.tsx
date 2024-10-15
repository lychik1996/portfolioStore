'use client';
import ColorButton from '@/components/ColorButton';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

interface IProps {
  name: string;
  src: string;
  price: number;
  oldPrice: number | null;
  colors: string[];
  counts: number;
  id:string;
}
interface ItemProps {
  item: IProps;
}

export default function Item({ item }: ItemProps) {
  const [color, setColor] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    const handleWheele = (event: WheelEvent) => {
      event.preventDefault();
      if (scrollContainer) scrollContainer.scrollLeft += event.deltaY;
    };
    scrollContainer?.addEventListener('wheel', handleWheele);
    return () => {
      scrollContainer?.removeEventListener('wheel', handleWheele);
    };
  }, []);
  return (
    <div className="flex flex-col gap-2 md:hover:scale-110 md:hover:z-10 md:hover:shadow-xl transition-all duration-300 ease-in-out p-1 bg-white">
      <Link
        href={`/products/${item.id}`}
        className="relative flex items-center justify-center cursor-pointer"
      >
        <Image
          src={`/products/${item.src}`}
          alt=""
          width={181}
          height={241}
          className="w-[145px] h-[193px] sm:w-[181px] sm:h-[241px]"
        />
        {item.counts < 1 && (
          <div className=" absolute flex justify-center items-center text-center bg-slate-500 text-white rounded-full size-12 uppercase text-xs">
            sold out
          </div>
        )}
      </Link>
      <div className="flex flex-col gap-2">
        <Link href={`/products/${item.id}`} className="cursor-pointer">
          <h4 className='max-w-36 md:max-w-44 truncate  md:whitespace-normal md:overflow-visible'>{item.name}</h4>
        </Link>

        <div className="flex flex-row gap-2">
          <p>
            ${' '}
            {item.price % 1 === 0 ? `${item.price}.00` : item.price.toFixed(2)}
          </p>
          {item.oldPrice && (
            <p className="text-slate-400 line-through">
              ${' '}
              {item.oldPrice % 1 === 0
                ? `${item.oldPrice}.00`
                : item.oldPrice.toFixed(2)}
            </p>
          )}
        </div>
        <div className='max-w-32 overflow-x-scroll scrollbar-hide' ref={scrollRef}>
          <div className="flex flex-row gap-2">
            {item.colors.map((cl, i) => (
              <ColorButton
                cl={cl}
                color={color}
                setColor={setColor}
                index={i}
                key={i}
                height="26px"
                width="26px"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
