import { ButtonTypes, ButtonActionTypes } from "@/shared/types/button";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  ariaLabel?: string;
  onClick: () => void;
  actionType?: ButtonActionTypes;
  type?: ButtonTypes;
  className?: string;
  disabled?: boolean;
}

export default function Button({
  children,
  ariaLabel,
  onClick,
  actionType = ButtonActionTypes.BUTTON,
  type = ButtonTypes.PRIMARY,
  className,
  disabled = false,
}: Props) {
  // const colors = {
  //   [ButtonTypes.PRIMARY]: {
  //     background: "bg-primary-500-default",
  //     hover: "hover:bg-primary-600",
  //     active: "active:outline-primary-700",
  //   },
  // };
  const styles = {
    [ButtonTypes.PRIMARY]:
      "bg-primary-500-default hover:bg-primary-600 active:outline-primary-300",
    [ButtonTypes.SECONDARY]:
      "bg-secondary-300-default hover:bg-secondary-400 active:outline-secondary-100",
    [ButtonTypes.TERITARY]:
      "bg-background-50-default border-primary-500-default hover:bg-background-100 active:outline-background-200",
    [ButtonTypes.GHOST]: "",
  };

  return (
    <button
      onClick={onClick}
      type={actionType}
      className={`rounded px-4 py-2 text-white active:outline-2 disabled:cursor-not-allowed disabled:opacity-20 ${styles[type]} ${className}`}
      aria-label={ariaLabel}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
