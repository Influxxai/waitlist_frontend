interface ButtonProps {
    text:string;
}
export const Button = ({text}:ButtonProps) => {
  return (
    <div>
        <button className="bg-blueButton text-center px-6 font-semibold font-sans rounded-full py-2 text-white mb-2">{text}</button>
    </div>
  )
}
