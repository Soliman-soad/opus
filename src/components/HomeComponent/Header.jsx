import React from "react";
import HeaderImg from "../../img/headerImage.png";
import { VscQuote } from "react-icons/vsc";
import { BiMouseAlt } from "react-icons/bi";

const Header = () => {
  return (
    <div className="grid grid-cols-5 relative inline-block mt-24">
      <div className="bg-[#061237] col-span-3 text-white pl-36 pt-10 relative inline-block">
        <h1 className="text-7xl ">
          Built for <br />
          enterprise
          <br />
          business
        </h1>
        <p>
          Opus includes everything you need to build a beautiful website for
          your business. Built to perform and look good doing so.
        </p>
        <div className="w-[32px] h-[32px] absolute bg-[#1355FF] top-0"></div>
        <div className="w-[64px] h-[64px] absolute bg-[#1355FF] -top-16 left-20"></div>
        <div className="w-[64px] h-[64px] absolute bg-[#0B1A46] top-2/4 left-16"></div>
        <div>
          <a className="btn capitalize rounded-sm bg-[#1355FF] ">
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
          <a className="btn btn-ghost rounded-sm">Explore Pages</a>
        </div>
      </div>
      <div>
        <div className="relative inline-block">
          <div className="relative inline-block -left-24 top-10">
            <img src={HeaderImg} alt="" className=" w-full h-[450px]" />
            <div className="w-[300px] h-[240px] px-5 py-5 bg-white absolute -right-36 -bottom-0 shadow-md">
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
          <div className="w-[48px] h-[48px] bg-[#0133B7] absolute -top-1 right-12"></div>
          <div className="w-[580px] h-[450px] -z-10 bg-[#1355FF] absolute -top-16 -right-[270px]"></div>
          <div className="w-[380px] h-[450px] -z-10 bg-[#1355FF] absolute top-16 right-36"></div>
          <div className="w-[180px] h-[48px] absolute -bottom-14 p-2 -left-[440px] flex text-[14px] text-[#B6BCCE] bg-[#F7F9FC] items-center" ><BiMouseAlt/><span>SCROLL FOR MORE</span></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
