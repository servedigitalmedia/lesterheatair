'use-client';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import { MdOutlineLocationOn } from 'react-icons/md';
import { FaPhone } from 'react-icons/fa';
import Link from 'next/link';

const DesktopFooter = () => {
  return (
    <div
      id="footer"
      className="fixed bottom-0 w-full h-12 bg-[#3c3c3c] md:flex justify-between px-5 lg:px-20 hidden"
    >
      <div className="flex flex-row">
        <a href="https://goo.gl/maps/h4SkpMJqDJuSUcZ46" target="_blank">
          <MdOutlineLocationOn size={45} className="bg white text-[#2ea4fb]" />
        </a>
        <div>
          <p className="text-white">23142 Highway 19</p>
          <p className="text-white">Gotebo, OK, 73041</p>
        </div>
      </div>
      <div className="flex flex-row">
        <FaPhone size={35} className="text-[#2ea4fb] mr-2 mt-[6px]" />
        <div>
          <p className="text-[#2ea4fb]">Phone:</p>
          <p className="text-white">(580) 639-2849</p>
        </div>
      </div>
      <div className="flex flex-row">
        <Link href="/contact">
          <AiOutlineMail size={45} className="text-[#2ea4fb] mr-2" />
        </Link>
        <div>
          <p className="text-[#2ea4fb]">Email:</p>
          <p className="text-white">
            <a href="mailto: lesterheatandair@gmail.com">
              lesterheatandair@gmail.com
            </a>
          </p>
        </div>
      </div>
      <div>
        <div className="flex flex-row mt-1">
          <a href="https://www.facebook.com/LesterHVAC/" target="_blank">
            <BsFacebook size={40} className="text-[#2ea4fb]" />
          </a>
          <BsInstagram size={40} className="text-[#ff3f3f] ml-2" />
        </div>
      </div>
    </div>
  );
};

export default DesktopFooter;
