'use client';
import { useModalDrawer } from '@/store/use-modalDrawer';
import Link from 'next/link';
import { FaRegUser, FaRegStar } from 'react-icons/fa';
import { IoBagOutline, IoSearchOutline } from 'react-icons/io5';

interface HeaderActionProps {
  search: boolean;
  setSearch: Function;
}

export default function HeaderAction({ search, setSearch }: HeaderActionProps) {
  const {onOpen} = useModalDrawer(state=>state);
  return (
    <div className="flex flex-row gap-1 sm:gap-4 items-center">
      {!search && (
        <IoSearchOutline
          className="size-4 sm:size-5 cursor-pointer"
          onClick={() => setSearch(true)}
        />
      )}
      <Link href="/">
        <FaRegUser className=" size-3 sm:size-4 cursor-pointer" />
      </Link>
      <Link href="/products/125">
      {/* change link */}
        <FaRegStar className=" size-4 sm:size-5 cursor-pointer" />
      </Link>
      <div onClick={onOpen}>
        <IoBagOutline color="black" className=" size-4 sm:size-5 cursor-pointer" />
        </div>
    </div>
  );
}
