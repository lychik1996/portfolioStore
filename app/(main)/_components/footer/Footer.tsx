import Link from 'next/link';

let footerArr = [
  {
    name: 'Support',
    path: '/',
  },
  {
    name: 'Invoicing',
    path: '/',
  },
  {
    name: 'Contract',
    path: '/',
  },
  {
    name: 'Careers',
    path: '/',
  },
  {
    name: 'Blog',
    path: '/',
  },
  {
    name: 'FAQ,s',
    path: '/',
  },
];
export default function Footer() {
  return (
    <footer className='flex flex-col w-5/6 xl:w-7/12 py-1'>
      <div className='flex flex-col md:flex-row justify-between items-center mt-10 my-4 lg:my-9'>
        <h1 className='text-3xl md:text-4xl uppercase'>Fasco</h1>
        <div className='flex flex-row flex-wrap items-center justify-center md:justify-between gap-2 md:gap-4 lg:gap-6'>
          {footerArr.map((item, i) => (
            <Link key={i} href={item.path} className='cursor-pointer text-sm md:text-base'>
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      <div className='text-center text-sm md:text-base'>Copyright © 2022 Xpro . All Rights Reseved.</div>
    </footer>
  );
}
