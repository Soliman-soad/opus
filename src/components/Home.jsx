import React from 'react';
import BeautifulComponenets from './HomeComponent/BeautifulComponenets';
import Header from './HomeComponent/Header';
import MakeBetter from './HomeComponent/MakeBetter';
import OtherCompany from './HomeComponent/OtherCompany';
import Projects from './HomeComponent/Projects';
import Video from './HomeComponent/Video';

const Home = () => {
    return (
        <>
         <Header/>   
         <OtherCompany/>
         <Video/>
         <MakeBetter/>
         <Projects/>
         <BeautifulComponenets/>
        </>
    );
};

export default Home;