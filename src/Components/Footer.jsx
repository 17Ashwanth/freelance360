import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <section id="footer" className="d-flex flex-column justify-content-center align-items-center mt-5 text-white py-4">
            <div className="container">
                <div className="row w-100">
                    <div className="col-md-6 d-flex align-items-center justify-content-center justify-content-md-start mb-3 mb-md-0">
                        <p style={{ fontWeight: 800 }} className="mb-0">&copy; {currentYear} All rights Reserved</p>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center justify-content-md-end align-items-center">
                        <div className="d-flex gap-2">
                            <a href="https://www.linkedin.com/in/fawaznp1/" target='blank' className="text-white rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                                <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
                            </a>
                            <a href="https://www.facebook.com/share/p/19Tqpdztz7/?mibextid=WC7FNe" target='blank' className="text-white rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                                <FontAwesomeIcon icon={faFacebook} size="lg" />
                            </a>
                            <a href="https://www.instagram.com/freelance___360/profilecard/?igsh=MWdpcDhhZnk2d3dkdg==" target="_blank" className="text-white rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                                <FontAwesomeIcon icon={faInstagram} size="lg" />
                            </a>
                            <a href="https://x.com/freelance_360/status/1856397625542492453?s=46" target='blank' className="text-white rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                                <FontAwesomeIcon icon={faTwitter} size="lg" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
