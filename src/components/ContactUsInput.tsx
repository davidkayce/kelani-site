interface ContactUsInputProps {
    type?: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name: string;
    register: any;
    }

const ContactUsInput = ({ type = "text", placeholder, name, register} : ContactUsInputProps) => {
  return <input {...register(name)} className="pb-[9px] text-[18px] placeholder:text-[18px] placeholder:text-[#888A8B] focus:outline-none border-b border-b-[#D2DADF] w-full xl:text-[20px]" type={type} placeholder={placeholder} />;
};

export default ContactUsInput;