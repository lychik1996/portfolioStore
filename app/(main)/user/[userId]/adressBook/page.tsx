'use client';
import useUser from '@/hooks/useUser';
import axios from 'axios';

import clsx from 'clsx';
import { useEffect, useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import ButtonForm from '../_components/ButtonForm';
interface FormProps {
  country?: String;
  city?: String;
  street?: String;
  houseNumber?: String;
  apartment?: String;
}
export default function AdressBook() {
  const user = useUser(); 
  const [edit, setEdit] = useState(false);
  const [initialValues, setInitialValues] = useState<FormProps | null>(null);
  const [loading, setTransition] = useTransition();
  const { reset, register, handleSubmit } = useForm<FormProps>({
    defaultValues: {
      country: '',
      city: '',
      street: '',
      houseNumber: '',
      apartment: '',
    },
  });

  useEffect(() => {
    if (user) {
      const initialV: FormProps = {
        country: user.country || '',
        city: user.city || '',
        street: user.street || '',
        houseNumber: user.houseNumber || '',
        apartment: user.apartment || '',
      };
      setInitialValues(initialV); 
      reset(initialV); 
    }
  }, [user, reset]);

  const onSubmit = (data: FormProps) => {
   setTransition( async()=>{
    try {
      const response = await axios.patch('/api/user/editContactUser', {
        email: user.email,
        country: data.country || '',
        city: data.city || '',
        street: data.street || '',
        houseNumber:data.houseNumber || '',
        apartment: data.apartment || '',
      });

      toast.success(response.data.message);
      setEdit(false);
      
      reset({
        country: data.country || '',
        city: data.city || '',
        street: data.street || '',
        houseNumber: data.houseNumber || '',
        apartment: data.apartment || '',
      });
    } catch (error) {
      console.error('Error updating  contact user:', error);
      toast.error('Failed to update  contact user!');
    }
  })
   
  };

  const handleEditClick = () => {
    setEdit(true);
  };

  const handleCancelEdit = () => {
    setEdit(false);
    
    if (initialValues) {
      reset(initialValues); 
    }
  };
  return (
    <div className="flex flex-col gap-3 p-3">
      <h4 className=" text-2xl">Adress Book</h4>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-3"
      >
        <label className="flex flex-col gap-4">
          Country
          <input
              type="text"
              className={clsx(
                'input_info_user placeholder:text-slate-500',
                edit
                  ? 'text-black'
                  : 'text-slate-500 select-none pointer-events-none',
                  loading && 'text-slate-500 select-none pointer-events-none',
              )}
              {...register('country', { value: user?.country || '' })}
              required={true}
              disabled={!edit || loading}
              placeholder="Country/Region"
            />
        </label>

        <label className="flex flex-col gap-4">
          Locate
          <div className="flex flex-row sm:flex-col md:flex-row gap-2">
          <input
              type="text"
              className={clsx(
                'input_info_user placeholder:text-slate-500',
                edit
                  ? 'text-black'
                  : 'text-slate-500 select-none pointer-events-none',
                  loading && 'text-slate-500 select-none pointer-events-none',
              )}
              {...register('city', { value: user?.city || '' })}
              required={true}
              disabled={!edit || loading}
              placeholder="City"
            />
            <input
              type="text"
              className={clsx(
                'input_info_user placeholder:text-slate-500',
                edit
                  ? 'text-black'
                  : 'text-slate-500 select-none pointer-events-none',
                  loading && 'text-slate-500 select-none pointer-events-none',
              )}
              {...register('street', { value: user?.street || '' })}
              required={true}
              disabled={!edit || loading}
              placeholder="Street"
            />
          </div>
        </label>
        <label className="flex flex-col gap-4">
          Number
          <div className="flex flex-row sm:flex-col md:flex-row gap-2">
          <input
              type="text"
              className={clsx(
                'input_info_user placeholder:text-slate-500',
                edit
                  ? 'text-black'
                  : 'text-slate-500 select-none pointer-events-none',
                  loading && 'text-slate-500 select-none pointer-events-none',
              )}
              {...register('houseNumber', { value: user?.houseNumber || '' })}
              required={true}
              disabled={!edit || loading}
              placeholder="House"
            />
            <input
              type="text"
              className={clsx(
                'input_info_user placeholder:text-slate-500',
                edit
                  ? 'text-black'
                  : 'text-slate-500 select-none pointer-events-none',
                  loading && 'text-slate-500 select-none pointer-events-none',
              )}
              {...register('apartment', { value: user?.apartment || '' })}
              required={true}
              disabled={!edit || loading}
              placeholder="Apartment"
            />
          </div>
        </label>
        
        <ButtonForm edit={edit} handleCancelEdit={handleCancelEdit} handleEditClick={handleEditClick} loading={loading}/>
      </form>
    </div>
  );
}
