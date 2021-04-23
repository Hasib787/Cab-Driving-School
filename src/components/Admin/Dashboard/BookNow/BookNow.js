import React from 'react';
import DashboardHeader from '../../DashboardHeader/DashboardHeader';
import BookDetails from './BookDetails/BookDetails';
import ProcessPayment from './ProcessPayment/ProcessPayment';

const BookNow = () => {
    return (
        <div className="row col-lg-12">
            <div className=" col-lg-3 col-md-3 col-sm-12">
                <DashboardHeader></DashboardHeader>
            </div>
            <div className=" col-lg-9 col-md-9 col-sm-12">
                <ProcessPayment></ProcessPayment>
            </div>
        </div>
    );
};

export default BookNow;