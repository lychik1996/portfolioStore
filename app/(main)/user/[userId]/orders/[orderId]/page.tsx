import Item from '../../_components/Item';
interface OrderItemProps {
  params: { orderId: string,userId:string };
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
        name: 'Jacket1435 35dgdgdfgdfg',
        src: '/home/modalDrawer/1.png',
        price: 35,
        color: 'red',
        count: 1,
      },
      {
        name: 'Jacket1',
        src: '/home/modalDrawer/1.png',
        price: 35,
        color: 'blue',
        count: 2,
      },
      {
        name: 'Jacket1',
        src: '/home/modalDrawer/1.png',
        price: 35,
        color: 'red',
        count: 11,
      },
      {
        name: 'Jacket1',
        src: '/home/modalDrawer/1.png',
        price: 35,
        color: 'red',
        count: 2,
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
        count: 2,
      },
      {
        name: 'Jacket1',
        src: '/home/modalDrawer/1.png',
        price: 35,
        color: 'blue',
        count: 2,
      },
      {
        name: 'Jacket1',
        src: '/home/modalDrawer/1.png',
        price: 35,
        color: 'red',
        count: 2,
      },
      {
        name: 'Jacket1',
        src: '/home/modalDrawer/1.png',
        price: 35,
        color: 'red',
        count: 2,
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
        count: 2,
      },
      {
        name: 'Jacket1',
        src: '/home/modalDrawer/1.png',
        price: 35,
        color: 'blue',
        count: 2,
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
        count: 2,
      },
      {
        name: 'Jacket1',
        src: '/home/modalDrawer/1.png',
        price: 35,
        color: 'blue',
        count: 2,
      },
    ],
  },
];
export default function OrderItem({ params }: OrderItemProps) {
    const selectedId = items.find((item) => item.header.id === params.orderId);
    return (
      <Item item={selectedId} userId={params.userId} path='orders'/>
    );
  }