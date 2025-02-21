import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FcSportsMode } from "react-icons/fc";

function Footer() {
  const FooterCategoryData = [
    "Design",
    "Development",
    "Marketing",
    "Business",
    "Lifestyle",
  ];
  const FooterSocialData = [
    {
      name: "Facebook",
      icon_path: <FaFacebook size={28} />,
    },
    {
      name: "Sports",
      icon_path: <FcSportsMode size={28} />,
    },
    {
      name: "LinkedIn",
      icon_path: <FaLinkedin size={28} />,
    },
    {
      name: "Instagram",
      icon_path: <FaInstagram size={28} />,
    },
  ];
  const NavLinks = ["Home", "About", "Course", "Blog", "Contact"];
  return (
    <div>
      <div className="w-full px-4 py-12   bg-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-14 ">
          <div className="flex gap-4 flex-col">
            <div>
              <img
                src="https://gyanias.in/wp-content/uploads/2022/01/Artboard-%E2%80%93-12.svg"
                alt="image"
                className="w-full h-full scale-110"
              />
            </div>
            <p className="text-2xl font-semibold text-black">Contact us</p>
            <div className="text-primaryGray">
              <p>Call : +123 400 123</p>
              <p>
                Praesent nulla massa, hendrerit <br /> vestibulum gravida in,
                feugiat auctor felis.
              </p>
            </div>
            <p className="cursor-pointer">Email: example@mail.com</p>
            <div className="flex gap-4 flex-wrap md:flex-nowrap">
              {FooterSocialData.map((item, index) => (
                <span className="text-[#20b486]" key={index}>
                  {item.icon_path}
                </span>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-2xl font-semibold">Explore</p>
            </div>
            <div className="space-y-4 text-primaryGray flex flex-col">
              {NavLinks.map((item, index) => (
                <div key={index}>
                  <p className="hover:text-[#20b486] hover:underline cursor-pointer inline-block">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-2xl font-semibold">Category</p>
            </div>
            <div className="space-y-4 text-primaryGray">
              {FooterCategoryData.map((item, index) => (
                <div key={index}>
                  <p className="hover:text-[#20b486] hover:underline cursor-pointer inline-block">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4 ">
            <div>
              <p className="text-2xl font-semibold">Subscribe</p>
            </div>
            <div className=" text-primaryGray">
              <p>
                Lorem Ipsum has been them an
                <br /> printer took a galley make book.
              </p>
            </div>
            <div>
              <input
                type="email"
                placeholder="Email here"
                className="bg-[#E7E9EB80] p-4 xl:w-full rounded-lg focus-within:ring-2 focus-within:ring-[#20b486] outline-none"
                required
              />
            </div>
            <div className="bg-[#20b486] max-w-[180px] text-center text-white px-2 lg:px-6 py-3 font-medium rounded-lg cursor-pointer hover:bg-[#76ceb2]">
              Sign up for Free
            </div>
          </div>
        </div>
        <p className="text-center border-t-[1px] mt-8 p-4">
          Copyright © 2025 Namrata Universal || All rights reserved. ||
          Developed & Designed by Rohit Rajput
        </p>
      </div>
    </div>
  );
}

export default Footer;
