import React from 'react';
import { TiTick } from "react-icons/ti";
import featureImg from "../../img/featureImage.png"

const Feature = () => {
    return (
        <div data-aos="fade-down" className='mt-[220px] lg:mx-64 mx-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-10'>
            <div className='relative'>
                <h6 className='text-sm text-gray-600 font-bold uppercase ml-5 mb-8'>Feature</h6>
                <h2 className='text-[#061237] font-bold text-4xl'>You’re not just doing business. You’re doing life.</h2>
                <div className='w-[64px] h-[64px] bg-[#F2F3F8] absolute -left-5 -top-8 -z-10'></div>
                <div className='mt-14'>
                    <ul>
                        <li className='flex'>
                            <span className='bg-sky-100 p-1 mr-5 text-sky-500 rounded-full mb-4'><TiTick/></span> Responsive Components
                        </li>
                        <li className='flex'>
                            <span className='bg-sky-100 p-1 mr-5 text-sky-500 rounded-full mb-4'><TiTick/></span> Over 50 Sections
                        </li>
                        <li className='flex'>
                            <span className='bg-sky-100 p-1 mr-5 text-sky-500 rounded-full mb-4'><TiTick/></span> Handcrafted Pages
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <img src={featureImg} className='lg:-mt-20 ' alt="" />
            </div>
        </div>
    );
};

export default Feature;