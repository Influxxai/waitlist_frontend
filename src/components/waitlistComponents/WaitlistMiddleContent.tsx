import { Input } from './Input';
import { useState } from 'react';
import user from '../images/User.svg';
import letter from '../images/Letter.svg';
import { People } from './People';

import { InvalidInput } from './InvalidInput';
import supabase from '../../lib/supabase';
import toast, { Toaster } from 'react-hot-toast';
import { Modal } from './Modal';

export const WaitlistMiddleContent = ({
  formRef,
}: {
  formRef: React.RefObject<HTMLDivElement | null>;
}) => {
  const [fullName, setFullname] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const handleFullnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFullname(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!fullName.trim() || !email.trim()) {
      setIsEmpty(true);
      setTimeout(() => setIsEmpty(false), 2000);
      return;
    }

    setIsLoading(true);

    const { error } = await supabase.from('store-waitlist').insert([
      {
        name: fullName,
        email: email,
      },
    ]);

    if (error) {
      console.error(error);
      toast.error('There was an error saving your data');
      setIsLoading(false);
      return;
    }

    try {
      const res = await fetch('/pages/api/send-waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: fullName, email }),
      });

      const result = await res.json();
      if (result.success) {
        toast.success('Saved, email sent.');
      }
      if (!result.success) {
        toast.error('Saved, but failed to send email.');
      }
    } catch (error) {
      console.error('Email error:', error);
    }

    setModalOpen(true);
    setFullname('');
    setEmail('');
    setIsLoading(false);
  };

  return (
    <div className="text-center font-customMonserrat z-10 w-[95%]">
      <div
        ref={formRef}
        className="border mt-10 m-auto text-[#00B8D9] border-[#97EFFF] py-2 rounded-[24px] text-sm max-w-[362px] w-full"
      >
        AI-Powered Social Media Management Tool
      </div>

      <div className="mt-5 z-10">
        <h1 className="font-semibold bg-gradient-to-b from-[#69B2ff] to-[#001f3f] text-transparent bg-clip-text md:text-[40px] text-[24px]">
          The next-gen-AI-powered creator
          <br />
          growth platform. Get ahead. Get seen.
          <br />
          Get Influxx
        </h1>
      </div>

      <form className="max-w-[380px] w-full m-auto mt-10 flex flex-col gap-8">
        {/* Full Name Input */}
        <div className="flex flex-col gap-4">
          <div className="relative text-center">
            {isEmpty && !fullName ? (
              <InvalidInput
                src={user}
                inputValue={fullName}
                handleChange={handleFullnameChange}
                alt="user icon"
                type="text"
                placeholder="Full Name"
              />
            ) : (
              <Input
                src={user}
                handleChange={handleFullnameChange}
                inputValue={fullName}
                alt="user icon"
                type="text"
                placeholder="Full Name"
              />
            )}
          </div>

          {/* Email Input */}
          <div className="relative text-center">
            {isEmpty && !email ? (
              <InvalidInput
                src={letter}
                handleChange={handleEmailChange}
                inputValue={email}
                alt="smtp envelope"
                type="email"
                placeholder="Email Address"
              />
            ) : (
              <Input
                src={letter}
                handleChange={handleEmailChange}
                alt="smtp envelope"
                inputValue={email}
                type="email"
                placeholder="Email Address"
              />
            )}
          </div>

          {/* Error Message */}
          {/* {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>} */}
        </div>

        {/* Submit Button */}
        <button
          onClick={handleClick}
          className="bg-[#00B8D9] w-full border border-[#96EFFF] shadow-[inset_0px_4px_4px_0px_#FFFFFF4D] py-4 rounded-[30px] text-white text-base"
          disabled={isLoading}
        >
          {isLoading ? 'Loading ...' : 'Join Waitlist'}
        </button>
      </form>

      <div className="mt-8">
        <People />
      </div>

      {isModalOpen && <Modal onClose={() => setModalOpen(false)} />}
      <Toaster />
    </div>
  );
};
