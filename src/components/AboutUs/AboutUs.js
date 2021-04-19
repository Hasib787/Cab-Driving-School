import React from 'react';
import safety from '../../images/icons/safty.JPG';
import people from '../../images/icons/people.JPG';
import time from '../../images/icons/time.JPG';
import fee from '../../images/icons/fee.JPG';
import classF from '../../images/icons/classF.JPG';
import payment from '../../images/icons/payment.JPG';
import './AboutUs.css';


const AboutUs = () => {
    return (
        <section id="aboutus" className=" container mt-5 col-sm-12 col-md-12 col-lg-12">
            <div className="t-why-use text-center">
                <h1>Why Choose Us?</h1>
                <p className="text-secondary">We understand that learning to drive isn’t cheap, many 
                    driving schools will take advantage of this and charge you <br/> a larger
                    sum than necessary; not us.</p>
            </div>
            <div className="row text-center mt-5 d-flex justify-content-center">
                <div className="carditem col-sm-12 col-md-6 col-lg-4">
                    <img src={safety} alt=""/>
                    <h5>BEST SAFETY MEASURES</h5>
                    <p className="text-secondary">Our Instructors are Highly Trained in the <br/> latest Safety Techniques & Rules of the <br/> Road.</p>
                </div>

                <div className="carditem col-sm-12 col-md-6 col-lg-4">
                    <img src={people} alt=""/>
                    <h5>EXPERIENCED INSTRUCTORS</h5>
                    <p className="text-secondary">All our Instructors are DMV Licensed, <br/> mentally and physically fit and have <br/> decade or
                        more of Instruction History.</p>
                </div>

                <div className="carditem col-sm-12 col-md-6 col-lg-4">
                    <img src={time} alt=""/>
                    <h5>PERFECT TIMING</h5>
                    <p className="text-secondary">Now is the perfect time to start your In <br/> Class, Online or Behind The Wheel <br/> Training.</p>
                </div>

                <div className="carditem col-sm-12 col-md-6 col-lg-4">
                    <img src={fee} alt=""/>    
                    <h5>AFFORDABLE FEE</h5>
                    <p className="text-secondary">We know this process can be expensive. <br/> So we constantly monitor our <br/> competitions pricing.</p>
                </div>

                <div className="carditem col-sm-12 col-md-6 col-lg-4">
                    <img src={classF} alt=""/>
                    <h5>CLASS FORMATS</h5>
                    <p className="text-secondary">We offer In Classroom Drivers Education <br/> as well as Online Drivers Education.</p>
                </div>

                <div className="carditem col-sm-12 col-md-6 col-lg-4">
                    <img src={payment} alt=""/>
                    <h5>PAYMENT PLANS</h5>
                    <p className="text-secondary">We allow you to decide when and how you <br/> want to pay. We accept all major forms of <br/> payments.</p>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;