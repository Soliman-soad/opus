import React from 'react';
import Header from './HomeComponent/Header';
import MakeBetter from './HomeComponent/MakeBetter';
import OtherCompany from './HomeComponent/OtherCompany';
import Video from './HomeComponent/Video';

const Home = () => {
    return (
        <>
         <Header/>   
         <OtherCompany/>
         <Video/>
         <MakeBetter/>
        </>
    );
};

export default Home;