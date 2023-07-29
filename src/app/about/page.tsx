import Image from 'next/image';
import HomeImage from '../../../public/HomeImage.jpeg';

const Page = () => {
  return (
    <div className="bg-[#f5f5f5] mt-1">
      <h1 className="text-center py-1">Brent Lester</h1>
      <div className="flex justify-center flex-col md:flex-row items-center ">
        <Image
          src={HomeImage}
          alt="homeimage"
          height={500}
          className="md:ml-[6%]"
        />
        <div className="mb-24 mt-2 mx-[6%]">
          <h4>
            Working in HVAC services since 1987, Brent Lester founded Lester
            Heat and Air in 2016 to provide heating and air conditioning
            services to Kiowa county and the surrounding areas.
          </h4>
          <br />
          <h4>
            With extensive knowledge on unit repair and maintenance (as well the
            HVAC industry at large), Brent also works as an HVAC Program
            Instructor at Caddo Kiowa Technology Center, sewing into future
            technicians. You can trust Brent to provide knowledge and experience
            when working on your home’s heating and air conditioning needs!
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
        </div>
      </div>
    </div>
  );
};

export default Page;
