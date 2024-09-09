import clsx from 'clsx';
import { FaChevronDown } from 'react-icons/fa';
import { MdOutlineDisabledByDefault } from 'react-icons/md';
interface HeaderFilterComponentProps {
  setDefault: (value: any) => void;
  name: string;
  open?: boolean;
  setOpen?: (open: boolean) => void;
  action?: boolean;
}
export default function HeaderFilterComponent({
  setDefault,
  name,
  open,
  setOpen,
  action,
}: HeaderFilterComponentProps) {
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

        <MdOutlineDisabledByDefault
          className="cursor-pointer text-slate-400 active:text-black"
          onClick={() => setDefault(name == 'Collections' ? 0 : null)}
        />
      </div>
    </div>
  );
}
