import React from 'react';
import DashboardHeader from '../../DashboardHeader/DashboardHeader';
import AddServiceForm from './AddServiceForm';


const AddService = () => {
    return (
        <div>
            <div className="row col-lg-12 col-sm-12">
                <div className="col-sm-12 col-lg-3">
                    <DashboardHeader />
                </div>
                <div className="col-sm-12 col-lg-9">
                    <AddServiceForm />
                </div>
            </div>
        </div>
    );
};

export default AddService;