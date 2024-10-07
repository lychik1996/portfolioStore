"use client";
import axios from 'axios';
import clsx from 'clsx';
import Link from 'next/link';
import { useEffect, useState } from 'react';




export default function ChoosePages({ page }: { page: number }) {
  const MAX_ITEM_PAGE=9;
  const [arr,setArr] = useState<string[]>([]);
  useEffect(()=>{
    const getCounts = async()=>{
      const res=await axios.get('/api/products/shop')
      .then(res=>{
        const counts = res.data;
        const countsPage = Math.ceil(counts/MAX_ITEM_PAGE);
        setArr(Array.from({ length: countsPage}, (_, i) => String(i + 1)));
      })
      .catch(()=>console.error("something went wrong"));
    }
    getCounts();
  },[]);
  
  
  
  return (
    <div className="flex flex-row items-center justify-center gap-2">
        <div className='size-10'>
        {page>1 && <Link href={`/shop/page/${page-1}`} className='flex items-center justify-center size-10 rounded-full cursor-pointer hover:bg-slate-50'>{'<<'}</Link>}
        </div>
      <div className="flex flex-row gap-2">
        {arr?.map((item, i) => (
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
        {page<arr.length && <Link href={`/shop/page/${page+1}`} className='flex items-center justify-center size-10 rounded-full cursor-pointer hover:bg-slate-50'>{'>>'}</Link>}
      </div>
    </div>
  );
}
