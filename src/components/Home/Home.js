import React from 'react';
import Header from './Header/Header';
import './Home.css';
import AboutUs from './AboutUs/AboutUs';
import Footer from '../Shared/Footer/Footer'
import AboutInfo from './AboutInfo/AboutInfo';
import TestimonialLoadData from './Testimonial/TestimonialLoadData';
import ProgramLoadData from './Programs/ProgramLoadData';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <AboutInfo></AboutInfo>
            <ProgramLoadData></ProgramLoadData>
            <AboutUs></AboutUs>
            <TestimonialLoadData></TestimonialLoadData>
            <Footer></Footer>
        </div>
    );
};

export default Home;