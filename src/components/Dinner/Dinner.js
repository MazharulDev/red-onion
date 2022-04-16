import React, { useEffect, useState } from 'react';
import DinnerSingle from '../DinnerSingle/DinnerSingle';

const Dinner = () => {
    const [dinner,setDinner]=useState([]);
    useEffect(()=>{
        fetch('dinner.json')
        .then(res=>res.json())
        .then(data=>setDinner(data))
    },[])
    return (
        <div className='grid grid-cols-3 text-center gap-16 w-fit mx-auto mb-10'>
            {
                dinner.map(dinnerSingle=><DinnerSingle key={dinnerSingle.id} dinnerSingle={dinnerSingle}></DinnerSingle>)
            }
        </div>
    );
};

export default Dinner;