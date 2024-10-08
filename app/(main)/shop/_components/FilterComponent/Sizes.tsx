import clsx from 'clsx';


import HeaderFilterComponent from './HeaderFilterComponent';
import { useFilterStore } from '@/store/use-filterStore';
import { useRouter } from 'next/navigation';
const sizesArr = ['S', 'M', 'L', 'XL', 'XXL'];
export default function Sizes() {
  const {sizes,setSizes} =useFilterStore();
  const router = useRouter();
  const toggle = (item:string)=>{
    if(sizes.includes(item)){
      setSizes(sizes.filter((i)=>i!==item))
      router.push('/shop/page/1',{scroll:false})
    }else{
      setSizes([...sizes,item])
      router.push('/shop/page/1',{scroll:false})
    }
  }
  return (
    <div className="flex flex-col gap-3 ">
      <HeaderFilterComponent setDefault={()=>setSizes([])} name="Size" exist={sizes} />
      <div className="flex flex-row flex-wrap gap-3">
        {sizesArr.map((item, i) => (
          <div
            key={i}
            onClick={() => toggle(item)}
            role="button"
            className={clsx(
              'size-10 flex justify-center items-center rounded border-[1px]  cursor-pointer',
              sizes.includes(item)
                ? 'border-black text-black'
                : 'border-slate-400 text-slate-400'
            )}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
