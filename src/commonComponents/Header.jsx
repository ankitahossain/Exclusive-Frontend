import React from 'react'

const Header = () => {
  return (
    <div>
 <div>
  <div className='header bg-primary-color py-3'>
   <div className='container flex justify-between items-center'>
    <div className='header_leftWrapper'>
      {/* todo: empty div for managing space */}
      <div></div>
      <h2 className='text-light_FA font-poppins font-normal text-[14px] leading-[21px] ml-90'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! {""}
        <span className='font-poppins text-[14px] leading-[24px] font-semibold'>ShopNow</span></h2>
    </div>
    <div className='header_rightWrapper'>
      <select id="" value="" className='bg-transparent text-white font-poppins text-[14px] leading-[21px] '>
        <option value="English">English</option>
        <option value="Bangla">Bangla</option>
        <option value="French">French</option>
      </select>
    </div>
   </div>
  </div>
 </div>
    </div>
  )
}

export default Header
