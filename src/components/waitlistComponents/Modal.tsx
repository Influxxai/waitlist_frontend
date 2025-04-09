import { useEffect, useState } from 'react';
import cancelButton from '../images/Close-Square.svg';
import corectButtonImage from '../images/correct.svg';
import smtp from '../images/Letter.svg';
import supabase from '../../lib/supabase';

interface ModalProps {
  onClose: () => void;
}

type WailistDataType = {
  id: number;
  name: string;
  email: string;
  created_at: string;
};

export const Modal: React.FC<ModalProps> = ({ onClose }) => {
  const [waitlistData, setWaitlistData] = useState<WailistDataType>();

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await supabase.from('store-waitlist').select();

      if (data && data.length > 1) {
        setWaitlistData(data[data.length - 1]);        
      }
    };
    fetchData();
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white relative rounded-2xl shadow-lg max-w-[480px] md:w-full m-auto px-6 py-6">
        <button onClick={onClose} className="absolute top-4 right-4">
          <img src={cancelButton} alt="cancel button" />
        </button>

        <div className="text-center flex flex-col items-center">
          <img src={corectButtonImage} alt="Saved image" />
          <h1 className="text-3xl mt-3 font-bold font-customMonserrat">
            We've added you to our <br /> waitlist
          </h1>
          <p className="text-base text-gray-600 mt-3">We'll let you know when Influxx is ready.</p>

          <div className="flex justify-between flex-wrap text-gray-600 bg-[#CCF1F7] p-3 mt-2 w-full rounded-full">
            <div className="flex items-center gap-2">
              <img src={smtp} alt="envelope" />
              <p>{waitlistData?.email}</p>
            </div>
            <p>#{waitlistData?.id}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
