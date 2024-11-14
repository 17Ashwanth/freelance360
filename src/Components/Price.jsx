import React from 'react';

function Price() {
    return (
        <>
            <section id="tech" className="d-flex flex-column justify-content-center align-items-center mt-5">
                <div className="container mt-5">
                    <div className="d-flex flex-column align-items-center mb-4">
                        <form className="d-flex mb-4" role="search">
                            <div
                                className="btn btn-outline-light me-5 px-4 py-3"
                                type="submit"
                                style={{
                                    borderColor: 'orange',
                                    color: 'orange',
                                    borderRadius: '20px',
                                    fontSize: '1.25rem'
                                }}
                            >
                                Technologies
                            </div>
                        </form>
                        <div className="text-center text-white">
                            <h1 className="text-start" style={{ fontWeight: 800 }}>
                                <div>Choose the relevant technologies we offer,</div>
                                <div>grow and fasten your project</div>
                            </h1>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-6 mt-3 mb-6 d-flex align-items-stretch">
                            <div className="card bg-dark text-white" style={{ width: '100%', padding: '15px' }}>
                                <div className="card-body">
                                    <h4 style={{ fontWeight: 500 }} className="card-title">WEBSITE DEVELOPMENT</h4>
                                    <p style={{ fontWeight: 500 }} className="mt-3">What's Included:</p>
                                    <ul className="list-unstyled">
                                        <li style={{ fontWeight: 500 }} className="d-flex align-items-center"><i className="fa-solid fa-check" style={{ color: 'orange' }}></i>&nbsp;HTML/CSS</li>
                                        <li style={{ fontWeight: 500 }} className="d-flex align-items-center"><i className="fa-solid fa-check" style={{ color: 'orange' }}></i>&nbsp;JavaScript</li>
                                        <li style={{ fontWeight: 500 }} className="d-flex align-items-center"><i className="fa-solid fa-check" style={{ color: 'orange' }}></i>&nbsp;PHP</li>
                                        <li style={{ fontWeight: 500 }} className="d-flex align-items-center"><i className="fa-solid fa-check" style={{ color: 'orange' }}></i>&nbsp;Python</li>
                                        <li style={{ fontWeight: 500 }} className="d-flex align-items-center"><i className="fa-solid fa-check" style={{ color: 'orange' }}></i>&nbsp;WordPress</li>
                                        <li style={{ fontWeight: 500 }} className="d-flex align-items-center"><i className="fa-solid fa-check" style={{ color: 'orange' }}></i>&nbsp;Vue</li>
                                        <li style={{ fontWeight: 500 }} className="d-flex align-items-center"><i className="fa-solid fa-check" style={{ color: 'orange' }}></i>&nbsp;MEAN</li>
                                        <li style={{ fontWeight: 500 }} className="d-flex align-items-center"><i className="fa-solid fa-check" style={{ color: 'orange' }}></i>&nbsp;MERN</li>
                                        <li style={{ fontWeight: 500 }} className="d-flex align-items-center"><i className="fa-solid fa-check" style={{ color: 'orange' }}></i>&nbsp;MySQL</li>
                                        <li style={{ fontWeight: 500 }} className="d-flex align-items-center"><i className="fa-solid fa-check" style={{ color: 'orange' }}></i>&nbsp;Firebase</li>
                                    </ul>
                                    <div className="d-flex flex-column align-items-center mt-4">
                                        <a href='mailto:freelance360services@gmail.com' target='_blank' rel="noopener noreferrer" className="btn btn-outline-secondary mt-2" style={{ width: '100%', maxWidth: '200px', borderRadius: '20px', padding: '10px' }}>
                                            Book a Demo
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-6 mt-3 d-flex align-items-stretch">
                            <div className="card bg-dark text-white" style={{ width: '100%', padding: '15px' }}>
                                <div className="card-body">
                                    <h4 style={{ fontWeight: 500 }} className="card-title">MOBILE APP DEVELOPMENT</h4>
                                    <p style={{ fontWeight: 500 }} className="mt-3">What's Included:</p>
                                    <ul className="list-unstyled">
                                        <li style={{ fontWeight: 500 }} className="d-flex align-items-center"><i className="fa-solid fa-check" style={{ color: 'orange' }}></i>&nbsp;Java</li>
                                        <li style={{ fontWeight: 500 }} className="d-flex align-items-center"><i className="fa-solid fa-check" style={{ color: 'orange' }}></i>&nbsp;Python</li>
                                        <li style={{ fontWeight: 500 }} className="d-flex align-items-center"><i className="fa-solid fa-check" style={{ color: 'orange' }}></i>&nbsp;Flutter</li>
                                        <li style={{ fontWeight: 500 }} className="d-flex align-items-center"><i className="fa-solid fa-check" style={{ color: 'orange' }}></i>&nbsp;JavaScript</li>
                                        <li style={{ fontWeight: 500 }} className="d-flex align-items-center"><i className="fa-solid fa-check" style={{ color: 'orange' }}></i>&nbsp;React Native</li>
                                        <li style={{ fontWeight: 500 }} className="d-flex align-items-center"><i className="fa-solid fa-check" style={{ color: 'orange' }}></i>&nbsp;DART</li>
                                        <li style={{ fontWeight: 500 }} className="d-flex align-items-center"><i className="fa-solid fa-check" style={{ color: 'orange' }}></i>&nbsp;Angular Mobile</li>
                                        <li style={{ fontWeight: 500 }} className="d-flex align-items-center"><i className="fa-solid fa-check" style={{ color: 'orange' }}></i>&nbsp;Swift</li>
                                        <li style={{ fontWeight: 500 }} className="d-flex align-items-center"><i className="fa-solid fa-check" style={{ color: 'orange' }}></i>&nbsp;Kotlin</li>
                                        <li style={{ fontWeight: 500 }} className="d-flex align-items-center"><i className="fa-solid fa-check" style={{ color: 'orange' }}></i>&nbsp;Xamarin</li>
                                    </ul>
                                    <div className="d-flex flex-column align-items-center mt-4">
                                        <a href='mailto:freelance360services@gmail.com' target='_blank' rel="noopener noreferrer" className="btn btn-outline-secondary mt-2" style={{ width: '100%', maxWidth: '200px', borderRadius: '20px', padding: '10px' }}>
                                            Book a Demo
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
