"use client"
import useUser from "@/hooks/useUser";
import clsx from "clsx";

import { useState } from "react";


export default function Profile() {
    const [edit, setEdit] = useState(false);
    const user = useUser()
  return (
    <div className="flex flex-col gap-3 p-3">
      <h4 className=" text-2xl">Profile</h4>
      <form onSubmit={(e)=>e.preventDefault()} className="flex flex-col gap-3">
        <label className="flex flex-col gap-4">
            Name
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
            value={user?.name || ''}
            placeholder="First Name"
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
            placeholder="Last Name"
            value={user?.lastName || ''}
          />
        </div>
        </label>
        
        <label className="flex flex-col gap-4">
            Email
            <input
          type="mail"
          className={clsx(
            "input_info_user placeholder:text-slate-500 ",
            edit?"text-black":"text-slate-500 select-none pointer-events-none"
        )
        }
        required={true}
        disabled={!edit}
          value={user?.email || ''}
          placeholder="Email"
        />
        </label>
        <div className="flex flex-col gap-4">
            Password
            <input
          type="password"
          className={clsx(
            "input_info_user placeholder:text-slate-500 ",
            edit?"text-black ":"text-slate-500"
        )
        }
        required={true}
        disabled={!edit}
          placeholder="Current Password"
        />
        <input
          type="password"
          className={clsx(
            "input_info_user placeholder:text-slate-500 ",
            edit?"text-black ":"text-slate-500"
        )
        }
        required={true}
        disabled={!edit}
          placeholder="New Password"
        />
        <input
          type="password"
          className={clsx(
            "input_info_user placeholder:text-slate-500 ",
            edit?"text-black":"text-slate-500"
        )
        }
        required={true}
        disabled={!edit}
          placeholder="Confirm Password"
        />
        </div>
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
