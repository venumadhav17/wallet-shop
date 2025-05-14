import {
  Facebook,
  Instagram,
  Phone,
  PhoneCall,
  PhoneCallIcon,
  PhoneIcon,
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
        "+1 (555) 123-4567",
        "support@wallet.com",
        "123 Business Ave, Suite 100"
      ]
    }
  ];
  return (
    <div>
      <div className='flex border-1 border-gray-200 pt-50 pb-30'>
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
        <div className='grid grid-cols-4 gap-25 pr-10'>
          {Links.map((item, title) => (
            <div key={title}>
              <h1 className='font-bold text-2xl'>{item.title}</h1>
              {item.items.map((text, idx) =>
                item.title === "Contact Us" ? (
                  <p
                    key={idx}
                    className='block text-gray-600 pb-2 text-lg py-3'
                  >
                    {text}
                  </p>
                ) : (
                  <Link
                    href='#'
                    key={idx}
                    className='block pt-4 text-gray-600 text-lg'
                  >
                    {text}
                  </Link>
                )
              )}
            </div>
          ))}
        </div>
      </div>
      {/*  All rights reserved. */}
      <div className='text-center py-10 text-gray-400 font-normal text-lg'>
        © 2025 Wallet. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
