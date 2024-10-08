'use client';

import Image from "next/image";
import React, { useState, useTransition } from "react";
import axios from 'axios';
import { toast } from "sonner";
import clsx from "clsx";

export default function Subscribe() {
 const [email,setEmail] = useState('');
 const [isLoading, startTransition] = useTransition();
 const handeleSubscribe =  (e: React.FormEvent) => {

  e.preventDefault(); 
  startTransition(async()=>{
    await axios.post('/api/subscribe', { email }) 
    .then((res) => {
      toast.success(res.data.message);
      setEmail('');
    })
    .catch((error) => {
        const errorMessage = error.response?.data?.message || "Something went wrong";
        toast.error(errorMessage)
    })
  })
};
  return (
    <div className="flex flex-row items-center w-5/6 xl:w-7/12 pt-8 md:pt-16 justify-center">
        <div className='hidden md:block'>
        <Image src="/home/subscribe/1.png" className='' width={200} height={100} alt="" />
        </div>
      
      <div className='flex flex-col items-center '>
        <h3 className="opacity-70 text-xl md:text-2xl xl:text-3xl text-center">
        Subscribe To Our Newsletter
        </h3>
        <p className="opacity-50 text-center text-xs md:text-sm lg:text-base max-w-[600px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin 
        </p>
        <form onSubmit={handeleSubscribe} className='flex flex-col items-center w-5/6 gap-4 sm:gap-7 mt-4' >
            <input type="email"  value={email} onChange={(e)=>setEmail(e.target.value)} disabled={isLoading} className={clsx(
              ' outline-none text-base w-full sm:w-5/6 md:w-full  rounded-none py-3 pl-3',
              isLoading?'opacity-50':'opacity-100'
            )} placeholder='michael@ymail.com' style={{boxShadow:'0px 3.02px 3.15px 0px rgba(0, 0, 0, 0.01),0px 13.28px 6.52px 0px rgba(0, 0, 0, 0.02),0px 32.6px 13px 0px rgba(0, 0, 0, 0.02),0px 62.79px 25.48px 0px rgba(0, 0, 0, 0.02),0px 105.65px 46.85px 0px rgba(0, 0, 0, 0.03),0px 163px 80px 0px rgba(0, 0, 0, 0.04)'}}/>
            <button className={clsx(
              'button px-4',
              isLoading?"opacity-50":'opacity-100'
            )} disabled={isLoading}>{isLoading?'Subscribing...':'Subscribe Now'}</button>
        </form>
      </div>
      <div className='hidden md:block'>
      <Image  src="/home/subscribe/2.png" width={200} height={100} alt="" />
      </div>
      
    </div>
  );
}
