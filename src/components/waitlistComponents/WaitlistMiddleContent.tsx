import { Input } from "./Input";
import { useState } from "react";
import user from "../images/User.svg";
import letter from "../images/Letter.svg";
import { People } from "./People";
import superteam from "../images/superteam.svg";
import { InvalidInput } from "./InvalidInput";
import { Modal } from "./Modal";
import { supabase } from "../../lib/supabase";

export const WaitlistMiddleContent = () => {
  const [fullName, setFullname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password] = useState<string>("password123"); // Default password (Can be changed later)
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

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
      setErrorMessage("Full name and email are required.");
      return;
    }

    setIsEmpty(false);
    setIsLoading(true);
    setErrorMessage("");

    try {
      const {  error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { full_name: fullName }, // Store full name in Supabase Auth metadata
        },
      });

      if (error) {
        setErrorMessage(error.message);
      } else {
        setModalOpen(true); // ✅ Open modal on successful sign-up
        setFullname("");
        setEmail("");
      }
    } catch (error) {
      setErrorMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  return (
    <div className="text-center font-customMonserrat">
      <button className="border mt-10 text-textGray shadow-inner shadow-borderInnerGray border-borderColor px-4 py-2 rounded-full text-sm">
        AI-Powered Social Media Management
      </button>

      <div className="mt-5">
        <h1 className="font-semibold bg-gradient-to-b from-[#69B2ff] to-[#001f3f] text-transparent bg-clip-text text-2xl">
          The next-gen-AI-powered creator
          <br />
          growth platform. Get ahead. Get seen.
          <br />
          Get Influxx
        </h1>
      </div>

      <form>
        {/* Full Name Input */}
        <div className="mt-10 relative text-center">
          {isEmpty && !fullName ? (
            <InvalidInput
              src={user}
              inputValue={fullName}
              handleChange={handleFullnameChange}
              alt="user icon"
              type="text"
              placeholder="Type your Full Name!!"
            />
          ) : (
            <Input
              src={user}
              handleChange={handleFullnameChange}
              inputValue={fullName}
              alt="user icon"
              type="text"
              placeholder="Full name"
            />
          )}
        </div>

        {/* Email Input */}
        <div className="mt-5 relative text-center">
          {isEmpty && !email ? (
            <InvalidInput
              src={letter}
              handleChange={handleEmailChange}
              inputValue={email}
              alt="smtp envelope"
              type="email"
              placeholder="Type your email address!!"
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
        {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}

        {/* Submit Button */}
        <button
          onClick={handleClick}
          className="mt-4 bg-[#00B8D9] px-28 rounded-full text-white py-2"
          disabled={isLoading}
        >
          {isLoading ? "Loading ..." : "Join Waitlist"}
        </button>
      </form>

      <div className="text-center mt-2">
        <People />
      </div>

      <div className="flex flex-col items-center justify-center mt-32">
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

      {/* ✅ Modal Component */}
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};
