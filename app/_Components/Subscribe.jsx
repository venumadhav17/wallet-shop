import { Button } from "@/components/ui/button";
import { Input } from "@headlessui/react";

const Subscribe = () => {
  return (
    <div className='bg-black grid grid-cols-2 gap-30 pb-10 rounded-md mt-20'>
      <div className=''>
        <h1 className='text-white font-bold text-5xl pt-13 leading-tight'>
          Subscribe for the daily Updates
        </h1>
        <p className='font-normal text-xl text-gray-500'>
          Subscribe to our newsletter and get the latest updates on our products
          and services. Don't miss out on exclusive offers and promotions. Join
          our community today!
        </p>
      </div>
      <div className='flex flex-col gap-5 pt-20'>
        <Input
          type='email'
          placeholder='Enter Your Email'
          className='text-xl text-gray-200 font-normal px-5 py-5 border-1 border-white rounded-md'
        />
        <Button className='hover:scale-100 cursor-pointer'>
          Subscribe Now
        </Button>
      </div>
    </div>
  );
};

export default Subscribe;
