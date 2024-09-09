import Link from 'next/link';
import Shop from './_components/Shop';


export default function Page() {
  return (
    <div className="flex flex-col w-5/6 xl:w-7/12 md:pt-4">
      <div className="flex flex-col items-center gap-2 mb-2 md:mb-14">
        <h3 className="text-xl md:text-2xl xl:text-3xl">Fashion</h3>
        <div className="flex flex-row items-center">
          <Link href={'/'} className="text-xs md:text-sm lg:text-base">
            Home{' '}
          </Link>
          <div className="w-4 text-center"> &gt; </div>
          <p className="text-xs md:text-sm lg:text-base"> Fashion</p>
        </div>
      </div>
      <Shop/>
    </div>
  );
}
