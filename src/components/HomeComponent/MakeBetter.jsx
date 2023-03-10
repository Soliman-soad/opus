import React from 'react';
import { FaMousePointer } from "react-icons/fa";
import { RiRocket2Fill } from "react-icons/ri";

const MakeBetter = () => {
    return (
        <div data-aos="fade-down" className='mt-[227px] lg:mx-64 grid grid-cols-1 lg:grid-cols-2 gap-8 mx-5'>
            <div className='relative'>
            <h2 className='text-[#061237] font-bold text-[40px]'>Make your site better with Opus</h2>
            <div className='w-[350px] h-[108px] lg:absolute right-0'><p className='text-[18px] font-[400px] text-[#37456C]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat. Praesent pulvinar arcu non lectus dapibus, a pulvinar mauris aliquam.</p>
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
            </div>
            <div className='w-[64px] h-[64px] bg-[#F2F3F8] -z-10 absolute -top-16'></div>
            
            </div>
            <div>
                <div className='relative lg:inline-block mt-32'>
                    <h1 className='text-[#061237] font-bold text-xl lg:inline-block bg-white mb-8 px-14 py-10'><span className='text-sky-700 text-xl'><FaMousePointer/></span> Build or Customize a Website in Minutes</h1>
                    <h1 className='text-[#061237] font-bold text-xl lg:inline-block bg-white mb-8 px-14 py-10'><span className='text-sky-700 text-xl'><RiRocket2Fill/></span> Our UI Kit was made for creativity.</h1>
                    <div className='w-[340px] h-[450px]  bg-[#F2F3F8] -z-10 absolute -top-0 right-0 lg:-right-16'></div>
                    <div className='w-[90px] h-[90px] bg-[#F2F3F8] -z-10 absolute lg:left-10 left-48 lg:-bottom-40 -bottom-56'></div>
                </div>
            </div>
        </div>
    );
};

export default MakeBetter;