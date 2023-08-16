import React, { useEffect } from 'react';
import { BiErrorCircle } from 'react-icons/bi';

interface props {
  error: boolean;
  setError: Function;
  message: string;
}

const Error = ({ error, setError, message }: props) => {
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError('');
      }, 5000);
    }
  }, [error, setError]);

  return (
    <div
      className={
        error
          ? 'fixed bg-[#d32f2f] bottom-[35px] right-[50%] translate-x-[50%] w-[350px] py-2 rounded-md text-white text-center ease-in duration-500 z-[50]'
          : 'fixed bg-[#d32f2f] bottom-[-10%] right-[50%] translate-x-[50%] w-[350px] py-2 rounded-md ease-in duration-500'
      }
    >
      <div className="flex items-center w-full">
        <BiErrorCircle className='ml-3' size={24}/>
        <div className="flex justify-center w-full">
          <p className="text-white">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Error;