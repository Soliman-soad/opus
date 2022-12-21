import React from 'react';
import resource1 from '../../img/resource.png'
import resource2 from '../../img/resource2.png'
import resource3 from '../../img/resource3.png'

const Resource = () => {
    return (
        <div className='mt-[200px] mx-64'>
            <div >
            <div className="flex justify-around items-center">
        <h2 className="text-[#061237] font-bold text-[40px]">
          Resources
        </h2>
        <a className="btn capitalize rounded-sm bg-[#1355FF] mt-7 border-none">
          Get Started
        </a>
      </div>
            </div>
            <div className='grid grid-cols-3 gap-20 mt-20'>
            <div className="card bg-none rounded-sm relative">
          <figure>
            <img src={resource1} className="w-full" />
          </figure>
          <div className="card-body bg-none text-[#061237] px-0">
            <h2 className="card-title font-bold">A high-converting, high-performing template</h2>
            <p className="text-md text-[#37456C]">
            Turpis senectus amet tortor in sodates odio tettus. Pretium id amet, euismod sceteriscue vetit.
            </p>
            <a className="btn w-[140px] h-[56px] capitalize text-[#061237] hover:text-white rounded-sm bg-[#F7F9FC] mt-7 border-none">
          Read article
        </a>
          </div>
          
        </div>
            <div className="card bg-none rounded-sm relative">
          <figure>
            <img src={resource2} className="w-full" />
          </figure>
          <div className="card-body bg-none text-[#061237] px-0">
            <h2 className="card-title font-bold">With a clean, minimal and professional look</h2>
            <p className="text-md text-[#37456C]">
            Turpis senectus amet tortor in sodates odio tettus. Pretium id amet, euismod sceteriscue vetit.
            </p>
            <a className="btn w-[140px] h-[56px] capitalize text-[#061237] hover:text-white rounded-sm bg-[#F7F9FC] mt-7 border-none">
          Read article
        </a>
          </div>
          
        </div>
            <div className="card bg-none rounded-sm relative">
          <figure>
            <img src={resource3} className="w-full" />
          </figure>
          <div className="card-body bg-none text-[#061237] px-0">
            <h2 className="card-title font-bold">Opus made our journey possible</h2>
            <p className="text-md text-[#37456C]">
            Turpis senectus amet tortor in sodates odio tettus. Pretium id amet, euismod sceteriscue vetit.
            </p>
            <a className="btn w-[140px] h-[56px] capitalize text-[#061237] hover:text-white rounded-sm bg-[#F7F9FC] mt-7 border-none">
          Read article
        </a>
          </div>
          
        </div>
            </div>
        </div>
    );
};

export default Resource;