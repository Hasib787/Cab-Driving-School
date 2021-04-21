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
                <div className="row text-center  manage-list-top mt-5 mx-0">
                    <div className="col-2"><strong>Name</strong></div>
                    <div className="col-2"><strong>Email ID</strong></div>
                    <div className="col-2"><strong>Service</strong></div>
                    <div className="col-2"><strong>Pay With</strong></div>
                    <div className="col-2"><strong>Status</strong></div>
                </div>
                <div className="row mt-3 text-center bg-light manage-list-top m-0">
                    <div className="col-2">Name</div>
                    <div className="col-2">Email</div>
                    <div className="col-2">Package Name</div>
                    <div className="col-2">Price</div>
                    <div className="col-2"><select class="form-select" aria-label="Default select example">
                        <option style={{color:'red'}} value="1">Pending</option>
                        <option style={{color:'orange'}} value="2">Ongoing</option>
                        <option style={{color:'green'}} value="3">Done</option>
                    </select></div>
                </div>
            </div>
        </div>
    );
};

export default OrderListDetails;