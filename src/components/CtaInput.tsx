import { Dispatch, SetStateAction } from "react";

interface CtaInputProps {
  label: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

const CtaInput: React.FC<CtaInputProps> = ({ label }) => {
  return (
    <div className="flex flex-col">
      <label className="museo-sans text-[#888A8B]">{label}</label>
      <input className="bg-[#F5FAF7] border-[#C3DECE] border p-[10px] mt-[8px] rounded-[8px] focus:outline-none" />
    </div>
  );
};

export default CtaInput;
