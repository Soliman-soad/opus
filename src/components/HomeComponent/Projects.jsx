import React from "react";
import pro1 from "../../img/person1.png";
import pro2 from "../../img/person2.png";
import pro3 from "../../img/person3.png";

const Projects = () => {
  return (
    <div className="mt-[250px] lg:px-56 px-6 py-[95px] bg-[#061237]">
      <div className="flex justify-around items-center flex-col lg:flex-row">
        <h2 className="text-white font-bold text-[40px]">
          Ways to work with us
        </h2>
        <a className="btn capitalize rounded-sm bg-[#1355FF] mt-7 border-none">
          Get Started
        </a>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 pt-16">
        <div className="card bg-none rounded-sm w-3/4 mx-auto relative lg:w-full">
          <figure>
            <img src={pro1} className="w-full" />
          </figure>
          <div className="card-body bg-none text-white px-0">
            <h2 className="card-title">Project Management</h2>
            <p className="text-md text-[#B6BCCE]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget
              consectetur eros. Aliquam erat volutpat.
            </p>
          </div>
          <div className="w-[64px] h-[64px] bg-[#1355FF] top-0 right-0 absolute"></div>
          <div className="w-[32px] h-[32px] bg-[#18264E] -top-8 -right-8 absolute"></div>
        </div>
        <div className="card bg-none rounded-sm relative w-3/4 lg:w-full mx-auto">
          <figure>
            <img src={pro2} className="w-full" />
          </figure>
          <div className="card-body bg-none text-white px-0">
            <h2 className="card-title">Advanced Analytics</h2>
            <p className="text-md text-[#B6BCCE]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget
              consectetur eros. Aliquam erat volutpat.
            </p>
          </div>
          <div className="w-[64px] h-[64px] bg-[#B9ECFF] bottom-44 -left-5 absolute"></div>
        </div>
        <div className="card  bg-none rounded-sm relative w-3/4 lg:w-full mx-auto">
          <figure>
            <img src={pro3} className="w-full" />
          </figure>
          <div className="card-body bg-none text-white px-0">
            <h2 className="card-title">Marketing & Dashboard</h2>
            <p className="text-md text-[#B6BCCE]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget
              consectetur eros. Aliquam erat volutpat.
            </p>
          </div>
          <div className='w-[32px] h-[32px] bg-[#1355FF] top-20 -right-8 absolute'></div>
          <div className="w-[64px] h-[64px] bg-[#B9ECFF] top-4 right-0 absolute"></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
