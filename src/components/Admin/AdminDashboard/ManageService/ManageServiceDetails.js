import React from 'react';
import './ManageServiceDetails.css'
import deleteIcon from '../../../../images/icons/delete.png';

const ManageServiceDetails = (props) => {
    const {_id, title, price} = props;
    const handleDeleteItem = id => {
        console.log('delete clicked', _id)
        fetch(`https://stormy-forest-84945.herokuapp.com/deleteService/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result) {

                }
            })
    }

    return (
        <div>
            <div>
            <div>
                <h3 className="mb-4 mt-5 text-left text-brand rounded bg-light p-3">
                    Manage Service</h3>
            </div>
            <div className="row text-center manage-list-top mt-5 mx-0">
                <div className="col-3"><strong>Service Title</strong></div>
                <div className="col-3"><strong>Price</strong></div>
                <div className="col-3"><strong>Delete</strong></div>
            </div>
            <div className="row mt-3 text-center bg-white manage-list-top m-0">
                <div className="col-3"><strong>Name</strong></div>
                <div className="col-3"><strong>Price</strong></div>
                <div className="col-3">
                    <a id="deleteIcon" onClick={() => handleDeleteItem(_id)}><img src={deleteIcon} alt="" /></a>
                </div>
            
            </div>
        </div>
        </div>
    );
};

export default ManageServiceDetails;