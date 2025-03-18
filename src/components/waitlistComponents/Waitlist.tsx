import { useState } from "react";
import { WaitlistHeader } from "./WaitlistHeader";
import { WaitlistMiddleContent } from "./WaitlistMiddleContent";
import superteam from "../images/superteam.svg";
import { Modal } from "./Modal";
import blurredIcon1 from "../images/blur_facebook.svg";
import blurredIcon2 from "../images/blur_instagram.svg";
import youtube from "../images/blur_youtube.svg";
import tiktok from "../images/blur_tictok.svg";
import x from "../images/blur_x.svg";
import linkedIn from "../images/blur_linkedin.svg";
import telegram from "../images/blur_telegram.svg";
import influxxThreeLogo from "../images/3dlogo.svg";
import snapchat from "../images/blur_snapchat.svg";
import envelopeIcon from "../images/Letter.svg"; // Email icon
import background from "../images/background.svg";

export const Waitlist = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen flex flex-col bg-white">
      {/* Header */}
      <WaitlistHeader />

      {/* Top Section - "200+ people joined already!" */}

      {/* Main Content Wrapper */}
      <div className="relative flex flex-col items-center mt-10">
        {/* Blurred Icons (Left Side) */}
        <img
          src={blurredIcon1}
          alt="Facebook"
          className="absolute top-20 left-10 w-16 sm:w-20 "
        />
        <img
          src={blurredIcon2}
          alt="Instagram"
          className="absolute top-[12rem] left-4 w-16 sm:w-20"
        />
        <img
          src={youtube}
          alt="YouTube"
          className="absolute top-[16rem] left-[8rem] w-16 sm:w-20 "
        />
        <img
          src={tiktok}
          alt="TikTok"
          className="absolute top-[22rem] left-[5rem] w-16 sm:w-20 "
        />

        {/* Blurred Icons (Right Side) */}
        <img
          src={x}
          alt="X (Twitter)"
          className="absolute top-20 right-10 w-16 sm:w-20 "
        />
        <img
          src={linkedIn}
          alt="LinkedIn"
          className="absolute top-[12rem] right-4 w-16 sm:w-20 "
        />
        <img
          src={telegram}
          alt="Telegram"
          className="absolute top-[16rem] right-[8rem] w-16 sm:w-20 "
        />
        <img
          src={snapchat}
          alt="Snapchat"
          className="absolute top-[22rem] right-[5rem] w-16 sm:w-20 "
        />

        {/* Main Content */}
        <WaitlistMiddleContent />
      </div>

      {/* Modal Component */}
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />

      {/* Footer */}
      
      <footer className="w-full px-10 py-6 mt-10 text-gray-700">
      <hr className="mt-32" />
        <div className="mt-10">
          <div className="flex justify-between items-start">
            {/* Left Side - Branding & Contact */}
            <div className="flex flex-col">
              <div className="flex items-center">
                <img
                  src={influxxThreeLogo}
                  alt="Influxx Logo"
                  className="w-36 h-8 mr-2"
                />
              </div>
              <div className="flex items-center mt-2 text-sm">
                <img
                  src={envelopeIcon}
                  alt="Email Icon"
                  className="w-4 h-4 mr-2"
                />
                <span className="text-[#8C8C8C]">influxxai@gmail.com</span>{" "}
              </div>
            </div>

            <div className="flex flex-col items-end text-sm space-y-1">
              <div className="flex space-x-6">
                <a href="#" className="hover:text-white text-[#6E6E6E]">
                  ABOUT
                </a>
                <a href="#" className="hover:text-white text-[#6E6E6E]">
                  ROADMAP
                </a>
                <a href="#" className="hover:text-white text-[#6E6E6E]">
                  X
                </a>
              </div>
              <div className="flex space-x-6 mt-1">
                <a href="#" className="hover:text-white text-[#6E6E6E">
                  INSTAGRAM
                </a>
                <a href="#" className="hover:text-white text-[#6E6E6E">
                  LINKEDIN
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Optional Overlay */}
        <div className="relative flex items-center justify-center">
          {/* Background Image */}
          <img
            src={background}
            alt="bg-footer"
            className="absolute inset-0 w-full  object-cover z-0"
          />

          {/* Centered Content */}
          <div className="absolute top-32 inset-0 flex flex-col items-center justify-center z-10">
            <div className="flex items-center gap-1">
              <p className="text-center text-[#6E6E6E]">
                Built by the Superteam community
              </p>
              <img src={superteam} alt="superteam logo" />
            </div>
            <p className="text-center text-[#6E6E6E] mt-2">
              &copy; 2025 Influxx Labs. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
