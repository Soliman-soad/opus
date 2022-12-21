import React from 'react';
import { Player } from 'video-react';

const Video = () => {
    return (
        <div className='mx-64 relative'>
            <div>
                <h6 className='text-sm text-gray-600 font-bold uppercase'>Video title</h6>
                <h2 className='text-[#061237] font-bold text-[44px]'>Inform users with video sections</h2>
                <div className='w-[64px] h-[64px] bg-[#F2F3F8] absolute -left-10 -top-8 -z-10'></div>
            </div>
            <div className=' mx-auto'>
            <Player
            
      playsInline
      poster="/assets/poster.png"
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    />
            </div>
            <div className='w-[450px] h-[108px] absolute right-0'><p className='text-[18px] font-[400px] text-[#37456C]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat. Praesent pulvinar arcu non lectus dapibus, a pulvinar mauris aliquam.</p></div>
            <div className='w-[92px] h-[92px] bg-[#F2F3F8] absolute -left-24'></div>
        </div>
    );
};

export default Video;