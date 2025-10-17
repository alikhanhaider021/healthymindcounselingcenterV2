import React from 'react'
import './Contactbanner.css'
import Link from 'next/link'

const ContactBanner = () => {
  return (
    <>
     {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">CONTACT US</h1>
          <div className="breadcrumb">
  {/* Home link */}
  <span>
    < Link href="/" className="breadcrumb-home">Home</Link>
  </span>

  {/* Separator */}
  <span className="separator">›</span>

  {/* Current page */}
  <span className="active">Contact Us</span>
</div>
          {/* <div className="breadcrumb">
            <span>Home</span>
            
                           
            <span className="separator">›</span>
            <span className="active">Contact Us</span>
          </div> */}
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="contact-cards-section">
        <div className="container">
          <div className="cards-grid">
            {/* Office Location Card */}
            <div className="contact-card">
              <div className="icon-wrapper">
                 <Link href="tel:(386) 243-9299">
                  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>

                 </Link>
               
              </div>
              <h3 className="card-title">Location</h3>
              <p className="card-text">395 Palm Coast Parkway SW</p>
              <p className="card-text">Suite 4</p>
              <p className="card-text">Palm Coast, FL 32137</p>
            </div>

            {/* Company Email Card */}
            <div className="contact-card">
              <div className="icon-wrapper">
                  <Link href="Email:sophia@healthymindcounselingcenter.com ">
                   <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                  <path d="M3 7l9 6 9-6"></path>
                </svg>
                  </Link>
               
              </div>
              <h3 className="card-title"> Email</h3>
              <p className="card-text">sophia@healthymindcounselingcenter.com</p>
              {/* <p className="card-text">contact@example.com</p> */}
            </div>

            {/* Contact Us Card */}
            <div className="contact-card">
              <div className="icon-wrapper">
                <Link href="tel:(386) 243-9299">
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                </Link>
                
              </div>
              <h3 className="card-title">Contact </h3>
              <p className="card-text">(386) 243-9299</p>
              {/* <p className="card-text">+000 111555888</p> */}
            </div>
          </div>
        </div>
      </section>
    
    
    
    </>
  )
}

export default ContactBanner
