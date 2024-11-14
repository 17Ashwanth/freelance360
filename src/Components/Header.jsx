import React from 'react';
import './Header.css';

function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top" style={{ backgroundColor: 'black', zIndex: 1000 }}>
                <div className="container-fluid d-flex justify-content-between align-items-center">
                    <a className="navbar-brand ms-5" href="#">
                        <span style={{ fontFamily: "'Lobster', cursive", fontSize: '24px', color: 'orange' }}>
                            Freelance 360
                        </span>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active text-white" aria-current="page" href="#home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active text-white" aria-current="page" href="#trade">Trade</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active text-white" aria-current="page" href="#benefits">Benefits</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active text-white" aria-current="page" href="#services">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active text-white" aria-current="page" href="#tech">tech</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active text-white" aria-current="page" href="#reviews">Testimonials</a>
                            </li>
                        </ul>
                    </div>
                    <form className="d-flex" role="search">
                        <a href="mailto:freelance360services@gmail.com" target="_blank" rel="noreferrer" className="btn btn-outline-warning me-5" style={{ borderColor: 'orange', color: 'white', borderRadius: '20px', textDecoration: 'none' }}>
                            Book a Demo <i className="fa-solid fa-angle-right ms-2" style={{ color: 'orange' }}></i>
                        </a>
                    </form>
                </div>
            </nav>
        </>
    )
}

export default Header;
