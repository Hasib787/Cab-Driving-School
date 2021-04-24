import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../../App';
import DashboardHeader from '../../DashboardHeader/DashboardHeader';
import OrderListDetails from './OrderListDetails';

const OrderList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch('https://stormy-forest-84945.herokuapp.com/ordersById', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])

    return (
        <div>
            <div className="row col-lg-12 col-sm-12">
                <div className="col-sm-12 col-lg-3">
                    <DashboardHeader />
                </div>
                <div className="col-sm-12 col-lg-9">
                    <OrderListDetails orders={orders}></OrderListDetails>
                </div>
            </div>
        </div>
    );
};

export default OrderList;