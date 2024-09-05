import Image from 'next/image';
import Link from 'next/link';
const brands = ['chanel', 'louis', 'prada', 'calvin', 'denim'];
export default function Banner() {
  return (
    <div className="w-5/6 xl:w-7/12 flex flex-col">
      <div className="flex flex-row justify-center gap-5 sm:gap-0 items-center sm:items-stretch sm:justify-between">
        <div
          className=" flex  justify-center items-end h-96 md:h-auto px-4 sm:px-0 md:px-4 xl:px-6 rounded-md"
          style={{ background: 'rgb(224, 224, 224)' }}
        >
          <Image
            priority={true}
            src="/home/banner/man1.png"
            width={180}
            height={262}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-5 justify-between">
          <div
            className="hidden sm:flex rounded-md  items-center justify-center"
            style={{ background: 'rgb(224, 224, 224)' }}
          >
            <Image
              className="w-40 md:w-44 lg:w-56 xl:w-60"
              src="/home/banner/girls1.png"
              width={300}
              height={20}
              alt=""
            />
          </div>
          <div className="flex flex-col justify-between gap-5 items-center">
            <Image
              className="xl:w-48"
              src="/home/banner/ultimate.png"
              priority
              width={150}
              height={20}
              alt=""
            />
            <Image
              className="xl:w-48"
              src="/home/banner/sale.png"
              width={150}
              height={20}
              alt=""
            />
            <Image src="/home/banner/new.png" width={150} height={12} alt="" />
            <Link
              href="/shop"
              className="button uppercase text-center lg:px-9 px-5 "
            >
              Shop now
            </Link>
          </div>
          <Image
            className=" hidden sm:block rounded-md w-40 sm:max-h-16 md:max-h-none lg:w-56 xl:w-60 h-3/4"
            src="/home/banner/girls2.png"
            priority
            width={300}
            height={20}
            alt=""
          />
        </div>
        <div
          className=" hidden sm:flex  justify-center items-end px-4 md:px-7 lg:px-10 xl:px-12 rounded-md"
          style={{ background: 'rgb(224, 224, 224)' }}
        >
          <Image
            src="/home/banner/man2.png"
            className="w-28 sm:w-32"
            width={200}
            height={20}
            alt=""
          />
        </div>
      </div>
      <div className="flex items-center flex-wrap justify-center gap-5 2xl:justify-between  py-5 lg:py-10">
        {brands.map((brand, i) => (
            <Image key={i}
            src={`/home/banner/${brand}.png`}
            className='w-[auto] h-[auto]'
            width={162}
            height={26}
            alt=""
          />
          
          
        ))}
      </div>
    </div>
  );
}
