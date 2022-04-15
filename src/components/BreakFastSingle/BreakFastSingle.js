import React from 'react';

const BreakFastSingle = ({breakFastSingle}) => {
    const {img,des,price,name}=breakFastSingle
    return (
        <div className='hover:shadow-2xl w-64 p-5'>
            <img className='mx-auto mb-2' width={150} src={img} alt="" />
            <h2 className='text-lg'>{name}</h2>
            <p className='text-sm my-2'>{des}</p>
            <h4>${price}</h4>
        </div>
    );
};

export default BreakFastSingle;