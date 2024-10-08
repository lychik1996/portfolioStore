import Slider from './Slider';

export default function Rewiews() {
  return (
    <div
      className=" flex flex-col w-full items-center py-8 lg:py-14"
      style={{ backgroundColor: 'rgb(250, 250, 250)' }}
    >
      <div className="w-full flex flex-col items-center gap-5">
        <h3 className="opacity-70 text-xl md:text-2xl xl:text-3xl">
          This Is What Our Customers Say
        </h3>
        <p className="opacity-50 text-center text-xs md:text-sm lg:text-base max-w-[600px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis
        </p>
      </div>
      <Slider />
    </div>
  );
}
