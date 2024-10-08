import { FaStar } from "react-icons/fa";
import React from 'react';
import Img1 from './img1.png';
import Img2 from './img2.png';
import Img3 from './img3.png';
import Img4 from './img4.png';
import Img5 from './img5.png';

const ProductData = [
  {
    id: 1,
    img: Img1,
    title: "Women Ethnic",
    rating: 5.0,
    color: "white",
    aosDelay: "0"
  },
  {
    id: 2,
    img: Img2,
    title: "Women Western",
    rating: 5.0,
    color: "Red",
    aosDelay: "0"
  },
  {
    id: 3,
    img: Img3,
    title: "Goggles",
    rating: 5.0,
    color: "Brown",
    aosDelay: "0"
  },
  {
    id: 4,
    img: Img4,
    title: "Printed T-Shirt",
    rating: 5.0,
    color: "Yellow",
    aosDelay: "0"
  },
  {
    id: 5,
    img: Img5,
    title: "Fashion T-Shirt",
    rating: 5.0,
    color: "Pink",
    aosDelay: "0"
  }
];

function Produce() {
  return (
    <div className='mt-14 mb-10'>
      <div className='container'>
        {/* Header Section */}
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
          <p className='text-sm text-primary' data-aos="fade-up">Top Selling Products for you</p>
          <h1 className='text-3xl font-bold'>Product</h1>
          <p className='text-xs text-gray-400'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit asperiores modi</p>
        </div>
      </div>
      <div>
        {/* Body Section */}
        <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
          {/* Card Section */}
          {ProductData.map((data) => (
            <div 
            data-aos="fade-up"
            data-aos-delay={data.aosDelay}

            key={data.id} className="space-y-3">
              <div>
              <img src={data.img} alt={data.title}  className='h-[220px] w-[150px] object-contain rounded-md'/>
              <p>Color: {data.color}</p>
              </div>
           
          
          <div>
            <h3 className="font-semibold">
              {data.title}
            </h3>
            <p className="text-sm text-gray-600">{data.color}</p>
            <div className="flex items-center gap-1">
            <FaStar className="text-yellow-400"/>
            <span>{data.rating}</span>
            </div>
           
          </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Produce;
