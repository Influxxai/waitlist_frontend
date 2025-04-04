import { WaitlistHeader } from './WaitlistHeader';
import { WaitlistMiddleContent } from './WaitlistMiddleContent';
// import superteam from "../images/superteam.svg";
import blurredIcon1 from '../images/blur_facebook.svg';
import blurredIcon2 from '../images/blur_instagram.svg';
import youtube from '../images/blur_youtube.svg';
import tiktok from '../images/blur_tictok.svg';
import x from '../images/blur_x.svg';
import linkedIn from '../images/blur_linkedin.svg';
import telegram from '../images/blur_telegram.svg';
import influxxThreeLogo from '../images/3dlogo.svg';
import snapchat from '../images/blur_snapchat.svg';
// import envelopeIcon from "../images/Letter.svg"; // Email icon
import background from '../images/background.svg';
import { useRef } from 'react';

export const Waitlist = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleScrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return (
    <div className="relative min-h-screen flex flex-col bg-white">
      {/* Header */}
      <WaitlistHeader handleScrollToForm={handleScrollToForm} />

      {/* Top Section - "200+ people joined already!" */}

      {/* Main Content Wrapper */}
      <div className="relative flex flex-col items-center mt-10">
        {/* Blurred Icons (Left Side) */}
        <div className="hidden md:block">
          <img src={blurredIcon1} alt="Facebook" className="absolute top-20 left-10 w-16 sm:w-20" />
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
          <img src={x} alt="X (Twitter)" className="absolute top-20 right-10 w-16 sm:w-20 " />
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
        </div>

        {/* Main Content */}
        <WaitlistMiddleContent formRef={formRef} />
      </div>

      {/* Modal Component */}
      {/* <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} /> */}

      {/* Footer */}

      <footer className="mt-[5rem] pt-8 max-w-[1100px] xl:w-full w-[95%] m-auto text-gray-700 border-t border-dashed border-[#EEEEEE]">
        <div className="">
          <div className="flex justify-between items-start">
            {/* Left Side - Branding & Contact */}
            <div className="flex flex-col items-center justify-center gap-[20px]">
              <img src={influxxThreeLogo} alt="Influxx Logo" className="w-36 h-8 mr-2" />
              <div className="flex items-center gap-[12px] text-sm">
                <span>📩</span>
                <a
                  href="mailto:influxxai@gmail.com"
                  className="text-[#8C8C8C] hover:text-[#6E6E6E]"
                >
                  influxxai@gmail.com
                </a>{' '}
              </div>
            </div>

            <div className="flex flex-col items-center gap-3 lg:text-base text-sm">
              <a
                href="https://x.com/influxxai"
                target="_blank"
                className="hover:text-[#8C8C8C] text-[#6E6E6E]"
              >
                X
              </a>
              <a
                href="https://www.instagram.com/influxxai/"
                target="_blank"
                className="hover:text-[#8C8C8C] text-[#6E6E6E"
              >
                INSTAGRAM
              </a>
              <a
                href="https://www.linkedin.com/company/influxxai/"
                target="_blank"
                className="hover:text-[#8C8C8C] text-[#6E6E6E"
              >
                LINKEDIN
              </a>
            </div>
          </div>
        </div>

        {/* Optional Overlay */}
        <div className="relative flex justify-center">
          {/* Background Image */}
          <img
            src={background}
            alt="bg-footer"
            className="absolute inset-0 w-full  object-cover z-0"
          />

          {/* Centered Content */}
          <div className="z-10">
            <p className="text-center text-[#6E6E6E] lg:mt-[50%] md:mt-[35%] mt-[15%]">
              &copy; 2025 Influxx Labs. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
