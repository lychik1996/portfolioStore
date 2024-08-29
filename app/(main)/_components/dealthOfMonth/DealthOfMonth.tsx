
import Link from 'next/link';
import Timer from './Timer';
import SliderDealth from './Slider';


export default function DealthOfMonth() {
  
  
  return (
    <>
      <div
        className="w-full flex justify-center py-10 md:py-20"
        style={{ background: 'rgb(250, 250, 250)' }}
        id="dealth"
      >
        <div className="w-5/6 xl:w-7/12 flex flex-row justify-center md:justify-normal">
          <div className="flex flex-col items-center justify-center md:items-start gap-2 md:gap-4 max-w-[350px]">
            <h2 className=" opacity-70 text-xl md:text-2xl xl:text-3xl">
              Deals Of The Month
            </h2>
            <p className="opacity-50 text-center md:text-left text-xs md:text-sm lg:text-base max-w-64 md:max-w-none">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Scelerisque duis ultrices sollicitudin aliquam sem.
            </p>
            <Link
              className="button text-center lg:px-9 px-5 py-1 max-w-36"
              href="/shop"
            >
              Buy Now
            </Link>
            <p className=" opacity-70 text-sm md:text-base">
              Hurry, Before It’s Too Late!
            </p>
            <Timer />
          </div>
          <SliderDealth/>
        </div>
      </div>
    </>
  );
}
