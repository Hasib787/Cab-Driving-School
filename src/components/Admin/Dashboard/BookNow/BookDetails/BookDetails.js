import React, {useState, useEffect, useContext} from 'react';
import './BookDetails.css';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import { useParams } from 'react-router';
import { UserContext } from '../../../../../App';

const BookDetails = () => {
    const {bookId} = useParams();
    const [product, setProduct] = useState([]) 
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(()=>{
        fetch('https://stormy-forest-84945.herokuapp.com/programItem/'+bookId)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[bookId])

    const handleOrder = () => {
        // ...selectedDate
        const newBookings = {...loggedInUser, ...product};
        fetch('https://stormy-forest-84945.herokuapp.com/addOrder',{
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newBookings)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
     }
    return (
        <div>
            <div>
                <h3 className="mb-4 mt-5 text-left text-brand rounded bg-light p-3">
                YOUR SELECTED PACKAGE</h3>
            </div>
            <div className="d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center">
                        <div className="m-3 card" style={{width: '22rem'}}>
                            <img className="card-img-top"  src={product.imageUrl} alt=""/>
                            <div className="card-body">
                                <div className="card-title">
                                    <h5>{product.title}</h5>
                                </div>
                                <p className="ctext card-text">${product.addPrice}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
            <div>
                <button class="btn btn-success" onClick={handleOrder}>Place Order</button>
            </div>

            <div className="payment-info">
                <h3 className="mb-4 mt-5 text-left text-brand rounded bg-light p-3">
                Make Payment</h3>
                <div>
                    
                        <div className="payment-form w-50 mb-5">
                            <ProcessPayment ></ProcessPayment>
                        </div>
                    
                </div>
            </div>

        </div>
    );
};

export default BookDetails;