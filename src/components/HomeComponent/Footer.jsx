import React from 'react';

const Footer = () => {
    const overview =["Overview", "Landings","Company","Pricing","CMS Pages","Accounts","Buy for Figma"]
    const page = ["Landing 1","Landing 2","Landing 3", "Company 1", "Company 2","Company 3", "Blog 1","Blog 2","Contact 1", "Contact 2", "Contact 3"]
    const pageOther = ["Case Studies","Careers","Pricing 1", "Pricing 2", "Pricing 3","Login", "Register","Forgot Password","Blog Post", "Team Member", "Case Study","Job Post"]
    return (
        <div className='mt-[180px] lg:px-56 px-6'>
            <div className='mb-14'>
            <a className="btn btn-ghost normal-case text-xl text-[#1355FF] font-bold"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.712 4.33a9.027 9.027 0 011.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 00-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 010 9.424m-4.138-5.976a3.736 3.736 0 00-.88-1.388 3.737 3.737 0 00-1.388-.88m2.268 2.268a3.765 3.765 0 010 2.528m-2.268-4.796a3.765 3.765 0 00-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 01-1.388.88m2.268-2.268l4.138 3.448m0 0a9.027 9.027 0 01-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0l-3.448-4.138m3.448 4.138a9.014 9.014 0 01-9.424 0m5.976-4.138a3.765 3.765 0 01-2.528 0m0 0a3.736 3.736 0 01-1.388-.88 3.737 3.737 0 01-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 01-1.652-1.306 9.027 9.027 0 01-1.306-1.652m0 0l4.138-3.448M4.33 16.712a9.014 9.014 0 010-9.424m4.138 5.976a3.765 3.765 0 010-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 011.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 00-1.652 1.306A9.025 9.025 0 004.33 7.288" />
</svg>
<span className='text-[#061237]'>Opus</span>
            </a>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-20'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-20'>
                <div>
                    <ul>
                        <li className='text-[#B6BCCE] uppercase mb-4 text-xs'>Overview</li>
                        {
                            overview.map((item,i)=> <li key={i} className=" text-[#061237] text-sm mb-4 font-bold">{item}</li>)
                        }
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className='text-[#B6BCCE] uppercase mb-4 text-xs'>pages</li>
                        {
                            page.map((item,i)=> <li key={i} className=" text-[#061237] text-sm mb-4 font-bold">{item}</li>)
                        }
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className='text-[#B6BCCE] uppercase mb-4 text-xs'>Pages</li>
                        {
                            pageOther.map((item,i)=> <li key={i} className=" text-[#061237] text-sm mb-4 font-bold">{item}</li>)
                        }
                    </ul>
                </div>

            </div>
            <div>
            <div className="form-control">
  <div className="input-group ">
    <input type="text" placeholder="Email adress" className="input input-bordered" />
    <a className="btn capitalize rounded-sm bg-[#1355FF] border-none">
          Get Started
        </a>
  </div>
</div>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-20 mt-10'>
                        <div>
                        <p className='text-[#B6BCCE] uppercase mb-2 text-xs'>OPUS FOR WEBFLOW</p>
                        <p className='text-[#1355FF] font-bold  text-xl'>Lorem Ipsum</p>
                        </div>
                        <div>
                        <p className='text-[#B6BCCE] uppercase mb-2 text-xs'>OPUS FOR FIGMA</p>
                        <p className='text-[#1355FF] font-bold text-xl'>Lorem Ipsum</p>
                        </div>
                        </div>
                        <div>
                        <p className='text-[#B6BCCE] mb-2 mt-16 text-sm'>© Template by <span className='text-[#1355FF]'>Lorem</span> - Powered by <span className='text-[#1355FF]'>Ipsum</span></p>
                        </div>
            </div>
            </div>
                        <div className='flex mb-10 justify-center lg:justify-start'>
                        <p className='text-[#67718E] mr-2 text-sm'>Style Guide</p>
                        <p className='text-[#67718E] mr-2 text-sm'>Licence</p>
                        <p className='text-[#67718E] mr-2 text-sm'>Changelog</p>
                        </div>
        </div>
    );
};

export default Footer;