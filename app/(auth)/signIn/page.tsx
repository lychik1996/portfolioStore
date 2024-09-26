'use client'

import { signIn } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
interface FormDataProps{
    email:string,
    password:string,
}
export default function Page(){
    const handleGoogleSignIn = ()=>{
        signIn('google')
    }
    const {register,reset,handleSubmit} = useForm<FormDataProps>();
    const onSubmit = async(data:FormDataProps)=>{
        await signIn('credentials', {
            email: data.email,
            password: data.password,
          })
          .then(()=>{
            toast.success("SignIn is success");
            reset()
          })
          .catch(()=>toast.error('Incorrect password or email'))
    }
    return(
        <div className="w-full xl:w-4/5">
            <h2 className="text-lg lg:text-2xl mb-4">Sign In To FASCO</h2>
            <div className="w-full flex items-center justify-center"><button onClick={handleGoogleSignIn} className="text-sm sm:text-base mb-2 flex flex-row items-center gap-2 border-[1px] border-blue-200 px-3 py-2 rounded-md hover:shadow-md active:shadow-md active:scale-105 transition-all duration-300 ease-in-out">
                <Image src={'/auth/google.png'} alt="" width={20} height={20} />
                Sign up with Google</button></div>
            
            <div className="text-lg lg:text-2xl font-bold text-gray-400 tracking-wide text-center mb-5"><span>-</span> OR <span>-</span></div>
                <form className="flex flex-col items-center w-full" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col w-full">
                    <input type="email" {...register('email')} className="input_auth" placeholder="Email" required={true} />
                    <input type="password"{...register('password')} className="input_auth" placeholder="Password" required={true}/>
                    </div>
                    <button className="button block w-11/12 my-4">Sign In</button>
                    <Link href='/signUp' className=" w-11/12 text-center leading-8 lg:leading-10 text-sm lg:text-base text-blue-500 border-blue-500 border-2 rounded-[10px] bg-white mb-2">Register now</Link>
                </form>
            <Link href='/forgetPass' className=" block text-right text-xs lg:text-base font-bold tracking-wide text-blue-500">Forget Password?</Link>
        </div>
    )
}