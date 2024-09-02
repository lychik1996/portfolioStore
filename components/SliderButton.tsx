"use client";

import clsx from "clsx";
import { MouseEventHandler } from "react";
interface SliderButtonProps{
    count:number,
    length:number,
    onClickLeft:MouseEventHandler<HTMLButtonElement>,
    onClickRight:MouseEventHandler<HTMLButtonElement>,
}
export default function SliderButton({length,count,onClickLeft,onClickRight}:SliderButtonProps){
    return(
        <>
        <button
              className={clsx(
                "rounded-full px-3 py-[5px] bg-white",
                count===0 && 'text-slate-400'
              )}
              disabled={count===0}
              onClick={onClickLeft}
              onMouseDown={(e) => e.currentTarget.style.boxShadow = '0px 4px 14px 1px rgba(0, 0, 0, 0.3)'}
              onMouseUp={(e) => e.currentTarget.style.boxShadow = '0px 4px 14px 1px rgba(0, 0, 0, 0.16)'}
              style={{ boxShadow: '0px 4px 14px 1px rgba(0, 0, 0, 0.16)' }}
            >
              &lt;
            </button>
            <button
              className={clsx(
                "rounded-full px-3 py-[5px] transition-shadow duration-100 bg-white",
                count===length-1 && 'text-slate-400'
              )}
              onClick={onClickRight}
              onMouseDown={(e) => e.currentTarget.style.boxShadow = '0px 4px 14px 1px rgba(0, 0, 0, 0.3)'}
              onMouseUp={(e) => e.currentTarget.style.boxShadow = '0px 4px 14px 1px rgba(0, 0, 0, 0.16)'}
              disabled={count===length-1}
              style={{ boxShadow: '0px 4px 14px 1px rgba(0, 0, 0, 0.16)'}}
            >
              &gt;
            </button>
        </>
    )
}