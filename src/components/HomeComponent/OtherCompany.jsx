import React from 'react';
import { HiOutlineTicket } from "react-icons/hi2";

const OtherCompany = () => {
    return (
        <>
        <div className='mt-[112px] lg:mx-48'>
            <div className='text-center my-10 font-bold text-[40px]'>
                <h1>Trusted and loved by the world’s best teams</h1>
            </div>
<div className='grid grid-cols-1 gap-10 lg:grid-cols-4 text-gray-500 text-xl font-bold text-center'>
    <div>wetrasfer</div>
    <div className='flex items-center justify-center'><span className='pt-1 pr-1'><HiOutlineTicket/></span> stapms</div>
    <div>manter.</div>
    <div>Sugercane</div>
</div>
        </div>
        <div>
        <section className="lg:p-6 my-36 lg:mx-48">
	<div className="container mx-auto grid justify-center grid-cols-1 gap-20 text-center lg:grid-cols-4">
		<div className="flex flex-col justify-start m-2 lg:m-6">
			<p className="text-2xl font-bold leading-none lg:text-4xl">99.95%</p>
			<p className="text-md sm:text-base font-bold">Accuracy rate</p>
			<p className="text-sm sm:text-base text-[#67718E]">in fulfilling orders</p>
		</div>
		<div className="flex flex-col justify-start m-2 lg:m-6">
			<p className="text-2xl font-bold leading-none lg:text-4xl">5000+</p>
			<p className="text-md sm:text-base font-bold">Ecommerce businesses</p>
			<p className="text-sm sm:text-base text-[#67718E]">partner with Opus</p>
		</div>
		<div className="flex flex-col justify-start m-2 lg:m-6">
			<p className="text-2xl font-bold leading-none lg:text-4xl">99.96%</p>
			<p className="text-md sm:text-base font-bold">Of orders ship on time</p>
			<p className="text-sm sm:text-base text-[#67718E]">within SLA</p>
		</div>
		<div className="flex flex-col justify-start m-2 lg:m-6">
			<p className="text-2xl font-bold leading-none lg:text-4xl"><span className='text-gray-300'>#</span> 1</p>
			<p className="text-md sm:text-base font-bold">Best Fulfillment Technology</p>
			<p className="text-sm sm:text-base text-[#67718E]">by AdWeek’s Retail Awards</p>
		</div>
		
	</div>
</section>
        </div>
        </>
    );
};

export default OtherCompany;