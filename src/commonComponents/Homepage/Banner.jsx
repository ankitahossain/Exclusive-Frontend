import React, { useState } from 'react'
import { category } from '../Data/data.js'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { LiaAngleRightSolid } from "react-icons/lia";
import banner from "../../assets/Banner/banner.jpg"

const Banner = () => { 
  const [currentSlide,setCurrentSlide] = useState(0);
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,

    appendDots: dots => (
      <div
           style={{
          position: "absolute",
          bottom: "5%",
          left: "50%",
          transform: "translateX(-50%)",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul style={{ margin: "0px",alignItems:"center",display:"flex"}}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => ( 
      i == currentSlide ? ( <div
        style={{
          width: "20px",
          height: "20px",
          borderRadius:" 50%",
          border: "3px solid #ffff",
          background:"#DB4444",
          marginRight:"12px",
          cursor:"pointer"
        }}
      >
      
      </div>):( <div
        style={{
          width: "20px",
          height: "20px",
          borderRadius:" 50%",
          border: "3px solid #ffff",
          background:"#fffff",
          marginRight:"12px",
          cursor:"pointer"

        }}
      >
      
      </div>)
     
    ),
     afterChange: function(currentSlide) {
     setCurrentSlide(currentSlide);
    }

  }
  console.log(currentSlide);
    
  return (
    <div>
      <div className='flex items-center justify-between'>

        <div className='w-[23%] border-r-[1.5px] border-r-text-black mt-10'>
         <ul className="pt-10">
  {category?.map((item, index) => (
    <li
      key={index}
      className="flex items-center justify-between z-10font-poppins text-md text-primary-color font-normal py-4 hover:px-5 hover:bg-gray-200 transition-all py-3 cursor-pointer"
    >
      <span>{item.category}</span>

      {item.subCategory && (
        <span className="pr-10 text-2xl">
          <LiaAngleRightSolid />
        </span>
      )}
    </li>
  ))}
</ul>

        </div>

        <div className='w-[77%] h-[344px] pl-[45px] mt-10'>
      
    <div className="slider-container">
      <Slider {...settings}>
      {[...new Array(10)].map((_, index)=>(
        <div key = {index}>
          <img src = {banner} alt ={banner} className='w-full h-full object-cover'/>
        </div>
      ))}
      
      </Slider>
    </div>
        </div>

      </div>
    </div>
  )
}

export default Banner
