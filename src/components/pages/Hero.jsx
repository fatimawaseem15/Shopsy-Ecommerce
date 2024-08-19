import React from 'react';
import Image1 from '/women.png';
import Image2 from '/shopping.png';
import Image3 from '/bigSale.png';
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Upto 50% off to all Mens Wear",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sapiente magni ad consectetur iste quod repellat adipisci magnam, sit voluptatem!",
  },
  {
    id: 2,
    img: Image2,
    title: "Upto 70% off to all Mens Wear",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sapiente magni ad consectetur iste quod repellat adipisci magnam, sit voluptatem!",
  },
  {
    id: 3,
    img: Image3,
    title: "Upto 40% off to all Mens Wear",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sapiente magni ad consectetur iste quod repellat adipisci magnam, sit voluptatem!",
  },
];

function Hero() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 text-white duration-200'>
      {/* background pattern */}
      <div className='h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 z-9'>
      </div>
      <div className='container pb-8 sm:pb-0'>
        {/* Hero Section */}
        <Slider {...settings}>
          {ImageList.map((item) => (
            <div key={item.id}>
              <div className='grid grid-cols-1 sm:grid-cols-2 text-black'>
                {/* text content section */}
                <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1'>
                  <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold'>{item.title}</h1>
                  <p>{item.description}</p>
                  <div>
                    <button className='bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full'>Order Now</button>
                  </div>
                </div>
                {/* image selection */}
                <div className='order-1 sm:order-2'>
                  <div
                    data-aos="zoom-in"
                    data-aos-duration="500"
                    data-aos-delay="300"
                    data-aos-once="true"
                    className='relative z-10'
                  >
                    <img src={item.img} alt={item.title} className='w-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 lg:scale-120 object-contain mx-auto' />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Hero;
