import Image from "next/image";

const CommonHeader = ({ label }) => {
  return (
    <div className='bg-black'>
      <Image
        src='/Assets/aboutbackground.jpg'
        alt=''
        width={500}
        height={100}
        // fill
        className='h-[450px] w-full opacity-25 object-cover'
      />
      <h1 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-14 leading-tight text-white font-bold text-6xl'>
        {label}
      </h1>
    </div>
  );
};

export default CommonHeader;
