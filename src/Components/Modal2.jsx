import React from 'react';
import adspace from '../images/image3.jpg'

function Modal2() {
  return (
    <div className="container mt-5">
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
              </div>
  )
}

export default Modal2


