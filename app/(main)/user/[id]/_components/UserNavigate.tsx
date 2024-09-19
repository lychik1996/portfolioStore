'use client';
import Link from 'next/link';
import { CgProfile } from 'react-icons/cg';
import { FaSignsPost } from 'react-icons/fa6';
import { CiCreditCard1 } from 'react-icons/ci';
import { TbTruckReturn } from 'react-icons/tb';
import { SlDrawer } from 'react-icons/sl';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

const navigate = [
  {
    path: '',
    pageName: 'Profile',
    icon: <CgProfile size={25} />,
  },
  {
    path: 'adressBook',
    pageName: 'AdressBook',
    icon: <FaSignsPost size={25} />,
  },
  {
    path: 'paymentOption',
    pageName: 'Payment Option',
    icon: <CiCreditCard1 size={25} />,
  },
  {
    path: 'returns',
    pageName: 'Returns',
    icon: <TbTruckReturn size={25} />,
  },
  {
    path: 'orders',
    pageName: 'Orders',
    icon: <SlDrawer size={25} />,
  },
];
interface UserNavigateProps {
  params: { id: string };
}
export default function UserNavigate({ params }: UserNavigateProps) {
  const path = usePathname();
  const findPass = path?.split('/').pop();
  const currentPath = findPass === params.id ? '' : findPass;
  return (
    <div className="flex flex-row w-full justify-around sm:justify-normal sm:w-auto sm:flex-col">
      {navigate.map((nav, i) => {
        const isActive = currentPath === nav.path;
        const isNextActive = i > 0 && currentPath === navigate[i - 1].path;
        const isPrevActive =
          i < navigate.length - 1 && currentPath === navigate[i + 1].path;

        return (
          <Link
            key={i}
            href={`/user/${params?.id}/${nav.path}`}
            className={clsx(
              'w-[213px] flex-1 sm:flex-none flex flex-row gap-2 items-center justify-center transition-all ease-in-out duration-100 sm:justify-normal  p-2 sm:py-4 border-b-2 sm:border-b-0 sm:border-r-2 border-slate-300',
              isActive
                ? 'border-white rounded-b-lg sm:rounded-b-none sm:rounded-r-xl bg-slate-100'
                : 'hover:bg-slate-50',
              isPrevActive && 'rounded-br-lg sm:rounded-br-xl',
              isNextActive && 'rounded-bl-lg  sm:rounded-tr-xl'
            )}
          >
            {nav.icon}
            <p className="hidden sm:inline-block text-xl">{nav.pageName}</p>
          </Link>
        );
      })}
    </div>
  );
}
