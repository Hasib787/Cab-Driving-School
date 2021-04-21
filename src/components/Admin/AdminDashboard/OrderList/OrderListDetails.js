import React from 'react';
import './OrderListDetails.css';

const OrderListDetails = () => {
    return (
        <div>
            <div>
            <div>
                <h3 className="mb-4 mt-5 text-left text-brand rounded bg-light p-3">
                    Order List</h3>
            </div>
            <div className="row text-center manage-list-top mt-5 mx-0">
                <div className="col-2"><strong>Name</strong></div>
                <div className="col-2"><strong>Email ID</strong></div>
                <div className="col-2"><strong>Service</strong></div>
                <div className="col-2"><strong>Pay With</strong></div>
                <div className="col-2"><strong>Status</strong></div>
            </div>
            <div className="row mt-3 text-center bg-white manage-list-top m-0">
                <div className="col-2"><strong>Name</strong></div>
                <div className="col-2"><strong>Email</strong></div>
                <div className="col-2"><strong>Package Name</strong></div>
                <div className="col-2"><strong>Price</strong></div>
                <div className="col-2"><strong><button className="btn btn-success m-1">pending</button></strong></div>
            </div>
        </div>
        </div>
    );
};

export default OrderListDetails;