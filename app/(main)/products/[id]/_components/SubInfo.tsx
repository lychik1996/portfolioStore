import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function formatDateRange() {
  const currentDate = new Date();
  
  
  const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric' };

  
  const startDate = new Intl.DateTimeFormat('en-US', options).format(currentDate);

  
  const endDate = new Intl.DateTimeFormat('en-US', options).format(
    new Date(currentDate.setDate(currentDate.getDate() + 4))
  );

  return `${startDate} - ${endDate}`;
}

export default function SubInfo(){
  const [dateRange,setDateRange] = useState('');
  useEffect(()=>{
    setDateRange(formatDateRange())
  },[])
    return(
        <div className="flex flex-col gap-5">
          <div className="flex flex-row flex-wrap justify-center gap-6 py-4 border-b-[1px]">
            <Link href={'/'} className="flex flex-row items-center gap-2">
              <Image
                src={'/products/compare.svg'}
                width={13.75}
                height={17.5}
                alt=""
              />
              Compare{' '}
            </Link>
            <Link href={'/'} className="flex flex-row items-center gap-2">
              <Image
                src={'/products/questions.svg'}
                width={20}
                height={20}
                alt=""
              />
              Ask a questions
            </Link>
            <Link href={'/'} className="flex flex-row items-center gap-2">
              <Image
                src={'/products/share.svg'}
                width={20}
                height={20}
                alt=""
              />
              Share
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row items-center justify-between gap-2 ">
              <div className='flex flex-row gap-2'>
                <Image
                  src={'/products/delivery.svg'}
                  width={20}
                  height={15}
                  alt=""
                />
                <p className='volkhov font-bold'>Estimated Delivery:</p>
              </div>{' '}
              <p className=" pl-1 text-end volkhov"> {dateRange}</p>
            </div>
            <div className="flex flex-row items-center justify-between gap-2 ">
              <div className='flex flex-row gap-2'>
                <Image
                  src={'/products/box.svg'}
                  width={20}
                  height={15}
                  alt=""
                />
                <p className='volkhov font-bold'>Free Shipping & Returns: </p>
              </div>
              <p className="font-normal volkhov pl-1 text-end">
                On all orders over $75
              </p>
            </div>
          </div>
          <div className='flex flex-col items-center justify-center w-full h-28 gap-3 bg-slate-50'>
              <Image src={'/products/cards.png'} className='border-dashed border-[1px]' width={300} height={25} alt=''/>
              <p className='volkhov'>Guarantee safe & secure checkout</p>
          </div>
        </div>
    )
}