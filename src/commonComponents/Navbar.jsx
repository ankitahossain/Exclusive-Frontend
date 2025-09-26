import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { NavLink } from 'react-router';
 
const navbar = () => {

    const NavItem = [

        {
            id: 1,
            name: "Home",

        },
        {
            id: 2,
            name: "Contact",

        },
        {
            id: 3,
            name: "About",

        },
        {
            id: 4,
            name: "Sign up",

        }
    ]

    return (

        <div>
            <div className='navbar bg-transparent'>
                <div className='container'>
                    <div className='flex justify-between items-center'>
                        <div className='leftwrapper'>
                           <h2 className='text-[24px] leading-[24px] font-bold'>Exclusive</h2>
                        </div>

                        <div className='middlewrapper'>
                            <ul className='flex gap-13 items-center'>
                                {NavItem?.map((item) => (
                                    <li key={item.id} className='font-poppins text-[17px] font-semibold '>
                                        <NavLink
                                            to="`/${item.name}`"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "active" : ""
                                            }
                                        >
                                           {item.name}
                                        </NavLink>

                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>



    )
}

export default navbar
