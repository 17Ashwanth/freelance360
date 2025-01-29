import React from 'react'
import About from '../Assests/about us.png';
import image1 from '../images/image2.png';
import adspace from '../images/image3.jpg';

function Home() {
    return (
        <>
            <section id="home" className="d-flex flex-column justify-content-center align-items-center home-section mb-5">
                

                <div className="text-center text-white mt-2 mb-4">
                    <h1>
                        <div style={{ fontWeight: 800 }}>Collaborate with expert freelancers to bring your ideas to life!</div>
                        {/* <div style={{ fontWeight: 800 }}>for all your project needs</div>
                        <div style={{ fontWeight: 800 }}>Transforming ideas into reality.</div> */}
                    </h1>
                    <p className="mt-2" style={{ fontWeight: 500 }}>
                        Elevate your brand with our expert freelance team, Full-service solutions for all your business needs
                    </p>
                    <div className="d-flex justify-content-center" role="search">
                        <a href="mailto:freelance360services@gmail.com" target="_blank" rel="noreferrer" className="btn mt-3"
                            style={{
                                backgroundColor: 'orange', color: 'black', borderRadius: '20px', border: 'none',
                                textDecoration: 'none', fontSize: '1.25rem', padding: '10px 20px'
                            }}>
                            Contact Us
                            <i className="fa-solid fa-angle-right ms-2" style={{ color: 'black' }}></i>
                        </a>
                    </div>
                </div>



                <div className="container mt-5">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="card bg-dark text-white">
                                <img src={About}
                                    alt="About Us Image" className="img-fluid rounded"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>
                        </div>

                        <div className="col-md-6 text-white">
                            <h1 className="display-4 mb-3" style={{ fontWeight: 'bold' }}>About Us</h1>
                            <p className="lead" style={{ fontWeight: 800 }}>
                                Welcome to Freelance 360, a global collective of innovative designers and developers. We
                                partner with brands of all sizes to craft unforgettable, user-centric, and visually stunning
                                experiences that merge creative vision with technical expertise.
                            </p>
                            <p className="lead" style={{ fontWeight: 800 }}>
                                Our passion is delivering distinctive, impactful projects that leave a lasting impression.
                                Through tailored solutions and collaborative approaches, we bring brands to life and drive
                                meaningful connections with their audiences.
                            </p>
                            <p className="mt-2" style={{ fontWeight: 800 }}>FAWAZ NP, ASHWANTH C, MOHAMMEDH DILSHAD</p>
                            <p style={{ fontWeight: 800 }}>Founders</p>
                        </div>
                    </div>
                </div>
            </section>
            
{/*  <div className="container mt-5">
                    <div className="row align-items-center">
                        <div className="col-md-6 col-lg-12">
                            <div className="card bg-dark text-white">
                                <img src={adspace}
                                    alt="About Us Image" className="img-fluid rounded"
                                    style={{ width: '100%', height: '100px', objectFit: 'cover' }}
                                />
                            </div>
                            </div>  
                            </div>
                              </div> */}

        </>
    )
}

export default Home