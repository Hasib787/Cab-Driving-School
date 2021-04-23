import React, { useEffect, useState } from 'react';
import './ManageServiceDetails.css'
import deleteIcon from '../../../../images/icons/delete.png';

const ManageServiceDetails = () => {
    
    const [programs, setPrograms] = useState([]);

    useEffect(() => {
        fetch('https://stormy-forest-84945.herokuapp.com/programs')
            .then(res => res.json())
            .then(data => {
                setPrograms(data)
            })
    }, [])

    
    const handleDeleteItem = _id => {
        console.log('delete clicked', programs.id)
        fetch(`https://stormy-forest-84945.herokuapp.com/deleteService/${_id}`, {
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
            {
                programs.map(program=>
                <div key={program._id} className="row mt-3 text-center bg-white manage-list-top m-0">
                <div className="col-3"><strong>{program.title}</strong></div>
                <div className="col-3"><strong>{program.addPrice}</strong></div>
                <div className="col-3">
                    <a id="deleteIcon" onClick={() => handleDeleteItem(program._id)}><img src={deleteIcon} alt="" /></a>
                </div>
            </div>
                    )
            }
        </div>
        </div>
    );
};

export default ManageServiceDetails;