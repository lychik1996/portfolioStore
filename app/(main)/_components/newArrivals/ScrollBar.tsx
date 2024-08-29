import clsx from "clsx"
import { useEffect, useRef } from "react";

interface ScrollBarProps{
    categories:String[],
    setSelected:Function,
    selected:number,
}
export default function ScrollBar({categories,setSelected,selected}:ScrollBarProps){
    const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(()=>{
    const scrollContainer = scrollRef.current;

    const handleWheele = (event: WheelEvent)=>{
        event.preventDefault();
        if(scrollContainer)scrollContainer.scrollLeft+=event.deltaY; 
    }
    scrollContainer?.addEventListener('wheel',handleWheele);
    return()=>{
      scrollContainer?.removeEventListener('wheel', handleWheele);
    }
  },[])
    return(
        <div className='overflow-x-scroll w-11/12 scrollbar-hide rounded-xl' ref={scrollRef}>
      <div className=" flex justify-between gap-4 w-auto">
        {categories.map((categorie, i) => (
          <button
            key={i}
            onClick={()=>setSelected(i)}
            className={clsx(
              'text-base rounded-xl px-3 py-2 whitespace-nowrap',
              selected===i ? 'bg-black text-white' : 'bg-slate-50'
            )}
            style={
              selected===i
                ? { boxShadow: `0px 20px 35px 0px rgba(0, 0, 0, 0.15)` }
                : { boxShadow: 'none' }
            }
          >
            {categorie}
          </button>
        ))}
      </div>
      </div>
    )
}