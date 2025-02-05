interface Props {
  ariaLabel: string;
  id?: string;
  placeholder?: string;
  className?: string;
}

export default function Input({
  id,
  placeholder,
  className,
  ariaLabel,
}: Props) {
  return (
    <input
      id={id}
      placeholder={placeholder}
      className={`rounded-md border px-3 py-2 ${className}`}
      aria-label={ariaLabel}
    />
  );
}
