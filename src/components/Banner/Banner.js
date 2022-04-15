import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div className='banner'>
            <div className='text-center child'>
                <h2 className='text-5xl text-center'>Best food withing for your belly</h2>
                <div className='mt-8 w-full'>
                    <input className='px-4 py-3 text-sm rounded-full w-1/4 border-hidden' type="text" name="" id="" placeholder='Search food items' />
                    <button className='text-sm px-6 py-3 bg-red-600 rounded-full text-white'>Search</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;