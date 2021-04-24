import React from 'react';
import './Checkout.css';
import ProcessPayment from '../BookNow/ProcessPayment/ProcessPayment';
import DashboardHeader from '../../DashboardHeader/DashboardHeader';

const Checkout = () => {
    return (
        <div>
            <div className="row col-lg-12">
                <div className=" col-lg-3 col-md-3 col-sm-12">
                    <DashboardHeader></DashboardHeader>
                </div>
                <div className=" col-lg-9 col-md-9 col-sm-12">
                    <div className="payment-info">
                        <h3 className="mb-4 mt-5 text-left text-brand rounded bg-light p-3">
                            Make Payment</h3>
                    </div>
                    <div className="payment-form w-50 mb-5">
                        <ProcessPayment></ProcessPayment>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Checkout;