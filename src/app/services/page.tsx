'use-client';
import Image from 'next/image';
import placeholder2 from '../../../public/placeholder2.png';
import placeholder3 from '../../../public/placeholder3.png';
import placeholder4 from '../../../public/placeholder4.png';
import placeholder5 from '../../../public/placeholder5.png';
import placeholder6 from '../../../public/placeholder6.png';
import placeholder8 from '../../../public/placeholder8.png';
const Page = () => {
  return (
    <div className="mt-20 w-full">
      <h1 className="mb-10 text-center ">Services</h1>
      <div className=" flex flex-row flex-wrap w-full">
        <div className="bg-[#f0f0f0] w-[25%] mx-[4%]  my-4 p-3">
          <h3>Here is a service</h3>
          <Image
            src={placeholder8}
            alt="Lester heat and air home page image"
            style={{ objectFit: 'cover' }}
            className="w-full"
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="bg-[#f0f0f0] w-[25%] mx-[4%]  my-4 p-3">
          <h3>Here is a service</h3>
          <Image
            src={placeholder4}
            alt="Lester heat and air home page image"
            style={{ objectFit: 'cover' }}
            className="w-full"
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="bg-[#f0f0f0] w-[25%] mx-[4%]  my-4 p-3">
          <h3>Here is a service</h3>
          <Image
            src={placeholder2}
            alt="Lester heat and air home page image"
            style={{ objectFit: 'cover' }}
            className="w-full"
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="bg-[#f0f0f0] w-[25%] mx-[4%]  my-4 p-3">
          <h3>Here is a service</h3>
          <Image
            src={placeholder3}
            alt="Lester heat and air home page image"
            style={{ objectFit: 'cover' }}
            className="w-full"
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="bg-[#f0f0f0] w-[25%] mx-[4%]  my-4 p-3">
          <h3>Here is a service</h3>
          <Image
            src={placeholder5}
            alt="Lester heat and air home page image"
            style={{ objectFit: 'cover' }}
            className="w-full"
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="bg-[#f0f0f0] w-[25%] mx-[4%]  my-4 p-3">
          <h3>Here is a service</h3>
          <Image
            src={placeholder6}
            alt="Lester heat and air home page image"
            style={{ objectFit: 'cover' }}
            className="w-full"
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Page;
