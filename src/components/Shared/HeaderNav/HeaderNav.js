import React from 'react';
import { Button, Navbar, Nav } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import './HeaderNav.css';

const HeaderNav = () => {
    const {bookId} = useParams();
    return (
        <div id="navName" className="container">
            <Navbar id="navitem" className="text-uppercase fw-bold" expand="lg">
            <Link to="/home"><Navbar.Brand id="logo" className="ms-5" href="#home">Cab <span>Driving School</span></Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto" >
                        <p id="homenav"><Link to="/home"><Nav.Link id="home1" className="active ms-4" href="#home">Home</Nav.Link></Link></p>
                        <Nav.Link id="about" className="active ms-4 " href="#aboutus">About us</Nav.Link>
                        <Nav.Link id="program" className="active ms-4" href="#programs">Programs</Nav.Link>
                        <Nav.Link id="blog" className="active ms-4" href="#link">Blogs</Nav.Link>
                        <Nav.Link id="testimonial" className="active ms-4" href="#testimonials">Testimonial</Nav.Link>
                        <Link to={"/admin/bookNow/"+bookId}><Nav.Link id="admin" className=" ms-4" href="#admin">Admin</Nav.Link></Link>
                        <Link to="/login"><Button className="ms-5 me-4 text-light  btn-warning">Login</Button></Link>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default HeaderNav;