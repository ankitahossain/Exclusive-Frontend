import React, { useState } from 'react'
import { category } from '../Data/data.js'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { LiaAngleRightSolid } from "react-icons/lia";
import banner from "../../assets/Banner/banner.jpg"

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,

    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex);
    },

    appendDots: dots => (
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          left: "50%",
          transform: "translateX(-50%)",
          padding: "10px",
        }}
      >
        <ul style={{ margin: 0, display: "flex", alignItems: "center" }}>
          {dots}
        </ul>
      </div>
    ),

    customPaging: (i) => (
      <div
        style={{
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          border: "3px solid #ffffff",
          background: i === currentSlide ? "#DB4444" : "#ffffff",
          marginRight: "12px",
          cursor: "pointer",
        }}
      />
    ),
  };

  return (
    <div>
      <div className="flex items-center justify-between">

        <div className="w-[23%] border-r-[1.5px] border-r-text-black mt-10">
          <ul className="pt-10">
            {category?.map((item, index) => (
              <li
                key={index}
                className="flex items-center justify-between font-poppins text-md text-primary-color font-normal py-4 hover:px-5 hover:bg-gray-200 transition-all cursor-pointer"
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

        <div className="w-[77%] h-[344px] pl-[45px] mt-10">
          <Slider {...settings}>
            {[...new Array(10)].map((_, index) => (
              <div key={index}>
                <img
                  src={banner}
                  alt="banner"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </Slider>
        </div>

      </div>
    </div>
  );
}

export default Banner;
