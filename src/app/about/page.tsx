'use-client';
import Image from 'next/image';
import Link from 'next/link';
import brentImage from '../../../public/BrentImage.png';
import chrisImage from '../../../public/chrisImage.png';
import lesterTruck from '../../../public/lesterTruck.png';

const Page = () => {
  return (
    <div>
      <h1 className="text-center bg-[#f5f5f5] mt-1">About Us</h1>
      <div className="bg-[#f5f5f5] mt-1 pb-2">
        <div className="flex justify-center flex-col md:flex-row items-center ">
          <div className="mx-[6%] pt-1">
            <h3>
              At Lester Heat and Air, we pride ourselves on customer
              satisfaction through providing knowledge and over 35 years of
              experience to each HVAC job we work on.
            </h3>
            <br />
            <br className="hidden lg:block" />
            <h3>
              Along with being family owned and operated, we are also proud of
              being a local business in the Kiowa county community. Servicing
              all brands of HVAC equipment, whether residential or light
              commercial projects, Lester Heat and Air will get the job done.
            </h3>
            <br />
          </div>
          <Image
            src={lesterTruck}
            alt="Image for the Lester Heat and Air company truck with company logo"
            className="md:ml-[6%] md:mr-[4%] max-w-[35%] m-5 hidden lg:block"
          />
        </div>
        <h3 className="mx-[6%] mb-2">
          We also sell Trane and Lennox products for new installations. Ask us
          for a quote and inquire about our financing options to get your heat
          and air conditioning units operating quickly!
        </h3>
        <Image
          src={lesterTruck}
          alt="Image for the Lester Heat and Air company truck with company logo"
          className="mx-[5%] block w-[90%] lg:hidden"
        />
      </div>

      <h1 className="text-center bg-[#f5f5f5] mt-20">Hours of Operation</h1>
      <div className="bg-[#f5f5f5] mt-1 pb-2">
        <div className="flex justify-center flex-col md:flex-row items-center ">
          <div className="mx-[6%] pt-3">
            <h3>Monday - Friday: 8:00am to 5:00pm</h3>
            <h3>Saturday: *By appointment only*</h3>
          </div>
        </div>
      </div>

      <h1 className="text-center bg-[#f5f5f5] mt-20 pt-1">Brent Lester</h1>
      <h2 className="text-center bg-[#f5f5f5] pb-1">Owner</h2>
      <div className="bg-[#f5f5f5] mt-1 mb-20">
        <div className="flex justify-center flex-col lg:flex-row items-center ">
          <Image
            src={brentImage}
            alt="Picture of owner of Lester Heat and Air, Brent Lester"
            height={500}
            className="mt-2 lg:ml-[6%]"
          />
          <div className="mb-8 lg:mb-24 mt-2 mx-[6%]">
            <h4>
              Working in HVAC services since 1987, Brent Lester founded Lester
              Heat and Air in 2016 to provide heating and air conditioning
              services to Kiowa county and the surrounding areas.
            </h4>
            <br />
            <h4>
              With extensive knowledge of unit repair and maintenance (as well
              as the HVAC industry at large), Brent also works as an Industrial
              Coordinator/Trainer for the Business Industries Service Department
              at Caddo Kiowa Technology Center (as well as formerly being their
              HVAC Instructor). You can trust Brent to provide knowledge and
              experience when working on your home’s heating and air
              conditioning needs!
            </h4>
            <br />
            <h2>Education & Credentials:</h2>
            <h4 className="font-semibold">
              Bachelor of Science in Business Management
            </h4>
            <h4>University of Phoenix, 2002</h4>
            <br />
            <h4 className="font-semibold">
              Associate Degree in Applied Science HVACR
            </h4>
            <h4>Oklahoma State University Tech. Okmulgee, 1987</h4>
            <br />
            <h4>
              Standard Teaching Certificate for TRADE/INDUSTRIAL EDUCATION
              Oklahoma State Dept. of Ed.
            </h4>
            <br />
            <h4>Oklahoma Mechanical Contractors License</h4>
          </div>
        </div>
      </div>

      <h1 className="text-center bg-[#f5f5f5] mt-20 pt-1">Chris Burnett</h1>
      <h2 className="text-center bg-[#f5f5f5] pb-1">Operations Manager</h2>
      <div className="bg-[#f5f5f5] mt-1">
        <div className="flex justify-center flex-col lg:flex-row items-center ">
          <Image
            src={chrisImage}
            alt="Picture of Operations Manager, Chriss Burnett"
            height={500}
            className="mt-2 lg:ml-[6%]"
          />
          <div className="mb-8 lg:mb-24 mt-2 mx-[6%]">
            <h4>
              With over 10 years of HVAC experience, Chris Burnett joined Lester
              Heat and Air in 2022 as its Operations Manager.
            </h4>
            <br />
            <h4>
              Chris has spent many years in construction and different
              management positions. Along with his personal proficiency he
              brings to each job, Chris leads his team to make sure each project
              is completed with excellence. Chris will make sure your heater and
              air conditioner is running efficiently!
            </h4>
            <br />
            <h2>Credentials:</h2>
            <h4 className="font-semibold">HAZMAT Certified</h4>
            <h4 className="font-semibold">HVAC Journeyman Certified</h4>
            <h4 className="font-semibold">EPA 608 Certified</h4>
            <h4 className="font-semibold">MSHA Certified</h4>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-evenly mb-20 mt-4">
        <Link href="/contact">
          <button className="p-4 text-white bg-[#ff3f3f] hover:bg-[#d02230] active:scale-[.99] mt-4 disabled:opacity-20 disabled:scale-100">
            Request a quote
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Page;
