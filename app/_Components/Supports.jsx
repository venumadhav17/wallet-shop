import { CircleDollarSignIcon, Medal, Truck, UserRound } from "lucide-react";
import React from "react";

const Supports = () => {
  return (
    <div className='relative grid grid-cols-4 gap-10 px-20 py-10'>
      <div className='flex flex-col border-2 border-gray-300/40 rounded-md p-12 space-y-4 hover:border-primary transition-all duration-300'>
        <Medal size={50} className='text-primary' />
        <h2 className='text-xl font-medium'>100% Genuine Product Guarantee</h2>
      </div>
      <div className='flex flex-col border-2 border-gray-300/40 rounded-md p-12 space-y-4 hover:border-primary transition-all duration-300'>
        <Truck size={50} className='text-primary' />
        <h2 className='text-xl font-medium'>Guarantee On Time Delivery</h2>
      </div>
      <div className='flex flex-col border-2 border-gray-300/40 rounded-md p-12 space-y-4 hover:border-primary transition-all duration-300'>
        <CircleDollarSignIcon size={50} className='text-primary' />
        <h2 className='text-xl font-medium'>
          100% Return Guarantee & Exchange
        </h2>
      </div>
      <div className='flex flex-col border-2 border-gray-300/40 rounded-md p-12 space-y-4 hover:border-primary transition-all duration-300'>
        <UserRound size={50} className='text-primary' />
        <h2 className='text-xl font-medium'>24 x 7 Customer Support</h2>
      </div>
    </div>
  );
};

export default Supports;
