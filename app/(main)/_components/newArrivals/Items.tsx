import { useEffect, useState } from 'react';
import Item from './Item';
interface Itemsprops {
  selected: number;
}
const items = [
  [
    {
      src: '1.png',
      name: 'Man',
      review: 4153,
      price: 95.5,
      rating: 3.5,
    },
    {
      src: '2.png',
      name: 'Long Dress',
      review: 4153,
      price: 95.5,
      rating: 4,
    },
    {
      src: '3.png',
      name: 'Full Sweater',
      review: 4153,
      price: 95.5,
      rating: 4.3,
    },
    {
      src: '4.png',
      name: 'White Dress',
      review: 456,
      price: 95.5,
      rating: 4.3,
    },
    {
      src: '5.png',
      name: 'Colorfull dress',
      review: 6300,
      price: 94,
      rating: 3.5,
    },
    {
      src: '6.png',
      name: 'White Shirt',
      review: 45,
      price: 95.5,
      rating: 4.8,
    },
  ],
  [
    {
      src: '1.png',
      name: 'GIrl Dress',
      review: 4153,
      price: 95.5,
      rating: 4.3,
    },
    {
      src: '2.png',
      name: 'Long Dress',
      review: 4153,
      price: 95.5,
      rating: 4,
    },
    {
      src: '3.png',
      name: 'Full Sweater',
      review: 4153,
      price: 95.5,
      rating: 4.3,
    },
    {
      src: '4.png',
      name: 'White Dress',
      review: 456,
      price: 95.5,
      rating: 4.3,
    },
    {
      src: '5.png',
      name: 'Colorfull dress',
      review: 6300,
      price: 94,
      rating: 3.5,
    },
    {
      src: '6.png',
      name: 'White Shirt',
      review: 45,
      price: 95.5,
      rating: 4.8,
    },
  ],
  [
    {
      src: '1.png',
      name: 'Girl Acsecc',
      review: 4153,
      price: 95.5,
      rating: 4.3,
    },
    {
      src: '2.png',
      name: 'Long Dress',
      review: 4153,
      price: 95.5,
      rating: 4,
    },
    {
      src: '3.png',
      name: 'Full Sweater',
      review: 4153,
      price: 95.5,
      rating: 4.3,
    },
    {
      src: '4.png',
      name: 'White Dress',
      review: 456,
      price: 95.5,
      rating: 4.3,
    },
    {
      src: '5.png',
      name: 'Colorfull dress',
      review: 6300,
      price: 94,
      rating: 3.5,
    },
    {
      src: '6.png',
      name: 'White Shirt',
      review: 45,
      price: 95.5,
      rating: 4.8,
    },
  ],
  [
    {
      src: '1.png',
      name: 'Man acsess',
      review: 4153,
      price: 95.5,
      rating: 4.3,
    },
    {
      src: '2.png',
      name: 'Long Dress',
      review: 4153,
      price: 95.5,
      rating: 4,
    },
    {
      src: '3.png',
      name: 'Full Sweater',
      review: 4153,
      price: 95.5,
      rating: 4.3,
    },
    {
      src: '4.png',
      name: 'White Dress',
      review: 456,
      price: 95.5,
      rating: 4.3,
    },
    {
      src: '5.png',
      name: 'Colorfull dress',
      review: 6300,
      price: 94,
      rating: 3.5,
    },
    {
      src: '6.png',
      name: 'White Shirt',
      review: 45,
      price: 95.5,
      rating: 4.8,
    },
  ],
  [
    {
      src: '1.png',
      name: 'Disc Dress',
      review: 4153,
      price: 95.5,
      rating: 4.3,
    },
    {
      src: '2.png',
      name: 'Long Dress',
      review: 4153,
      price: 95.5,
      rating: 4,
    },
    {
      src: '3.png',
      name: 'Full Sweater',
      review: 4153,
      price: 95.5,
      rating: 4.3,
    },
    {
      src: '4.png',
      name: 'White Dress',
      review: 456,
      price: 95.5,
      rating: 4.3,
    },
    {
      src: '5.png',
      name: 'Colorfull dress',
      review: 6300,
      price: 94,
      rating: 3.5,
    },
    {
      src: '6.png',
      name: 'White Shirt',
      review: 45,
      price: 95.5,
      rating: 4.8,
    },
  ],
];


export default function Items({ selected }: Itemsprops) {
  const [visibleItems, setVisibleItems] = useState(items[selected]);
  useEffect(() => {
    let debounceTimer: NodeJS.Timeout;
    const handleResize = () => {
     clearTimeout(debounceTimer);
      debounceTimer =setTimeout(() => {
        
        if (window.innerWidth < 723) {
          setVisibleItems(items[selected].slice(0, 2));
        } else {
          setVisibleItems(items[selected]);
        }
      }, 150);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
        clearInterval(debounceTimer);
        window.removeEventListener('resize', handleResize);
    }
  }, [selected]);

  return (
    <>
      <div className="flex flex-row flex-wrap justify-center gap-y-3 md:gap-y-6 sm:gap-x-3 lg:gap-x-0  md:justify-center lg:justify-between">
        {visibleItems.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </div>
    </>
  );
}
