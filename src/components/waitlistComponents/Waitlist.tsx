import { useState } from "react";
import { WaitlistMiddleContent } from "./WaitlistMiddleContent";
import { Modal } from "./Modal";
import blurredIcon1 from "../images/blur_facebook.svg";
import blurredIcon2 from "../images/blur_instagram.svg";
import youtube from '../images/blur_youtube.svg'
import tiktok from '../images/blur_tictok.svg'
import x from '../images/blur_x.svg'
import linkedIn from '../images/blur_linkedin.svg'
import telegram from '../images/blur_telegram.svg'
import snapchat from '../images/blur_snapchat.svg'

export const Waitlist = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-white">
      {/* Header */}

      {/* Content Wrapper */}
      <div className="relative flex flex-col items-center mt-10">
        {/* Background Blurred Icons positioned near WaitlistMiddleContent */}
        <img
          src={blurredIcon1}
          alt="Blurred Icon 1"
          className="absolute top-20 -left-60 w-20"
        />
        <img
          src={blurredIcon2}
          alt="Blurred Icon 2"
          className="absolute top-[12rem] -left-[7rem] w-20"
        />
        <img
          src={youtube}
          alt="Blurred Icon 1"
          className="absolute top-[16rem] -left-[20rem] w-20"
        />
        <img
          src={tiktok}
          alt="Blurred Icon 2"
          className="absolute top-[22rem] -left-[12rem] w-20"
        />

        {/* right */}
        <img
          src={x}
          alt="Blurred Icon 1"
          className="absolute top-20 -right-60 w-20"
        />
        <img
          src={linkedIn}
          alt="Blurred Icon 2"
          className="absolute top-[12rem] -right-[7rem] w-20"
        />
        <img
          src={telegram}
          alt="Blurred Icon 1"
          className="absolute top-[16rem] -right-[20rem] w-20"
        />
        <img
          src={snapchat}
          alt="Blurred Icon 2"
          className="absolute top-[22rem] -right-[12rem] w-20"
        />

        {/* Main Content */}
        <WaitlistMiddleContent />
      </div>

      {/* Modal Component */}
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};
