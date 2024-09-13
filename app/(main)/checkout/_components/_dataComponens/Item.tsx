import Image from "next/image"

interface ItemProps{
    src:string,
    name:string,
    count:number,
    price:number,
    color:string
}
export default function Item({item}:{item:ItemProps}){
    return(
        <div className="flex flex-row items-center gap-2">
           <div className="relative size-fit">
            <Image src={`/checkout/${item.src}`} className="min-w-[110px] min-h-[110px]" alt="" width={110} height={110}/>
            <div className="absolute -top-3 -right-3 flex items-center justify-center bg-red-400 text-white rounded-full size-6 volkhov">{item.count}</div>
            </div>
            <div>
                <h4 className="sm:max-w-28 md:max-w-none line-clamp-2">{item.name}</h4>
                <div className="flex flex-row justify-between">
                    <p className="sm:text-sm md:text-base">{item.color}</p>
                    <p className="sm:text-sm md:text-base">$ {item.price % 1 === 0 ? `${item.price}.00` : item.price.toFixed(2)}</p>
                </div>
                </div> 
        </div>
    )
}