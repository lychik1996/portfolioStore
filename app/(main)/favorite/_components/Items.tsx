'use client';
import Item from "@/components/Item";
import { useFavoriteTrigger } from "@/store/use-favoriteTrigger";
import { CircularProgress } from "@mui/material";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react"
interface ItemProps{
    name: string,
    src:string,
    price:number,
    oldPrice:number | null,
    colors:string[],
    counts:number,
    id:string,
    isFavorite:boolean,
  }
export default function Items(){
    const [items, setItems] = useState<ItemProps[]>([]);
    const [loading, setLoading] = useState(true);
    const {data:session} = useSession();
    const {triggerFavorite} = useFavoriteTrigger();
    const [noProductsFound, setNoProductsFound] = useState(false);
    useEffect(()=>{
        const getItems = async () => {
            setLoading(true);
            try {
                const res = await axios.get(`/api/products/favorite/get`, {
                    params: {
                        email:session?.user.email
                    }
                });
                setItems(res.data);
            } catch (error) {
                console.error("Something went wrong", error);
            } finally {
                setLoading(false);
            }
        }
    getItems();
    },[triggerFavorite, session?.user.email]);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (!loading && items.length === 0) {
                setNoProductsFound(true);
            }
        }, 600);

        return () => clearTimeout(timer);
    }, [loading, items.length]);
    
    if(loading){
        return(
          <div className="flex-1 flex justify-center w-full items-center min-h-[200px] ">
              <div className="flex flex-row gap-5">
              <h3 className="text-2xl">Loading...</h3>
              <CircularProgress color="inherit"/>
              </div>
          </div>
        )
      }
    
      if(noProductsFound){
        return(
            <div className='flex-1 flex justify-center w-full items-center min-h-[200px] text-slate-400 text-xl'>
              Products not found
            </div>
          )
      }      
    return(
        <div className="flex flex-row gap-y-2 gap-x-2 sm:gap-x-10 flex-wrap min-h-[200px]">
            {items?.map((item,i)=><Item email={session?.user.email} favPage item={item} key={i}/>
            )}
        </div>
    )
}