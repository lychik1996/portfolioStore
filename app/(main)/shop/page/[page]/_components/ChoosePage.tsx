"use client";
import clsx from 'clsx';
import Link from 'next/link';
import { useEffect } from 'react';

const COUNT_ITEM = 18;
const MAX_ITEM_PAGE=9;
const COUNT_PAGE =Math.ceil(COUNT_ITEM/MAX_ITEM_PAGE);

const arr = Array.from({ length: COUNT_PAGE}, (_, i) => String(i + 1));
export default function ChoosePages({ page }: { page: number }) {
    useEffect(() => {
        const targetId =`target_page`;
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ block: 'start' });
        }
      }, [page]);
    
  return (
    <div className="flex flex-row items-center justify-center gap-2">
        <div className='size-10'>
        {page>1 && <Link href={`/shop/page/${page-1}`} className='flex items-center justify-center size-10 rounded-full cursor-pointer hover:bg-slate-50'>{'<<'}</Link>}
        </div>
      <div className="flex flex-row gap-2">
        {arr.map((item, i) => (
          <Link href={`/shop/page/${item}`} key={i}
          className={clsx(
            'flex items-center justify-center size-10 rounded-full cursor-pointer ',
            page===Number(item)? "bg-slate-100 hover:bg-slate-100": "hover:bg-slate-50",
          )}
          >
            {item}
          </Link>
        ))}
      </div>
      <div className='size-10'>
        {page<COUNT_PAGE && <Link href={`/shop/page/${page+1}`} className='flex items-center justify-center size-10 rounded-full cursor-pointer hover:bg-slate-50'>{'>>'}</Link>}
      
      </div>
      
    </div>
  );
}
