import Image from 'next/image';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className=" w-full h-full flex justify-center items-center ">
      <div className='w-3/5 md:w-4/5 lg:w-5/6 flex flex-row justify-between gap-14 xl:gap-24 h-auto'>
        <Image
          alt="Sign"
          src="/auth/sign.png"
          className=" hidden md:block md:w-80 lg:w-96 xl:w-[500px]"
          width={946}
          height={1077}
        />
        <div className='flex flex-col mt-4 mb-2 lg:mt-9 lg:mb-4 h-auto w-full xl:w-4/5  justify-between'>
            <h1 className='uppercase text-2xl xl:text-5xl md:text-3xl '>Fasco</h1>
          <div>{children}</div>
          <p className='font-normal leading-10 text-right xl:pr-20 text-xs lg:text-base'>FASCO Terms & Codnitions</p>
        </div>
      </div>
    </div>
  );
}
