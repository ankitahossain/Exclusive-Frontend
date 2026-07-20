import React from 'react'
import Heading from "../../../commonComponents/Heading"
import Timer from "../../../commonComponents/Timer"
import ProductCard from "../../../commonComponents/ProductCard"
import Slider from "react-slick";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";

const FlashSale = () => {
    const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

function SampleNextArrow({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="absolute -top-20 right-0 z-30 w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer"
    >
      <IoArrowForwardOutline className="text-2xl text-black" />
    </div>
  );
}

function SamplePrevArrow({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="absolute -top-20 right-16 z-30 w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer"
    >
      <IoArrowBackOutline className="text-2xl text-black" />
    </div>
  );
}
  return (
    <div className='mt-[140px] mb-[60px]'>
      <div className = "container">
     <div className = "flex items-end gap-x-[87px]">
        <Heading title ={"Today's"} description={"Flash Sales"} />
      <Timer />
     </div>
    <div className="relative mt-10">
  <Slider {...settings}>
    {[...new Array(10)].map((_, index) => (
      <div key={index} className="pr-6">
        <ProductCard />
      </div>
    ))}
  </Slider>
   {/* Button */}
  <div className="flex justify-center mt-14">
    <button className="px-12 py-4 bg-secondary-color text-white font-poppins font-medium rounded hover:bg-red-700 transition">
      View All Products
    </button>
  </div>
</div>
      </div>
    </div>
  )
}

export default FlashSale
