import { Button } from "./Button";
import { Logo } from "./Logo";

export const WaitlistHeader = () => {
  const buttonDetails = ["Twitter", "Instagram", "LinkedIn"];
  return (
    <div className="px-10">
      <div className="flex p-4 justify-between">
        <Logo />
        <div className="flex font-customMonserrat gap-2">
          {buttonDetails.map((button) => (
            <Button key={button} text={button} />
          ))}
        </div>
      </div>
    </div>
  );
};
