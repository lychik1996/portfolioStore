
import { useEffect, useRef, useState } from 'react';
import Item from './Item';
import axios from 'axios';
import { CircularProgress } from '@mui/material';
import { useFilterStore } from '@/store/use-filterStore';
import { useDebounce } from '@/hooks/useDebounce';
import useWindowWidth from '@/hooks/use-windowWidth';



interface ItemProps{
  name: string,
  src:string,
  price:number,
  oldPrice:number | null,
  colors:string[],
  counts:number,
  id:string,
}
export default function Items({ page }: { page: number }) {
  const [items,setItems] = useState<ItemProps[]>([]);
  const [loading,setLoading] = useState(true);
  const { sizes, colors, prices, brands, collections, tags } = useFilterStore();
  const windowWidth = useWindowWidth();
  const debounceWindowWidth:number = useDebounce(windowWidth,300);
  const previousDebounceWindowWidth = useRef(debounceWindowWidth);
  const count = debounceWindowWidth>697?9:8;
  const debouncedSizes = useDebounce(sizes, 500);
  const debouncedColors = useDebounce(colors, 500);
  const debouncedPrices = useDebounce(prices, 500);
  const debouncedBrands = useDebounce(brands, 500);
  const debouncedCollections = useDebounce(collections, 500);
  const debouncedTags = useDebounce(tags, 500);
  
  useEffect(() => {
    const getItems = async () => {
        if (previousDebounceWindowWidth.current !== debounceWindowWidth) {
            setLoading(true);
            try {
                const res = await axios.get(`/api/products/shop/`, {
                    params: {
                        page,
                        count,
                        sizes: debouncedSizes.length > 0 ? debouncedSizes : undefined,
                        colors: debouncedColors.length > 0 ? debouncedColors : undefined,
                        prices: debouncedPrices.length > 0 ? debouncedPrices : undefined,
                        brands: debouncedBrands.length > 0 ? debouncedBrands : undefined,
                        collections: debouncedCollections !== 'All products' ? debouncedCollections : undefined,
                        tags: debouncedTags.length > 0 ? debouncedTags : undefined,
                    }
                });
                setItems(res.data);
            } catch (error) {
                console.error("Something went wrong", error);
            } finally {
                setLoading(false);
            }
        }
        previousDebounceWindowWidth.current = debounceWindowWidth;
    };

    getItems();
}, [page, debouncedSizes, debouncedColors, debouncedPrices, debouncedBrands, debouncedCollections, debouncedTags, count, debounceWindowWidth]);
    
    if(loading){
      return(
        <div className="flex-1 flex justify-center w-full pt-32 sm:pt-52  min-h-[400px] sm:min-h-[1091px]">
            <div className="flex flex-row gap-5">
            <h3 className="text-2xl">Loading...</h3>
            <CircularProgress color="inherit"/>
            </div>
        </div>
      )
    }
    if(items.length===0){
      return(
        <div className='flex-1 flex justify-center w-full pt-32 sm:pt-52  min-h-[400px] sm:min-h-[1091px] text-slate-400 text-xl'>
          Products not found
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
