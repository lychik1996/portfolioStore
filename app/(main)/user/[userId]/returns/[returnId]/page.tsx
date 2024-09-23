
import Item from '../../_components/Item';
interface ReturnsItemsProps {
  params: { returnId: string,userId:string };
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
        name: 'Jacket1435 34dgdgdfgdfg',
        src: '/home/modalDrawer/1.png',
        price: 34,
        color: 'red',
        count: 1,
      },
      {
        name: 'Jacket1',
        src: '/home/modalDrawer/1.png',
        price: 34,
        color: 'blue',
        count: 2,
      },
      {
        name: 'Jacket1',
        src: '/home/modalDrawer/1.png',
        price: 34,
        color: 'red',
        count: 11,
      },
      {
        name: 'Jacket1',
        src: '/home/modalDrawer/1.png',
        price: 34,
        color: 'red',
        count: 2,
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
        count: 2,
      },
      {
        name: 'Jacket1',
        src: '/home/modalDrawer/1.png',
        price: 34,
        color: 'blue',
        count: 2,
      },
      {
        name: 'Jacket1',
        src: '/home/modalDrawer/1.png',
        price: 34,
        color: 'red',
        count: 2,
      },
      {
        name: 'Jacket1',
        src: '/home/modalDrawer/1.png',
        price: 34,
        color: 'red',
        count: 2,
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
        count: 2,
      },
      {
        name: 'Jacket1',
        src: '/home/modalDrawer/1.png',
        price: 34,
        color: 'blue',
        count: 2,
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
        count: 2,
      },
      {
        name: 'Jacket1',
        src: '/home/modalDrawer/1.png',
        price: 34,
        color: 'blue',
        count: 2,
      },
    ],
  },
];
export default function ReturnItem({ params }: ReturnsItemsProps) {
  const selectedId = items.find((item) => item.header.id === params.returnId);
  return (
    <Item item={selectedId} userId={params.userId} path='returns'/>
  );
}
