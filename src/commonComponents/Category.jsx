import React, { Component } from 'react'
import Heading from "../../src/commonComponents/Heading"
import CategoryItem from "../../src/commonComponents/CategoryItem"
import Slider from "react-slick";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";
import { categorybrowse } from "../../src/Data/data";
 
const Category = () => {
   const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 3,
      autoplay: true,
      componentData: [],
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
    <div>
      <div>
      <Heading title ={"Categories"} description={"Browse By Category"} />
    </div>
     <div className="relative mt-10 border-b-[1px] border-black-color mb-10">
<Slider {...settings}>
  {categorybrowse.map((item) => (
    <div key={item.id} className="px-3">
      <CategoryItem componentData={item} />
    </div>
  ))}
</Slider>
 
</div>
    </div>
  
  )
}

export default Category

