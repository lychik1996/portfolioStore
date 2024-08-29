"use client";

import Link from "next/link"

export default function page(){
    return(
        <div className="w-full xl:w-4/5">
      <h2 className="text-lg lg:text-2xl mb-9">Enter Your New Password</h2>

      <form className="flex flex-col items-center w-full">
        <div className="flex flex-col w-full">
          <input
            type="text"
            className="input_auth"
            placeholder="New Password"
          />
          <input
            type="text"
            className="input_auth"
            placeholder="Confirmation Password"
          />
        </div>
        <button className="button block w-11/12 mt-6 mb-2 lg:mb-4 " style={{background:'rgb(59 130 246)'}}>
          Submit
        </button>
      </form>
    </div>
    )
}