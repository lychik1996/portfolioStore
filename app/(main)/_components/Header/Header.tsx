'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import HeaderAction from './HeaderAction';
import Portal from '@/components/Portal';
import HeaderOption from './HeaderOption';
let optionsHome = [
  {
    name: 'Deals',
    path: '#dealth',
  },
  {
    name: 'New Arriwals',
    path: '#arrivals',
  },
  {
    name: 'Packages',
    path: '#packages',
  },
];
let optionsPages = [
  {
    name: 'Profile',
    path: '/',
  },
  {
    name: 'Drawer',
    path: '/drawer',
  },
  {
    name: 'Favorites',
    path: '/',
  },
];
export default function Header() {
  const [test, setTest] = useState(true); // for test Header Actions
  const [selectHome, setSelectHome] = useState(false);
  const [selectPages, setSelectPages] = useState(false);
  const [search, setSearch] = useState(false);
  const dropSelectHomeRef = useRef<HTMLDivElement>(null);
  const dropSelectPagesRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const pathName = usePathname();

  const handleClickOutSide = (event: MouseEvent) => {
    if (
      dropSelectHomeRef.current &&
      !dropSelectHomeRef.current.contains(event.target as Node)
    ) {
      setSelectHome(false);
    }
    if (
      dropSelectPagesRef.current &&
      !dropSelectPagesRef.current.contains(event.target as Node)
    ) {
      setSelectPages(false);
    }
    if (
      searchRef.current &&
      !searchRef.current.contains(event.target as Node)
    ) {
      setSearch(false);
    }
  };
  
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutSide);
    return () => {
      document.removeEventListener('mousedown', handleClickOutSide);
    };
  }, []);
  
  return (
    <header className="my-5 sm:my-10 flex flex-row justify-between  w-5/6 xl:w-7/12 py-1 items-center">
      <h1 className=" text-2xl md:text-4xl uppercase">Fasco</h1>
      <div
        className="flex flex-row justify-between gap-2  md:gap-4 lg:gap-11"
        ref={searchRef}
      >
        {!search ? (
          <>
            {pathName === '/' ? (
              <div className="relative cursor-pointer" ref={dropSelectHomeRef}>
                <p
                  onClick={() => setSelectHome(!selectHome)}
                  className={clsx(
                    'text-sm md:text-base',
                    pathName === '/' && 'underline underline-offset-8'
                  )}
                >
                  Home
                  {selectHome ? (
                    <FaChevronUp
                      className="inline-block ml-1 lg:ml-2"
                      size="12px"
                    />
                  ) : (
                    <FaChevronDown
                      className="inline-block ml-1 lg:ml-2"
                      size="12px"
                    />
                  )}
                </p>

                <Portal isOpen={selectHome} reference={dropSelectHomeRef}>
                  <div className="absolute z-10 mt-2 lg:mt-3 py-1 lg:py-2 left-1/2 transform -translate-x-1/2 bg-white flex flex-col gap-1 lg:gap-2 items-center border rounded-md shadow-md">
                    {optionsHome.map((option, i) => (
                      <HeaderOption
                        name={option.name}
                        path={option.path}
                        setSelect={setSelectHome}
                        key={i}
                      />
                    ))}
                  </div>
                </Portal>
              </div>
            ) : (
              <Link
                href="/"
                className={clsx(
                  'text-sm md:text-base',
                  pathName === '/' && 'underline underline-offset-8'
                )}
              >
                Home
              </Link>
            )}
            <Link
              href="/shop"
              className={clsx(
                'text-sm md:text-base',
                pathName === '/shop' && 'underline underline-offset-8'
              )}
            >
              Shop
            </Link>
            <Link
              href="/"
              className={clsx(
                'text-sm md:text-base',
                pathName.startsWith('/products') &&
                  'underline underline-offset-8'
              )}
            >
              Products
            </Link>
            <div className="relative cursor-pointer hidden sm:block" ref={dropSelectPagesRef}>
              <p
                onClick={() => setSelectPages(!selectPages)}
                className='text-sm md:text-base'
              >
                Pages
                {selectPages ? (
                  <FaChevronUp
                    className="inline-block ml-1 lg:ml-2"
                    size="12px"
                  />
                ) : (
                  <FaChevronDown
                    className="inline-block  ml-1 lg:ml-2"
                    size="12px"
                  />
                )}
              </p>
              <Portal isOpen={selectPages} reference={dropSelectPagesRef}>
                <div className="absolute z-10 mt-2 lg:mt-3 py-1 lg:py-2 left-1/2 transform -translate-x-1/2 bg-white flex flex-col gap-1 lg:gap-2 items-center border rounded-md shadow-md">
                  {optionsPages.map((option, i) => (
                    <HeaderOption
                      name={option.name}
                      path={option.path}
                      setSelect={setSelectPages}
                      key={i}
                    />
                  ))}
                </div>
              </Portal>
            </div>
          </>
        ) : (
          <Portal isOpen={search} reference={searchRef}>
            <input
              className="w-56 md:w-72 lg:w-96 pl-2 pb-[2px] outline-none border-b-2 rounded-none border-slate-300 focus:border-black"
              type="text"
              placeholder="Search..."
            />
          </Portal>
        )}
      </div>
      {test ? (
        <HeaderAction search={search} setSearch={setSearch} />
      ) : (
        <Link href="/signIn" className="button lg:px-9 px-5 ">
          Sign In
        </Link>
      )}
    </header>
  );
}
