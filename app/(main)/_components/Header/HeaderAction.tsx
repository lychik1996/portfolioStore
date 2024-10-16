'use client';
import { useModalDrawer } from '@/store/use-modalDrawer';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

interface HeaderActionProps {
  search: boolean;
  setSearch: Function;
}

export default function HeaderAction({ search, setSearch }: HeaderActionProps) {
  const {onOpen} = useModalDrawer(state=>state);
  const {data:session} = useSession();
  return (
    <div className="flex flex-row gap-1 sm:gap-4 items-center h-5">
      {!search && (
        <Image src="/home/header/search.svg" alt='' width='18' height="18" onClick={() => setSearch(true)} className='cursor-pointer'/>
        
      )}
      <Link href={`/user/${session?.user.name}`}>
      <Image src="/home/header/user.svg" alt='' width='18' height="18" className='cursor-pointer'/>
        
      </Link>
      <Link href="/favorite">
      {/* change link */}
      <Image src="/home/header/favorite.svg" alt='' width='18' height="18" className='cursor-pointer'/>
      </Link>
      <div onClick={onOpen}>
      <Image src="/home/header/drawer.svg" alt='' width='18' height="18" className='cursor-pointer'/>
        </div>
    </div>
  );
}
