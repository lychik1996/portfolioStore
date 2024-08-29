"use client";

import Link from "next/link"

export default function page(){
    return(
        <div className="w-full xl:w-4/5">
            <h2 className="text-lg lg:text-2xl">Sign In To FASCO</h2>
            <div>
                
            </div>
            <div className="text-lg lg:text-2xl font-bold text-gray-400 tracking-wide text-center mb-5"><span>-</span> OR <span>-</span></div>
                <form className="flex flex-col items-center w-full">
                    <div className="flex flex-col w-full">
                    <input type="text" className="input_auth" placeholder="Email" />
                    <input type="text" className="input_auth" placeholder="Password"/>
                    </div>
                    <button className="button block w-11/12 my-4">Sign In</button>
                    <Link href='/signUp' className=" w-11/12 text-center leading-8 lg:leading-10 text-sm lg:text-base text-blue-500 border-blue-500 border-2 rounded-[10px] bg-white mb-2">Register now</Link>
                </form>
            <Link href='/forgetPass' className=" block text-right text-xs lg:text-base font-bold tracking-wide text-blue-500">Forget Password?</Link>
        </div>
    )
}