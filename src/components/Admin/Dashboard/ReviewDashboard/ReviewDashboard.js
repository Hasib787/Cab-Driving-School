import React from 'react';
import DashboardHeader from '../../DashboardHeader/DashboardHeader';
import Review from './Review/Review';



const ReviewDashboard = () => {
    
    return (
        <div>
            <div className="row col-lg-12 d-flex mr-0">
                <div className="col-sm-12 col-lg-3">
                    <DashboardHeader></DashboardHeader>
                </div>
                <div className="col-sm-12 col-lg-9">
                    <Review></Review>
                </div>
            </div>
        </div>
    );
};

export default ReviewDashboard;