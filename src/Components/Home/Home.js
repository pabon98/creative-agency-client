import React from 'react';
import Banner from '../Banner/Banner';
import Navbar from '../Navbar/Navbar';
import Partners from '../Partners/Partners';
import Services from '../Services/Services';
import Portfolio from '../Portfolio/portfolio'
import Reviews from '../Reviews/Reviews';
import Contact from '../Contact/Contact';


const Home = () => {
    return (
        <div>
         <Navbar></Navbar>
         <Banner></Banner>
         <Partners></Partners>
         <Services></Services>
         <Portfolio></Portfolio>
         <Reviews></Reviews>
         <Contact></Contact>
         

        </div>
    );
};

export default Home;