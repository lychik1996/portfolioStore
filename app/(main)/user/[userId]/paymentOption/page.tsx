'use client';
import useUser from '@/hooks/useUser';
import axios from 'axios';
import clsx from 'clsx';
import { useEffect, useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import ButtonForm from '../_components/ButtonForm';

interface FormProps {
  cardNumber?: string;
  expiryDate?: string;
  cvv?: string;
}

function formatCardNumber(cardNumber: string): string {
  return cardNumber.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim();
}

function formatCardDate(cardDate: string): string {
  return cardDate.replace(/\D/g, '').replace(/(.{2})/, '$1/').slice(0, 5);
}
function formatCardDateFromISO(date: string): string {
  const parsedDate = new Date(date);
  const month = (parsedDate.getUTCMonth() + 1).toString().padStart(2, '0');
  const year = parsedDate.getUTCFullYear().toString().slice(-2); 
  return `${month}/${year}`;
}

function convertToDateTimeSend(expiryDate: string): Date | null {
  const [month, year] = expiryDate.split('/');
  if (month && year) {
    const fullYear = Number(`20${year}`);
    const monthIndex = parseInt(month) - 1;

    if (monthIndex < 0 || monthIndex > 11 || fullYear < new Date().getFullYear()) {
      return null;
    }
    return new Date(Date.UTC(fullYear, monthIndex, 1)); 
  }
  return null;
}

export default function PaymentOption() {
  const user = useUser();
  
  const [edit, setEdit] = useState(false);
  const [initialValues, setInitialValues] = useState<FormProps | null>(null);
  const [loading, setTransition] = useTransition();
  const { reset, register, handleSubmit, setValue, watch } = useForm<FormProps>({
    defaultValues: {
      cardNumber: '',
      expiryDate: '',
      cvv: '',
    },
  });

  const cardNumberWatch = watch('cardNumber', '');
  const expiryDateWatch = watch('expiryDate', '');

  useEffect(() => {
    if (user) {
      const initialV: FormProps = {
        cardNumber: user.cardNumber || '',
        expiryDate: formatCardDate(user.expiryDate || ''),
        cvv: user.cvv || '',
      };
      setInitialValues(initialV);
      setValue('cardNumber', formatCardNumber(user.cardNumber || ''));
      setValue('expiryDate', formatCardDateFromISO(user.expiryDate || ''));
      setValue('cvv', user.cvv || '');
    }
  }, [user, setValue]);

  const onSubmit = (data: FormProps) => {
    setTransition(async () => {
        try {
            const formatExpiryDateSend = convertToDateTimeSend(data.expiryDate || '');
  
            if (!formatExpiryDateSend) {
              toast.error('Invalid expiry date format!');
              return;
            }
  
            const response = await axios.patch('/api/user/editCardUser', {
                email: user.email,
                cardNumber: data.cardNumber?.replace(/\s+/g, '') || '',
                expiryDate: formatExpiryDateSend.toISOString(),
                cvv: data.cvv || '',
            });
  
            toast.success(response.data.message);
            setEdit(false);
  
            reset({
                cardNumber: formatCardNumber(data.cardNumber || ''),
                expiryDate: formatCardDate(data.expiryDate || ''),
                cvv: data.cvv || '',
            });
        } catch (error) {
            console.error('Error updating contact user:', error);
            toast.error('Failed to update contact user!');
        }
    });
  };

  const handleEditClick = () => {
    setEdit(true);
  };

  const handleCancelEdit = () => {
    setEdit(false);
    if (initialValues) {
      
      setValue('cardNumber', formatCardNumber(initialValues.cardNumber || ''));
      setValue('expiryDate', formatCardDate(initialValues.expiryDate || ''));
      setValue('cvv', initialValues.cvv || '');
    }
  };

  
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue('cardNumber', formatCardNumber(e.target.value));
  };

  const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue('expiryDate', formatCardDate(e.target.value));
  };

  return (
    <div className="flex flex-col gap-3 p-3">
      <h4 className=" text-2xl">Payment Option</h4>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <label className="flex flex-col gap-4">
          Card Number
          <input
            type="text"
            className={clsx(
              'input_info_user placeholder:text-slate-500',
              edit ? 'text-black' : 'text-slate-500 select-none pointer-events-none',
              loading && 'text-slate-500 select-none pointer-events-none'
            )}
            {...register('cardNumber')}
            required={true}
            disabled={!edit || loading}
            placeholder="Card Number"
            value={cardNumberWatch}
            onChange={handleCardNumberChange}
          />
        </label>

        <label className="flex flex-col gap-4">
          Date / Code
          <div className="flex flex-row sm:flex-col md:flex-row gap-2">
            <input
              type="text"
              className={clsx(
                'input_info_user placeholder:text-slate-500',
                edit ? 'text-black' : 'text-slate-500 select-none pointer-events-none',
                loading && 'text-slate-500 select-none pointer-events-none'
              )}
              {...register('expiryDate')}
              required={true}
              disabled={!edit || loading}
              placeholder="MM/YY"
              maxLength={5}
              value={expiryDateWatch}
              onChange={handleExpiryDateChange}
            />
            <input
              type="password"
              className={clsx(
                'input_info_user placeholder:text-slate-500',
                edit ? 'text-black' : 'text-slate-500 select-none pointer-events-none',
                loading && 'text-slate-500 select-none pointer-events-none'
              )}
              {...register('cvv')}
              required={true}
              disabled={!edit || loading}
              placeholder="CVV"
            />
          </div>
        </label>

        <ButtonForm
          edit={edit}
          handleCancelEdit={handleCancelEdit}
          handleEditClick={handleEditClick}
          loading={loading}
        />
      </form>
    </div>
  );
}