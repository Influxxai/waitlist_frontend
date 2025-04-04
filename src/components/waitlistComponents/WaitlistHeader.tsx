import { Logo } from './Logo';

interface WaitlistHeaderProps {
  handleScrollToForm: () => void;
}

export const WaitlistHeader = ({ handleScrollToForm }: WaitlistHeaderProps) => {
  return (
    <div className="max-w-[620px] md:w-full w-[95%] m-auto mt-6 flex items-center justify-between bg-[#E3F8FC] rounded-[48px] py-2 px-2 md:pl-4">
      {/* Logo */}
      <div className="">
        <Logo />
      </div>

      {/* Join Waitlist Button */}
      <button
        onClick={handleScrollToForm}
        className="bg-[#00BEE9] text-white font-medium py-4 px-[28px] rounded-[32px]"
      >
        Join Waitlist
      </button>
    </div>
  );
};
