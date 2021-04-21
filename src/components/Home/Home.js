import React from 'react';
import Header from './Header/Header';
import './Home.css';
import AboutUs from './AboutUs/AboutUs';
import Footer from '../Shared/Footer/Footer'
import Programs from './Programs/Programs';
import AboutInfo from './AboutInfo/AboutInfo';
import TestimonialLoadData from './Testimonial/TestimonialLoadData';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <AboutInfo></AboutInfo>
            <Programs></Programs>
            <AboutUs></AboutUs>
            <TestimonialLoadData></TestimonialLoadData>
            <Footer></Footer>
        </div>
    );
};

export default Home;