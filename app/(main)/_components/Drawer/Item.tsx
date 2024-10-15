import { useDrawerTrigger } from '@/store/use-drawerTrigger';
import { useModalDrawer } from '@/store/use-modalDrawer';
import axios from 'axios';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState, useTransition } from 'react';
import { toast } from 'sonner';
interface Item {
  id: string;
  countsDrawer: number;
  color: string;
  size: String;
  img: String;
  price: number;
  name: String;
  productId:string;
}
interface ItemProps {
  item: Item;
  email: string | null | undefined;
  styleDiv?: string;
  styleBlock: string;
  main?: boolean;
  index?: number;
  debounceClose?:Function,
}
export default function Item({
  item,
  email,
  styleDiv,
  main,
  styleBlock,
  debounceClose,
}: ItemProps) {
  const [total, setTolal] = useState(0);
  const [transition, setTransition] = useTransition();
  const { setTrigger } = useDrawerTrigger();
  useEffect(() => {
    setTolal(item.price * item.countsDrawer);
  }, [item]);
  const handleCount = (params: string) => {
    setTransition(async () => {
      await axios
        .post('/api/products/drawer/editCount', {
          email,
          action: params,
          productId: item.id,
        })
        .then(() => {
          toast.success('Item quantity update');
          setTrigger();
        })
        .catch((error) => toast.error(error.response?.data.message));
    });
  };
  if (!item) {
    return <div>Failed get Item</div>;
  }
  return (
    <div className="flex flex-row gap-5">
      <Link href={`/products/${item.productId}`} onClick={()=> debounceClose && debounceClose()}>
        <Image
          src={`/products/${item.img}`}
          className=" min-w-[100px] w-[100px] h-[135px] md:w-[168px] md:h-[auto]"
          width={168}
          height={225}
          alt=""
        />
      </Link>
      <div className={styleDiv}>
        <div className="flex flex-col w-36 md:w-44 justify-between md:gap-4">
          <Link href={`/products/${item.productId}`} onClick={()=> debounceClose && debounceClose()}>
          <h3 className="text-xl lg:text-2xl max-w-36 md:max-w-44 truncate md:whitespace-normal md:overflow-visible">
            {item.name}
          </h3>
          </Link>
          
          <div className="flex flex-row gap-2 items-center">
            <div className="flex flex-row gap-2 items-center">
              <p className="text-sm lg:text-lg text-slate-500">Color:</p>
              <div className="rounded-full flex items-center justify-center size-6">
                <div
                  className="size-full rounded-full"
                  style={{ backgroundColor: item.color }}
                ></div>
              </div>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <p className="text-sm lg:text-lg text-slate-500">Size:</p>
              <div className="size-6 flex items-center justify-center border-[1px] rounded-[5px] cursor-pointer bg-white">
                {item.size}
              </div>
            </div>
          </div>
        </div>

        <p className="text-xl w-28 ">
          $ {item.price % 1 === 0 ? `${item.price}.00` : item.price.toFixed(2)}
        </p>
        <div
          className={clsx(
            'flex flex-row items-center justify-between w-24 md:w-32 text-xl md:text-2xl',
            styleBlock
          )}
        >
          <button
            className={clsx(
              ' size-9 md:size-11 flex items-center justify-center active:bg-slate-200 transition-colors duration-100 ease-in-out',
              transition && 'text-slate-400'
            )}
            disabled={transition}
            onClick={() => handleCount('decrease')}
          >
            -
          </button>
          <div className="text-slate-400">
            {item.countsDrawer > 9
              ? item.countsDrawer
              : `0${item.countsDrawer}`}
          </div>
          <button
            className={clsx(
              ' size-9 md:size-11 flex items-center justify-center active:bg-slate-200 transition-colors duration-100 ease-in-out',
              transition && 'text-slate-400'
            )}
            disabled={transition}
            onClick={() => handleCount('increase')}
          >
            +
          </button>
        </div>
        {main && (
          <p className="hidden md:inline text-xl w-28 text-end">
            $ {total % 1 === 0 ? `${total}.00` : total.toFixed(2)}
          </p>
        )}
      </div>
    </div>
  );
}
