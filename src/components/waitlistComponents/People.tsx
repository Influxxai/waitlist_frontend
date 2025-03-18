import firstGuy from "../images/secondguy.svg";
import firstGirl from "../images/firstgirl.svg";
import secondGirl from "../images/secondgirl.svg";
import secondGuy from "../images/secondguy.svg";
import { EachPerson } from "./EachPerson";
export const People = () => {
  return (
    <div className="flex items-center gap-2 ml-[3rem] mt-2 text-center">
      <div className="flex items-center">
        <EachPerson src={firstGuy} />
        <EachPerson src={firstGirl} />
        <EachPerson src={secondGirl} />
        <EachPerson src={secondGuy} />
      </div>
      <div className="w-2 h-2 rounded-full text-center bg-[#48FF4E] "></div>
      <p className="text-[#6E6E6E] text-sm">200+ people joined already!</p>
    </div>
  );
};
