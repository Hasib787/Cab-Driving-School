import { Carousel } from 'react-bootstrap';
import React from 'react';
import HeaderNav from '../HeaderNav/HeaderNav';
import sliderimg1 from '../../images/slider/car-1.jpg';
import sliderimg2 from '../../images/slider/car-2.jpg';
import sliderimg3 from '../../images/slider/car-3.jpg';
import './Header.css';

const Header = () => {

    return (
        <div>
            <HeaderNav></HeaderNav>
            <div className="Slider">
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={sliderimg1}
                            alt="First slide"
                        />
                        <Carousel.Caption id="slider-caption">
                            <h1>We Learn to <span style={{ color: "orange" }}>Drive Easy</span></h1>
                            <p>We can educate even a Chico</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={sliderimg2}
                            alt="Second slide"
                        />

                        <Carousel.Caption id="slider-caption2">
                            <h2>Smart driver start here</h2>
                            <h1><span style={{ color: 'orange' }}>Friendly</span> & <span style={{ color: 'orange' }}>Patient</span> Instructors</h1>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={sliderimg3}
                            alt="Third slide"
                        />

                        <Carousel.Caption id="slider-caption3">
                            <h1> <span style={{ color: "orange" }}>We Learn to</span> Drive Save</h1>
                            <h2>Come and you will love it</h2>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            {/* <nav className="container navbar navbar-expand-lg navbar-light">

                <div className="container d-flex justify-content-right">
                    <div><h2>CAB DRIVING SCHOOL</h2></div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <ul className="navbar-nav  fw-bold">
                            <li className="nav-item">
                                <p><a><Link to="/home">Home</Link></a></p>
                            </li>
                            <li className="nav-item">
                                <p> <a><Link to="/about">About Us</Link></a></p>
                            </li>
                            <li className="nav-item">
                                <p><a><Link to="/programs">Programs</Link></a></p>
                            </li>
                            <li className="nav-item">
                                <p><a><Link to="/deals">Deals</Link></a></p>
                            </li>
                            <li className="nav-item">
                                <p> <a><Link to="/admin">Admin</Link></a></p>
                            </li>
                            <li className="nav-item">

                                <Link to="/login"><Button id="btn" variant="contained" >Login</Button>
                                </Link>

                            </li>
                        </ul>
                    </div>
                </div>
            </nav> */}
        </div>
    );
};

export default Header;