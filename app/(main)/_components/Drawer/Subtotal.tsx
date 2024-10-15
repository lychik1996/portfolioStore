import { useDrawerTrigger } from "@/store/use-drawerTrigger";
import axios from "axios";
import clsx from "clsx";
import Link from "next/link";
import { useEffect, useState, useTransition } from "react";
import { toast } from "sonner";
interface SubtotalProps{
  debounceClose?:Function,
  wrapParams:boolean,
  email:string | null | undefined,
}
export default function Subtotal({wrapParams,email, debounceClose}:SubtotalProps){

  const [wrap, setWrap]= useState<boolean>(false);
  const [subtotal, setSubtotal] = useState<number>(0);
  const {trigger}= useDrawerTrigger();
  useEffect(()=>{
    setWrap(wrapParams);
  },[wrapParams]);

  useEffect(()=>{
    const getSubtotal = async()=>{
        await axios.get('/api/products/drawer/getSub',{params:{email}})
        .then((res)=>setSubtotal(res.data))
        .catch(()=>console.error("Failed to get subtotal"))
    }
    if(email){
      getSubtotal()
    }
  },[trigger,email,wrap]);
  const [transition, setTransition]=useTransition();
  const handleWrap = ()=>{
    setTransition(async()=>{
      await axios.post('/api/products/drawer/wrap',{
        wrap: !wrap,
        email: email,
      })
      .then((res)=>{
        setWrap(res.data);
        toast.success("Add wrapping");
      }
        )
      .catch(()=>{
        toast.error("Failed to add wrapping")
      })
    })
  }
    return(
        <>
        <label className="cursor-pointer flex flex-row gap-2 items-center border-b-[1px] py-4 border-slate-700">
              <input type="checkbox" className={clsx(
                "cursor-pointer size-5",
                transition && "opacity-75"
      
              )} checked={wrap}  disabled={transition} onChange={handleWrap}/>
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