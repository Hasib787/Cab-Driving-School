import React from 'react';
import DashboardHeader from '../../DashboardHeader/DashboardHeader';
import BookDetails from './BookDetails/BookDetails';

const BookNow = () => {
    return (
        <div className="row col-lg-12">
            <div className=" col-lg-3 col-md-3 col-sm-12">
                <DashboardHeader></DashboardHeader>
            </div>
            <div className=" col-lg-9 col-md-9 col-sm-12">
                <BookDetails></BookDetails>
            </div>
        </div>
    );
};

export default BookNow;