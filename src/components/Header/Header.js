import React from 'react';
import HeaderNav from '../HeaderNav/HeaderNav';

import './Header.css';

const Header = () => {
    return (
        <div>
           <HeaderNav></HeaderNav>

            {/* <nav className="container navbar navbar-expand-lg navbar-light">

                <div className="container d-flex justify-content-right">
                    <div><h2>CAB DRIVING SCHOOL</h2></div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <ul className="navbar-nav  fw-bold">
                            <li className="nav-item">
                                <p><a><Link to="/home">Home</Link></a></p>
                            </li>
                            <li className="nav-item">
                                <p> <a><Link to="/about">About Us</Link></a></p>
                            </li>
                            <li className="nav-item">
                                <p><a><Link to="/programs">Programs</Link></a></p>
                            </li>
                            <li className="nav-item">
                                <p><a><Link to="/deals">Deals</Link></a></p>
                            </li>
                            <li className="nav-item">
                                <p> <a><Link to="/admin">Admin</Link></a></p>
                            </li>
                            <li className="nav-item">

                                <Link to="/login"><Button id="btn" variant="contained" >Login</Button>
                                </Link>

                            </li>
                        </ul>
                    </div>
                </div>
            </nav> */}
        </div>
    );
};

export default Header;