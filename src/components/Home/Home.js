import React from 'react';
import Header from '../Header/Header';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import whitecar from '../../images/whitecar.png';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <section className="row col-md-12 car-ready">
                    <div className="col-md-6">
                        <img src={whitecar} alt="" className="img-fluid"/>
                    </div>
                    <div className="col-sm-12 col-md-6 pull-right" >
                        <h1>Are You Ready?</h1>
                        <p className="text-secondary">Since 1986, throughout the area, School of Driving has earned a reputation for responsible and caring driving instruction. Throughout USA, Europe and others, wherever you live, with our professional and friendly local driving instructors, you’ll enjoy a relaxed, positive and encouraging environment as you start your driving lessons and learn to drive.</p>
                        <ul className="list-icon text-secondary offset-top">
                        <li><FontAwesomeIcon icon={faCheckCircle} /> We know all of the different test routes</li>
                            <li><FontAwesomeIcon icon={faCheckCircle} /> Plate Learn with a company that cares, more than just an offer!</li>
                            <li><FontAwesomeIcon icon={faCheckCircle} /> Plate First driving lessons from just $20</li>
                            <button id="btn-order" className="btn btn-primary">ORDER NOW</button>
                        </ul>
                    </div>
            </section>
        </div>
    );
};

export default Home;