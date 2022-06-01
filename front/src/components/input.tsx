import { HTMLInputTypeAttribute } from "react";

interface IInputProps {
  type?: HTMLInputTypeAttribute;
  label: string;
  value: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (value: string) => void;
}

const Input = ({ type = "text", label, value, onChange }: IInputProps) => {
  return (
    <div className="mx-[10rem] my-6 flex align-middle text-3xl">
      <label className="pr-1 leading-[40px]">{label}:</label>
      <input
        className="border-2 border-emerald-400 w-full rounded-md"
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
      />
    </div>
  );
};

export default Input;
