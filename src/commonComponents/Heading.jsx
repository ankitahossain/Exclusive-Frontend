import React from "react";
import ProductCard from "./ProductCard";
const Heading = ({ title = "Today's", description = "Flash Sales" }) => {
  return (
   <div>
     <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <span className="w-5 h-10 rounded bg-secondary-color"></span>

        <span className="font-poppins font-semibold text-base text-secondary-color">
          {title}
        </span>
      </div>

     <h1 className="text-[36px] font-bold">
        {description}
      </h1>
    </div> 

    
   </div>
    
  );
};

export default Heading;