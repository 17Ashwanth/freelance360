import React from 'react'

function AboveFt() {
    return (
        <>
            <section className="d-flex flex-column justify-content-center align-items-center mt-5">
                <div className="container mt-5">
                    <div className="text-center text-white ">
                        <h1 style={{fontWeight:800}}>
                            <div>Need More Clarity?</div>
                            <div>Get in Touch!</div>
                        </h1>
                        <div className="d-flex justify-content-center mt-3" role="search">
                            <form className="d-flex" role="search">
                                <a
                                    href="mailto:freelance360services@gmail.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline-warning me-5"
                                    style={{ borderColor: 'orange', color: 'white', borderRadius: '20px', textDecoration: 'none' }}
                                >
                                    Try it now!
                                    <i className="fa-solid fa-angle-right ms-2" style={{ color: 'orange' }}></i>
                                </a>
                            </form>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default AboveFt