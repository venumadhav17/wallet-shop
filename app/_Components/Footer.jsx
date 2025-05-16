import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const Links = [
    {
      title: "Quick Links",
      items: ["Home", "About Us", "Services", "Blog"]
    },
    {
      title: "Services",
      items: ["Digital Wallets", "Payments", "Security", "Support"]
    },
    {
      title: "Resources",
      items: ["FAQ", "Help Center", "Privacy Policy", "Terms of Service"]
    },
    {
      title: "Contact Us",
      items: [
        {
          icon: (
            <Phone
              size={16}
              className='mr-2 my-1 text-yellow-500 text-center'
            />
          ),
          text: "+1 (555) 123-4567"
        },
        {
          icon: <Mail size={16} className='mr-2 my-1 text-yellow-500' />,
          text: "support@wallet.com"
        },
        {
          icon: <MapPin size={16} className='mr-1 text-yellow-500' />,
          text: "123 Business Ave, Suite 100"
        }
      ]
    }
  ];
  return (
    <div className='bg-gray-50'>
      <div className='flex border-b-2 border-gray-200 mt-30 pt-30 pb-20'>
        {/* Footer-Wallet Section */}
        <div>
          <Image
            src='/Assets/wallet-logo.webp'
            alt='wallet-logo'
            width={250}
            height={300}
          />
          <p className='pt-6 text-gray-600 text-lg w-[75%]'>
            Empowering your financial journey with secure and innovative digital
            wallet solutions.
          </p>
          <div className='flex gap-4 pt-6'>
            <Facebook size={30} className='text-primary hover:text-black' />
            <Instagram size={30} className='text-primary hover:text-black' />
            <Twitter size={30} className='text-primary hover:text-black' />
          </div>
        </div>

        {/* Quick-Links Footer Section */}
        <div className='grid grid-cols-4 gap-25 pt-2'>
          {Links.map((section, index) => (
            <div key={index}>
              <h1 className='text-2xl font-bold text-gray-800 mb-3'>
                {section.title}
              </h1>
              {section.items?.map((item, index) => (
                <div key={index} className='pt-5 text-gray-600 text-md flex'>
                  {section.title === "Contact Us" ? (
                    <>
                      {item.icon}
                      <span>{item.text}</span>
                    </>
                  ) : (
                    <Link href='#' className='hover:text-yellow-300'>
                      {item}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/*  All rights reserved. */}
      <div className='text-center py-10 text-gray-400 font-normal text-lg'>
        © {new Date().getFullYear()} Wallet. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
