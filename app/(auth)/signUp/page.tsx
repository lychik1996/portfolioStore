'use client';

import axios from 'axios';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
interface FormProps {
  name: string;
  lastName: string;
  email: string;
  telephone?: string;
  password: string;
  confirmPassword: string;
}
export default function Page() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormProps>();
  const handleGoogleSignIn = () => {
    signIn('google');
  };
  
  const onSubmit = async (data: FormProps) => {
    if (data.password !== data.confirmPassword) {
      toast.error('Password do not match');
      return;
    }
    const { confirmPassword, ...formData } = data;
    try {
        const res = await axios.post('/api/user/register', formData)
        .then((res)=>toast.success(res.data.message))
        .catch((error)=>toast.error(error.response?.data?.message))
        await signIn('credentials', {
          email: data.email,
          password: data.password,
        });
        toast.success("Signed in successfully");
        reset();
      } catch (error:any) {
        const errorMessage = error.response?.data?.message || 'Something went wrong';
        toast.error(errorMessage);
      }
  };
  return (
    <div className="w-full xl:w-4/5">
      <h2 className="text-lg lg:text-2xl mb-4">Create account</h2>
      <div className="w-full flex items-center justify-center">
        <button
          onClick={handleGoogleSignIn}
          className="text-sm sm:text-base mb-2 flex flex-row items-center gap-2 border-[1px] border-blue-200 px-3 py-2 rounded-md hover:shadow-md active:shadow-md active:scale-105 transition-all duration-300 ease-in-out"
        >
          <Image src={'/auth/google.png'} alt="" width={20} height={20} />
          Sign up with Google
        </button>
      </div>
      <div className="text-lg lg:text-2xl font-bold text-gray-400 tracking-wide text-center mb-5">
        <span>-</span> OR <span>-</span>
      </div>
      <form
        className="flex flex-col items-center w-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-full flex flex-col md:grid md:grid-cols-2 md:gap-x-2.5">
          <input
            type="text"
            {...register('name', { required: 'First Name is required' })}
            className="input_auth"
            placeholder="First Name"
            required={true}
          />

          <input
            type="text"
            {...register('lastName')}
            className="input_auth"
            placeholder="Last Name"
            required={true}
          />

          <input
            type="email"
            {...register('email', {
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Invalid email address',
              },
            })}
            className="input_auth"
            placeholder="Email Addres"
            required={true}
          />

          <input
            type="tel"
            {...register('telephone')}
            className="input_auth"
            placeholder="Phone Number"
          />

          <input
            type="password"
            {...register('password')}
            className="input_auth"
            placeholder="Password"
            required={true}
          />

          <input
            type="password"
            {...register('confirmPassword')}
            className="input_auth"
            placeholder="Confirm Password"
            required={true}
          />
        </div>
        <button className="button block w-11/12 mt-6 lg:mb-4">Sign In</button>
      </form>
      <div className="text-center leading-8 md:leading-10 text-sm md:text-base">
        Alredy have an account?{' '}
        <Link href="/signIn" className="text-blue-500">
          Login
        </Link>
      </div>
    </div>
  );
}
