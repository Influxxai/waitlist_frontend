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
    <>
    <input className="bg-[#E5F8FB]  placeholder:text-[#6E6E6E] border px-10 rounded-full py-2 border-[#00B8D9]"  type={type} value={inputValue} onChange={handleChange} placeholder={placeholder} />
    <img src={src} className='absolute left-20 top-3' alt={alt} />
    </>
  )
}
