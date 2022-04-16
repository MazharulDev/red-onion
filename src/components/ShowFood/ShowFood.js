import React from 'react';
import { Outlet } from 'react-router-dom';
import FoodHeader from '../FoodHeader/FoodHeader';

const ShowFood = () => {
    return (
        <div>
            <FoodHeader></FoodHeader>
            <div>
                <Outlet></Outlet>
            </div>
            <div className='flex justify-center mb-5'>
                <button className='bg-gray-300 text-white px-8 py-2 rounded-md hover:bg-red-600'>Checkout Your Food</button>
            </div>
        </div>
    );
};

export default ShowFood;