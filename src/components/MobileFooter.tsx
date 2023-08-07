'use-client';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import { MdOutlineLocationOn } from 'react-icons/md';
import { FaPhone } from 'react-icons/fa';
import Link from 'next/link';

const MobileFooter = () => {
  return (
    <div
      id="footer"
      className="fixed bottom-0 w-full h-12 bg-[#3c3c3c] flex justify-between px-4 pt-2 md:hidden"
    >
      <a href="https://goo.gl/maps/h4SkpMJqDJuSUcZ46" target="_blank">
        <MdOutlineLocationOn size={35} className="bg white text-[#2ea4fb]" />
      </a>
      <a href="tel:+5806392849">
        <FaPhone size={25} className="text-white mr-2 mt-[6px]" />
      </a>
      <Link href="/contact">
        <AiOutlineMail size={35} className="text-white mr-2" />
      </Link>
      <a
        href="https://www.facebook.com/LesterHVAC/"
        target="_blank"
        className="mt-1"
      >
        <BsFacebook size={30} className="text-[#2ea4fb]" />
      </a>
      <a href="https://www.instagram.com/lesterheatandair/" target="_blank">
        <BsInstagram size={30} className="text-[#ff3f3f] ml-2 mt-1" />
      </a>
    </div>
  );
};

export default MobileFooter;
