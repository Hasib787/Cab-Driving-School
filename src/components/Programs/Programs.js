import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button, Card } from 'react-bootstrap';
import testImg from '../../images/car-blue.jpg';
import './Programs.css';

const Programs = () => {

    return (
        <section>
            <div>
                <h1 className="tt-ourPrograms text-center">Our Programs</h1>
            </div>
            <div className="mt-5  row col-md-12 col-sm-12">
                <div className=" col-lg-4 col-md-6 col-sm-12 mb-3 d-flex justify-content-center">
                    <Card className="cardItem border-0 shadow-lg p-3 mb-5 bg-white rounded" style={{ width: '28rem' }}>
                        <Card.Img id="imgCard" variant="top" src={testImg} />
                        <Card.Body>
                            <Card.Title className="mt-3">Adult In-Car Lessons</Card.Title>
                            <Card.Text>
                                All Inclusive programs provide the student with 30 hours of class, and all class materials. We offer weekday classes,
                                Saturday/Sunday classes, Saturday only, and Sunday only classes
                        </Card.Text>
                            <h4>$</h4>
                            <Button id="btn-order" variant="primary">Book Now</Button>
                        </Card.Body>
                    </Card>
                </div>
                </div>
        </section>
    );
};

export default Programs;