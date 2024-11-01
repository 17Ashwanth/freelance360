import React from 'react'

function Benefits() {
  return (

    <>
      <section id="benefits" className="d-flex flex-column justify-content-center align-items-center mt-5">
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
                Benefits
              </button>
            </form>
            <div className="text-center text-white">
              <h1 className="text-start text-white" style={{ fontWeight: 800 }}>
                <div>Unlock a world of design</div>
                <div>Potential with us</div>
              </h1>
            </div>
          </div>
          <div className="row mt-5">
            {benefitsData.map((benefit, index) => (
              <div className="col-md-4 mb-4 d-flex align-items-stretch" key={index}>
                <div className="card bg-dark text-white h-100">
                  <div className="card-img-container">
                    <img
                      src={benefit.imgSrc}
                      className="card-img-top"
                      alt={benefit.alt}
                      style={{ objectFit: 'cover', height: '200px', width: '100%' }}
                    />
                  </div>
                  <div className="card-body d-flex flex-column">
                    <h3 style={{ fontWeight: 800 }} className="card-text text-start">{benefit.title}</h3>
                    <p style={{ fontWeight: 500 }} className="card-text text-start">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



    </>
  )
}

const benefitsData = [
  {
    imgSrc: 'https://as2.ftcdn.net/v2/jpg/07/41/48/55/1000_F_741485534_mSKpD8OZYOyfpf4LvZpjOmAYUslQ3Gdr.jpg',
    alt: 'Fast turnaround',
    title: 'Fast turnaround',
    description: 'Expect the first draft within 48-72 hours, from Monday to Saturday',
  },
  {
    imgSrc: 'https://img.freepik.com/premium-photo/text-entry-box-with-ai-assistant_1106493-371483.jpg?w=900',
    alt: 'Unlimited Request',
    title: 'Unlimited Request',
    description: 'Enjoy the freedom of unlimited design, tailored to meet your every need',
  },
  {
    imgSrc: 'https://img.freepik.com/premium-photo/smart-home-control-app_1179475-17549.jpg?w=360',
    alt: 'Always in sync',
    title: 'Always in sync',
    description: 'Stay in sync with real-time updates and seamless communication all via stock',
  },
  {
    imgSrc: 'https://as1.ftcdn.net/v2/jpg/02/49/22/44/1000_F_249224479_9y8kzjHjVBZudo7jejDC98LlGoDwUxAT.jpg',
    alt: 'Pause or cancel any time',
    title: 'Pause or cancel any time',
    description: 'Flexibility at your fingertips - pause or cancel your subscription anytime',
  },
  {
    imgSrc: 'https://img.freepik.com/premium-photo/hands-holding-tablet-displaying-compliance-checklist-with-holographic-icons-data-protection-privacy-laws_39665-15285.jpg?w=1380',
    alt: 'Trello Task Management',
    title: 'Trello Task Management',
    description: 'Expertise in crafting designs that not only captivate but also drive results',
  },
  {
    imgSrc: 'https://img.freepik.com/premium-photo/laptop-with-dollar-bill-it-that-says-dollar-bills_847607-13499.jpg?w=740',
    alt: 'Worry-free pricing',
    title: 'Worry-free pricing',
    description: 'Get all your design needs covered for just ₹999/month',
  },
];

export default Benefits