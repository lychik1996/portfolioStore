import Contact from "./_dataComponens/Contact";
import Delivery from "./_dataComponens/Delivery";
import Payment from "./_dataComponens/Payment";

export default function CheckoutItems(){
    return(
        <div className="flex flex-col w-full sm:w-3/5 py-6 sm:border-r-[1px] sm:border-slate-300 sm:pr-3  gap-9">
            <Contact/>
            <Delivery/>
            <Payment/>
            <div className="flex flex-col items-center gap-6">
                <button className="button w-full p-2">Pay Now</button>
                <p className="text-xs text-slate-400">Copyright © 2022 FASCO . All Rights Reseved.</p>
            </div>
        </div>
    )
}