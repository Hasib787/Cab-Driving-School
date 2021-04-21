import React, { useContext } from 'react';
import { UserContext } from '../../App';
import BookDetails from './Dashboard/BookNow/BookDetails/BookDetails';
import DashboardHeader from './DashboardHeader/DashboardHeader';

const Admin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="row">
            <div className="col-sm-12 col-md-3">
                <DashboardHeader></DashboardHeader>
            </div>
            <div className="mt-3 col-lg-9">
                <h1>Hi {loggedInUser.name} Welcome to Dashboard</h1>
                <BookDetails></BookDetails>
            </div>
        </div>
    );
};

export default Admin;