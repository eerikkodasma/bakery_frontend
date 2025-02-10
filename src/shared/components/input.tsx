interface Props {
  ariaLabel: string;
  id?: string;
  className?: string;
  [x: string]: any;
}

export default function Input({
  id,
  placeholder,
  className,
  ariaLabel,
  ...rest
}: Props) {
  return (
    <input
      id={id}
      className={`rounded-md border px-3 py-2 ${className}`}
      aria-label={ariaLabel}
      {...rest}
    />
  );
}
