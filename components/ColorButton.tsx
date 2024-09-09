import clsx from 'clsx';

interface ColorButtonProps {
  index: number;
  color: number | null;
  setColor: (index: number) => void;
  cl: string;
  width: string;
  height:string;
}
export default function ColorButton({
  cl,
  color,
  index,
  setColor,
  width,
  height,
}: ColorButtonProps) {
  return (
    <div
      onClick={() => setColor(index)}
      className={clsx(
        'rounded-full flex items-center justify-center cursor-pointer aspect-square',
        index === color && 'border-2 border-black',
      )}
      style={{width:width,height:height}}
    >
      <div
        className={clsx(
          'size-full rounded-full',
          index === color && 'scale-75'
        )}
        style={{ backgroundColor: cl }}
      ></div>
    </div>
  );
}
