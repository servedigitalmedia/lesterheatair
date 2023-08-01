'use-client';
import Image from 'next/image';
import HomeImage from '../../public/HomeImage.jpeg';
import logo from '../../public/lester heat and air logo.png';
import placeholder2 from '../../public/placeholder2.png';
import placeholder3 from '../../public/placeholder3.png';
import placeholder4 from '../../public/placeholder4.png';
import placeholder5 from '../../public/placeholder5.png';
import placeholder6 from '../../public/placeholder6.png';
import trane from '../../public/trane.png';
import placeholder9 from '../../public/placeholder9.png';
import { BsStarFill } from 'react-icons/bs';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <div id="home" className="w-full flex flex-row flex-wrap">
        <div
          id="info"
          className="w-full lg:w-[60%] px-4 md:px-36 py-8 md:my-1 bg-[#f0f0f0]"
        >
          <h1>
            Lester <span className="text-[#ff3f3f]">Heat</span> and{' '}
            <span className="text-[#2ea4fb]">Air</span>
          </h1>
          <h2 className=" mt-[8px]">Satisfying one customer at a time.</h2>
          <p className="mt-[8px]">
            Established in 2016, Lester Heat and Air provides HVAC services for
            Kiowa county and the surrounding area. From installations on new
            homes and remodels to general repair and maintenance, Lester Heat
            and Air will make sure your heating and air conditioning units are
            working at their best!
          </p>
          <div className="flex flex-row justify-evenly">
            <button className="p-4 text-white bg-[#ff3f3f] hover:bg-[#d02230] active:scale-[.99] mt-4 disabled:opacity-20 disabled:scale-100">
              Request a quote
            </button>
            <Link href="/about">
              <button className="p-4 text-white bg-[#2ea4fb] hover:bg-[#2a72c1] active:scale-[.99] mt-4 disabled:opacity-20 disabled:scale-100">
                About us
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-[40%] h-auto items-center justify-center flex md:my-1 bg-[#f0f0f0] overflow-hidden relative">
          <Image
            src={placeholder9}
            alt="Lester heat and air home page image"
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
      <div className="mt-20 w-full">
        <h1 className="mb-10 text-center ">Services</h1>
        <div className=" flex flex-row flex-wrap w-full">
          <div className="bg-[#f0f0f0] w-[90%] mx-[5%] md:w-[25%] md:mx-[4%] my-4 p-3">
            <Image
              src={placeholder6}
              alt="Lester heat and air home page image"
              style={{ objectFit: 'cover' }}
              className="w-full"
            />
            <p>We service all brands of HVAC equipment</p>
          </div>
          <div className="bg-[#f0f0f0] w-[90%] mx-[5%] md:w-[25%] md:mx-[4%]  my-4 p-3">
            <Image
              src={placeholder4}
              alt="Lester heat and air home page image"
              style={{ objectFit: 'cover' }}
              className="w-full"
            />
            <p>We specialize in residential and light commercial</p>
          </div>
          <div className="bg-[#f0f0f0] w-[90%] mx-[5%] md:w-[25%] md:mx-[4%]  my-4 p-3">
            <Image
              src={placeholder2}
              alt="Lester heat and air home page image"
              style={{ objectFit: 'cover' }}
              className="w-full"
            />
            <p>Residential services: From new construction to remodels</p>
          </div>
          <div className="bg-[#f0f0f0] w-[90%] mx-[5%] md:w-[25%] md:mx-[4%]  my-4 p-3">
            <Image
              src={trane}
              alt="Lester heat and air home page image"
              style={{ objectFit: 'cover' }}
              className="w-full mt-8 mb-9"
            />
            <p>We sell Trane and Lennox products</p>
          </div>
          <div className="bg-[#f0f0f0] w-[90%] mx-[5%] md:w-[25%] md:mx-[4%]  my-4 p-3">
            <Image
              src={placeholder5}
              alt="Lester heat and air home page image"
              style={{ objectFit: 'cover' }}
              className="w-full"
            />
            <p>We offer financing options to get you the service you need</p>
          </div>
          <div className="bg-[#f0f0f0] w-[90%] mx-[5%] md:w-[25%] md:mx-[4%]  my-4 p-3">
            <Image
              src={placeholder6}
              alt="Lester heat and air home page image"
              style={{ objectFit: 'cover' }}
              className="w-full"
            />
            <p>We accept credit cards</p>
          </div>
        </div>
      </div>
      <div className="mt-32 w-full bg-[#f0f0f0] pt-8">
        <h1 className="text-center mb-10">Reviews</h1>
        <div className="flex flex-row flex-wrap w-full pb-32">
          <div className=" bg-[#e6e6e6] w-[90%] mx-[5%] md:w-[30%] md:mx-[10%] my-4 p-3 relative min-h-[200px]">
            <h3 className="text-[#2ea4fb]">&quot;Awesome Job&quot;</h3>
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
          <div className=" bg-[#e6e6e6] w-[90%] mx-[5%] md:w-[30%] md:mx-[10%] my-4 p-3 relative min-h-[200px]">
            <h3 className="text-[#2ea4fb]">&quot;Very Friendly&quot;</h3>
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
