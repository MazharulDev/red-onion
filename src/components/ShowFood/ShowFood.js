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
        </div>
    );
};

export default ShowFood;