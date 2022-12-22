import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { HiOutlinePhotograph } from "react-icons/hi";

const BeautifulComponenets = () => {
  return (
    <div data-aos="fade-down" className="mt-[227px] lg:mx-64 mx-7 lg:grid flex flex-col-reverse lg:grid-cols-2 gap-20">
      <div>
        <div className="flex">
            <div className="bg-[#1355FF] flex justify-center items-center mt-2 text-white mr-8 w-[150px] h-[50px]">
                <FaTelegramPlane/>
            </div>
          <div>
            <h1 className="text-[#061237] font-bold text-2xl lg:inline-block bg-white">
            Choose your sections
            </h1>
            <p className="text-[18px] font-[400px] text-[#061237]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
          </div>
        </div>
        <div className="flex mt-20">
            <div className="bg-[#1355FF] flex justify-center items-center mt-2 text-white mr-8 w-[150px] h-[50px]">
                <HiOutlinePhotograph/>
            </div>
          <div>
            <h1 className="text-[#061237] font-bold text-2xl inline-block bg-white">
            Add the images and text you need
            </h1>
            <p className="text-[18px] font-[400px] text-[#061237]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="relative">
          <h2 className="text-[#061237] font-bold text-[40px]">
          Create pages using beautiful components.

          </h2>
          <div className="w-[350px] h-[108px]  ml-20 lg:ml-0 lg:absolute right-0">
            <p className="text-[18px] font-[400px] text-[#37456C] mt-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
            </p>
            <a className="btn capitalize text-[#061237] rounded-sm bg-[#F7F9FC] mt-7 border-none">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeautifulComponenets;
