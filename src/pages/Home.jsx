import React from 'react';
import Hero from '../components/Hero';
import Strengths from '../components/Strengths';
import Organization from '../components/Organization';
import Areas from '../components/Courses';
import Activities from '../components/Activities';
import JoinUs from '../components/JoinUs';
import FAQ from '../components/FAQ';

const Home = () => {
    return (
        <>
            <Hero />
            <Strengths />
            <Organization />
            <Areas />
            <Activities />
            <JoinUs />
            <FAQ />
        </>
    );
};

export default Home;
