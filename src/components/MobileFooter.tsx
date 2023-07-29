import { AiOutlineMail } from 'react-icons/ai';
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import { MdOutlineLocationOn } from 'react-icons/md';
import { FaPhone } from 'react-icons/fa';

const MobileFooter = () => {
  return (
    <div
      id="footer"
      className="fixed bottom-0 w-full h-20 bg-[#3c3c3c] flex justify-between px-4 pt-3 md:hidden"
    >
      <MdOutlineLocationOn size={50} className="bg white text-white" />
      <FaPhone size={35} className="text-white mr-2 mt-[6px]" />
      <AiOutlineMail size={45} className="text-white mr-2" />
      <a
        href="https://www.facebook.com/LesterHVAC/"
        target="_blank"
        className="mt-1"
      >
        <BsFacebook size={40} className="text-[#4267B2]" />
      </a>
      <BsInstagram size={40} className="text-[#DD2A7B] ml-2 mt-1" />
    </div>
  );
};

export default MobileFooter;
