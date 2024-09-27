'use client';
import { useDebounce } from '@/hooks/useDebounce';
import useUser from '@/hooks/useUser';
import axios from 'axios';
import clsx from 'clsx';

import { useEffect, useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import ButtonForm from '../_components/ButtonForm';

interface FormData {
  name: string;
  lastName?: string;
  password?: string;
  confirmPassword?: string;
}
export default function Profile() {
  const user = useUser();
  const [edit, setEdit] = useState(false);
  const [currentPass, setCurrentPass] = useState('');
  const [checkCurrentPass, setCheckCurrentPass] = useState(false);
  const debouncedValue = useDebounce(currentPass, 300);
  const [loading, setTransition] = useTransition();
  const { register, reset, handleSubmit, watch } = useForm<FormData>({
    defaultValues: {
      name: '',
      lastName: '',
      password: '',
      confirmPassword: '',
    },
  });
  const [initialValues, setInitialValues] = useState<FormData | null>(null);
  const watchPassword = watch('password');
  useEffect(() => {
    if (debouncedValue && user?.email) {
      axios
        .post('/api/user/checkPassword', {
          password: debouncedValue,
          email: user.email,
        })
        .then((res) => setCheckCurrentPass(res.data))
        .catch(() => toast.error('Something went wrong'));
    }
  }, [debouncedValue, user?.email]);
  useEffect(() => {
    if (user) {
      const initialValues: FormData = {
        name: user.name || '',
        lastName: user.lastName || '',
        password: '',
        confirmPassword: '',
      };
      setInitialValues(initialValues);
      reset(initialValues);
    }
  }, [user, reset]);

  const onSubmit = (data: FormData) => {
    setTransition(async()=>{
      if (data.password !== data.confirmPassword) {
        toast.error('Password do not match!');
        return;
      }
      try {
        const response = await axios.patch('/api/user/editUser', {
          email: user.email,
          name: data.name,
          lastName: data.lastName || '',
          ...(data.password && { password: data.password }),
        });
  
        toast.success(response.data.message);
        setEdit(false);
        setCurrentPass('');
        setCheckCurrentPass(false);
        reset({
          name: data.name,
          lastName: data.lastName || '',
          password: '',
          confirmPassword: '',
        });
      } catch (error) {
        console.error('Error updating user:', error);
        toast.error('Failed to update user!');
      }
    })
  
  };

  const handleEditClick = () => {
    setEdit(true);
  };

  const handleCancelEdit = () => {
    setEdit(false);
    setCurrentPass('');
    setCheckCurrentPass(false);
    if (initialValues) {
      reset(initialValues);
    }
  };

  return (
    <div className="flex flex-col gap-3 p-3">
      <h4 className=" text-2xl">Profile</h4>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <label className="flex flex-col gap-4">
          Name
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
              {...register('name', { value: user?.name || '' })}
              required={true}
              disabled={!edit || loading}
              placeholder="First Name"
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
              {...register('lastName', { value: user?.lastName || '' })}
              disabled={!edit || loading}
              placeholder="Last Name"
            />
          </div>
        </label>

        <label className="flex flex-col gap-4">
          Email
          <input
            type="mail"
            className={clsx(
              'input_info_user placeholder:text-slate-500 text-slate-500 select-none pointer-events-none'
            )}
            required={true}
            disabled={true}
            value={user?.email || ''}
            placeholder="Email"
          />
        </label>
        <div className="flex flex-col gap-4">
          Password
          <input
            type="password"
            onChange={(e) => setCurrentPass(e.target.value)}
            value={currentPass}
            className={clsx(
              'input_info_user placeholder:text-slate-500 ',
              edit? 'text-black ' : 'text-slate-500',
              loading && 'text-slate-500 select-none pointer-events-none',
              checkCurrentPass && 'text-green-500'
            )}
            disabled={!edit || checkCurrentPass || loading}
            placeholder="Current Password"
          />
          <input
            type="password"
            {...register('password')}
            className={clsx(
              'input_info_user placeholder:text-slate-500 ',
              edit? 'text-black ' : 'text-slate-500',
              loading && 'text-slate-500 select-none pointer-events-none',
            )}
            disabled={!edit || !checkCurrentPass || loading}
            placeholder="New Password"
          />
          <input
            type="password"
            {...register('confirmPassword')}
            className={clsx(
              'input_info_user placeholder:text-slate-500 ',
              edit ? 'text-black' : 'text-slate-500',
              loading && 'text-slate-500 select-none pointer-events-none',
            )}
            required={(watchPassword ?? '').length > 0}
            disabled={!edit || !(watchPassword ?? '').length || loading }
            placeholder="Confirm Password"
          />
        </div>
        <ButtonForm edit={edit} handleCancelEdit={handleCancelEdit} handleEditClick={handleEditClick} loading={loading}/>
      </form>
    </div>
  );
}
