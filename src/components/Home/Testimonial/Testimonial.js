import { Carousel } from 'react-bootstrap';
import React from 'react';
import './Testimonial.css';


const Testimonial = () => {
    return (
        <div id="testimonials" className="testimonial mt-5">
            <div className="t-testimonial text-center">
                <h1>TESTIMONIALS</h1>
            </div>
            <div className="testimonial-carousel">
                <div className="d-flex justify-content-center text-center review-holder">
                    <div className="d-flex justify-content-center text-center carousel slide">
                    <Carousel>
                        <Carousel.Item>
                            <div className="review-card border-0 card">
                                <div className="tbody">
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis quibusdam minus debitis repellat quidem! Maxime error voluptatem fuga dicta! Magnam autem impedit commodi sed nemo</p>
                                    <div className="card-title"><h5>Hasib</h5></div>
                                    <div className="mb-2 text-muted card-subtitle">
                                        <h6>Hello</h6>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="review-card border-0 card">
                                <div className="tbody">
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis quibusdam minus debitis repellat quidem! Maxime error voluptatem fuga dicta! Magnam autem impedit commodi sed nemo</p>
                                    <div className="card-title"><h5>surovi</h5></div>
                                    <div className="mb-2 text-muted card-subtitle">
                                        <h6>Hello</h6>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="review-card border-0 card">
                                <div className="tbody">
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis quibusdam minus debitis repellat quidem! Maxime error voluptatem fuga dicta! Magnam autem impedit commodi sed nemo</p>
                                    <div className="card-title"><h5>Hasib</h5></div>
                                    <div className="mb-2 text-muted card-subtitle">
                                        <h6>Hello</h6>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;