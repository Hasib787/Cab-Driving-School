import React from 'react';
import './DashboardHeader.css';

const DashboardHeader = () => {
    return (
        <section className="row col-lg-12">
            <div className="col-sm-12 col-md-3">
                <div className=" d-lg-block text-left sidebar px-5 d-md-flex">
                    <div>
                        <h2>Cab <span>Driving School</span></h2>
                    </div>
                    <div className="user-panel">
                        <a href="" className="linkmx-lg-4">
                            <h5>Book Now</h5>
                        </a>
                        <a href="" className="linkmx-lg-4">
                            <h5>Booking List</h5>
                        </a>
                        <a href="" className="linkmx-lg-4">
                            <h5>Review</h5>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DashboardHeader;