import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button, Card } from 'react-bootstrap';
import testImg from '../../images/programSlider3.png';
import './Programs.css';

const Programs = () => {
    
    return (
        <section>
            <div>
                <h1 className="tt-ourPrograms text-center">Our Programs</h1>
            </div>
            <div className="mt-5  row col-md-12 col-sm-12">
                <div className=" col-lg-4 col-md-6 col-sm-12 mb-3 d-flex justify-content-center">
                <Card  className="border-0" style={{ width: '28rem' }}>
                    <Card.Img id="imgCard" variant="top" src={testImg} />
                    <Card.Body>
                        <Card.Title>Adult In-Car Lessons</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Book Now</Button>
                    </Card.Body>
                </Card>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12  mb-3 d-flex justify-content-center">
                <Card  style={{ width: '28rem' }}>
                    <Card.Img variant="top" src={testImg} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12  mb-3 d-flex justify-content-center">
                <Card  style={{ width: '28rem' }}>
                    <Card.Img variant="top" src={testImg} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                </div>
        </div>
        </section>
    );
};

export default Programs;