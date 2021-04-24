import React, { useEffect, useState } from 'react';
import './OrderListDetails.css';

const OrderListDetails = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://stormy-forest-84945.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => {
                setOrders(data)
            })
    }, [])
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
                {
                    orders.map(order=> <div key={order._id} className="row mt-3 text-center bg-light manage-list-top m-0">
                    <div className="col-2">{order.name}</div>
                    <div className="col-2">{order.email}</div>
                    <div className="col-2">{order.title}</div>
                    <div className="col-2">{order.addPrice}</div>
                    <div className="col-2"><select class="form-select" aria-label="Default select example">
                        <option style={{color:'red'}} value="1">Pending</option>
                        <option style={{color:'orange'}} value="2">Ongoing</option>
                        <option style={{color:'green'}} value="3">Done</option>
                    </select></div>
                </div>)
                }
            </div>
        </div>
    );
};

export default OrderListDetails;