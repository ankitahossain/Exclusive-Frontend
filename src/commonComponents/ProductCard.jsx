import React from 'react' 
import { IoHeartOutline } from "react-icons/io5";
import Product_1 from "../../src/assets/Product_1.png"
import { MdRemoveRedEye } from "react-icons/md";
import { FaStar } from "react-icons/fa";

const ProductCard = () => {

  return (
  <div>
      <div className = "mt-10"> 
        <div className = "w-full">
     <div className = "bg-white-color px-3 py-4 pb-[55px] rounded relative group cursor-pointer">
              <div className = "flex items-center justify-between">
             <span className=' px-3 py-2 rounded inline-block text-sm text-white font-poppins font-normal text-[12px] bg-secondary-color'>-40%</span>
            <span className = 'w-[35px] h-[35px] rounded-full bg-white-color flex justify-center items-center cursor-pointer leading-none text-xl hover:bg-red-600 hover:text-white-color'><IoHeartOutline size={18}/></span>
           </div> 
           <div className = "flex justify-between ">
            <div className = "w-[172px] h-[152px] flex-1">
            <img src={Product_1} alt={Product_1} className="w-full h-full object-contain" />
           </div>
           <span className = 'w-[35px] h-[35px] rounded-full bg-white-color flex justify-center items-center cursor-pointer leading-none text-xl mt-2 hover:bg-red-600 hover:text-white-color'><MdRemoveRedEye size={18}/></span>
           </div>
           <div className = "opacity-0 absolute left-0 bottom-0 font-poppins font-medium text-lg group-hover:opacity-100 w-full h-12 bg-black-color cursor-pointer flex justify-center items-center text-white-color">
            <h3>Add to Cart</h3>

           </div>
     </div>

         <div className = "flex flex-col items-start gap-y-2 mt-4">
            <h1 className='text-lg font-poppins font-medium cursor-pointer'>HAVIT HV-G92 Gamepad</h1>
            <div className = "flex items-center gap-x-3 cursor-pointer">
                <span className='text-secondary-color font-poppins font-medium text-lg inline-block'>$120</span>
                <span className=' text-black-color opacity-50 font-poppins font-medium text-lg inline-block line-through'>$160</span>
            </div>
           <div>
             <div className = "flex items-center gap-x-1" >
              {[...new Array(5)].map((_, index)=>(<span className='text-yellow-400'><FaStar /></span>))}
              <h3 className=' text-black-color opacity-50 font-poppins font-medium text-lg'>{`(${[...new Array(5)]?.length})`}</h3>
              
            </div>
           </div>
         </div>
        </div>
    </div> 
      

      

  </div>
    
  )
}

export default ProductCard 
