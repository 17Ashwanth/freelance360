import React from 'react'

function Reviews() {
    return (
        <>
            <section id="reviews" className="d-flex flex-column justify-content-center align-items-center mt-5">
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
                                Testimonials
                            </button>
                        </form>
                        <div className="text-center text-white mb-5">
                            <h1 style={{fontWeight:800}}>
                                <div>Read What our Clients are</div>
                                <div>saying about us</div>
                            </h1>
                        </div>
                        <div className="container">
                            <div className="row">
                                {/* Review Item 1 */}
                                <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                                    <div className="border border-secondary rounded p-3 d-flex flex-column" style={{ backgroundColor: '#333', height: '100%' }}>
                                        <div className="d-flex flex-column flex-sm-row align-items-start">
                                            <div className="me-3 mb-3 mb-sm-0" style={{ width: '100px', height: '100px', borderRadius: '50%', overflow: 'hidden' }}>
                                                <img src="https://img.freepik.com/free-photo/smiling-businessman-face-portrait-wearing-suit_53876-148138.jpg?w=996&t=st=1725720252~exp=1725720852~hmac=a70d93f307b34eb196d93a02c34960cd17b567ea11b73780a515fccb71e237ab" alt="person 1" className="img-fluid" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                            </div>
                                            <div>
                                                <h3 style={{fontWeight:500}} className="mb-2 text-white">Rohan Mehra</h3>
                                                <h5 style={{fontWeight:500}} className="mb-2 text-white">Entrepreneur</h5>
                                            </div>
                                        </div>
                                        <p style={{fontWeight:500}} className="mb-2 mt-3 text-start text-white flex-grow-1">
                                        "Freelance 360 is a game-changer! Their website development team created a stunning platform for my business, boosting conversions by 30%. The trading analysis tools provide valuable insights, helping me make informed decisions. Excellent communication, timely delivery, and top-notch expertise. Highly recommend!"
                                        </p>
                                        <div className="mt-2 text-start text-white">
                                             5.0 ⭐⭐⭐⭐⭐
                                        </div>
                                    </div>
                                </div>
                                {/* Review Item 2 */}
                                <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                                    <div className="border border-secondary rounded p-3 d-flex flex-column" style={{ backgroundColor: '#333', height: '100%' }}>
                                        <div className="d-flex flex-column flex-sm-row align-items-start">
                                            <div className="me-3 mb-3 mb-sm-0" style={{ width: '100px', height: '100px', borderRadius: '50%', overflow: 'hidden' }}>
                                                <img src="https://i.pinimg.com/236x/c3/33/27/c333273fcfc3198e93df380c0cfc0437.jpg" alt="person 2" className="img-fluid" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                            </div>
                                            <div>
                                                <h3 style={{fontWeight:500}} className="mb-2 text-white">Karan Sharma</h3>
                                                <h5 style={{fontWeight:500}} className="mb-2 text-white">Investor</h5>
                                            </div>
                                        </div>
                                        <p style={{fontWeight:500}} className="mb-2 mt-3 text-start text-white flex-grow-1">
                                        "Freelance 360's trading analysis reports are comprehensive and accurate. Their team's expertise in technical and fundamental analysis has significantly improved my investment returns. The website's intuitive design makes navigation effortless. I've already recommended Freelance 360 to fellow investors!" 
                                        </p>
                                        <div className="mt-2 text-start text-white">
                                            5.0 ⭐⭐⭐⭐⭐
                                        </div>
                                    </div>
                                </div>
                                {/* Review Item 3 */}
                                <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                                    <div className="border border-secondary rounded p-3 d-flex flex-column" style={{ backgroundColor: '#333', height: '100%' }}>
                                        <div className="d-flex flex-column flex-sm-row align-items-start">
                                            <div className="me-3 mb-3 mb-sm-0" style={{ width: '100px', height: '100px', borderRadius: '50%', overflow: 'hidden' }}>
                                                <img src="https://www.topmediai.com/micro/passport-photo-maker/assets/bigger_pic3-38c3c289.png" alt="person 3" className="img-fluid" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                            </div>
                                            <div>
                                                <h3 style={{fontWeight:500}} className="mb-2 text-white">- Priya Jain</h3>
                                                <h5 style={{fontWeight:500}} className="mb-2 text-white">Small Business Owner</h5>
                                            </div>
                                        </div>
                                        <p style={{fontWeight:500}} className="mb-2 mt-3 text-start text-white flex-grow-1">
                                        "Freelance 360 exceeded my expectations! Their custom web solution perfectly aligns with my brand. The trading resources, including market research reports and strategy development, have been invaluable. Professional, knowledgeable, and responsive – Freelance 360 is my go-to partner!" 
                                        </p>
                                        <div className="mt-2 text-start text-white">
                                             5.0 ⭐⭐⭐⭐⭐
                                        </div>
                                    </div>
                                </div>
                                {/* Review Item 4 */}
                                <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                                    <div className="border border-secondary rounded p-3 d-flex flex-column" style={{ backgroundColor: '#333', height: '100%' }}>
                                        <div className="d-flex flex-column flex-sm-row align-items-start">
                                            <div className="me-3 mb-3 mb-sm-0" style={{ width: '100px', height: '100px', borderRadius: '50%', overflow: 'hidden' }}>
                                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTuIeAH6NLv3GWB8eqoDhaHMOKLJzP1mHqZzvL8vUysq19z2Bb6Mn-bgahNRDLy3S-xCU&usqp=CAU" alt="person 4" className="img-fluid" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                            </div>
                                            <div>
                                                <h3 style={{fontWeight:500}} className="mb-2 text-white">Saurabh Singh</h3>
                                                <h5 style={{fontWeight:500}} className="mb-2 text-white">Trader</h5>
                                            </div>
                                        </div>
                                        <p style={{fontWeight:500}} className="mb-2 mt-3 text-start text-white flex-grow-1">
                                        "Freelance 360's technical analysis helped me identify profitable trading opportunities. Their website's ease of use, comprehensive tools, and expert insights make it an indispensable resource. I've seen significant growth in my portfolio since partnering with Freelance 360. Five stars!" 
                                        </p>
                                        <div className="mt-2 text-start text-white">
                                            5.0 ⭐⭐⭐⭐⭐
                                        </div>
                                    </div>
                                </div>
                                {/* Review Item 5 */}
                                <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                                    <div className="border border-secondary rounded p-3 d-flex flex-column" style={{ backgroundColor: '#333', height: '100%' }}>
                                        <div className="d-flex flex-column flex-sm-row align-items-start">
                                            <div className="me-3 mb-3 mb-sm-0" style={{ width: '100px', height: '100px', borderRadius: '50%', overflow: 'hidden' }}>
                                                <img src="https://img.freepik.com/premium-photo/young-handsome-indian-man-against-white-wall_251136-68996.jpg" alt="person 5" className="img-fluid" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                            </div>
                                            <div>
                                                <h3 style={{fontWeight:500}} className="mb-2 text-white">Ritesh Agarwal</h3>
                                                <h5 style={{fontWeight:500}} className="mb-2 text-white">Financial Analyst</h5>
                                            </div>
                                        </div>
                                        <p style={{fontWeight:500}} className="mb-2 mt-3 text-start text-white flex-grow-1">
                                        "Freelance 360's dedication to client satisfaction is impressive. Their website development and trading analysis services are exceptional. The team's expertise, communication, and timely delivery make them a pleasure to work with. I highly recommend Freelance 360 for any business or trading needs!" 
                                        </p>
                                        <div className="mt-2 text-start text-white">
                                             5.0 ⭐⭐⭐⭐⭐
                                        </div>
                                    </div>
                                </div>
                                {/* Review Item 6 */}
                                <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                                    <div className="border border-secondary rounded p-3 d-flex flex-column" style={{ backgroundColor: '#333', height: '100%' }}>
                                        <div className="d-flex flex-column flex-sm-row align-items-start">
                                            <div className="me-3 mb-3 mb-sm-0" style={{ width: '100px', height: '100px', borderRadius: '50%', overflow: 'hidden' }}>
                                                <img src="https://media.istockphoto.com/id/523918603/photo/business-man-portrait.jpg?s=612x612&w=0&k=20&c=N9VCO2fGiQemF2Ixi3dNj2ibJ5Z5o7BYks_PQOtfSoo=" alt="person 6" className="img-fluid" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                            </div>
                                            <div>
                                                <h3 style={{fontWeight:500}} className="mb-2 text-white">Vivek Rao</h3>
                                                <h5 style={{fontWeight:500}} className="mb-2 text-white">Investor</h5>
                                            </div>
                                        </div>
                                        <p style={{fontWeight:500}} className="mb-2 mt-3 text-start text-white flex-grow-1">
                                        "Freelance 360 has revolutionized my trading strategy! Their fundamental analysis reports provide actionable insights, and the website's educational resources have enhanced my knowledge. The team's responsiveness and expertise ensure I'm always supported. Freelance 360 is a trusted partner in my investment journey!" 
                                        </p>
                                        <div className="mt-2 text-start text-white">
                                             5.0 ⭐⭐⭐⭐⭐
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Reviews