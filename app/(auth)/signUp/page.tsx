"use client";

import Link from "next/link"

export default function page(){
    return(
        <div className="w-full xl:w-4/5">
            <h2 className="text-lg lg:text-2xl">Create account</h2>
            <div>
                
            </div>
            <div className="text-lg lg:text-2xl font-bold text-gray-400 tracking-wide text-center mb-5"><span>-</span> OR <span>-</span></div>
                <form className="flex flex-col items-center w-full">
                    <div className="w-full flex flex-col md:grid md:grid-cols-2 md:gap-x-2.5">
                    <input type="text" className="input_auth" placeholder="First Name" />
                    <input type="text" className="input_auth" placeholder="Last Name"/>
                    <input type="text" className="input_auth" placeholder="Email Addres" />
                    <input type="text" className="input_auth" placeholder="Phone Number"/>
                    <input type="text" className="input_auth" placeholder="Password" />
                    <input type="text" className="input_auth" placeholder="Confirm Password"/>
                    </div>
                    <button className="button block w-11/12 mt-6 lg:mb-4">Sign In</button>
                </form>
                <div className="text-center leading-8 md:leading-10 text-sm md:text-base">Alredy have an account? <Link href='/signIn' className="text-blue-500">Login</Link></div>
            
        </div>
    )
}