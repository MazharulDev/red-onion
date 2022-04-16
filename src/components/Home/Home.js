import React from 'react';
import Banner from '../Banner/Banner';
import ShowChoose from '../ShowChoose/ShowChoose';
import ShowFood from '../ShowFood/ShowFood';

const Home = () => {
    return (
        <div>
            
           <Banner></Banner>
           <ShowFood></ShowFood>
           <ShowChoose></ShowChoose>
           
        </div>
    );
};

export default Home;