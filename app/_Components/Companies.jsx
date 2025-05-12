import Image from "next/image";
import React from "react";

const Companies = () => {
  const companyes = [
    { src: "/Assets/company1.png", alt: "Company", width: 400, height: 400 },
    { src: "/Assets/company2.png", alt: "Company", width: 400, height: 400 },
    { src: "/Assets/company3.png", alt: "Company", width: 400, height: 400 },
    { src: "/Assets/company4.png", alt: "Company", width: 400, height: 400 },
    { src: "/Assets/company5.png", alt: "Company", width: 400, height: 400 }
  ];

  return (
    <div className='p-20 grid grid-cols-5 gap-10 justify-around items-center relative'>
      {companyes.map((item, src) => (
        <Image
          key={src}
          src={item.src}
          width={item.width}
          height={item.height}
        />
      ))}
    </div>
  );
};

export default Companies;
