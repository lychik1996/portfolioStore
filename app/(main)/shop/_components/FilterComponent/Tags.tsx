
import HeaderFilterComponent from './HeaderFilterComponent';
import clsx from 'clsx';
import { useFilterStore } from '@/store/use-filterStore';
import { useRouter } from 'next/navigation';
const tagsArr = [
  'Fashion',
  'Hats',
  'Sandal',
  'Belt',
  'Bags',
  'Snacker',
  'Denim',
  'Minimog',
  'Vagabond',
  'Sunglasses',
  'Beachwear',
];
export default function Tags() {
  
  const {tags,setTags} = useFilterStore();
  const router = useRouter();
  const toggle = (item:string)=>{
    if(tags.includes(item)){
      setTags(tags.filter((i)=>i!==item))
      router.push('/shop/page/1',{scroll:false})
    }else{
      setTags([...tags,item])
      router.push('/shop/page/1',{scroll:false})
    }
  }
  return (
    <div className="flex flex-col gap-3">
      <HeaderFilterComponent name="Tags" setDefault={()=>setTags([])} exist={tags} />
      <div className="flex flex-row flex-wrap gap-2 max-w-72">
        {tagsArr.map((item, i) => (
          <p
            key={i}
            onClick={() => toggle(item)}
            role="button"
            className={clsx(tags.includes(item)? 'text-black' : 'text-slate-400')}
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}
