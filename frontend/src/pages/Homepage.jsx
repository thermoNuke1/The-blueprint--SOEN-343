import React from 'react';
import CustomNavBar from '../components/Navbar/navbar';
import Hero from '../components/Hero/hero';
import FeaturesOverview from '../components/FeaturesOverview/featuresoverview';

function Homepage() {
    return (
    <>
        <CustomNavBar></CustomNavBar>
        <Hero></Hero>
        <FeaturesOverview></FeaturesOverview>
    </>
    );
}

export default Homepage;