import React, { useEffect, useState } from 'react';
import { BsCheckCircle } from 'react-icons/bs';

interface props {
  alert: boolean;
  setAlert: Function;
  message: string;
}

const Alert = ({ alert, setAlert, message }: props) => {
  useEffect(() => {
    if (alert) {
      setTimeout(() => {
        setAlert(false);
      }, 5000);
    }
  }, [alert, setAlert]);

  return (
    <div
      className={
        alert
          ? 'fixed bg-[#2e7d32] bottom-[35px] right-[50%] translate-x-[50%] w-[350px] py-2 rounded-md text-white text-center ease-in duration-500 z-50'
          : 'fixed bg-[#2e7d32] bottom-[-10%] right-[50%] translate-x-[50%] w-[350px] py-2 rounded-md ease-in duration-500'
      }
    >
      <div className="flex items-center w-full">
        <BsCheckCircle size={24} className='ml-3' />
        <div className="flex justify-around w-full">
          <p className="text-white">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Alert;