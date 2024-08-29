'use client';

import Link from 'next/link';

export default function page() {
  return (
    <div className="w-full xl:w-4/5">
      <h2 className="text-lg lg:text-2xl mb-9">Enter The Confirmation Code</h2>

      <form className="flex flex-col items-center w-full">
        <div className="flex flex-col w-full">
          <input
            type="text"
            className="input_auth"
            placeholder="Confirmation Code"
          />
        </div>
        <button className="button block w-11/12 mt-6 mb-2 lg:mb-4">
          Recover account
        </button>
      </form>
      <div className="text-center text-sm md:text-base">
      Didn`t receive Confirmation Code?{' '}
        <Link href="/signIn" className="text-blue-500">
         Resend Now
        </Link>
      </div>
    </div>
  );
}
