import { Carousel } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import Loader from '../../Loader/Loader';
import Testimonial from './Testimonial';
import './TestimonialLoadData.css';

const TestimonialLoadData = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const url = `http://localhost:5000/reviews`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setReviews(data)
                setLoading(false)
            })
    }, [])


    return (
        <div>
            <div id="testimonials" className="testimonial mt-5">
            <div className="t-testimonial text-center">
                <h1>TESTIMONIALS</h1>
            </div>
            
            <div className="testimonial-carousel">
                <div className="d-flex justify-content-center text-center review-holder">
                    <div className="d-flex justify-content-center text-center carousel slide">
                    {
                loading ? <Loader /> :
                    reviews.map(review =>
                        <Carousel key={review._id}>
                            <Carousel.Item>
                                <div className="review-card border-0 card">
                                    <div className="tbody">
                                        <p>{review.description}</p>
                                        <div className="card-title"><h5>{review.name}</h5></div>
                                        <div className="mb-2 text-muted card-subtitle">
                                            <h6>{review.company}</h6>
                                        </div>
                                    </div>
                                </div>
                            </Carousel.Item>
                        </Carousel>)
            }
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default TestimonialLoadData;