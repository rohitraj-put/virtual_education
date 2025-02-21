import React from "react";
export default function HeroRegister() {
  return (
    <div className="bg-[#E9F8F3B2] pb-20">
      <div className=" mx-4 xl:mx-auto  ">
        <div className="flex flex-col items-center justify-center md:justify-start md:flex-row gap-5 md:gap-10 lg:gap-20">
          <div className="relative">
            <img
              src="https://www.tailwindtap.com/assets/edtech/bottom_hero_img.png"
              width={610}
              height={404}
              alt="image"
            />
            <div className="h-4 w-4 bg-primaryGreen rounded-full absolute"></div>
          </div>
          <div className="flex flex-col gap-5 md:gap-10">
            <div className="flex flex-col gap-3 md:gap-6">
              <div className="text-black text-2xl md:text-3xl lg:text-[40px]  font-semibold leading-[38px]">
                <p>
                  Join{" "}
                  <span className="text-[#20b486]">World&apos;s largest</span>{" "}
                  <br />
                  learning{" "}
                </p>
                <p>platform today</p>
              </div>
              <div>
                <p className="text-[#06241B] sm:text-lg md:text-2xl font-normal">
                  Start learning by registering for free
                </p>
              </div>
            </div>
            <div className="bg-[#20b486] max-w-[180px] text-center text-white px-2 lg:px-6 py-3 font-medium rounded-lg cursor-pointer hover:bg-[#76ceb2]">
              Sign up for Free
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
