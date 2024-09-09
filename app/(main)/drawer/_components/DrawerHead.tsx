import Link from "next/link";

export default function DrawerHead(){
    return(
        <>
        <div className='flex flex-col items-center gap-2 mb-2 md:mb-14'>
          <h3 className='text-xl md:text-2xl xl:text-3xl'>Shopping Cart</h3>
          <div className='flex flex-row items-center'>
            <Link href={'/'} className='text-xs md:text-sm lg:text-base'>Home </Link>
            <div className='w-4 text-center'> &gt; </div>
            <p className='text-xs md:text-sm lg:text-base'> Your Shopping Cart</p>
          </div>
        </div>
        <div className='hidden md:flex flex-row justify-between border-b-[1px] border-slate-700 pb-7'>
          <h4 className='w-[100px] md:w-[335px]'>Product</h4>
          
          <h4 className='w-28 text-center'>Price</h4>
          <h4 className='w-24 md:w-32 text-center'>Quantity</h4>
          <h4 className='w-28 text-end'>Total</h4>
          
        </div>
        </>
    )
}