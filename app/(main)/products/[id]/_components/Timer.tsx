import timerIntervalFunc from "@/components/timerFunction";
import { useEffect, useState } from "react";

export default function Timer ({saleTime}:{saleTime:string}){
    const [time, setTime] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
      useEffect(() => {
        const startDate = new Date(saleTime);  
        const timerId = timerIntervalFunc(startDate, setTime);
        return () => clearInterval(timerId);
      }, [saleTime]);
    return(
        <div className="flex flex-row items-center justify-between h-14 rounded px-4" style={{background:'rgb(253, 239, 238)',color:"rgb(255, 112, 107)"}}>
            <h3 className="text-base">Hurry up! <span className="hidden lg:inline-block">Sale ends in:</span></h3>
            <div className="flex flex-row">
                <p className=" w-7 text-center" >{time.days < 10 && '0'}
                {time.days}</p>
                <p className=" w-7 text-center" >:</p>
                <p className=" w-7 text-center" >{time.hours < 10 && '0'}
                {time.hours }</p>
                <p className=" w-7 text-center" >:</p>
                <p className=" w-7 text-center" >{time.minutes< 10 && '0'}
                {time.minutes}</p>
                <p className=" w-7 text-center" >:</p>
                <p className=" w-7 text-center" >{time.seconds < 10 && '0'}
                {time.seconds}</p>
                
            </div>
        </div>
    )
}