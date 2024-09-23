
import Items from '../_components/Items';
interface ReturnsProps {
  params: { userId: string };
}
const items = [
  {
    header: {
      date: '2024-06-12T12:00:00',
      id: '3451245',
      price: 386,
    },
    products: [
      {
        name: 'Jacket1',
        src: '/home/modalDrawer/1.png',
        price: 34,
        color: 'red',
      },
      {
        name: 'Jacket1',
        src: '/home/modalDrawer/1.png',
        price: 34,
        color: 'blue',
      },
      {
        name: 'Jacket1',
        src: '/home/modalDrawer/1.png',
        price: 34,
        color: 'red',
      },
      {
        name: 'Jacket1',
        src: '/home/modalDrawer/1.png',
        price: 34,
        color: 'red',
      },
    ],
  },
  {
    header: {
      date: '2024-08-12T12:00:00',
      id: '3451246',
      price: 386,
    },
    products: [
      {
        name: 'Jacket1',
        src: '/home/modalDrawer/1.png',
        price: 34,
        color: 'red',
      },
      {
        name: 'Jacket1',
        src: '/home/modalDrawer/1.png',
        price: 34,
        color: 'blue',
      },
      {
        name: 'Jacket1',
        src: '/home/modalDrawer/1.png',
        price: 34,
        color: 'red',
      },
      {
        name: 'Jacket1',
        src: '/home/modalDrawer/1.png',
        price: 34,
        color: 'red',
      },
    ],
  },
  {
    header: {
      date: '2024-06-03T12:00:00',
      id: '3451247',
      price: 386.3,
    },
    products: [
      {
        name: 'Jacket1',
        src: '/home/modalDrawer/1.png',
        price: 34,
        color: 'red',
      },
      {
        name: 'Jacket1',
        src: '/home/modalDrawer/1.png',
        price: 34,
        color: 'blue',
      },
    ],
  },
  {
    header: {
      date: '2024-03-12T12:00:00',
      id: '3451241',
      price: 34,
    },
    products: [
      {
        name: 'Jacket1',
        src: '/home/modalDrawer/1.png',
        price: 34,
        color: 'red',
      },
      {
        name: 'Jacket1',
        src: '/home/modalDrawer/1.png',
        price: 34,
        color: 'blue',
      },
    ],
  },
];
export default function Returns({ params }: ReturnsProps) {
  return (
    <div className="flex flex-col p-3 gap-3">
      <h3 className="text-2xl">Returns</h3>
      <Items userId={params.userId} items={items} path='returns'/>
    </div>
  );
}
