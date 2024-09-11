import clsx from 'clsx';
import { FaChevronDown } from 'react-icons/fa';
import { MdOutlineDisabledByDefault } from 'react-icons/md';
interface HeaderFilterComponentProps {
  setDefault: (value: any) => void;
  name: string;
  open?: boolean;
  setOpen?: (open: boolean) => void;
  action?: boolean;
  exist: null | number,
}
export default function HeaderFilterComponent({
  setDefault,
  name,
  open,
  setOpen,
  action,
  exist
}: HeaderFilterComponentProps) {
  const isCollection = name ==="Collections";
  const canShowIcon = isCollection ? exist !== null && exist > 0 : exist !== null;
  
  return (
    <div className="flex flex-row justify-between items-center">
      <h4 className="text-base lg:text-xl">{name}</h4>
      <div className="flex flex-row gap-3">
        {action && setOpen && (
          <FaChevronDown
            onClick={() => setOpen(!open)}
            className={clsx(
              'cursor-pointer transition-all duration-300 ease-in-out',
              open && 'rotate-180'
            )}
          />
        )}
        {canShowIcon && (
          <MdOutlineDisabledByDefault
            className="cursor-pointer text-slate-400 active:text-black"
            onClick={() => setDefault(isCollection ? 0 : null)}
          />
        )}
        
      </div>
    </div>
  );
}
