import React from 'react';
import { Link } from 'react-router-dom';

const FoodHeader = () => {
    return (
        <div className='flex justify-center p-10'>
            <Link to='breakfast'>Breakfast</Link>
            <Link className='mx-14' to='/lunch'>Lunch</Link>
            <Link to='dinner'>Dinner</Link>
        </div>
    );
};

export default FoodHeader;