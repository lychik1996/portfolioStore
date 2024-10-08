
import clsx from 'clsx';
import { useRouter } from 'next/navigation';

import { FaChevronDown } from 'react-icons/fa';
import { MdOutlineDisabledByDefault } from 'react-icons/md';
interface HeaderFilterComponentProps {
  setDefault: (value: any) => void;
  name: string;
  open?: boolean;
  setOpen?: (open: boolean) => void;
  action?: boolean;
  exist: string[] | string;
}
export default function HeaderFilterComponent({
  setDefault,
  name,
  open,
  setOpen,
  action,
  exist,
}: HeaderFilterComponentProps) {
  const router = useRouter();
  const isCollection = name === 'Collections';
  const canShowIcon = isCollection
    ? typeof exist === 'string' && exist !== 'All products'
    : Array.isArray(exist) && exist.length > 0;

  return (
    <div
      className={clsx(
        'flex flex-row justify-between items-center',
        setOpen && 'cursor-pointer'
      )}
      onClick={() => setOpen && setOpen(!open)}
    >
      <h4 className="text-base lg:text-xl">{name}</h4>
      <div className="flex flex-row gap-3">
        {action && (
          <FaChevronDown
            className={clsx(
              'cursor-pointer transition-all duration-300 ease-in-out',
              open && 'rotate-180'
            )}
          />
        )}
        {canShowIcon && (
          <MdOutlineDisabledByDefault
            className="cursor-pointer text-slate-400 active:text-black"
            onClick={(e) => {
              e.stopPropagation();
              setDefault(isCollection ? 'All products' : []);
              router.push('/shop/page/1',{scroll:false})
            }}
          />
        )}
      </div>
    </div>
  );
}
