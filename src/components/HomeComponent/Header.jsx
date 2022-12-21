import React from "react";
import HeaderImg from "../../img/headerImage.png";
import { VscQuote } from "react-icons/vsc";
import { BiMouseAlt } from "react-icons/bi";

const Header = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 relative bg-[#061237] lg:bg-transparent inline-block mt-24">
      <div className="bg-[#061237] lg:col-span-3 text-white lg:pl-36 pt-10 relative lg:text-left text-center inline-block">
        <h1 className="text-7xl ">
          Built for <br />
          enterprise
          <br />
          business
        </h1>
        <p className="mt-5 px-36">
          Opus includes everything you need to build a beautiful website for
          your business. Built to perform and look good doing so.
        </p>
        <div className="w-[32px] h-[32px] absolute bg-[#1355FF] top-0 lg:left-36  left-16"></div>
        <div className="w-[64px] h-[64px] absolute bg-[#1355FF] -top-16 lg:left-20"></div>
        <div className="w-[64px] h-[64px] absolute hidden lg:block bg-[#0B1A46] top-2/4 left-16"></div>
        <div>
          <a className="btn capitalize rounded-sm bg-[#1355FF] mt-7 border-none">
            Learn more{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </a>
          <a className="btn btn-ghost rounded-sm hidden lg:inline">Explore Pages</a>
        </div>
        <a className="btn btn-ghost rounded-sm mx-auto lg:hidden mt-5">Explore Pages</a>
      </div>
      <div>
        <div className="lg:relative lg:inline-block">
          <div className="lg:relative lg:inline-block w-full  -left-24 top-10">
            <img src={HeaderImg} alt="" className=" w-8/12 lg:w-full mt-10 mx-auto lg:h-[450px] " />
            <div className="w-[48px] h-[48px] bg-[#0133B7] absolute bottom-2/4 right-16 lg:hidden"></div>
            <div className="lg:w-[300px] hidden lg:block lg:h-[240px] px-5 py-5 bg-white lg:absolute -right-36 -bottom-0 shadow-md">
              <p className="font-[400]">
                I felt like I couldn’t grow until I moved to Opus. Now I am
                encouraged to sell more with them.
              </p>
              <div className="flex justify-between mt-6">
                <div>
                  <h1 className="font-bold text-2xl">Frank Dublin</h1>
                  <h4 className="font-[500] ">
                    CEO <span className="text-[#1355FF]">@stamps</span>
                  </h4>
                </div>
                <div className="text-5xl text-gray-400">
                  <VscQuote />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[48px] h-[48px] hidden lg:block bg-[#0133B7] absolute -top-1 right-12"></div>
          <div className="w-[580px] h-[450px] -z-10 hidden lg:block bg-[#1355FF] absolute -top-16 -right-[270px]"></div>
          <div className="w-[380px] h-[450px] -z-10 hidden lg:block bg-[#1355FF] absolute top-16 right-36"></div>
          <div className="w-[180px] h-[48px] absolute -bottom-14 p-2 hidden lg:block -left-[440px] flex text-[14px] text-[#B6BCCE] bg-[#F7F9FC] items-center" ><BiMouseAlt/><span>SCROLL FOR MORE</span></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
