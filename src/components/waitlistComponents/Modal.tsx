import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import cancelButton from "../images/Close-Square.svg";
import corectButtonImage from "../images/correct.svg";
import smtp from "../images/Letter.svg";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserEmail = async () => {
      console.log("Fetching session...");
      const { data: sessionData, error: sessionError } =
        await supabase.auth.getSession();

      if (sessionError || !sessionData.session || !sessionData.session.user) {
        console.warn(
          "Session is null or not found. Trying to fetch user directly..."
        );

        // 🔄 Backup: Try fetching the user directly
        const { data: userData, error: userError } =
          await supabase.auth.getUser();

        if (userError || !userData?.user) {
          console.error("Failed to fetch user:", userError?.message);
          return;
        }

        console.log("User fetched directly:", userData.user.email);
        setEmail(userData.user.email || "No email found");
        return;
      }

      console.log("User email from session:", sessionData.session.user.email);
      setEmail(sessionData.session.user.email || "No email found");
    };

    if (isOpen) {
      fetchUserEmail();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white relative rounded-2xl shadow-lg w-[480px] px-6 py-6">
        <button onClick={onClose} className="absolute top-4 right-4">
          <img src={cancelButton} alt="cancel button" />
        </button>

        <div className="text-center flex flex-col items-center">
          <img src={corectButtonImage} alt="Saved image" />
          <h1 className="text-3xl mt-3 font-bold font-customMonserrat">
            We've added you to our <br /> waitlist
          </h1>
          <p className="text-base text-gray-600 mt-3">
            We'll let you know when Influxx is ready.
          </p>

          <div className="flex justify-between text-gray-600 bg-[#CCF1F7] p-3 mt-2 w-full rounded-full">
            <div className="flex items-center gap-2">
              <img src={smtp} alt="envelope" />
              <p>{email || "Loading..."}</p> {/* Fallback to "Loading..." */}
            </div>
            <p>#144</p>
          </div>
        </div>
      </div>
    </div>
  );
};
