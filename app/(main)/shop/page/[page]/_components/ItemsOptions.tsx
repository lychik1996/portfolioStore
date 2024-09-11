

interface OptionProps {
  name: string;
  setSelect: Function;
  index:number;
  setIsOpen:Function;
}
export default function ItemsOptions({
  name,
  setSelect,
  index,
  setIsOpen
}: OptionProps) {
    const onChoose = ()=>{
      setSelect(index);
      setIsOpen(false);
    }
  return (
    <div
      className='cursor-pointer hover:bg-slate-100 py-1 w-full text-center mx-2 lg:mx-4 text-sm md:text-base'  
      onClick={onChoose}
    >
      {name}
    </div>
  );
}
