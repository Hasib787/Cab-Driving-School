import React from 'react';
import DashboardHeader from '../../DashboardHeader/DashboardHeader'
import OrderDetails from './OrderDetails/OrderDetails';

const Orders = () => {
    return (
        <div className="row col-lg-12 col-sm-12">
            <div className="col-sm-12 col-lg-3">
                <DashboardHeader></DashboardHeader>
            </div>
            <div className="col-sm-12 col-lg-9">
                <OrderDetails></OrderDetails>
            </div>
        </div>
    );
};

export default Orders;