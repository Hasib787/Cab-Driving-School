import React, { useEffect, useState } from 'react';
import { addToDatabaseCart, getDatabaseCart } from '../../../utilities/databaseManager';
import Loader from '../../Loader/Loader';
import Programs from './Programs';
import './ProgramLoadData.css';

const ProgramLoadData = () => {

    const [programs, setPrograms] = useState([]);
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://stormy-forest-84945.herokuapp.com/programs')
            .then(res => res.json())
            .then(data => {
                setPrograms(data)
                setLoading(false)
            })
    }, [])

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productIds = Object.keys(savedCart);

        fetch('https://stormy-forest-84945.herokuapp.com/bookitemByIds', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productIds)
        })
            .then(res => res.json())
            .then(data => setCart(data))
    }, []);

    const handleAddProduct = (serviceItem) => {
        const toBeAddedId = serviceItem._id;
        const sameProduct = cart.find(pd => pd._id === toBeAddedId);
        let count = 1;
        let newCart;
        if (sameProduct) {
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd._id !== toBeAddedId);
            newCart = [...others, sameProduct];
        } else {
            serviceItem.quantity = 1;
            newCart = [...cart, serviceItem];
        }
        setCart(newCart);
        addToDatabaseCart(serviceItem._id, count);
    }
    return (
        <div>
            <div>
                <h1 className="tt-ourPrograms text-center mt-5">Our Programs</h1>
            </div>

           <div className="row">
               
           { loading ? <Loader />
                        : programs.map(program => <Programs
                            key={program._id}
                            showAddToCart={true}
                            handleAddProduct={handleAddProduct}
                            program={program}
                        ></Programs>)
                }
           </div>
    
            
        </div>
    );
};

export default ProgramLoadData;