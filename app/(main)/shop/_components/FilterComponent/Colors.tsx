import ColorButton from '@/components/ColorButton';
import { useState } from 'react';
import HeaderFilterComponent from './HeaderFilterComponent';
const colors = [
  'rgb(255, 108, 108)',
  'rgb(255, 118, 41)',
  'rgb(255, 240, 108)',
  'rgb(155, 255, 108)',
  'rgb(108, 255, 158)',
  'rgb(108, 255, 220)',
  'rgb(108, 185, 255)',
  'rgb(108, 246, 255)',
  'rgb(108, 167, 255)',
  'rgb(108, 123, 255)',
  'rgb(138, 108, 255)',
  'rgb(182, 108, 255)',
  'rgb(252, 108, 255)',
  'rgb(255, 108, 108)',
];
export default function Colors() {
  const [color, setColor] = useState<number | null>(null);
  return (
    <div className="gap-3 flex flex-col">
      <HeaderFilterComponent setDefault={setColor} name="Colors" />
      <div className="flex flex-row flex-wrap gap-2 max-w-72">
        {colors.map((cl, i) => (
          <ColorButton
            key={i}
            cl={cl}
            color={color}
            index={i}
            setColor={setColor}
            width="32px"
            height='32px'
          />
        ))}
      </div>
    </div>
  );
}
