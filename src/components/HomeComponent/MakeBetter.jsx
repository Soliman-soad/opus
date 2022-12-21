import React from 'react';
import { FaMousePointer } from "react-icons/fa";
import { RiRocket2Fill } from "react-icons/ri";

const MakeBetter = () => {
    return (
        <div className='mt-[227px] mx-64 grid grid-cols-2 gap-8'>
            <div className='relative'>
            <h2 className='text-[#061237] font-bold text-[40px]'>Make your site better with Opus</h2>
            <div className='w-[350px] h-[108px] absolute right-0'><p className='text-[18px] font-[400px] text-[#37456C]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat. Praesent pulvinar arcu non lectus dapibus, a pulvinar mauris aliquam.</p></div>
            <div className='w-[64px] h-[64px] bg-[#F2F3F8] -z-10 absolute -top-16'></div>
            </div>
            <div>
                <div className='relative inline-block'>
                    <h1 className='text-[#061237] font-bold text-xl inline-block bg-white mb-8 px-14 py-10'><span className='text-sky-700 text-xl'><FaMousePointer/></span> Build or Customize a Website in Minutes</h1>
                    <h1 className='text-[#061237] font-bold text-xl inline-block bg-white mb-8 px-14 py-10'><span className='text-sky-700 text-xl'><RiRocket2Fill/></span> Our UI Kit was made for creativity.</h1>
                    <div className='w-[340px] h-[450px] bg-[#F2F3F8] -z-10 absolute -top-0 -right-16'></div>
                    <div className='w-[90px] h-[90px] bg-[#F2F3F8] -z-10 absolute left-10 -bottom-40'></div>
                </div>
            </div>
        </div>
    );
};

export default MakeBetter;