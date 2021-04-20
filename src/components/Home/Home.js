import React from 'react';
import Header from './Header/Header';
import './Home.css';
import AboutUs from './AboutUs/AboutUs';
import Testimonial from './Testimonial/Testimonial';
import Footer from '../Shared/Footer/Footer'
import Programs from './Programs/Programs';
import AboutInfo from './AboutInfo/AboutInfo';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <AboutInfo></AboutInfo>
            <Programs></Programs>
            <AboutUs></AboutUs>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
    );
};

export default Home;