import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button, Card } from 'react-bootstrap';
import './Programs.css';
import { Link } from 'react-router-dom';

const Programs = (props) => {
        const {_id, title, description, addPrice, imageUrl} = props.program;
    return (

    <div className="col-lg-4 col-md-6 col-sm-12 mb-3 mt-5 d-flex justify-content-center">
        <Card className="cardItem border-0 shadow-lg p-3 mb-5 bg-white rounded" style={{ margin:'20px', width: '28rem' }}>
            <Card.Img id="imgCard" style={{ margin: '15px', height: '250px', width: '90%'}} variant="top"  src={imageUrl} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <div className="card-footer bg-transparent book-card-footer d-flex align-items-center justify-content-between ">
                        <h3 id="price" class="fw-bold fs-2">${addPrice}</h3>
                       { props.showAddToCart && 
                       <Link to={"/admin/bookNow/"+_id}>
                             <Button id="btn-order" onClick={()=>props.handleAddProduct(props.program)}
                              className="btn fw-bold px-2.5 py-1.5">Book Now</Button>
                        </Link>}     
                    </div>
            </Card.Body>
        </Card>
    </div>
 
    );
};

export default Programs;