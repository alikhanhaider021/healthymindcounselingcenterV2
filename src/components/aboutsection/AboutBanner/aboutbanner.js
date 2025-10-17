import Link from 'next/link'
import React from 'react'
import "./aboutbanner.css"
export default function AboutBanner(){
  return (
    <>
    
     <section className="hero-section">
            <div className="hero-overlay"></div>
            <div className="hero-content">
              <h1 className="hero-title">ABOUT</h1>
              <div className="breadcrumb">
      {/* Home link */}
      <span>
        < Link href="/" className="breadcrumb-home">Home</Link>
      </span>
    
      {/* Separator */}
      <span className="separator">›</span>
    
      {/* Current page */}
      <span className="active">ABOUT</span>
    </div>
              {/* <div className="breadcrumb">
                <span>Home</span>
                
                               
                <span className="separator">›</span>
                <span className="active">Contact Us</span>
              </div> */}
            </div>
          </section>
    </>
  )
}


