import Image from "next/image";
import CommonHeader from "../_Components/CommonHeader";

const About = () => {
  return (
    <div>
      <CommonHeader label='Our Story' />

      {/* Crafting Excellence */}
      <div className='container mx-auto mt-40 px-20'>
        <div className='grid grid-cols-2 mt-40 gap-10'>
          <div className='leading-6'>
            <h1 className='font-bold text-4xl pt-15'>
              Crafting Excellence Since 2024
            </h1>
            <p className='text-md text-gray-600 pt-5'>
              At Wallet Shop, we believe that a wallet is more than just an
              accessory - it's a statement of style and a companion for life's
              journey. Our passion for quality craftsmanship and timeless design
              drives everything we do.{" "}
            </p>
            <p className='text-md text-gray-600 pt-5'>
              Each wallet in our collection is carefully crafted using premium
              materials and traditional techniques, ensuring durability and
              elegance that stands the test of time.
            </p>
            <p className='text-md text-gray-600 pt-5'>
              {" "}
              We're committed to sustainable practices and ethical sourcing,
              making sure that every product we create not only looks good but
              also does good.
            </p>
          </div>

          <div className='pt-5 pl-10'>
            <Image
              src='/Assets/making.png'
              alt='making'
              width={800}
              height={500}
              className='rounded-md'
            />
          </div>
        </div>

        {/* Core Values */}
        <div className='pt-45'>
          <h1 className='text-4xl font-bold text-center'>Our Core Values</h1>
          <div className='grid grid-cols-3 gap-10 justify-center text-center mt-15'>
            <div className='border-2 border-gray-200 p-8 rounded-md hover:border-yellow-400 hover:transform transition duration-100 hover:scale-110'>
              <Image
                src='/Assets/Crafting.png'
                alt=''
                width={70}
                height={70}
                className='mx-auto'
              />
              <h1 className='font-semibold text-2xl'>Quality</h1>
              <p className='text-md text-gray-600 p-4 rounded-md'>
                We never compromise on quality, using only the finest materials
                and craftsmanship.
              </p>
            </div>
            <div className='border-2 border-gray-200 p-8 rounded-md  hover:border-yellow-400 hover:transform transition duration-100 hover:scale-110'>
              <Image
                src='/Assets/Innovation.png'
                alt=''
                width={63}
                height={63}
                className='mx-auto mb-2'
              />
              <h1 className='font-semibold text-2xl'>Innovation</h1>
              <p className='text-md text-gray-600 p-4 rounded-md'>
                Constantly pushing boundaries to create unique and functional
                designs.
              </p>
            </div>
            <div className='border-2 border-gray-200 p-8 rounded-md  hover:border-yellow-400 hover:transform transition duration-100 hover:scale-110'>
              <Image
                src='/Assets/Globe.png'
                alt=''
                width={70}
                height={70}
                className='mx-auto mt-1'
              />
              <h1 className='font-semibold text-2xl'>Sustainability</h1>
              <p className='text-md text-gray-600 p-4 rounded-md'>
                Committed to eco-friendly practices and responsible sourcing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
