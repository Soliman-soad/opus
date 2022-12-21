import React from 'react';
import { HiOutlineTicket } from "react-icons/hi2";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import stampsImg from '../../img/stamps.png'

const Stamps = () => {
    return (
        <div className='mt-[250px] lg:mx-64 mx-7 grid grid-cols-1 lg:grid-cols-2 gap-44'>
            <div className='text-center font-bold relative'>
            <div className='flex items-center justify-center text-2xl'><span className='pt-1 pr-1'><HiOutlineTicket/></span> stapms</div>
            <p className="text-[24px] font-[400px] text-[#061237] mt-8 px-10">
            The Opus UI Kit lets you showcase your work in style. It's helped take our business online
            </p>
            <p className="text-lg font-[400px] text-[#061237] mt-8">
            Alexa F.
            </p>
            <p className="text-xs font-[400px] text-[#061237] mt-2">
            Designer <span className='text-sky-700'>@stamps</span>
            </p>
            <div className='flex justify-center mt-10'>
                <div className='inline p-5 bg-[#F2F3F8] mr-10'><AiOutlineArrowLeft/></div>
                <div className='inline p-5 bg-[#F2F3F8]'><AiOutlineArrowRight/></div>
            </div>
            <div className='w-[32px] h-[32px] bg-[#B9ECFF] absolute right-20 top-8 -z-10'></div>
            <div className='w-[64px] h-[64px] bg-[#1355FF] absolute right-4 -top-8 -z-10'></div>
            </div>
            <div>
                <img src={stampsImg} className="-mt-20 w-3/4 mx-auto lg:w-full" alt="" />
            </div>
        </div>
    );
};

export default Stamps;