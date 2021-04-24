import React from 'react';
import DashboardHeader from '../../DashboardHeader/DashboardHeader';
import OrderListDetails from './OrderListDetails';

const OrderList = () => {
    return (
        <div>
            <div className="row col-lg-12 col-sm-12">
                <div className="col-sm-12 col-lg-3">
                    <DashboardHeader />
                </div>
                <div className="col-sm-12 col-lg-9">
                    <OrderListDetails></OrderListDetails>
                </div>
            </div>
        </div>
    );
};

export default OrderList;