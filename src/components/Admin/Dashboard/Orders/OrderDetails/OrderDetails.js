import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from '../../../../../App';
import './OrderDetails.css';

const OrderDetails = () => {
    const [orders, setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('https://stormy-forest-84945.herokuapp.com/orders?email=' + loggedInUser.email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setOrders(data));
            
    }, [])
    return (
        <div>
            
            <div>
                <h3 className="mb-4 mt-5 text-left text-brand rounded bg-light p-3">
                    Orders</h3>
            </div>
            <div className="row text-center manage-list-top mt-5 mx-0">
                <div className="col-2"><strong>Name</strong></div>
                <div className="col-2"><strong>Email</strong></div>
                <div className="col-2"><strong>Package Name</strong></div>
                <div className="col-2"><strong>Price</strong></div>
                <div className="col-2"><strong>Status</strong></div>
            </div>
           {
               orders.map(order => <div key={order._id} className="row mt-3 text-center bg-white manage-list-top m-0">
               <div className="col-2"><strong>{loggedInUser.name}</strong></div>
               <div className="col-2"><strong>{loggedInUser.email}</strong></div>
               <div className="col-2"><strong>{order.title}</strong></div>
               <div className="col-2"><strong>{order.addPrice}</strong></div>
               <div className="col-2"><strong><button className="btn btn-success m-1">pending</button></strong></div>
           </div>)
           }
        </div>
    );
};

export default OrderDetails;