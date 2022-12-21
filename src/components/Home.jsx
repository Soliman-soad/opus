import React from 'react';
import BeautifulComponenets from './HomeComponent/BeautifulComponenets';
import Feature from './HomeComponent/Feature';
import Footer from './HomeComponent/Footer';
import Header from './HomeComponent/Header';
import Knowladge from './HomeComponent/Knowladge';
import MakeBetter from './HomeComponent/MakeBetter';
import OtherCompany from './HomeComponent/OtherCompany';
import Projects from './HomeComponent/Projects';
import Resource from './HomeComponent/Resource';
import Stamps from './HomeComponent/Stamps';
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
         <Feature/>
         <Knowladge/>
         <Stamps/>
         <Resource/>
         <Footer/>
        </>
    );
};

export default Home;