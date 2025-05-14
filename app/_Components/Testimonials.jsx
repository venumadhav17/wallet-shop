import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Star } from "lucide-react";
import Image from "next/image";

const cards = [
  {
    name: "Jacob Jones",
    profession: "Photographer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 4,
    text: "Village did removed enjoyed explain nor hem saw calling talking. securing as declared or margaret."
  },
  {
    name: "Emily Clark",
    profession: "Designer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 4,
    text: "Absolutely wonderful! I am so pleased with the service. Highly recommended."
  },
  {
    name: "Michael Lee",
    profession: "Developer",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    rating: 3,
    text: "Great experience overall. Will definitely use again."
  },
  {
    name: "Sophia Turner",
    profession: "Writer",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    text: "Exceeded my expectations in every way. Thank you!"
  },
  {
    name: "David Kim",
    profession: "Artist",
    image: "https://randomuser.me/api/portraits/men/23.jpg",
    rating: 4,
    text: "Very professional and creative. Loved the results!"
  }
];
const Testimonials = () => {
  return (
    <div className='pl-20'>
      <div className='text-center pb-10'>
        <h1 className='font-bold text-5xl leading-tight'>
          {" "}
          " What Our Customers Say "
        </h1>
        <p className='text-md font-medium text-gray-500'>
          Discover what our valued clients have to say about their experiences
          with our services
        </p>
      </div>
      <Carousel className='w-[95%]'>
        <CarouselContent className='-ml-1'>
          {cards.map((item, name) => (
            <CarouselItem key={name} className='pl-1 md:basis-1/2 lg:basis-1/3'>
              <div className='p-4 h-full'>
                <Card className='h-full'>
                  <CardContent className='flex items-center justify-center h-full'>
                    <span className='text-2xl font-semibold'>
                      <div key={item.name} className='pl-5 bg-white rounded-lg'>
                        <div className='flex items-center'>
                          <div className='pr-4 pt-8'>
                            <Image
                              src={item.image}
                              alt={item.description}
                              width={80}
                              height={80}
                              className='rounded-md'
                            />
                          </div>
                          <div className='pt-6'>
                            <div className='flex items-center'>
                              <h1 className='text-md font-semibold'>
                                {item.name}
                              </h1>
                            </div>
                            <p className='text-sm text-gray-500'>
                              {item.profession}
                            </p>
                            <div className='flex gap-1 pt-3'>
                              {Array.from({ length: item.rating }).map(
                                (_, i) => (
                                  <Star
                                    key={i}
                                    size={16}
                                    className='text-yellow-500 fill-yellow-500'
                                  />
                                )
                              )}
                            </div>
                          </div>
                        </div>
                        <div className='font-normal text-[16px] py-6 text-gray-800'>
                          {item.text}
                        </div>
                      </div>
                    </span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Testimonials;
