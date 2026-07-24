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

    <div className="flex justify-between items-end mb-10">
  <Heading
    title="This Month"
    description="Best Selling Products"
  />

  <button className="px-12 py-4 bg-secondary-color text-white rounded font-poppins font-medium hover:bg-red-600 transition">
    View All
  </button>
</div> 
<div className="grid grid-cols-4 gap-8">
  <ProductCard />
  <ProductCard />
  <ProductCard />
  <ProductCard />
</div>
   </div>
    
  );
};

export default Heading;