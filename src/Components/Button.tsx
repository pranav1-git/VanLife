import { type PropsWithChildren, type ButtonHTMLAttributes } from "react";
interface ButtonProps
  extends PropsWithChildren,
    ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({ className, children }: ButtonProps) {
  return (
    <button
      className={`bg-button-orange text-white font-semibold py-3 rounded ${className}`}
    >
      {children}
    </button>
  );
}
