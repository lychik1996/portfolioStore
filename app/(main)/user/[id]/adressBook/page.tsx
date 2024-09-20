"use client"
import clsx from "clsx";
import { useState } from "react";
const userData = {
    country: 'Ukraine',
    city:"Kyiv",
    street:"Bereznyakivska",
    house:"26",
    appartment:"90",
    postalCode:"34567"
  };
export default function AdressBook(){
    const [edit, setEdit] = useState(false);
    return (
      <div className="flex flex-col gap-3 p-3">
        <h4 className=" text-2xl">Adress Book</h4>
        <form onSubmit={(e)=>e.preventDefault()} className="flex flex-col gap-3">
          <label className="flex flex-col gap-4">
              Country
              <input
              type="text"
              className={clsx(
                  "input_info_user placeholder:text-slate-500",
                  edit?"text-black":"text-slate-500 select-none pointer-events-none"
              )
              }
              required={true}
              disabled={!edit}
              value={userData.country}
              placeholder="Country/Region"
            />
          
          </label>
          
          <label className="flex flex-col gap-4">
            Locate
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
              value={userData.city}
              placeholder="City"
            />
            <input
              type="text"
              className={clsx(
                  "input_info_user placeholder:text-slate-500",
                  edit?"text-black":"text-slate-500 select-none pointer-events-none"
              )
              }
              required={true}
              disabled={!edit}
              placeholder="Street"
              value={userData.street}
            />
          </div>
          </label>
          <label className="flex flex-col gap-4">
            Number
          <div className="flex flex-row sm:flex-col md:flex-row gap-2">
            <input
              type="text"
              className={clsx(
                  "input_info_user placeholder:text-slate-500",
                  edit?"text-black":"text-slate-500 select-none pointer-events-none"
              )
              }
              
              disabled={!edit}
              value={userData.house}
              placeholder="House"
            />
            <input
              type="text"
              className={clsx(
                  "input_info_user placeholder:text-slate-500",
                  edit?"text-black":"text-slate-500 select-none pointer-events-none"
              )
              }
              disabled={!edit}
              placeholder="Appartpent"
              value={userData.appartment}
            />
          </div>
          </label>
          <label className="flex flex-col gap-4">
              Postal Code
              <input
              type="text"
              className={clsx(
                  "input_info_user placeholder:text-slate-500",
                  edit?"text-black":"text-slate-500 select-none pointer-events-none"
              )
              }
              required={true}
              disabled={!edit}
              value={userData.postalCode}
              placeholder="Postal Code"
            />
          
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