interface InputProp {
  type: string;
  placeholder: string;
  src: string;
  alt: string;
  inputValue: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export const Input = ({type, placeholder,src, alt, inputValue, handleChange}:InputProp) => {
  

  return (
    <div className="relative">
    <input className="bg-[#E5F8FB] placeholder:text-[#6E6E6E] px-[3rem] py-[15px] rounded-[26px] border-[0.5px] border-[#CCF1F7] focus:border focus:border-[#00B8D9] w-full outline-none" type={type} value={inputValue} onChange={handleChange} placeholder={placeholder} />
    <img src={src} className='absolute left-[5%] top-[35%]' alt={alt} />
    </div>
  )
}
