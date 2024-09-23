
import Subscribe from '../../_components/subscribe/Subscribe';
import UserNavigate from './_components/UserNavigate';
interface UserProps {
  children: React.ReactNode;
  params: { userId: string };
}
export default function User({ children, params }: UserProps) {
  return (
    <>
      <div className="flex flex-col items-center gap-2 mb-2 sm:mb-7">
        <h3 className="text-xl md:text-2xl xl:text-3xl">Shopping Cart</h3>
        <p className="text-xl"> Hello: {params?.userId}</p>
      </div>
      <div className='flex flex-col sm:flex-row w-5/6 xl:w-7/12'>
        <UserNavigate params={params}/>
        <div className='flex-1'>{children}</div>
      </div>
      <Subscribe/>
    </>
  );
}
