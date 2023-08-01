import Image from 'next/image';
import HomeImage from '../../../public/HomeImage.jpeg';
import truck from '../../../public/truck.png';

const Page = () => {
  return (
    <div>
      <h1 className='text-center bg-[#f5f5f5] mt-1'>
        Lester <span className="text-[#ff3f3f]">Heat</span> and{' '}
        <span className="text-[#2ea4fb]">Air</span>
      </h1>
      <div className="bg-[#f5f5f5] mt-1 pb-2">
        <div className="flex justify-center flex-col md:flex-row items-center ">
          <div className="mx-[6%]">
            <h3>
              At Lester Heat and Air, we pride ourselves on customer satisfaction through providing knowledge and over 35 years of experience to each HVAC job we work on. 
            </h3>
            <br/>
            <br className='hidden lg:block'/>
            <h3>
              Along with being family owned and operated, we are also proud of being a local business in the Kiowa county community. Servicing all brands of HVAC equipment, whether residential or light commercial projects, Lester Heat and Air will get the job done. 
            </h3>
            <br/>
          </div>
          <Image
            src={truck}
            alt="homeimage"
            className="md:ml-[6%] max-w-[35%] m-5 hidden lg:block"
            />
        </div>
        <h3 className='mx-[6%] mb-2'>
          We also sell Trane and Lennox products for new installations. Ask us for a quote and inquire about our financing options to get your heat and air conditioning units operating quickly!
        </h3>
        <Image
            src={truck}
            alt="homeimage"
            className="mx-[5%] block w-[90%] lg:hidden"
            />
      </div>
    
      <h1 className="text-center bg-[#f5f5f5] mt-20">Brent Lester</h1>
      <div className="bg-[#f5f5f5] mt-1 mb-20">
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
              HVAC industry at large), Brent also works as an Industrial
              Coordinator/Trainer for the Business Industries Service Department
              at Caddo Kiowa Technology Center. You can trust Brent to provide
              knowledge and experience when working on your home’s heating and air
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
