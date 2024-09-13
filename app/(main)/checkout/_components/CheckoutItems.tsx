"use client";
import { useModalCheckout } from "@/store/use-modalCheckout";
import Contact from "./_dataComponens/Contact";
import Delivery from "./_dataComponens/Delivery";
import Payment from "./_dataComponens/Payment";
import { IoMdClose } from "react-icons/io";
import clsx from "clsx";
import useWindowWidth from "@/hooks/use-windowWidth";
import { useEffect } from "react";

export default function CheckoutItems(){
    const {isOpen, onClose} = useModalCheckout(state=>state);
    const windowWidth = useWindowWidth();
    useEffect(() => {
      if (windowWidth > 640) {
        onClose();
      }
    }, [onClose, windowWidth]);
  
    return(
        <div className={clsx(
            " sm:flex flex-col w-full sm:w-3/5 py-6 sm:border-r-[1px] sm:border-slate-300 sm:pr-3  gap-9",
            isOpen? "flex":"hidden",
        )}>
            <div className="flex sm:hidden justify-end -mb-5">
            <IoMdClose
            className="size-6 sm:size-7 cursor-pointer"
            onClick={onClose}
          />
            </div>
            <Contact/>
            <Delivery/>
            <Payment/>
            <div className="flex flex-col items-center gap-6">
                <button className="button w-full p-2" onClick={onClose}>Pay Now</button>
                <p className="text-xs text-slate-400">Copyright © 2022 FASCO . All Rights Reseved.</p>
            </div>
        </div>
    )
}