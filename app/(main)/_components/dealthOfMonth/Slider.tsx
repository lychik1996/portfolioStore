"use client";
import SliderButton from "@/components/SliderButton";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
const arrImg = [
    {
      src: '/home/dealthOfTheMonth/1.png',
      sale: '30%',
    },
    {
      src: '/home/dealthOfTheMonth/2.png',
      sale: '20%',
    },
    {
      src: '/home/dealthOfTheMonth/3.png',
      sale: '40%',
    },
    {
      src: '/home/dealthOfTheMonth/4.png',
      sale: '30%',
    },
  ];
export default function SliderDealth(){
  const [count, setCount] = useState(0);

  const onClickLeft = () => {
    count > 0 && setCount(count - 1);
  };
  const onClickRight = () => {
    count < arrImg.length - 1 && setCount(count + 1);
  };
    return(
        <>
         <div className=" hidden md:flex items-end gap-1 mr-2">
         <SliderButton count={count} length={arrImg.length} onClickLeft={onClickLeft} onClickRight={onClickRight}/>
          </div>
          <div className="hidden overflow-x-hidden md:block relative">
            <div
              className="flex h-full gap-10  transition-all duration-300 justify-between flex-row"
              style={{
                transform: `translateX(${-count * 208}px)`,
                width: `${208 * arrImg.length}px`,
              }}
            >
              {arrImg.map((item, i) => (
                <div key={i} className="h-full relative max-h-[288px] lg:max-h-none">
                  <Image
                    src={item.src}
                    className={clsx(
                      'transition-all duration-300 ease-in-out',
                      count === i ? 'h-full w-52' : 'h-4/5 w-40'
                    )}
                    width={192}
                    height={100}
                    alt=""
                  />
                  {count===i && (
                    <div className="absolute left-3 bottom-5 bg-white flex flex-col p-4">
                    <p className='text-base'>{i + 1} &#8212; Spring Sale</p>
                    <p className='text-xl'>{item.sale} OFF</p>
                  </div>
                  )} 
                </div>
              ))}
            </div>
            <div className="flex absolute bottom-0 lg:left-56 left-48  flex-row gap-3">
              {arrImg.map((_, i) => (
                <div
                  key={i}
                  className={clsx(
                    'flex justify-center items-center  rounded-full  p-1',
                    i === count && 'border-black border-[1px]'
                  )}
                >
                  <div
                    className={clsx(
                      'rounded-full w-2 h-2',
                      i === count ?'bg-black':'bg-slate-400 '
                    )}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </>
    )
}