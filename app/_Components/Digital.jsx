import { Button } from "@/components/ui/button";
import Image from "next/image";

const Digital = () => {
  return (
    <div className='grid grid-cols-2 gap-10 pt-35'>
      <div>
        <Image
          src='/Assets/making1.png'
          alt='making'
          width={600}
          height={400}
          className='rounded-md'
        />
      </div>
      <div className='pt-12'>
        <h1 className='font-bold text-5xl leading-tight w-[90%]'>
          Elevate Your Digital Presence
        </h1>
        <p className='font-normal text-xl text-gray-600 py-8 w-[70%]'>
          Our cutting-edge solutions help you stand out in the digital
          landscape. From stunning visuals to seamless user experiences, we
          bring your brand to life in ways that captivate and convert.
        </p>
        <Button>View Our Portfolio</Button>
      </div>
    </div>
  );
};

export default Digital;
