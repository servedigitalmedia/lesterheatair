import Image from 'next/image';
import HomeImage from '../../../public/HomeImage.jpeg';

const Page = () => {
  return (
    <div className="flex justify-center flex-col items-center">
      <h1 className="text-center">Brent Lester</h1>
      <Image src={HomeImage} alt="homeimage" height={500} />
      <h4 className="text-center mx-[6%] my-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </h4>
    </div>
  );
};

export default Page;
