import { Funnel, ShoppingBasket, Star } from "lucide-react";
import CommonHeader from "../_Components/CommonHeader";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const products = [
  "Leather",
  "Minimalist",
  "Travel",
  "Eco-Friendly",
  "Security"
];

const productList = [
  {
    id: 1,
    name: "Classic Leather Wallet",
    originalPrice: 54.99,
    price: 49.99,
    category: "Leather",
    image: "/assets/products/ClassicLeather.jpg",
    stars: 4,
    reviews: 128,
    offerDiscount: -10,
    description:
      "Handcrafted from premium full-grain leather, this classic wallet combines durability with timeless...",
    tags: ["Premium Leather", "6 Card Slots", "Money Clip", "Lifetime Warranty"]
  },

  {
    id: 2,
    name: "Minimalist Card Holder",
    price: 34.99,
    category: "Minimalist",
    image: "/assets/products/Minimalist2.jpg",
    stars: 4,
    reviews: 95,
    description:
      "Sleek and compact design perfect for essential cards and cash.",
    tags: ["Slim Design", "3 Card Slots", "RFID Protection"]
  },
  {
    id: 3,
    name: "Foldable Wallet",
    price: 34.99,
    category: "Travel",
    image: "/assets/products/Travel1.jpg",
    stars: 4,
    reviews: 72,
    description:
      "Compact and foldable design, ideal for travel and outdoor activities.",
    tags: ["Foldable Design", "3 Card Slots", "Lightweight"]
  },
  {
    id: 4,
    name: "Eco-Friendly Wallet",
    originalPrice: 41.99,
    price: 39.99,
    category: "Eco-Friendly",
    image: "/assets/products/Eco-Friendly.jpg",
    stars: 4,
    reviews: 87,
    offerDiscount: -5,
    description:
      "Made from sustainable materials, combining style with environmental consciousness.",
    tags: ["Recycled Materials", "Biodegradable", "4 Card Slots"]
  },
  {
    id: 5,
    name: "RFID Blocking Wallet",
    originalPrice: 65.99,
    price: 54.99,
    category: "Security",
    image: "/assets/products/Security.jpg",
    stars: 5,
    reviews: 143,
    offerDiscount: -20,
    description:
      "Protect your cards from electronic theft with our RFID blocking technology.",
    tags: ["RFID Protection", "6 Card Slots", "Slim Design", "Security Shield"]
  },
  {
    id: 6,
    name: "Custom Engraved Wallet",
    price: 59.99,
    category: "All-Products",
    image: "/assets/products/Leather1.jpg",
    stars: 4,
    reviews: 39,
    description:
      "Personalize your wallet with custom engraving for a unique touch.",
    tags: ["Custom Engraving", "Genuine Leather", "Gift Box"]
  },
  {
    id: 7,
    name: "Canvas Wallet",
    price: 24.99,
    category: "All-Products",
    image: "/assets/products/Canvas.jpg",
    stars: 4,
    reviews: 58,
    description:
      "Durable canvas material with a casual design, perfect for everyday use.",
    tags: ["Canvas Material", "5 Card Slots", "Coin Pocket"]
  },
  {
    id: 8,
    name: "Luxury Leather Wallet",
    price: 149.99,
    category: "All-Products",
    image: "/assets/products/LuxuryLeather.jpg",
    stars: 4,
    reviews: 45,
    description:
      "Exquisite craftsmanship and premium materials for the discerning individual.",
    tags: [
      "Handcrafted",
      "10 Card Slots",
      "Bill Compartment",
      "Luxury Packaging"
    ]
  },
  {
    id: 9,
    name: "Zipper Wallet",
    originalPrice: 41.99,
    price: 39.99,
    category: "All-Products",
    image: "/assets/products/Zipper.jpg",
    stars: 4,
    reviews: 65,
    offerDiscount: -5,
    description:
      "Stylish wallet with a secure zipper closure for added safety.",
    tags: ["Zipper Closure", "4 Card Slots", "Coin Pocket"]
  },
  {
    id: 10,
    name: "Smart Wallet",
    price: 79.99,
    category: "All-Products",
    image: "/assets/products/Smart.jpg",
    stars: 4,
    reviews: 89,
    description:
      "Integrates with your smartphone for tracking and security features.",
    tags: ["Bluetooth Tracking", "RFID Protection", "Rechargeable Battery"]
  },
  {
    id: 11,
    name: "Money Clip Wallet",
    price: 34.99,
    category: "All-Products",
    image: "/assets/products/Minimalist1.jpg",
    stars: 4,
    reviews: 76,
    description:
      "Slim profile with a sturdy money clip for cash and essential cards.",
    tags: ["Money Clip", "2 Card Slots", "Ultra Slim"]
  },
  {
    id: 12,
    name: "Vintage Leather Wallet",
    originalPrice: 76.99,
    price: 69.99,
    category: "Leather",
    image: "/assets/products/VintageLeather.jpg",
    stars: 4,
    reviews: 102,
    offerDiscount: -10,
    description:
      "Aged leather with a rustic finish, perfect for those who appreciate vintage style.",
    tags: ["Vintage Look", "8 Card Slots", "Bill Compartment"]
  },
  {
    id: 13,
    name: "Bifold Wallet",
    price: 45.99,
    category: "Leather",
    image: "/assets/products/Bifold.jpg",
    stars: 4,
    reviews: 112,
    description:
      "Traditional bifold design with multiple card slots and a bill compartment.",
    tags: [
      "Classic Bifold",
      "8 Card Slots",
      "Bill Compartment",
      "Genuine Leather"
    ]
  },

  {
    id: 14,
    name: "Passport Wallet",
    price: 64.99,
    category: "Travel",
    image: "/assets/products/Travel2.jpg",
    stars: 5,
    reviews: 167,
    description:
      "Secure storage for your passport, tickets, and travel documents.",
    tags: [
      "Passport Holder",
      "Ticket Pockets",
      "Document Storage",
      "RFID Protection"
    ]
  },
  {
    id: 15,
    name: "Travel Wallet",
    originalPrice: 68.99,
    price: 59.99,
    category: "Travel",
    image: "/assets/products/Travel3.jpg",
    stars: 5,
    reviews: 156,
    offerDiscount: -15,
    description:
      "Spacious design with multiple compartments for all your travel essentials.",
    tags: [
      "Passport Holder",
      "Multiple Pockets",
      "RFID Protection",
      "Travel Organizer"
    ]
  }
];

const Products = () => {
  return (
    <div className='bg-gray-50 pb-20'>
      <CommonHeader label='Our Collection' />
      <div className='flex mt-13 items-center'>
        <div className='px-6 py-2 text-md rounded-4xl mx-2 bg-yellow-500 text-white'>
          All Products
        </div>
        {products.map((item) => (
          <div
            key={item}
            className='border-1 px-6 py-2 text-md rounded-4xl mx-2 hover:text-yellow-500 hover:border-1 hover:border-yellow-500'
          >
            {item}
          </div>
        ))}
        <div className='ml-auto flex items-center gap-2 py-2'>
          <Funnel className='text-gray-600' />
          <select
            className='py-2 px-4 pr-6 rounded-4xl border border-gray-200 
              focus:border-yellow-500 focus:ring-1 focus:ring-yellow-300'
          >
            <option value='Low to High'>Price: Low to High</option>
            <option value='High to Low'>Price: High to Low</option>
            <option value='Highest Rated'>Highest Rated</option>
            <option value='NewestFirst' selected>
              Newest First
            </option>
          </select>
        </div>
      </div>

      {/* Products List */}
      <div className='grid grid-cols-4 gap-8 pt-10'>
        {productList.map((item, price) => (
          <div
            key={price}
            className=' relative w-full border-gray-300 rounded-2xl shadow-md overflow-hidden transition ease-in-out hover:shadow-[0_10px_25px_-5px_rgb(234,179,8)] hover:scale-100'
          >
            <Image
              src={item.image}
              alt='Wallet'
              width={300}
              height={200}
              className='object-cover w-full h-[250px] rounded-t-2xl'
            />
            {item.offerDiscount && (
              <div className='absolute top-3 right-3 bg-yellow-500 text-white font-bold px-3 py-1 rounded-4xl'>
                {item.offerDiscount}%
              </div>
            )}
            <div className='px-5 h-full'>
              <h1 className='text-xl font-semibold pt-6'>{item.name}</h1>
              <div className='flex pt-6'>
                <div className='flex text-yellow-500 fill-yellow-500'>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      size={18}
                      fill={index < item.stars ? "currentColor" : "none"}
                      stroke='currentColor'
                      className={index < item.stars ? "text-yellow-500" : ""}
                    />
                  ))}
                </div>
                <span className='pl-5 text-gray-500'>({item.reviews})</span>

                <h1 className='ml-auto text-xl text-yellow-400 font-bold'>
                  {item.originalPrice && (
                    <span className='ml-auto pt-2 text-sm pl-10 pr-1 line-through text-gray-400 font-normal'>
                      ${item.originalPrice}
                    </span>
                  )}
                  ${item.price}
                </h1>
              </div>

              <p className='pt-5 pb-3 text-[15px] font-normal text-gray-500 leading-tight'>
                {item.description}
              </p>
              <div className='flex flex-wrap gap-2 py-2'>
                {item.tags?.map((tagItem) => (
                  <div className='inline-block bg-gray-100 border-gray-400 rounded-4xl text-[13px] text-gray-600 px-2 py-1 shadow-sm'>
                    {tagItem}
                  </div>
                ))}
              </div>
              <Button className='w-full bg-black text-white mt-3 mb-16'>
                {" "}
                <ShoppingBasket />
                Add To Cart
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className='flex justify-center pt-13'>
        {Array.from({ length: 2 }).map((_, index) => (
          <div className='border-1 border-gray-200 rounded-full px-4 py-2 ml-2 bg-yellow-500 text-white'>
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
