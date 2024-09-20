"use client";
import clsx from "clsx";
import { useState } from "react";
const userData = {
    cardNumber:'4563123486754328',
    cardDate:'08/28',
    cardCode:"456",
}
function formatCardNumber(cardNumber: string) {
    return cardNumber.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ');
}
function formatCardDate(cardDate: string) {
    const cleaned = cardDate.replace(/\D/g, '');

    if (cleaned.length <= 2) {
      return cleaned;
    } else {
      return `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}`;
    }
  }

export default function PaymentOption(){
    const [edit, setEdit] = useState(false);
    return (
      <div className="flex flex-col gap-3 p-3">
        <h4 className=" text-2xl">Payment Option</h4>
        <form onSubmit={(e)=>e.preventDefault()} className="flex flex-col gap-3">
          <label className="flex flex-col gap-4">
              Card Number
              <input
              type="text"
              className={clsx(
                  "input_info_user placeholder:text-slate-500",
                  edit?"text-black":"text-slate-500 select-none pointer-events-none"
              )
              }
              required={true}
              disabled={!edit}
              value={formatCardNumber(userData.cardNumber)}
              placeholder="Country/Region"
            />
          
          </label>
          
          <label className="flex flex-col gap-4">
            Date / Code
          <div className="flex flex-row sm:flex-col md:flex-row gap-2">
            <input
              type="text"
              className={clsx(
                  "input_info_user placeholder:text-slate-500",
                  edit?"text-black":"text-slate-500 select-none pointer-events-none"
              )
              }
              required={true}
              disabled={!edit}
              value={formatCardDate(userData.cardDate)}
              placeholder="Expiraton Date"
            />
            <input
              type="password"
              className={clsx(
                  "input_info_user placeholder:text-slate-500",
                  edit?"text-black":"text-slate-500 select-none pointer-events-none"
              )
              }
              required={true}
              disabled={!edit}
              placeholder="Security code"
              value={userData.cardCode}
            />
          </div>
          </label>
          
          <div className="w-full flex justify-end">
              <button onClick={()=>setEdit(!edit)}
              
              className={clsx(
                  " px-8 py-2 bg-black text-white rounded-lg shadow-lg hover:scale-110 transition-all duration-200 ease-in-out",
                  edit?'hidden':"block"
              )}>Edit</button>
              <div className={clsx(
                  " w-full justify-center sm:w-auto  sm:justify-normal flex-row gap-4",
                  edit? 'flex':"hidden"
              )}>
                  <button className="px-2 md:px-6 py-2 bg-slate-600 text-white rounded-lg shadow-lg hover:scale-110 transition-all duration-200 ease-in-out"  onClick={()=>setEdit(!edit)}>
                      Cancel Edit
                  </button>
                  <button className="px-2 md:px-6 py-2  bg-black text-white rounded-lg shadow-lg hover:scale-110 transition-all duration-200 ease-in-out" onClick={()=>setEdit(!edit)}>
                      Confirm Changes
                  </button>
              </div>
          </div>
        </form>
      </div>
    );
}