import { Button } from "@/components/ui/button";
import Image from "next/image";

const CreativeDesign = () => {
  return (
    <div className='grid grid-cols-2 gap-10 pt-35'>
      <div className=''>
        <h1 className='font-bold text-5xl leading-tight w-[90%]'>
          Unleash Your Brand's Potential
        </h1>
        <p className='font-normal text-xl text-gray-600 py-8 w-[70%]'>
          Transform your vision into reality with our innovative design
          solutions. We craft memorable experiences that resonate with your
          audience and drive results.
        </p>
        <Button>Discover Our Work</Button>
      </div>
      <div>
        <Image
          src='/Assets/making.png'
          alt='making'
          width={600}
          height={650}
          className='rounded-md'
        />
      </div>
    </div>
  );
};

export default CreativeDesign;

// order-1, order-2 does/doesn't matter here.
