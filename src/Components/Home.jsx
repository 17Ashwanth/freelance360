import React from 'react'
import About from '../Assests/about us.png'

function Home() {
    return (
        <>
            <section id="home" className="d-flex flex-column justify-content-center align-items-center home-section mb-5">
                <form className="d-flex mt-5" role="search">
                    <a href="https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fbusiness.google.com%2Freviews&followup=https%3A%2F%2Fbusiness.google.com%2Freviews&ifkv=AcMMx-d4kmExVTXG-pUSlpCP68YVNoItDNlKTFP4wvuhnydybJ2oAjvet1ygU4wOKhavdnon7bH1sQ&passive=1209600&service=lbc&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S590271420%3A1730264548987082&ddm=0"
                        target="_blank" rel="noreferrer" className="btn btn-outline-secondary d-flex align-items-center justify-content-center"
                        type="submit" style={{ borderRadius: '20px' }}>
                        5.0
                        <span className="ms-2" style={{ color: 'orange' }}>
                            ★★★★★
                        </span>
                        <span className="ms-2">
                            11 reviews
                        </span>
                    </a>
                </form>

                <div className="text-center text-white mt-2 mb-4">
                    <h1>
                        <div style={{ fontWeight: 800 }}>Collaborate with expert freelancers</div>
                        <div style={{ fontWeight: 800 }}>for all your project needs</div>
                        <div style={{ fontWeight: 800 }}>Transforming ideas into reality.</div>
                    </h1>
                    <p className="mt-2" style={{ fontWeight: 500 }}>
                        Elevate your brand with our expert freelance team, Full-service solutions for all your business needs
                    </p>
                    <div className="d-flex justify-content-center" role="search">
                        <a href="mailto:freelance360services@gmail.com" target="_blank" rel="noreferrer" className="btn"
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
                            <p className="mt-4" style={{ fontWeight: 800 }}>FAWAZ NP, ASHWANTH C, MOHAMMEDH DILSHAD</p>
                            <p style={{ fontWeight: 800 }}>Founders</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home