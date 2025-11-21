import React from 'react';
import Banner from './components/Banner';
import Funcard from './components/Funcard';
import TutorPrice from './components/TutorPrice';
import Testimonial from './components/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Funcard></Funcard>
            <TutorPrice></TutorPrice>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;