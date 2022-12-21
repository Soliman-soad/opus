import React from 'react';
import { HiOutlineTicket } from "react-icons/hi2";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import stampsImg from '../../img/stamps.png'

const Stamps = () => {
    return (
        <div className='mt-[250px] mx-64 grid grid-cols-2 gap-44'>
            <div className='text-center font-bold relative'>
            <div className='flex items-center justify-center text-2xl'><span className='pt-1 pr-1'><HiOutlineTicket/></span> stapms</div>
            <p className="text-[24px] font-[400px] text-[#061237] mt-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
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
                <img src={stampsImg} className="-mt-20" alt="" />
            </div>
        </div>
    );
};

export default Stamps;