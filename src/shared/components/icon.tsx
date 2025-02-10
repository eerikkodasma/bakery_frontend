interface Props {
  name: string;
  size?: number;
  width?: number;
  height?: number;
  className?: string;
  fill?: string;
  stroke?: string;
  [x: string]: any;
}

export default function Icon({
  name,
  size,
  width,
  height,
  fill = "fill-white",
  stroke = "stroke-current",
  className,
  ...rest
}: Props) {
  return (
    <svg
      width={size || width || 24}
      height={size || height || 24}
      viewBox="0 0 24 24"
      className={`${fill} ${stroke} ${className || ""}`}
      {...rest}
    >
      <use href={`src/assets/icons/sprite.svg#${name}`} />
    </svg>
  );
}
