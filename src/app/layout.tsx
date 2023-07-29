'use client';
import Image from 'next/image';
import './globals.css';
import { Inter, Roboto } from 'next/font/google';
import Link from 'next/link';
import logo from '../../public/lester heat and air logo.png';
import { usePathname } from 'next/navigation';
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai';
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import { MdOutlineLocationOn } from 'react-icons/md';
import { FaPhone } from 'react-icons/fa';
import { useState } from 'react';
import DesktopFooter from '@/components/DesktopFooter';
import MobileFooter from '@/components/MobileFooter';

const inter = Roboto({ subsets: ['latin'], weight: '500' });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const homeStyle = pathname === '/' ? { borderBottom: 'solid #2ea4fb' } : {};
  const servicesStyle =
    pathname === '/services' ? { borderBottom: 'solid #2ea4fb' } : {};
  const galleryStyle =
    pathname === '/about' ? { borderBottom: 'solid #2ea4fb' } : {};
  const contactStyle =
    pathname === '/contact' ? { borderBottom: 'solid #2ea4fb' } : {};

  return (
    <html lang="en">
      <head>
        <title>Lester Heat and Air</title>
        <meta property="og:title" content="Lester Heat and Air" />
        {/* <meta property="og:image" content="https://i.imgur.com/R6nYXVo.png" />
        <meta property="og:url" content="https://servedm.com" /> */}
        <meta property="og:type" content="website" />
        {/* <meta property="og:description" content="Serving to build your brand" /> */}
      </head>
      <body id={pathname?.slice(1)} className={inter.className + ' grain-bg'}>
        <div className="w-full h-[28px] flex justify-center items-center bg-[#3c3c3c] ">
          <Link href="/contact">
            <p className="text-white bg-red-500 rounded-xl px-2">
              Ask for a quote and financing options
            </p>
          </Link>
        </div>
        <div className="w-full h-16 md:h-[72px]">
          <div className="flex justify-between items-center w-full h-full px-2">
            <div className="w-full flex items-center">
              <div className="flex flex-row justify-normal w-[125px] md:w-[150px] lg:w-[175px] lg:ml-10">
                <Image
                  src={logo}
                  alt="Lester heat and air logo"
                  className="w-[75%]"
                />
              </div>
            </div>
            <div>
              <ul className="hidden md:flex navList">
                <Link href="/" className="mx-5">
                  <li
                    className="py-[5px] md:text-xl lg:text-xl navItems"
                    style={homeStyle}
                  >
                    Home
                  </li>
                </Link>
                <Link href="/services" className="mx-5">
                  <li
                    className="py-[5px] md:text-xl lg:text-xl navItems"
                    style={servicesStyle}
                  >
                    Services
                  </li>
                </Link>
                <Link href="/about" className="mx-5">
                  <li
                    className="py-[5px] md:text-xl lg:text-xl navItems"
                    style={galleryStyle}
                  >
                    About
                  </li>
                </Link>
                <Link href="/contact" className="mx-5">
                  <li
                    className="py-[5px] flex-nowrap md:text-xl lg:text-xl navItems"
                    style={contactStyle}
                  >
                    Contact
                  </li>
                </Link>
              </ul>
              <div
                onClick={handleNav}
                className="text-[#3c3c3c] md:hidden rounded-full p-3 cursor-pointer hover:bg-black/10 active:scale-95 ease-in duration-100"
              >
                <AiOutlineMenu size={30} />
              </div>
            </div>
          </div>
          <div
            className={
              nav
                ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 z-[50]'
                : ''
            }
          >
            <div
              className={
                nav
                  ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen  bg-[#f0f0f0] p-8 ease-in duration-500'
                  : 'fixed left-[-100%] top-0 p-8 ease-in duration-500 h-screen'
              }
            >
              <div>
                <div className="flex w-full items-center justify-between">
                  <Link href="/">
                    <Image
                      onClick={() => setNav(false)}
                      src={logo}
                      alt="/"
                      width={125}
                    />
                  </Link>
                  <div
                    onClick={handleNav}
                    className="rounded-full p-3 cursor-pointer text-white -mr-[10px]"
                  >
                    <AiOutlineClose />
                  </div>
                </div>
                <div className="border-b border-white my-4">
                  <p className="w-full md:w-[90%] py-4 text-xs">
                    Serving to build your brand
                  </p>
                </div>
              </div>
              <div className="py-4 flex flex-col">
                <ul className="uppercase navList">
                  <Link href="/">
                    <li onClick={() => setNav(false)} className="py-4 text-sm">
                      Home
                    </li>
                  </Link>
                  <Link href="/services">
                    <li onClick={() => setNav(false)} className="py-4 text-sm">
                      Services
                    </li>
                  </Link>
                  <Link href="/about">
                    <li onClick={() => setNav(false)} className="py-4 text-sm">
                      About
                    </li>
                  </Link>
                  <Link href="/contact">
                    <li onClick={() => setNav(false)} className="py-4 text-sm">
                      Contact
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
            <div
              onClick={() => setNav(false)}
              className={
                nav
                  ? 'md:hidden fixed right-0 h-screen w-[25%] sm:w-[40%] md:w-[55%]'
                  : ''
              }
            />
          </div>
        </div>
        {children}
        <DesktopFooter />
        <MobileFooter />
      </body>
    </html>
  );
}
