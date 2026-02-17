import type { InputHTMLAttributes } from "react";

interface InputProp extends InputHTMLAttributes<InputProp> {}

export default function Input({ type, placeholder }: InputProp) {
  return (
    <>
      <input
        className="bg-white border border-app-border py-2 sm:px-4 px-3 rounded focus:outline-none text-sm"
        type={type}
        name={type}
        placeholder={placeholder}
        required
      />
    </>
  );
}
