import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const NavBer = () => {
    return (
        <div className="header-container">
            {/* Nav Start  */}
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link ms-5 active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ms-5" href="#">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ms-5" href="#">Programs</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ms-5" href="#">Blogs</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ms-5" href="#">Testimonial</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ms-5" href="#">Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ms-5" href="#">Admin</a>
        </li>
        </ul>
    </div>
  </div>
</nav>


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
            {/* <!-- nav end --> */}
        </div>
    );
};

export default NavBer;