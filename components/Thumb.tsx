
import React, { useState } from 'react';
import { FaThumbsDown, FaThumbsUp } from 'react-icons/fa';

const Thumb = () => {
    const [active, setActive] = useState<'up' | 'down' | null>(null);

    return (
        <div className='flex flex-row items-center gap-6 my-2'>
            <div 
                className='flex p-2 items-center gap-3 cursor-pointer' 
                onClick={() => setActive(active === 'down' ? null : 'down')}
            >
                <FaThumbsDown size={50} color={active === 'down' ? '#f00' : '#D3D3D3'} />
                <p className='text-lg font-medium'>No</p>
            </div>
            <div 
                className='flex p-2 items-center gap-3 cursor-pointer' 
                onClick={() => setActive(active === 'up' ? null : 'up')}
            >
                <FaThumbsUp size={50} color={active === 'up' ? '#0f0' : '#D3D3D3'} />
                <p className='text-lg font-medium'>Yes</p>
            </div>
        </div>
    );
}

export default Thumb;
