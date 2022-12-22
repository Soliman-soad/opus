import React from 'react';
import knowledgePic from "../../img/knowladgeImage.png"

const Knowladge = () => {
    return (
        <div data-aos="fade-down" className='grid grid-cols-1 lg:grid-cols-2 mt-[220px] lg:mx-64 mx-6 gap-36 items-center'>
            <div className='relative'>
                <img src={knowledgePic} alt="" />
                <div className='w-[400px] h-[400px] bg-[#F2F3F8] absolute -left-20 -top-16 -z-10'></div>
                <div className='w-[32px] h-[32px] bg-[#B9ECFF] absolute right-64 lg:-right-1 -top-24 -z-10'></div>
                <div className='w-[92px] h-[92px] hidden lg:block bg-[#B9ECFF] absolute -right-[92px] -bottom-[92px] -z-10'></div>
            </div>
            <div className='relative'>
            <h6 className='text-sm text-gray-600 font-bold uppercase ml-5 mb-8'>Knowledge</h6>
                <h2 className='text-[#061237] font-bold text-4xl'>A UI Kit that's Modern & Elegant</h2>
                <p className="text-[16px] font-[400px] text-[#061237] mt-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat.
            </p>
                <div className='w-[64px] h-[64px] bg-[#F2F3F8] absolute -left-5 -top-8 -z-10'></div>
            </div>
        </div>
    );
};

export default Knowladge;