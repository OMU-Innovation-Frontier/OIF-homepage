import React from 'react';
import Hero from '../components/Hero';
import Strengths from '../components/Strengths';
import Organization from '../components/Organization';
import Areas from '../components/Courses';
import JoinUs from '../components/JoinUs';
import FAQ from '../components/FAQ';

const Home = () => {
    return (
        <>
            <Hero />
            <Strengths />
            <Organization />
            <Areas />
            <JoinUs />
            <FAQ />
        </>
    );
};

export default Home;
