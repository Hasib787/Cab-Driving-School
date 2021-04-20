import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer text-center mt-5 row col-lg-12">
            <div className="col-md-6 col-sm-12">
                <h1>Address</h1>
                <p>Office:- 59/F </p>
                <p>TDM Mohona Tower (2nd floor) </p>
                <p>West Rajabazar, Panthapath, Dhaka-1215</p>
            </div>
            <div className="col-md-6 col-sm-12">
                <h3 style={{color:'orange'}}>CONNECT WITH US</h3>
            </div>
            <p id="copyRight">COPY ©2021 Cab Driving School</p>
        </div>
    );
};

export default Footer;