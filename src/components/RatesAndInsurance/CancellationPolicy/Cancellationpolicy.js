'use client';
import Image from "next/image";
import "./CancellationPolicy.css";

export default function CancellationPolicy() {
  return (
    <>
     

      <section className="policy-section">
        <div className="wave-divider">
          <svg
            className="wave-svg"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="wave-fill"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="policy-container">
          <div className="policy-content-wrapper">
            <div className="policy-image-wrapper">
              <div className="image-glow"></div>
              
               <Image
                            src="/images/img2.jpg"
                            alt="Cancellation & No Show Policy"
                            width={600}
                            height={500}
                            className="policy-image"
                            priority
                          />
             
            </div>
            
            <div className="policy-text-wrapper">
              <div className="policy-header">
                {/* <div className="header-accent"></div> */}
                <h3 className="policy-title">Cancellation & No Show Policy</h3>
                <p className="policy-intro">
                  We have a number of client expectations about the professional relationship we embark on with each client. We expect you to keep your appointments. Please remember that someone else may want this time.
                </p>
              </div>

              <div className="policy-details">
                <div className="notice-box">
                  <div className="notice-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="12"></line>
                      <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                  </div>
                  <p className="notice-text">
                    <strong>Please give our other clients, their obligations, relations and your therapist the courtesy of a <span className="highlight-yellow">24 HOUR NOTICE</span> if you must cancel an appointment; otherwise, you will be charged <span className="highlight-yellow">THE FULL SESSION FEE</span> for this time</strong> (Please see the Fee agreement on your client portal for more information).
                  </p>
                </div>

                <p className="policy-paragraph">
                  We always consider broken appointments individually and understand that emergencies do arise. <strong>Insurance will not pay for broken appointments.</strong>
                </p>

                <div className="pricing-card">
                  <div className="pricing-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="12" y1="1" x2="12" y2="23"></line>
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                    </svg>
                  </div>
                  <p className="pricing-text">
                    <strong>Our current Self-Pay fee is $125 per session and $175 for the Initial Assessment Session.</strong>
                  </p>
                </div>

                <div className="contact-section">
                  <h4 className="contact-title">Schedule Your First Call</h4>
                  <p className="contact-text">
                    Inquiries? Please contact me at <a href="tel:3862439299" className="phone-link">(386) 243-9299</a> for further information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}