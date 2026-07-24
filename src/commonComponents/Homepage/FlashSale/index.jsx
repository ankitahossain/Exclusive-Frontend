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
    <button
      onClick={onClick}
      className="absolute top-[-85px] right-0 w-12 h-12 rounded-full bg-[#F5F5F5] flex items-center justify-center z-20 hover:bg-black-color hover:text-white-color transition"
    >
      <IoArrowForwardOutline size={22} />
    </button>
  );
}

function SamplePrevArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute top-[-85px] right-16 w-12 h-12 rounded-full bg-[#F5F5F5] flex items-center justify-center z-20 hover:bg-black-color hover:text-white-color transition"
    >
      <IoArrowBackOutline size={22} />
    </button>
  );
}

  return (
    <div className='mt-[140px] mb-[60px]'>
      <div className = "container">
     <div className = "flex items-end gap-x-[87px]">
        <Heading title ={"Today's"} description={"Flash Sales"} />
      <Timer />
     </div>
    <div className="relative mt-10 border-b-[1px] border-black-color mb-10">
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
