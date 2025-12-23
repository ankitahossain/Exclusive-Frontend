import React, { useEffect, useState, useRef } from "react";
import { BsCart } from "react-icons/bs";
import { FaRegHeart, FaUser } from "react-icons/fa";
import { ImCancelCircle } from "react-icons/im";
import { IoMdStarOutline } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { LuShoppingBag, LuUser } from "react-icons/lu";
import { RiLogoutCircleLine } from "react-icons/ri";
import { NavLink } from "react-router"; // ✅ FIXED

const Navbar = () => {
  const NavItem = [
    { id: 1, name: "Home" },
    { id: 2, name: "Contact" },
    { id: 3, name: "About" },
    { id: 4, name: "Sign up" },
  ];

  const [account, setAccount] = useState(false);
  const userAccountRef = useRef(null);

  const handleAccount = () => {
    setAccount((prev) => !prev);
  };

  // ✅ FIXED: click outside handler
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        userAccountRef.current &&
        !userAccountRef.current.contains(e.target)
      ) {
        setAccount(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar bg-transparent">
      <div className="container">
        <div className="flex justify-between items-center">
          {/* Left */}
          <h2 className="text-[24px] leading-[24px] font-bold ">Exclusive</h2>

          <ul className="flex gap-13 items-center bg-">
            {NavItem.map((item) => (
              <li key={item.id} className="text-[17px] font-semibold">
                <NavLink
                  to={`/${item.name.toLowerCase()}`}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="basis-1/3 relative flex items-center justify-between">
            <div className="relative">
              <input
                type="text"
                className="py-2 bg-white-color px-8"
                placeholder="What are you looking for?"
              />
              <span className="absolute top-1/2 -translate-y-1/2 text-xl right-[5%]">
                <IoSearch />
              </span>
            </div>

            <div className="flex items-center gap-x-5 ml-6">
              <span className="text-black text-2xl">
                <FaRegHeart />
              </span>

              <span className="text-black text-2xl cursor-pointer">
                <BsCart />
              </span>

              <span
                ref={userAccountRef}
                onClick={handleAccount}
                className="text-white text-2xl rounded-full bg-secondary-color p-2 cursor-pointer relative"
              >
                <FaUser />
              </span>

              {account && (
                <div className="absolute right-0 top-[139%] bg-[#bdbdbd] px-10 py-5 w-[65%] flex flex-col gap-y-5 rounded">
                  <div className="flex items-center text-white gap-3 hover:py-3 hover:text-black transition-all">
                    <span>
                      <LuUser />
                    </span>
                    <h3>Manage my account</h3>
                  </div>

                  <div className="flex items-center gap-3 text-white hover:py-3 hover:text-black transition-all">
                    <span>
                      <LuShoppingBag />
                    </span>
                    <h3>My order</h3>
                  </div>

                  <div className="flex items-center gap-3 text-white hover:py-3 hover:text-black transition-all">
                    <span>
                      <ImCancelCircle />
                    </span>
                    <h3>My Cancellations</h3>
                  </div>

                  <div className="flex items-center gap-3 text-white hover:py-3 hover:text-black transition-all">
                    <span>
                      <IoMdStarOutline />
                    </span>
                    <h3>My Reviews</h3>
                  </div>

                  <div className="flex items-center gap-3 text-white hover:py-3 hover:text-black transition-all">
                    <span>
                      <RiLogoutCircleLine />
                    </span>
                    <h3>Logout</h3>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
