import clsx from 'clsx';

interface ColorButtonProps {
  index: number;
  color: number | null;
  setColor: (index: number) => void;
  cl: string;
  size: string;
}
export default function ColorButton({
  cl,
  color,
  index,
  setColor,
  size,
}: ColorButtonProps) {
  return (
    <div
      onClick={() => setColor(index)}
      className={clsx(
        ' rounded-full flex items-center justify-center cursor-pointer',
        index === color && 'border-2 border-black',
        `size-${size}`
      )}
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
