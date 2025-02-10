interface Props {
  menu: React.ReactNode;
  className?: string;
}

export default function MegaMenuModal({ className, menu }: Props) {
  return (
    <div
      className={`border-background-950/10 absolute top-11 left-0 z-10 w-full border-2 bg-white p-4 ${className || ""}`}
    >
      {menu}
    </div>
  );
}
