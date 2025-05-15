import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import Link from "next/link";

const AboutUs = () => {
  return (
    <div className=''>
      <div className='grid grid-cols-2 my-20 pt-20 gap-20 bg-[#ddf057]'>
        <div>
          <h1 className='text-5xl font-bold leading-tight'>About Us</h1>
          <p className='text-xl text-gray-600 font-normal py-8 w-[90%]'>
            Transform your vision into reality with our innovative design
            solutions. We craft memorable experiences that resonate with your
            audience and drive results.
          </p>
          <Button>Explore Collections</Button>
        </div>

        <div className='grid grid-cols-2 gap-8 pr-4'>
          <div className='text-white bg-black rounded-md px-6 pt-6 pb-2'>
            <h1 className='font-bold text-3xl'>15+</h1>
            <p className='font-normal text-xl pt-2'>Years of experience</p>
          </div>

          <div className='text-white bg-black rounded-md px-6 pt-6 pb-2'>
            <h1 className='font-bold text-3xl'>15+</h1>
            <p className='font-normal text-xl pt-2'>Years of experience</p>
          </div>

          <div className='text-white bg-black rounded-md px-6 pt-6 pb-2 col-span-2'>
            <div className='grid grid-cols-2'>
              <div>
                <h1 className='font-bold text-3xl'>1+</h1>
                <p className='font-normal text-xl pt-2'>Happy Customers</p>
              </div>
              <div className='space-y-5'>
                <div className='text-end'>
                  <Link href='#' className='font-normal text-xl'>
                    View
                  </Link>
                </div>
                <Progress value={85} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Images Section */}
      <div className='grid grid-cols-4 gap-10 pb-20'>
        <div>
          <Image
            src='/Assets/shopping1.png'
            alt='shopping1'
            width={500}
            height={250}
            className='w-full h-auto object-cover rounded-xl'
          />
        </div>
        <div className='col-span-2'>
          <Image
            src='/Assets/shopping2.png'
            alt='shopping2'
            width={500}
            height={250}
            className='w-full h-auto object-cover rounded-xl'
          />
        </div>
        <div>
          <Image
            src='/Assets/shopping3.png'
            alt='shopping3'
            width={500}
            height={250}
            className='w-full h-auto object-cover rounded-xl'
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
