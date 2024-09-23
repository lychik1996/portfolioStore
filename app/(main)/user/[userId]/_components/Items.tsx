import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

interface Product {
    name: string;
    src: string;
    price: number;
    color: string;
}

interface Item {
    header: {
        date: string;
        id: string;
        price: number;
    };
    products: Product[];
}

interface ItemsProps {
    items: Item[];
    userId: string;
    path:string
}
export default function Items({items,userId,path}:ItemsProps){
    return(
        <div className="flex flex-col gap-3 p-3 max-h-[600px] overflow-y-scroll scrollbar-hide">
        {items.map((item, i) => (
          <Link
            className="flex flex-col gap-1 border-[1px] border-slate-200 px-2 py-3 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 ease-in-out bg-white"
            href={`/user/${userId}/${path}/${item.header.id}`}
            key={i}
          >
            <h4 className="text-xl text-slate-400"> # {item.header.id}</h4>
            <div className="flex flex-row justify-between overflow-hidden">
              <div className="relative w-[150px] h-[150px]">
                {item.products.slice(0, 3).map((it, i) => (
                  <Image
                    src={it.src}
                    alt=""
                    width={111}
                    height={142}
                    key={i}
                    className={clsx(
                      'absolute left-[10%] bottom-0 origin-bottom-left shadow-md  max-w-[141px] max-h-[142px]',
                      item.products.length > 1 && i === 0 && 'z-[3] -rotate-[5deg]',
                      i === 1 && 'z-[2] rotate-[10deg]',
                      i === 2 && 'z -[1] rotate-[20deg]'
                    )}
                  />
                ))}
              </div>
              <div className="flex flex-col justify-between items-end">
                <p className="text-sm text-slate-400">
                  D:{' '}
                  {new Date(item.header.date).toLocaleDateString('uk-UA', {
                    day: '2-digit',
                    month: '2-digit',
                    year: '2-digit',
                  })}
                </p>

                <p className="text-sm text-slate-400">
                  {' '}
                  P: ${' '}
                  {item.header.price % 1 === 0
                    ? `${item.header.price}.00`
                    : item.header.price.toFixed(2)}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    )
}