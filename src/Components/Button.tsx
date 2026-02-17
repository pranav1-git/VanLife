import { type PropsWithChildren, type ButtonHTMLAttributes } from "react";
interface ButtonProps
  extends PropsWithChildren, ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({ className, children, ...props }: ButtonProps) {
  return (
    <button
      className={`bg-button-orange text-white font-semibold py-3 disabled:opacity-50 disabled:cursor-not-allowed rounded cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
