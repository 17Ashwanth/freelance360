import React from 'react'

function Trade() {
    return (
        <>
            <section  id="trade" className="d-flex flex-column align-items-start port-section mt-5 mb-3">
                <div className="container">
                    <div className="d-flex flex-column align-items-center mb-4">
                        <form className="d-flex" role="search">
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
                                Trade
                            </div>
                        </form>
                    </div>

                    <div className="d-flex justify-content-between mt-3">
                        <div>
                            <h1 className="text-start text-white" style={{ fontWeight: 800 }}>
                                Exceptional Market Analysis <br />
                                Informed Decisions
                            </h1>
                        </div>
                        <div>
                            <p className="text-start text-white" style={{ fontWeight: 500 }}>
                                From Wall Street to Main Street <br />
                                our trading expertise spans asset classes and industries. <br />
                                We've left our mark on the financial landscape.
                            </p>
                        </div>
                    </div>

                    <div className="row mt-4">
                        {[
                            {
                                imgSrc: 'https://media.istockphoto.com/id/1365847213/photo/phone-lock-to-protect-from-cyber-scam-online-data-fraud-or-identity-theft-laptop-with-hacker.jpg?s=2048x2048&w=is&k=20&c=ScKMPuPtLqiNNIzymnfXbdtUHVji1d2e4dM1BvXHv7E=',
                                text: 'Slipery moneys -e-commerce platform for high risk industries'
                            },
                            {
                                imgSrc: 'https://media.istockphoto.com/id/1810828002/photo/hr-hrm-human-resources-management-concept-check-resume-screening-employee-information-job.jpg?s=2048x2048&w=is&k=20&c=mxjQC_GjHM-FQw-aMstV41wZrzr65alENRfVII0to8M=',
                                text: 'Hybrid Capital -digital currency.'
                            },
                            {
                                imgSrc: 'https://media.istockphoto.com/id/1265501626/photo/young-finance-expert-analyzing-financial-charts-on-smart-phone.jpg?s=2048x2048&w=is&k=20&c=exP25M3zHE3Vee57F6xDTyE7TgQqg7OoMXtNJZunrWw=',
                                text: 'Betro sports betting platform.'
                            },
                            {
                                imgSrc: 'https://media.istockphoto.com/id/1403392087/photo/financial-investment-using-computer-checking-price-and-chart-commodity-and-bitcoin-protect.jpg?s=2048x2048&w=is&k=20&c=TGRjptNu3n9gsD2tkb-6YLexcr8LfNOtbCEX15yzJdw=',
                                text: 'Exec- employees financial wellness saas.'
                            },
                            {
                                imgSrc: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                                text: 'Voltoge- accessible clean energy startup.'
                            },
                            {
                                imgSrc: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                                text: 'Hyperbolic - a decentralized data transmission startup.'
                            }
                        ].map((item, index) => (
                            <div key={index} className="col-md-4 mb-4 d-flex align-items-stretch">
                                <div className="card bg-dark text-white h-100">
                                    <img src={item.imgSrc} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <p className="card-text" style={{ fontWeight: 500 }}>{item.text}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="d-flex justify-content-center mt-3" role="search">
                        <a href='https://www.instagram.com/freelance___360/profilecard/?igsh=MWdpcDhhZnk2d3dkdg==' target='blank'
                            className="btn px-4 py-3"
                            type="submit"
                            style={{
                                backgroundColor: 'orange',
                                color: 'black',
                                borderRadius: '20px',
                                border: 'none',
                                fontSize: '1.25rem'
                            }}
                        >
                            See all works
                            <i className="fa-solid fa-angle-right ms-2" style={{ color: 'black' }}></i>
                        </a>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Trade