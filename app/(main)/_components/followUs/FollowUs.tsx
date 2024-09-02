import Image from "next/image";
const arr = [1,2,3,4,5,6,7];
export default function FollowUS() {
  return (
    <div className="w-full flex flex-col py-8 md:py-16">
      <div className="w-full flex flex-col items-center gap-5">
        <h3 className="opacity-70 text-xl md:text-2xl xl:text-3xl">Follow Us On Instagram</h3>
        <p className="opacity-50 text-center text-xs md:text-sm lg:text-base max-w-[600px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
          sollicitudin
        </p>
      </div>
      <div className="flex flex-row items-center justify-center mt-8 md:mt-16">
        {arr.map((item,i)=>(
            <Image key={i} src={`/home/followUs/${item}.png`} className="2xl:w-[210px] xl:w-[180px] lg:w-[140px]  md:w-[105px] sm:w-[80px] max-w-[60px] sm:max-w-none  h-auto" width={140} height={140} alt=""/>
        ))}
      </div>
    </div>
  );
}
