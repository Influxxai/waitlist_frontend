import { useState } from "react";
import lefthand from "../images/lefthand.svg";
import righthand from "../images/righthand.svg";
import { WaitlistHeader } from "./WaitlistHeader";
import { WaitlistMiddleContent } from "./WaitlistMiddleContent";
import { Modal } from "./Modal"; // ✅ Import the modal

export const Waitlist = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="relative">
      <WaitlistHeader />

      {/* Open Modal Button */}
  

      <div className="flex justify-between items-center mt-4">
        <img src={lefthand} alt="lefthand" />
        <WaitlistMiddleContent />
        <img src={righthand} alt="righthand" />
      </div>

      {/* Modal Component */}
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};
