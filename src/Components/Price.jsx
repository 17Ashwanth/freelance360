import React from 'react';

function Price() {
    return (
        <>
            <section id="pricing" className="d-flex flex-column justify-content-center align-items-center mt-5">
                <div className="container mt-5">
                    <div className="d-flex flex-column align-items-center mb-4">
                        <form className="d-flex mb-4" role="search">
                            <button
                                className="btn btn-outline-light me-5 px-4 py-3"
                                type="submit"
                                style={{
                                    borderColor: 'orange',
                                    color: 'orange',
                                    borderRadius: '20px',
                                    fontSize: '1.25rem'
                                }}
                            >
                                Pricing
                            </button>
                        </form>
                        <div className="text-center text-white">
                            <h1 className="text-start" style={{ fontWeight: 800 }}>
                                <div>Choose the relevant plan to build,</div>
                                <div>grow and fasten your team</div>
                            </h1>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-4 mb-4 d-flex align-items-stretch">
                            <div className="card bg-dark text-white" style={{ width: '100%', padding: '15px' }}>
                                <div className="card-body">
                                    <h4 style={{ fontWeight: 500 }} className="card-title">STANDARD</h4>
                                    <h1 style={{ fontWeight: 500 }} className="card-title mb-3">₹999<sub>/month</sub></h1>
                                    <a href="#" className="card-link text-white" style={{ textDecoration: 'underline', fontWeight: 500 }}>As one request at a time</a>
                                    <br /><br />
                                    <p style={{ fontWeight: 500 }} className="mt-3">What's Included:</p>
                                    <ul className="list-unstyled">
                                        <li style={{ fontWeight: 500 }} className="d-flex align-items-center"><i className="fa-solid fa-check" style={{ color: 'orange' }}></i>&nbsp;Unlimited requests</li>
                                        <li style={{ fontWeight: 500 }} className="d-flex align-items-center"><i className="fa-solid fa-check" style={{ color: 'orange' }}></i>&nbsp;Unlimited brands</li>
                                        <li style={{ fontWeight: 500 }} className="d-flex align-items-center"><i className="fa-solid fa-check" style={{ color: 'orange' }}></i>&nbsp;Weekly meetings</li>
                                        <li style={{ fontWeight: 500 }} className="d-flex align-items-center"><i className="fa-solid fa-check" style={{ color: 'orange' }}></i>&nbsp;Pause or cancel anytime</li>
                                        <li style={{ fontWeight: 500 }} className="d-flex align-items-center"><i className="fa-solid fa-check" style={{ color: 'orange' }}></i>&nbsp;Managed Slack and Trello</li>
                                        <li style={{ fontWeight: 500 }} className="d-flex align-items-center"><i className="fa-solid fa-check" style={{ color: 'orange' }}></i>&nbsp;All services except Webflow</li>
                                    </ul>
                                    <div className="d-flex flex-column align-items-center mt-4">
                                        <a href='mailto:ashwanthcheleri@gmail.com' target='_blank' rel="noopener noreferrer" className="btn" style={{ backgroundColor: 'orange', color: 'black', borderRadius: '20px', border: 'none', width: '100%', maxWidth: '200px', padding: '10px', fontWeight: 500 }}>
                                            Subscribe
                                            <i className="fa-solid fa-angle-right ms-2" style={{ color: 'black' }}></i>
                                        </a>
                                        <a href='mailto:ashwanthcheleri@gmail.com' target='_blank' rel="noopener noreferrer" className="btn btn-outline-secondary mt-2" style={{ width: '100%', maxWidth: '200px', borderRadius: '20px', padding: '10px' }}>
                                            Book a Demo
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4 d-flex align-items-stretch">
                            <div className="card bg-dark text-white position-relative" style={{ width: '100%', padding: '15px' }}>
                                <div className="position-absolute top-0 end-0 mt-2 me-2">
                                    <button className="btn" type="button" style={{ backgroundColor: 'orange', color: 'black', borderRadius: '20px', border: 'none', padding: '5px 10px' }}>
                                        Faster <i className="fa-solid fa-bolt"></i>
                                    </button>
                                </div>
                                <div className="card-body">
                                    <h4 style={{ fontWeight: 500 }} className="card-title">PRO</h4>
                                    <h1 style={{ fontWeight: 500 }} className="card-title mb-3">₹1499<sub>/month</sub></h1>
                                    <a href="#" className="card-link text-white" style={{ textDecoration: 'underline', fontWeight: 500 }}>Double the Request</a>
                                    <br /><br />
                                    <p style={{ fontWeight: 500 }} className="mt-3">What's Included:</p>
                                    <ul className="list-unstyled">
                                        <li style={{ fontWeight: 500 }} className="d-flex align-items-center"><i className="fa-solid fa-check" style={{ color: 'orange' }}></i>&nbsp;Unlimited requests</li>
                                        <li style={{ fontWeight: 500 }} className="d-flex align-items-center"><i className="fa-solid fa-check" style={{ color: 'orange' }}></i>&nbsp;Unlimited brands</li>
                                        <li style={{ fontWeight: 500 }} className="d-flex align-items-center"><i className="fa-solid fa-check" style={{ color: 'orange' }}></i>&nbsp;Weekly meetings</li>
                                        <li style={{ fontWeight: 500 }} className="d-flex align-items-center"><i className="fa-solid fa-check" style={{ color: 'orange' }}></i>&nbsp;Pause or cancel anytime</li>
                                        <li style={{ fontWeight: 500 }} className="d-flex align-items-center"><i className="fa-solid fa-check" style={{ color: 'orange' }}></i>&nbsp;Managed Slack and Trello</li>
                                        <li style={{ fontWeight: 500 }} className="d-flex align-items-center"><i className="fa-solid fa-check" style={{ color: 'orange' }}></i>&nbsp;All services except Webflow</li>
                                    </ul>
                                    <div className="d-flex flex-column align-items-center mt-4">
                                        <a href='mailto:ashwanthcheleri@gmail.com' target='_blank' rel="noopener noreferrer" className="btn" style={{ backgroundColor: 'orange', color: 'black', borderRadius: '20px', border: 'none', width: '100%', maxWidth: '200px', padding: '10px' }}>
                                            Subscribe
                                            <i className="fa-solid fa-angle-right ms-2" style={{ color: 'black' }}></i>
                                        </a>
                                        <a href='mailto:ashwanthcheleri@gmail.com' target='_blank' rel="noopener noreferrer" className="btn btn-outline-secondary mt-2" style={{ width: '100%', maxWidth: '200px', borderRadius: '20px', padding: '10px' }}>
                                            Book a Demo
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4 d-flex align-items-stretch">
                            <div className="card bg-dark text-white" style={{ width: '100%', padding: '15px' }}>
                                <div className="card-body">
                                    <h4 style={{ fontWeight: 500 }} className="card-title">PROJECT BASED</h4>
                                    <p style={{ fontWeight: 500 }} className="card-title text-start">For a custom fee delivered in <br /> milestones. Ideal for specific goals. <br /> Custom project scope.</p>
                                    <p style={{ fontWeight: 500 }} className="mt-3">What's Included:</p>
                                    <ul className="list-unstyled">
                                        <li style={{ fontWeight: 500 }} className="d-flex align-items-center"><i className="fa-solid fa-check" style={{ color: 'orange' }}></i>&nbsp;Fixed scope of work</li>
                                        <li style={{ fontWeight: 500 }} className="d-flex align-items-center"><i className="fa-solid fa-check" style={{ color: 'orange' }}></i>&nbsp;Performed in milestones</li>
                                    </ul>
                                    <div className="d-flex flex-column align-items-center mt-4">
                                        <a href='mailto:ashwanthcheleri@gmail.com' target='_blank' rel="noopener noreferrer" className="btn" style={{ backgroundColor: 'orange', color: 'black', borderRadius: '20px', border: 'none', width: '100%', maxWidth: '200px', padding: '10px' }}>
                                            Send Email
                                            <i className="fa-solid fa-angle-right ms-2" style={{ color: 'black' }}></i>
                                        </a>
                                    </div>
                                    <hr />
                                    <div className="d-flex flex-column align-items-center mt-4">

                                        <h4 style={{ fontWeight: 500 }} className="card-title text-white mt-2">Refer & earn</h4>
                                        <p style={{ fontWeight: 500 }} className="card-title text-white text-start">Receive ₹99 for each referral!</p>
                                        <a href="https://wa.me/8547150181" target="_blank" rel="noopener noreferrer" className="btn btn-outline-secondary mt-2" style={{ width: '100%', maxWidth: '200px', borderRadius: '20px', padding: '10px' }}>
                                            Join Now
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Price;
