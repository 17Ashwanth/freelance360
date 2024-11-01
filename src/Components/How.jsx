import React from 'react'

function How() {
    return (
        <>
            <section className="d-flex flex-column justify-content-center align-items-center vh-100 mt-5">
                <div className="container">
                    <div className="d-flex flex-column align-items-center mb-4">
                        <form className="d-flex mb-4" role="search">
                            <button className="btn btn-outline-light me-5 px-4 py-3" type="submit"
                                style={{
                                    borderColor: 'orange',
                                    color: 'orange',
                                    borderRadius: '20px',
                                    fontSize: '1.25rem'
                                }}>
                                How it Works?
                            </button>
                        </form>

                        <div className="text-center text-white">
                            <h1>
                                <div style={{ fontWeight: 800 }}>Pay and get started</div>
                                <div style={{ fontWeight: 800 }}>the same day</div>
                            </h1>
                            <p className="mt-2" style={{ fontWeight: 500 }}>
                                No unnecessary bureaucracy. We focus on getting your ideas and <br /> problems solved.
                            </p>
                        </div>
                    </div>

                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col">
                            <div className="btn btn-outline-secondary d-flex flex-column align-items-start justify-content-center"
                                style={{
                                    borderRadius: '20px',
                                    width: '100%',
                                    height: '100%',
                                    color: 'white',
                                    borderColor: 'rgb(142, 140, 137)'
                                }}>
                                <button className="btn btn-outline-light mt-2" type="submit"
                                    style={{
                                        borderColor: 'orange',
                                        color: 'orange',
                                        borderRadius: '50px',
                                        marginLeft: '10px'
                                    }}>
                                    1
                                </button>
                                <h3 className="mt-3 ms-2" style={{ fontWeight: 800 }}>Subscribe to a plan</h3>
                                <p className="ms-2" style={{ color: '#979595', fontWeight: 500 }}>
                                    Select a plan that fits your needs and <br /> jump on an onboarding call.
                                </p>
                            </div>
                        </div>

                        <div className="col">
                            <div className="btn btn-outline-secondary d-flex flex-column align-items-start justify-content-center"
                                style={{
                                    borderRadius: '20px',
                                    width: '100%',
                                    height: '100%',
                                    color: 'white',
                                    borderColor: 'rgb(142, 140, 137)'
                                }}>
                                <button className="btn btn-outline-light mt-2" type="submit"
                                    style={{
                                        borderColor: 'orange',
                                        color: 'orange',
                                        borderRadius: '50px',
                                        marginLeft: '10px'
                                    }}>
                                    2
                                </button>
                                <h3 className="mt-3 ms-2" style={{ fontWeight: 800 }}>Add a task</h3>
                                <p className="ms-2" style={{ color: '#979595', fontWeight: 500 }}>
                                    List your first task on our shared Trello <br /> board by specifying the requirements.
                                </p>
                            </div>
                        </div>

                        <div className="col">
                            <div className="btn btn-outline-secondary d-flex flex-column align-items-start justify-content-center"
                                style={{
                                    borderRadius: '20px',
                                    width: '100%',
                                    height: '100%',
                                    color: 'white',
                                    borderColor: 'rgb(142, 140, 137)'
                                }}>
                                <button className="btn btn-outline-light mt-2" type="submit"
                                    style={{
                                        borderColor: 'orange',
                                        color: 'orange',
                                        borderRadius: '50px',
                                        marginLeft: '10px'
                                    }}>
                                    3
                                </button>
                                <h3 className="mt-3 ms-2" style={{ fontWeight: 800 }}>Enjoy Result</h3>
                                <p className="ms-2" style={{ color: '#979595', fontWeight: 500 }}>
                                    Receive your complete task in 2-4 days.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default How