import React, { useState } from 'react';

// Modal Component
const Modal = ({ isOpen, onClose, content }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <p className="modal-text">{content}</p>
                <button className="close-button" onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

// Insights Component
const Insights = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState('');

    const questions = [
        {
            question: "Is it really unlimited?",
            content: "Yes, our service offers unlimited requests within the plan limits."
        },
        {
            question: "Why wouldn't I just hire a freelancer?",
            content: "Freelancers can be unpredictable. Our service guarantees consistent quality and availability."
        },
        {
            question: "Why wouldn't I just hire a full-time designer?",
            content: "Hiring a full-time designer can be costly. Our service offers flexibility without long-term commitment."
        },
        {
            question: "Can I pause, renew, or cancel at any time?",
            content: "Absolutely! You have full control over your subscription and can manage it as needed."
        },
        {
            question: "Are there any contracts?",
            content: "No, we don't require any long-term contracts. You can use our service on a month-to-month basis."
        },
        {
            question: "How do we communicate?",
            content: "We use various channels, including email, chat, and project management tools to ensure seamless communication."
        },
        {
            question: "What if I only have one design task?",
            content: "You can still use our service! We accommodate all types of design tasks."
        },
        {
            question: "What is an active task?",
            content: "An active task is any design request currently being worked on by our designers."
        },
        {
            question: "Who are the designers?",
            content: "Our designers are experienced professionals with backgrounds in various design fields."
        },
        {
            question: "How many designs can be done in a single month?",
            content: "The number of designs varies based on your plan, but there are no strict limits."
        },
        {
            question: "Are there any refunds if I don't like the designs?",
            content: "We strive for your satisfaction, and we can discuss revisions or solutions if you're not happy."
        },
    ];

    const handleDivClick = (content) => {
        setModalContent(content);
        setIsModalOpen(true);
    };

    return (
        <>
            <section id="insights" className="d-flex flex-column justify-content-center align-items-center mt-5">
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
                                Insights
                            </div>
                        </form>
                        <div className="text-center text-white mb-5">
                            <h1 style={{ fontWeight: 800 }}>
                                <div>Frequently asked </div>
                                <div>Questions</div>
                            </h1>
                        </div>
                    </div>
                    <div className="d-flex flex-column align-items-center w-100">
                        {questions.map((item, index) => (
                            <div
                                key={index}
                                className="d-flex align-items-center justify-content-between text-white border border-dark p-3 mb-2 w-100"
                                style={{ maxWidth: '100%', backgroundColor: '#333', borderRadius: '10px', fontWeight: 800 }}
                                onClick={() => handleDivClick(item.content)}
                            >
                                <span>{item.question}</span>
                                <span>+</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} content={modalContent} />
            <style jsx>{`
                .modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.7);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .modal-content {
                    background: white;
                    padding: 20px;
                    border-radius: 10px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                    text-align: center;
                    width: 500px; /* Set the width of the modal */
                    height: 500px; /* Set the height of the modal */
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                .modal-text {
                    font-size: 25px; /* Increase font size */
                    font-weight: 500; /* Set font weight */
                    margin-bottom: 20px; /* Space between text and button */
                }

                .close-button {
                    background-color: #f7c600; /* Button color */
                    color: #000; /* Text color */
                    border: none; /* Remove border */
                    border-radius: 20px; /* Rounded corners */
                    padding: 10px 20px; /* Button padding */
                    cursor: pointer; /* Pointer cursor */
                    font-weight: bold; /* Make text bold */
                }

                .close-button:hover {
                    background-color: #d9b700; /* Darker shade on hover */
                }
            `}</style>
        </>
    );
};

export default Insights;
