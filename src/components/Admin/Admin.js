import React from 'react';
import BookNow from './Dashboard/BookNow/BookNow';
import Dashboard from './Dashboard/Dashboard';
import DashboardHeader from './DashboardHeader/DashboardHeader';

const Admin = () => {
    return (
        <div>
            <DashboardHeader></DashboardHeader>
            <Dashboard></Dashboard>
            <BookNow></BookNow>
        </div>
    );
};

export default Admin;