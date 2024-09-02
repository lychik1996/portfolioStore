import shadows from '@mui/material/styles/shadows';
import Image from 'next/image';

export default function Subscribe() {
  return (
    <div className="flex flex-row items-center w-5/6 xl:w-7/12 pt-8 md:pt-16 justify-center">
        <div>
        <Image src="/home/subscribe/1.png" className='' width={200} height={100} alt="" />
        </div>
      
      <div className='flex flex-col items-center '>
        <h3 className="opacity-70 text-xl md:text-2xl xl:text-3xl text-center">
        Subscribe To Our Newsletter
        </h3>
        <p className="opacity-50 text-center text-xs md:text-sm lg:text-base max-w-[600px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin 
        </p>
        <form action="" className='flex flex-col items-center w-5/6 gap-7 mt-4'>
            <input type="text"  className='w-full outline-none text-xs md:text-base  rounded-none py-1 pl-1 md:py-3 md:pl-3' placeholder='michael@ymail.com' style={{boxShadow:'0px 3.02px 3.15px 0px rgba(0, 0, 0, 0.01),0px 13.28px 6.52px 0px rgba(0, 0, 0, 0.02),0px 32.6px 13px 0px rgba(0, 0, 0, 0.02),0px 62.79px 25.48px 0px rgba(0, 0, 0, 0.02),0px 105.65px 46.85px 0px rgba(0, 0, 0, 0.03),0px 163px 80px 0px rgba(0, 0, 0, 0.04)'}}/>
            <button className='button px-4'>Subscribe Now</button>
        </form>
      </div>
      <div className='hidden md:block'>
      <Image  src="/home/subscribe/2.png" width={200} height={100} alt="" />
      </div>
      
    </div>
  );
}
