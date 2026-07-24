import React from 'react'

const Header = () => {
  return (
    <div>
 <div>
  <div className='header bg-primary-color py-3'>
   <div className="container flex items-center justify-between">
  <div className="flex-1 flex justify-center">
    <h2 className="text-light_FA font-poppins font-normal text-[14px] leading-[21px]">
      Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
      <span className="font-semibold underline cursor-pointer">
        Shop Now
      </span>
    </h2>
  </div>

  <div>
    <select className="bg-transparent text-white font-poppins text-[14px]">
      <option>English</option>
      <option>Bangla</option>
      <option>French</option>
    </select>
  </div>
</div>
  </div>
 </div>
    </div>
  )
}

export default Header
