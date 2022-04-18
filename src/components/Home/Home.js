import React from 'react';
import Banner from '../Banner/Banner';
import PageTitle from '../Shared/PageTitle/PageTitle';
import ShowChoose from '../ShowChoose/ShowChoose';
import ShowFood from '../ShowFood/ShowFood';

const Home = () => {

    return (
        <div>
            <PageTitle title="home"></PageTitle>
            <Banner></Banner>
            <ShowFood></ShowFood>
            <ShowChoose></ShowChoose>

        </div>
    );
};

export default Home;