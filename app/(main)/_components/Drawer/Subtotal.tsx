import Link from "next/link";
interface SubtotalProps{
  subtotal:number,
  debounceClose?:Function,
}
export default function Subtotal({subtotal, debounceClose}:SubtotalProps){
    return(
        <>
        <label className="cursor-pointer flex flex-row gap-2 items-center border-b-[1px] py-4 border-slate-700">
              <input type="checkbox" className="cursor-pointer size-5" />
              <p className="text-base lg:text-lg text-slate-500">
                For <span className="font-bold text-black">$10.00</span> please
                wrap the product
              </p>
            </label>
            <div className="flex flex-row items-center justify-between text-base lg:text-lg font-bold py-5">
              <h3>Subtotal</h3>
              <h3>
                ${' '}
                {subtotal % 1 === 0
                  ? `${subtotal}.00`
                  : `${subtotal.toFixed(2)}`}
              </h3>
            </div>
            <Link href={'/checkout'} onClick={()=> debounceClose && debounceClose()} className="button text-center py-1 w-full">
              Checkout
            </Link>
        </>
    )
}