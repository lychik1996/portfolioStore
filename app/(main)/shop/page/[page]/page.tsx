"use client";
import { useModalFilter } from '@/store/use-modalFilter';
import ChoosePages from './_components/ChoosePage';
import Items from './_components/Items';
import ItemsChoose from './_components/ItemsChoose';
import clsx from 'clsx';
import useWindowWidth from '@/hooks/use-windowWidth';

export default function Page({ params }: { params: { page: string } }) {
  const {isOpen} = useModalFilter(state=>state);
  const windowWidth = useWindowWidth();
  const checkOpen = windowWidth > 768 ? true : !isOpen;
  const page = Number(params.page);
  return (
    <>
      <div className={clsx(
        "flex-1 flex flex-col gap-3",
        !checkOpen &&'hidden'
      )} id='target_page'>
      <div className="flex flex-row items-center h-7 lg:h-8">
        <ItemsChoose />
      </div>
      <Items page={page} />
      <ChoosePages page={page}/>
    </div>
    </>
  );
}
