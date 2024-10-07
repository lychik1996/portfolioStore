
import { useEffect, useState } from 'react';
import Item from './Item';
import axios from 'axios';
import { CircularProgress } from '@mui/material';

interface ItemProps{
  name: string,
  src:string,
  price:number,
  oldPrice:number | null,
  colors:string[],
  counts:number,
}
export default function Items({ page }: { page: number }) {
  const [items,setItems] = useState<ItemProps[]>([]);
  const [loading,setLoading] = useState(false);
  const count = 9;
    useEffect(()=>{
      const getItems = async()=>{
        setLoading(true);
        const res = await axios.get(`/api/products/shop/?page=${page}&count=${count}`)
        .then(res=>{
          setItems(res.data);
          setLoading(false);
        })
        .catch(()=>console.error("Something went wrong"))
      };
      getItems();
    },[page]);
    
    if(loading){
      return(
        <div className="flex-1 flex justify-center w-full items-center h-[400px]">
            <div className="flex flex-row gap-5 items-center">
            <h3 className="text-2xl">Loading...</h3>
            <CircularProgress color="inherit"/>
            </div>
        </div>
      )
    }
  return (
    <div className="flex flex-row justify-center flex-wrap ">
      
      {items?.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </div>
  );
}
