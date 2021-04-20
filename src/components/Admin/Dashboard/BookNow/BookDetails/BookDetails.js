import React from 'react';
import './BookDetails.css';
import car from '../../../../../images/car-blue.jpg';
import ProcessPayment from '../ProcessPayment/ProcessPayment';

const BookDetails = () => {
    return (
        <div>
            <div>
                <h3 className="mb-4 mt-5 text-left text-brand rounded bg-light p-3">
                YOUR SELECTED PACKAGE</h3>
            </div>
            <div className="d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center">
                        <div className="m-3 card" style={{width: '22rem'}}>
                            <img className="card-img-top"  src={car} alt=""/>
                            <div className="card-body">
                                <div className="card-title">
                                    <h5>Class</h5>
                                </div>
                                <p className="ctext card-text">$</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="payment-info">
                <h3 className="mb-4 mt-5 text-left text-brand rounded bg-light p-3">
                Make Payment</h3>
                <div>
                    
                        <div className="payment-form w-50">
                            <ProcessPayment></ProcessPayment>
                        </div>
                    
                </div>
            </div>

        </div>
    );
};

export default BookDetails;