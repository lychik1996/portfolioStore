import axios from 'axios';
import useSWR from 'swr';
import { useSession } from 'next-auth/react';
import { toast } from 'sonner';

interface User {
  id: string;
  email: string;
  name: string;
  lastName: string | null;
  telephone: string | null;
  image: string | null;
  password: boolean;
  country: String | null;
  city: String | null;
  street: String | null;
  houseNumber: String | null;
  apartment: String | null;
  cardNumber :string | null;
  expiryDate  : string | null;
  cvv     : string | null;
}

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export default function useUser() {
  const { data: session } = useSession();

  const { data: user, error } = useSWR(
    session?.user?.email
      ? `/api/user/getUser?email=${encodeURIComponent(session.user.email)}`
      : null,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  if (error) {
    toast.error('Failed to get User');
  }

  return user;
}
