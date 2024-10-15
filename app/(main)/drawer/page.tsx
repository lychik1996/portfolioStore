'use client';

import Item from '../_components/Drawer/Item';
import { useEffect, useState } from 'react';
import Subtotal from '../_components/Drawer/Subtotal';
import Subscribe from '../_components/subscribe/Subscribe';
import DrawerHead from './_components/DrawerHead';
import axios from 'axios';
import { useDrawerTrigger } from '@/store/use-drawerTrigger';
import { useSession } from 'next-auth/react';
import { CircularProgress } from '@mui/material';

interface ItemProps {
  id: string;
  countsDrawer: number;
  color: string;
  size: String;
  img: String;
  price: number;
  name: String;
}
export default function Drawer() {
  const { data: session } = useSession();
  const [items, setItems] = useState<ItemProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [wrapParams, setWrapParams] = useState(false);
  const { trigger } = useDrawerTrigger();

  useEffect(() => {
    const getItems = async () => {
      await axios
        .get('/api/products/drawer/get', {
          params: { email: session?.user.email },
        })
        .then((res) => {
          setItems(res.data.items);
          setWrapParams(res.data.wrap);
        })
        .catch(() => console.error('Error load'))
        .finally(() => setLoading(false));
    };
    if (session?.user.email) {
      getItems();
    }
  }, [session?.user.email, trigger]);
  return (
    <>
      <div className="flex flex-col w-5/6 xl:w-7/12 md:pt-4">
        <DrawerHead />
        {loading? <div className="flex justify-center items-center w-full  h-80">
            <div className="flex flex-row gap-5 ">
            <h3 className="text-2xl">Loading...</h3>
            <CircularProgress color="inherit"/>
            </div>
        </div>:items.length < 1 ? (
          <div className=" flex justify-center items-center text-xl h-80 w-full">
            Drawer is Empty
          </div>
        ) : (
          <>
            <div className="flex-1 w-full p-0 border-b-[1px] border-slate-700  scrollbar-hide mt-3 overflow-y-scroll max-h-[450px]">
              <div className="flex flex-col gap-2">
                {items.map((item, i) => (
                  <Item
                    key={i}
                    item={item}
                    index={i}
                    styleDiv="flex flex-col sm:flex-row justify-between items-start w-full"
                    styleBlock="border-2 rounded-md border-slate-400 text-sm"
                    main
                  />
                ))}
              </div>
            </div>
            <div className="w-full flex md:justify-end mt-2 md:mt-6">
              <div className="w-full md:w-[50%] flex flex-col gap-2">
                <Subtotal wrapParams={wrapParams} email={session?.user.email} />
              </div>
            </div>
          </>
        )}
      </div>
      <Subscribe />
    </>
  );
}
