import React from 'react';
import { Button,Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="container">
            <Navbar bg="light" className="text-uppercase fw-bold"  expand="lg">
                <Navbar.Brand className="ms-5" href="#home">Cab Driving School</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto" id="navName">
                    <Link to="/home"><Nav.Link className="active ms-5" href="#home">Home</Nav.Link></Link>
                        <Nav.Link id="about" className="active ms-5" href="#link">About us</Nav.Link> 
                        <Nav.Link className="active ms-5" href="#link">Programs</Nav.Link>
                        <Nav.Link className="active ms-5" href="#link">Blogs</Nav.Link> 
                        <Nav.Link className="active ms-5" href="#link">Testimonial</Nav.Link> 
                        <Nav.Link className=" ms-5" href="#link">Admin</Nav.Link>  
                        <Link to="/login"><Button className="ms-5 me-4">Login</Button></Link>
                    </Nav>
                    
                </Navbar.Collapse>
            </Navbar>

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