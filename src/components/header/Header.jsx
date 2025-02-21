import React, { useState, useRef, useEffect } from "react";
import { CiLock } from "react-icons/ci";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";
import Button from "../Button";
import { Link } from "react-router-dom";

const NavLinks = ["Home", "About", "Course", "Pricing", "Blog", "Contact"];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className=" px-4 bg-gray-100 sticky top-0 z-50">
      <nav className="max-w-[1320px] lg:mx-auto flex items-center justify-between py-5">
        <div className="">
          <img
            className=" scale-110"
            src="https://gyanias.in/wp-content/uploads/2022/01/Artboard-%E2%80%93-12.svg"
          />
        </div>
        <div className="hidden md:flex">
          <div className="items-center space-x-12 flex">
            <ul className="flex gap-2 lg:gap-8 text-base text-primaryGray font-medium ">
              {NavLinks.map((item, index) => (
                <li
                  key={index}
                  className="cursor-pointer hover:text-[#20b486] hover:underline first:text-[#20b486]"
                >
                  <Link to={`${index === 0 ? "/" : `${item}`}`}> {item}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="flex items-center gap-2 lg:gap-6 ">
            <Link
              to={"/SignIn"}
              className="flex items-center gap-2 font-medium hover:text-[#20b486] cursor-pointer hover:underline"
            >
              <CiLock className="text-2xl" />
              <p className="text-primaryGray hover:text-[#20b486]">Login</p>
            </Link>
            <Button />
          </div>
        </div>
        <div className="md:hidden block cursor-pointer" onClick={toggleMenu}>
          {isMenuOpen ? (
            <IoCloseOutline size={32} />
          ) : (
            <AiOutlineMenu size={32} />
          )}
        </div>
        {isMenuOpen && (
          <ul
            className="flex flex-col bg-black text-white gap-6 text-[16px] font-normal items-center mt-10 py-5 md:hidden
                   z-50 absolute top-7 left-0 w-full transition duration-1000 ease-in-out"
          >
            <div className="space-y-2">
              {NavLinks.map((item, index) => (
                <p key={index} className="cursor-pointer  hover:underline">
                  {item}
                </p>
              ))}
            </div>
            <div className="flex flex-col text-white items-center gap-2 lg:gap-6 ">
              <Link
                to={"/SignIn"}
                className="flex items-center gap-2 font-medium cursor-pointer hover:underline"
              >
                <CiLock className="text-2xl" />
                <p>Login</p>
              </Link>
              <Link className="border-2 border-white text-white px-2 lg:px-6 py-3 font-medium rounded-lg cursor-pointer hover:underline">
                Sign up for Free
              </Link>
            </div>
          </ul>
        )}
      </nav>
    </header>
  );
};
export default Header;
