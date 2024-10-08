import HeaderFilterComponent from './HeaderFilterComponent';
import clsx from 'clsx';
import { useFilterStore } from '@/store/use-filterStore';
import { useRouter } from 'next/navigation';
const pricesArr = [
  '$0 - $50',
  '$50 - $100',
  '$100 - $150',
  '$150 - $200',
  '$200 - more',
];
export default function Prices() {
  const { prices, setPrices } = useFilterStore();
  const router = useRouter()
  const toggle = (item: string) => {
    if (prices.includes(item)) {
      setPrices(prices.filter((i) => i !== item));
      router.push('/shop/page/1',{scroll:false})
    } else {
      setPrices([...prices, item]);
      router.push('/shop/page/1',{scroll:false})
    }
  };
  return (
    <div className="flex flex-col gap-3 ">
      <HeaderFilterComponent
        setDefault={() => setPrices([])}
        name="Prices"
        exist={prices}
      />
      <div className="flex flex-col gap-2">
        {pricesArr.map((item, i) => (
          <div
            key={i}
            onClick={() => toggle(item)}
            role="button"
            className={clsx(
              prices.includes(item) ? 'text-black' : 'text-slate-400'
            )}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
