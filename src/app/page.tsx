'use-client';
import Image from 'next/image';
import HomeImage from '../../public/HomeImage.jpeg';
import logo from '../../public/lester heat and air logo.png';
import placeholder2 from '../../public/placeholder2.png';
import placeholder3 from '../../public/placeholder3.png';
import placeholder4 from '../../public/placeholder4.png';
import placeholder5 from '../../public/placeholder5.png';
import placeholder6 from '../../public/placeholder6.png';
import placeholder7 from '../../public/placeholder7.png';
import placeholder8 from '../../public/placeholder8.png';
import placeholder9 from '../../public/placeholder9.png';
import { BsStarFill } from 'react-icons/bs';

export default function Home() {
  return (
    <div>
      <div id="home" className="w-full flex flex-row flex-wrap">
        <div
          id="info"
          className="w-full md:w-3/6 px-4 md:px-36 py-8 md:my-1 bg-[#f5f5f5]"
        >
          <h1>
            Lester <span className="text-[#ff3f3f]">Heat</span> and{' '}
            <span className="text-[#2ea4fb]">Air</span>
          </h1>
          <h2 className=" mt-[8px]">
            Established <span className="">2016</span>
          </h2>
          <p className="mt-[8px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="flex flex-row justify-evenly">
            <button className="p-4 text-white bg-[#ff3f3f] hover:bg-[#d02230] active:scale-[.99] mt-4 disabled:opacity-20 disabled:scale-100">
              View financing options
            </button>
            <button className="p-4 text-white bg-[#2ea4fb] hover:bg-[#2a72c1] active:scale-[.99] mt-4 disabled:opacity-20 disabled:scale-100">
              About Us
            </button>
          </div>
        </div>
        <div className="w-full md:w-3/6 items-center justify-center flex md:my-1 h-[420px] bg-[#f5f5f5] overflow-hidden">
          <Image
            src={placeholder9}
            alt="Lester heat and air home page image"
            style={{ objectFit: 'cover' }}
            className="w-full"
          />
        </div>
      </div>
      <div className="mt-20 w-full">
        <h1 className="mb-10 text-center ">Services</h1>
        <div className=" flex flex-row flex-wrap w-full">
          <div className="bg-[#f0f0f0] w-[90%] mx-[5%] md:w-[25%] md:mx-[4%] my-4 p-3">
            <h3>Here is a service</h3>
            <Image
              src={placeholder8}
              alt="Lester heat and air home page image"
              style={{ objectFit: 'cover' }}
              className="w-full"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="bg-[#f0f0f0] w-[90%] mx-[5%] md:w-[25%] md:mx-[4%]  my-4 p-3">
            <h3>Here is a service</h3>
            <Image
              src={placeholder4}
              alt="Lester heat and air home page image"
              style={{ objectFit: 'cover' }}
              className="w-full"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="bg-[#f0f0f0] w-[90%] mx-[5%] md:w-[25%] md:mx-[4%]  my-4 p-3">
            <h3>Here is a service</h3>
            <Image
              src={placeholder2}
              alt="Lester heat and air home page image"
              style={{ objectFit: 'cover' }}
              className="w-full"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="bg-[#f0f0f0] w-[90%] mx-[5%] md:w-[25%] md:mx-[4%]  my-4 p-3">
            <h3>Here is a service</h3>
            <Image
              src={placeholder3}
              alt="Lester heat and air home page image"
              style={{ objectFit: 'cover' }}
              className="w-full"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="bg-[#f0f0f0] w-[90%] mx-[5%] md:w-[25%] md:mx-[4%]  my-4 p-3">
            <h3>Here is a service</h3>
            <Image
              src={placeholder5}
              alt="Lester heat and air home page image"
              style={{ objectFit: 'cover' }}
              className="w-full"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="bg-[#f0f0f0] w-[90%] mx-[5%] md:w-[25%] md:mx-[4%]  my-4 p-3">
            <h3>Here is a service</h3>
            <Image
              src={placeholder6}
              alt="Lester heat and air home page image"
              style={{ objectFit: 'cover' }}
              className="w-full"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-32 w-full bg-[#f0f0f0] pt-8">
        <h1 className="text-center mb-10">Reviews</h1>
        <div className="flex flex-row flex-wrap w-full pb-32">
          <div className=" bg-[#c2c2c2] w-[90%] mx-[5%] md:w-[30%] md:mx-[10%] my-4 p-3 relative min-h-[200px]">
            <h3>&quot;Awesome Job&quot;</h3>
            <p className="ml-3">
              Brent does an awesome job! He&apos;s very reliable, honest and
              friendly.
            </p>
            <div className="bottom-0 absolute left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <p className="text-center">-Robbie</p>
              <div className="flex flex-row justify-center">
                <BsStarFill className="text-yellow-500" />
                <BsStarFill className="text-yellow-500" />
                <BsStarFill className="text-yellow-500" />
                <BsStarFill className="text-yellow-500" />
                <BsStarFill className="text-yellow-500" />
              </div>
            </div>
          </div>
          <div className=" bg-[#c2c2c2] w-[90%] mx-[5%] md:w-[30%] md:mx-[10%] my-4 p-3 relative min-h-[200px]">
            <h3>&quot;Very Friendly&quot;</h3>
            <p className="ml-3">
              I think Brent Lester of Lester Heating & Air Conditioning is a
              very friendly guy that will do a great job fixing your A/C. Give
              him a call when you need work done.
            </p>
            <div className="bottom-0 absolute left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <p className="text-center">-Marilyn</p>
              <div className="flex flex-row justify-center">
                <BsStarFill className="text-yellow-500" />
                <BsStarFill className="text-yellow-500" />
                <BsStarFill className="text-yellow-500" />
                <BsStarFill className="text-yellow-500" />
                <BsStarFill className="text-yellow-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
