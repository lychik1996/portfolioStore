import Link from 'next/link';

export default function Contact() {
  return (
    <div className='flex flex-col gap-3'>
      <div className="flex flex-row justify-between items-center">
        <h4 className=" text-2xl md:text-4xl text-slate-600">Contact</h4>{' '}
        <p className=" text-sm flex flex-col items-end text-end md:inline text-slate-600">
          {' '}
          Have an account?{' '}
          <Link className="text-blue-500 cursor-pointer" href={'/signUp'}>
            Create account
          </Link>
        </p>
      </div>
      <input type="email" className='input_info_user' placeholder='Email Address' />
    </div>
  );
}
