import { Logo } from "./Logo";

export const WaitlistHeader = () => {
  return (
    <div className="px-10 py-2 flex justify-center">
      <div className="flex items-center justify-between bg-[#E3F8FC] px-2 py-2 rounded-full shadow-md">
        {/* Logo */}
        <div className="mr-40">
          <Logo />
        </div>


        {/* Join Waitlist Button */}
        <button className="bg-[#00BEE9] text-white font-semibold px-6 py-2 rounded-full">
          Join Waitlist
        </button>
      </div>
    </div>
  );
};
