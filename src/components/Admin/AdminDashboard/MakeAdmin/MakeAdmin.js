import React from 'react';
import AdminDashboardHeader from '../AdminDashboardHeader/AdminDashboardHeader';
import MakeAdminForm from './MakeAdminForm';

const MakeAdmin = () => {
    return (
        <div>
            <div className="row col-lg-12 col-sm-12">
                <div className="col-sm-12 col-lg-3">
                    <AdminDashboardHeader />
                </div>
                <div className="col-sm-12 col-lg-9">
                    <MakeAdminForm />
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;