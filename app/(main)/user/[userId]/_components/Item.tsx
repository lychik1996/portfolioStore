import Image from "next/image";
import Link from "next/link";
import { IoReturnDownBackSharp } from "react-icons/io5";

interface Item {
  header: {
    date: string;
    id: string;
    price: number;
};
products: {
    name: string;
    src: string;
    price: number;
    color: string;
    count: number;
}[];
}
interface ItemProps{
  item?:Item,
  userId:string,
  path:string
}
export default function Item({item,userId,path}:ItemProps){
    return(
        <div className="flex flex-col p-3  gap-3">
      <Link href={`/user/${userId}/${path}`} className='text-xl volkhov flex flex-row gap-2 items-center hover:scale-105 transition-transform duration-300 ease-in-out w-fit'><IoReturnDownBackSharp size={25}/>Back </Link>
      <div>
        <h3 className="text-xl text-slate-400">
          {' '}
          # {item?.header.id}
        </h3>
        <div className="flex flex-col gap-3 overflow-y-scroll scrollbar-hide max-h-[600px]">
          {item?.products.map((it, i) => (
            <div key={i} className="flex flex-row gap-5 lg:gap-10 border-[1px] border-slate-200 shadow-sm p-2">
              <Image
                src={it.src}
                alt=""
                width={111}
                height={142}
                className="max-w-[111] max-h-[142]"
              />
              <div className="flex flex-col text-slate-400 gap-2 justify-center">
                <p className=" max-w-40 sm:max-w-36 md:max-w-72 volkhov truncate overflow-hidden text-ellipsis whitespace-nowrap">{it.name}</p>
                <p> Color: {it.color}</p>
                <p>Count: {it.count}</p>
                <p>
                  Price:
                  {it.price % 1 === 0
                    ? `${it.price}.00`
                    : it.price.toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    )
}