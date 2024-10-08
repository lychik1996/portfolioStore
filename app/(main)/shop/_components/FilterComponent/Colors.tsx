import HeaderFilterComponent from './HeaderFilterComponent';
import { useFilterStore } from '@/store/use-filterStore';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
const colorsArr = [
  'rgb(255, 108, 108)',
  'rgb(255, 118, 41)',
  'rgb(255, 240, 108)',
  'rgb(155, 255, 108)',
  'rgb(108, 255, 158)',
  'rgb(108, 255, 220)',
  'rgb(108, 185, 255)',
  'rgb(108, 246, 255)',
  'rgb(108, 167, 255)',
  'rgb(108, 123, 255)',
  'rgb(138, 108, 255)',
  'rgb(182, 108, 255)',
  'rgb(252, 108, 255)',
  'rgb(255, 108, 105)',
];
export default function Colors() {
  const { colors, setColors } = useFilterStore();
  const router = useRouter();
  const toggle = (item: string) => {
    if (colors.includes(item)) {
      setColors(colors.filter((i) => i !== item));
      router.push('/shop/page/1',{scroll:false})
    } else {
      setColors([...colors, item]);
      router.push('/shop/page/1',{scroll:false})
    }
  };
  return (
    <div className="gap-3 flex flex-col">
      <HeaderFilterComponent
        setDefault={() => setColors([])}
        name="Colors"
        exist={colors}
      />
      <div className="flex flex-row flex-wrap gap-2 max-w-72">
        {colorsArr.map((item, i) => (
          <div
            key={i}
            onClick={() => toggle(item)}
            className={clsx(
              'rounded-full flex items-center justify-center cursor-pointer aspect-square w-8 h-8',
              colors.includes(item) && 'border-2 border-black'
            )}
          >
            <div
              className={clsx(
                'size-full rounded-full',
                colors.includes(item) && 'scale-75'
              )}
              style={{ backgroundColor: item }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}
