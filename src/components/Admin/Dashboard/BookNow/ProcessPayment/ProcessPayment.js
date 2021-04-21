import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';





const stripePromise = loadStripe('pk_test_51IfDb4BioGMnkIPG0h9x4j8eeFW1xQoO3i0TXhQoEBMcmgp8vcwhH1jkQAqhgysYRZccp6JTcWypP3WHXYUcdjox00vTTu5vRk');


const ProcessPayment = () => {
    return (
        <div>
            <Elements stripe={stripePromise}>
                <SimpleCardForm/>
            </Elements> 
        </div>
    );
};

export default ProcessPayment;