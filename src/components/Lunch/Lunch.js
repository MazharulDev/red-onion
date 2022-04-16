import React, { useEffect, useState } from 'react';
import LunchSingle from '../LunchSingle/LunchSingle';

const Lunch = () => {
    const [lunch,setLunch]=useState([]);
    useEffect(()=>{
        fetch('lunch.json')
        .then(res=>res.json())
        .then(data=>setLunch(data))
    },[])
    return (
        <div className='grid grid-cols-3 text-center gap-16 w-fit mx-auto mb-10'>
            {
                lunch.map(lunchSingle=><LunchSingle key={lunchSingle.id} lunchSingle={lunchSingle}></LunchSingle>)
            }
        </div>
    );
};

export default Lunch;