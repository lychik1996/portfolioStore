import Link from 'next/link';

interface OptionProps {
  name: string;
  path: string;
  setSelect: Function;
}
export default function HeaderOption({
  name,
  path,
  setSelect,
}: OptionProps) {
    const onScroll = ()=>{
      const element = document.querySelector(path);
      if(element){
        element.scrollIntoView({behavior:'smooth'})
      }
    }
  return (
    <Link
      href={path}
      onClick={() => {
        setSelect(false);
        onScroll();
      }}
      scroll={false}
      className='cursor-pointer hover:bg-slate-100 py-1 w-full text-center mx-2 lg:mx-4 text-sm md:text-base'  
    >
      {name}
    </Link>
  );
}
