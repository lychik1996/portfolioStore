import Subscribe from "../_components/subscribe/Subscribe";
import CheckoutItems from "./_components/CheckoutItems";
import DataUser from "./_components/DataUser";

export default function CheckOut(){
    return(
        <>
        <div className="md:pt-4">
            <h3 className="text-xl md:text-2xl xl:text-3xl text-center mb-6 sm:mb-8">Fasco Checkout</h3>
            <div className=" w-[96vw]  flex justify-center border-y-[1px] border-slate-300">
                <div className="flex flex-col-reverse sm:flex-row w-5/6 sm:w-11/12 lg:w-5/6 xl:w-7/12">
                <CheckoutItems/>
                <DataUser/>
                </div>
            </div>
        </div>
        <Subscribe/>
        </>
    )
}