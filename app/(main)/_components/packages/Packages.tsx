import Image from 'next/image';
const items = [
  { src: '1', p1: 'High Quality', p2: 'crafted from top materials' },
  { src: '2', p1: 'Warrany Protection', p2: 'Over 2 years' },
  { src: '3', p1: 'Free Shipping', p2: 'Order over 150 $' },
  { src: '4', p1: '24 / 7 Support', p2: 'Dedicated support' },
];
export default function Packages() {
  return (
    <div id="packages" className="flex flex-col items-center gap-6 justify-center w-full">
      <div
        className="flex flex-row justify-center  md:justify-between w-full xl:w-9/12"
        style={{ background: 'rgb(218, 218, 218)' }}
      >
        <Image
          src="/home/packages/image.png"
          className="w-[500px] lg:w-[600px] hidden md:inline-block"
          width={1000}
          height={400}
          alt=""
        />
        <div className="flex flex-col items-center md:items-stretch gap-y-4 py-4 flex-1 md:pr-28 xl:pr-10">
          <p className="opacity-40 text-sm">Women Collection</p>
          <h3 className="opacity-70 text-xl md:text-2xl xl:text-3xl">
            Peaky Blinders
          </h3>
          <p className="underline">DESCRIPTION</p>

          <p className="opacity-40 text-xs md:text-sm md:overflow-hidden text-center md:text-left text-ellipsis w-4/5 md:w-full md:max-h-16 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
            sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Scelerisque duis.
          </p>

          <div className="flex flex-row items-center gap-2">
            <p className="opacity-40 text-sm">Size:</p>
            <p className="bg-black px-3 text-white rounded-lg">M</p>
          </div>
          <p className="text-lg font-medium">
            $100.<span className="text-sm">00</span>
          </p>
          <button className="button  max-w-32 px-6">Buy Now</button>
        </div>
      </div>
      <div className='flex flex-row flex-wrap w-5/6 xl:w-7/12 justify-center 2xl:justify-between gap-y-3 gap-x-7 '>
        {items.map((item, i) => (
          <div key={i} className='flex flex-row items-center gap-2 w-[236px] sm:w-auto'>
            <Image src={`/home/packages/${item.src}.png`} className='h-[40px] w-auto border-dashed border-[1px] border-slate-400 rounded-sm' width={40} height={40} alt='' />
            <div>
              <p className='opacity-70 text-lg font-medium'>{item.p1}</p>
              <p className='opacity-70 text-sm'>{item.p2}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
