
import Items from '../_components/Items';
interface OrdersProps {
  params: { userId: string };
}
const items = [
  {
    header: {
      date: '2024-06-12T12:00:00',
      id: '3551245',
      price: 386,
    },
    products: [
      {
        name: 'Jacket1',
        src: '/home/modalDrawer/1.png',
        price: 35,
        color: 'red',
      },
      {
        name: 'Jacket1',
        src: '/home/modalDrawer/1.png',
        price: 35,
        color: 'blue',
      },
      {
        name: 'Jacket1',
        src: '/home/modalDrawer/1.png',
        price: 35,
        color: 'red',
      },
      {
        name: 'Jacket1',
        src: '/home/modalDrawer/1.png',
        price: 35,
        color: 'red',
      },
    ],
  },
  {
    header: {
      date: '2024-08-12T12:00:00',
      id: '3551246',
      price: 386,
    },
    products: [
      {
        name: 'Jacket1',
        src: '/home/modalDrawer/1.png',
        price: 35,
        color: 'red',
      },
      {
        name: 'Jacket1',
        src: '/home/modalDrawer/1.png',
        price: 35,
        color: 'blue',
      },
      {
        name: 'Jacket1',
        src: '/home/modalDrawer/1.png',
        price: 35,
        color: 'red',
      },
      {
        name: 'Jacket1',
        src: '/home/modalDrawer/1.png',
        price: 35,
        color: 'red',
      },
    ],
  },
  {
    header: {
      date: '2024-06-03T12:00:00',
      id: '3551247',
      price: 386.3,
    },
    products: [
      {
        name: 'Jacket1',
        src: '/home/modalDrawer/1.png',
        price: 35,
        color: 'red',
      },
      {
        name: 'Jacket1',
        src: '/home/modalDrawer/1.png',
        price: 35,
        color: 'blue',
      },
    ],
  },
  {
    header: {
      date: '2024-03-12T12:00:00',
      id: '3551241',
      price: 35,
    },
    products: [
      {
        name: 'Jacket1',
        src: '/home/modalDrawer/1.png',
        price: 35,
        color: 'red',
      },
      {
        name: 'Jacket1',
        src: '/home/modalDrawer/1.png',
        price: 35,
        color: 'blue',
      },
    ],
  },
];
export default function Orders({ params }: OrdersProps) {
  return (
    <div className="flex flex-col p-3 gap-3">
      <h3 className="text-2xl">Orders</h3>
      <Items userId={params.userId} items={items} path='orders'/>
    </div>
  );
}