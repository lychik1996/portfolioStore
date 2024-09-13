"use client";
import { FaRegAddressCard } from 'react-icons/fa';
import Item from './_dataComponens/Item';
import { useModalCheckout } from '@/store/use-modalCheckout';
import clsx from 'clsx';

const items = [
  {
    src: '1.png',
    name: 'Mini dress with ruffled straps',
    color: 'Red',
    price: 100,
    count: 1,
  },
  {
    src: '1.png',
    name: 'Mini dress with ruffled straps',
    color: 'Red',
    price: 100,
    count: 1,
  },
  {
    src: '1.png',
    name: 'Mini dress with ruffled straps',
    color: 'Red',
    price: 100,
    count: 15,
  },
  {
    src: '1.png',
    name: 'Mini dress with ruffled straps',
    color: 'Red',
    price: 100,
    count: 1,
  },
  {
    src: '1.png',
    name: 'Mini dress with ruffled straps',
    color: 'Red',
    price: 100,
    count: 1,
  },
  {
    src: '1.png',
    name: 'Mini dress with ruffled straps',
    color: 'Red',
    price: 100,
    count: 1,
  },
];
const subtotal = items.reduce((acum, a) => acum + a.price * a.count, 0);
const shiping = 40;
export default function DataUser() {
    const {isOpen, onOpen} = useModalCheckout(state=>state);
  return (
    <div className={clsx(
        " sm:flex flex-col gap-5 py-6 sm:px-2",
        isOpen?"hidden":'flex'
    )}>
        <div className='flex sm:hidden flex-row gap-2 items-center cursor-pointer' onClick={onOpen}>
        <h4 className='text-xl'>Enter Data</h4>
        <FaRegAddressCard/>
            </div>
      <div className="flex flex-col py-4 gap-4  max-h-[400px] overflow-y-scroll scrollbar-hide">
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </div>
      <form className="flex flex-row gap-5 items-center">
        <input
          type="text"
          className="input_info_user"
          placeholder="Discount Code"
        />
        <button className="button px-8 py-2 lg:py-1">Apply</button>
      </form>
      <div className="flex flex-col justify-between gap-2">
        <div className="flex flex-row justify-between text-slate-600">
          <p>Subtotal</p>
          <p>$ {subtotal % 1 === 0 ? `${subtotal}.00` : subtotal.toFixed(2)}</p>
        </div>
        <div className="flex flex-row justify-between text-slate-600">
          <p>Shiping</p>
          <p> $ {shiping % 1 === 0 ? `${shiping}.00` : shiping.toFixed(2)}</p>
        </div>
        <div className="flex flex-row justify-between text-slate-600">
          <p>Total</p>
          <p className="text-black">
            ${' '}
            {subtotal + (shiping % 1) === 0
              ? `${subtotal + shiping}.00`
              : (subtotal + shiping).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}
