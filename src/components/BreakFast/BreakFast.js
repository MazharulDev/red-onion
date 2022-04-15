import React, { useEffect, useState } from 'react';
import BreakFastSingle from '../BreakFastSingle/BreakFastSingle';

const BreakFast = () => {
    const [breakFast,setBreakFast]=useState([]);
    
    useEffect(()=>{
        fetch('breakfast.json')
        .then(res=>res.json())
        .then(data=>setBreakFast(data));
    },[])
    return (
        <div className='grid grid-cols-3 text-center gap-16 w-fit mx-auto mb-10'>
            {
                breakFast.map(breakFastSingle=><BreakFastSingle key={breakFastSingle.id} breakFastSingle={breakFastSingle}></BreakFastSingle>)
            }
        </div>
    );
};

export default BreakFast;