import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const FoodHeader = () => {
    return (
        <div className='flex justify-center p-10'>
            <CustomLink to='breakfast'>Breakfast</CustomLink>
            <CustomLink className='mx-14' to='/lunch'>Lunch</CustomLink>
            <CustomLink to='dinner'>Dinner</CustomLink>
        </div>
    );
};

export default FoodHeader;