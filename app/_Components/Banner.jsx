import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <>
      <div className='bg-[#DDF057] py-20 px-10 pb-50'>
        <div className='container'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-center'>
            <div className='space-y-4'>
              <h1 className='text-[7rem] font-bold leading-30'>
                What's In Your Wallet?
              </h1>
              <p className='text-lg py-6 w-[70%]'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <Button>Explore Collections</Button>
            </div>

            <div className='pl-50'>
              <div className='px-30'>
                <Image
                  src='/Assets/banner-pattern.webp'
                  alt='Banner'
                  width={100}
                  height={100}
                  className='relative top-40 right-30'
                />

                <Image
                  src='/Assets/wallet.webp'
                  alt='Banner'
                  width={350}
                  height={350}
                  className='rounded-lg shadow-2xl'
                />
              </div>

              <div className='w-90 bg-white pl-6 pr-4 rounded-lg shadow-lg absolute bottom-8 right-95'>
                <div className='flex items-center'>
                  <div className='pr-4 pt-4'>
                    <Image
                      src='/Assets/profile.png'
                      alt='Logo'
                      width={50}
                      height={50}
                      className='rounded-full'
                    />
                  </div>
                  <div className='pt-4'>
                    <div className='flex items-center'>
                      <h1 className='text-md font-semibold'>Mary Handy</h1>
                      <Image
                        src='/Assets/image.png'
                        width={30}
                        height={30}
                        className='pb-0.5'
                      />
                    </div>
                    <p className='text-md text-gray-500'>
                      TUE, 24 JANUARY 2021
                    </p>
                  </div>
                </div>
                <div className=' font-normal py-4 text-gray-800'>
                  In just a few short years, I built the brand to millions of
                  social media followers and website visitors.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Image
          src='/Assets/wave.png'
          alt='waves'
          width={1000}
          height={1000}
          className='absolute w-full -bottom-100'
        />
      </div>
    </>
  );
};

export default Banner;
