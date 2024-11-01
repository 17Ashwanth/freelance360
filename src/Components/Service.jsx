import React from 'react'

function Service() {
    return (
        <>
            <section id="services" className="d-flex flex-column justify-content-center align-items-center mt-5">
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
                                Services
                            </button>
                        </form>
                        <div className="text-center text-white">
                            <h1 style={{ fontWeight: 800 }}>
                                <div>All you want,</div>
                                <div>Performed on time</div>
                            </h1>
                        </div>
                    </div>

                    <div className="row justify-content-center text-center mt-5">
                        <div className="col-md-2 mb-4">
                            <button className="btn btn-outline-dark text-white w-100" style={{ borderRadius: '20px', padding: '10px 30px',fontWeight: 500  }}>
                            Web Development
                            </button>
                        </div>
                        <div className="col-md-2 mb-4">
                            <button className="btn btn-outline-dark text-white w-100" style={{ borderRadius: '20px', padding: '10px 30px',fontWeight: 500  }}>
                            Custom Web Design
                            </button>
                        </div>
                        <div className="col-md-2 mb-4">
                            <button className="btn btn-outline-dark text-white w-100" style={{ borderRadius: '20px', padding: '10px 30px',fontWeight: 500  }}>
                            Website Maintenance
                            </button>
                        </div>
                        <div className="col-md-2 mb-4">
                            <button className="btn btn-outline-dark text-white w-100" style={{ borderRadius: '20px', padding: '10px 30px',fontWeight: 500  }}>
                            Market Research Reports
                            </button>
                        </div>
                        <div className="col-md-2 mb-4">
                            <button className="btn btn-outline-dark text-white w-100" style={{ borderRadius: '20px', padding: '10px 30px',fontWeight: 500  }}>
                            Fundamental Analysis
                            </button>
                        </div>
                    </div>

                    <div className="row justify-content-center text-center">
                        <div className="col-md-3 mb-4">
                            <button className="btn btn-outline-dark text-white w-100" style={{ borderRadius: '20px', padding: '10px 30px',fontWeight: 500  }}>
                            Trading Education 
                            </button>
                        </div>
                        <div className="col-md-3 mb-4">
                            <button className="btn btn-outline-dark text-white w-100" style={{ borderRadius: '20px', padding: '10px 30px',fontWeight: 500  }}>
                            Content Creation
                            </button>
                        </div>
                        <div className="col-md-3 mb-4">
                            <button className="btn btn-outline-dark text-white w-100" style={{ borderRadius: '20px', padding: '10px 30px',fontWeight: 500  }}>
                            E-commerce Solutions
                            </button>
                        </div>
                        <div className="col-md-3 mb-4">
                            <button className="btn btn-outline-dark text-white w-100" style={{ borderRadius: '20px', padding: '10px 30px',fontWeight: 500  }}>
                            Website Optimization
                            </button>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Service
