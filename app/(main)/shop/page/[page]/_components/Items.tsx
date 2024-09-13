

import Item from './Item';

const items = [
  {
    name: 'Rounded Red Hat',
    src: '1.png',
    price: 8,
    newPrice: null,
    colors: ['rgb(255, 215, 0)', 'rgb(0, 0, 0)'],
    count: 3,
  },
  {
    name: 'Linen-blend Shirt',
    src: '2.png',
    price: 17,
    newPrice: null,
    colors: ['rgb(141, 180, 210)', 'rgb(255, 209, 220)'],
    count: 0,
  },
  {
    name: 'Long-sleeve Coat',
    src: '3.png',
    price: 106,
    newPrice: null,
    colors: ['rgb(235, 230, 219)', 'rgb(193, 225, 193)'],
    count: 3,
  },
  {
    name: 'Boxy Denim Hat',
    src: '4.png',
    price: 25,
    newPrice: null,
    colors: ['rgb(177, 197, 212)', 'rgb(6, 62, 102)'],
    count: 3,
  },
  {
    name: 'Linen Plain Top',
    src: '5.png',
    price: 25,
    newPrice: null,
    colors: ['rgb(193, 225, 193)'],
    count: 3,
  },
  {
    name: 'Oversized T-shirt',
    src: '6.png',
    price: 11,
    newPrice: 14,
    colors: ['rgb(255, 209, 220)', 'rgb(198, 174, 199)', 'rgb(255, 255, 255)'],
    count: 3,
  },
  {
    name: 'Polarised Sunglasses',
    src: '7.png',
    price: 18,
    newPrice: 21,
    colors: ['rgb(0, 0, 0)', 'rgb(131, 105, 83)'],
    count: 3,
  },
  {
    name: 'Rockstar Jacket',
    src: '8.png',
    price: 22,
    newPrice: null,
    colors: ['rgb(198, 174, 199)', 'rgb(190, 220, 227)'],
    count: 3,
  },
  {
    name: 'Dotted Black Dress',
    src: '8.png',
    price: 20,
    newPrice: null,
    colors: ['rgb(6, 62, 102)', 'rgb(0, 0, 0)', 'rgb(177, 197, 212)'],
    count: 3,
  },
  {
    name: '2 Page',
    src: '1.png',
    price: 8,
    newPrice: null,
    colors: ['rgb(255, 215, 0)', 'rgb(0, 0, 0)'],
    count: 3,
  },
  {
    name: 'Linen-blend Shirt',
    src: '2.png',
    price: 17,
    newPrice: null,
    colors: ['rgb(141, 180, 210)', 'rgb(255, 209, 220)'],
    count: 0,
  },
  {
    name: 'Long-sleeve Coat',
    src: '3.png',
    price: 106,
    newPrice: null,
    colors: ['rgb(235, 230, 219)', 'rgb(193, 225, 193)'],
    count: 3,
  },
  {
    name: 'Boxy Denim Hat',
    src: '4.png',
    price: 25,
    newPrice: null,
    colors: ['rgb(177, 197, 212)', 'rgb(6, 62, 102)'],
    count: 3,
  },
  {
    name: 'Linen Plain Top',
    src: '5.png',
    price: 25,
    newPrice: null,
    colors: ['rgb(193, 225, 193)'],
    count: 3,
  },
  {
    name: 'Oversized T-shirt',
    src: '6.png',
    price: 11,
    newPrice: 14,
    colors: ['rgb(255, 209, 220)', 'rgb(198, 174, 199)', 'rgb(255, 255, 255)'],
    count: 3,
  },
  {
    name: 'Polarised Sunglasses',
    src: '7.png',
    price: 18,
    newPrice: 21,
    colors: ['rgb(0, 0, 0)', 'rgb(131, 105, 83)'],
    count: 3,
  },
  {
    name: 'Rockstar Jacket',
    src: '8.png',
    price: 22,
    newPrice: null,
    colors: ['rgb(198, 174, 199)', 'rgb(190, 220, 227)'],
    count: 3,
  },
  {
    name: 'Dotted Black Dress',
    src: '9.png',
    price: 20,
    newPrice: null,
    colors: ['rgb(6, 62, 102)', 'rgb(0, 0, 0)', 'rgb(177, 197, 212)'],
    count: 3,
  },
];
export default function Items({ page }: { page: number }) {
    const MAXITEM_PAGE = 9;
    const startIndex = (page - 1) * MAXITEM_PAGE;
    const endIndex = startIndex + MAXITEM_PAGE;
    const currentItems = items.slice(startIndex, endIndex);
  return (
    <div className="flex flex-row justify-center flex-wrap ">
      {currentItems.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </div>
  );
}
