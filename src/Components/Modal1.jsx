import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import image2 from '../images/image2.png';
import './Modal1.css'; // Import the custom CSS file

function Modal1() {
  const [modalShow, setModalShow] = useState(false);

  // Automatically show the modal when the component mounts
  useEffect(() => {
    setModalShow(true);
  }, []);

  return (
    <Modal
      show={modalShow}
      onHide={() => setModalShow(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="custom-modal" 
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Ad 
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="image-container">
          <img src={image2} alt="image1" className="responsive-image" />
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default Modal1;
