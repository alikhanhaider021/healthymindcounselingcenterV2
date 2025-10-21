import React from 'react';
import './Spiritualcounseling.css';
import Image from 'next/image';
const SpiritualCounselingSection = () => {
  return (
    <>
    

      <section className="spiritualcounseling-section">
        <div className="spiritualcounseling-container">
          <div className="spiritualcounseling-content-wrapper">
            
            {/* Image Column */}
            <div className="spiritualcounseling-image-column">
              <div className="spiritualcounseling-image-wrapper">
                <Image
                             alt="Sophia Penafiel, M.S. Licensed Mental Health Counselor"
                  className="spiritualcounseling-image"
                                  src="/images/Spiritualcounseling.jpg"
                                width={400}
                                height={420}
                              />
               
                <div className="spiritualcounseling-image-overlay"></div>
              </div>
            </div>

            {/* Text Content Column */}
            <div className="spiritualcounseling-text-column">
              <div className="spiritualcounseling-text-wrapper">
                <div className="spiritualcounseling-heading-container">
                  <h3 className="spiritualcounseling-heading">Spiritual Counseling</h3>
                  <div className="spiritualcounseling-heading-underline"></div>
                </div>
                
                <p className="spiritualcounseling-paragraph">
                  Spiritual counseling is a form of psychotherapy that uses spiritual or religious beliefs 
                  and practices to help people with emotional, mental, physical, relational, occupational, 
                  educational, social, financial, legal, or other problems. Spiritual counselors are trained 
                  in the use of various methods of counseling including Religious counseling, Psychological 
                  counseling, Counseling psychology, and Pastoral counseling.
                </p>


              </div>
            </div>

          </div>
        </div>

        {/* Decorative Elements */}
        <div className="spiritualcounseling-bg-decoration spiritualcounseling-bg-decoration-1"></div>
        <div className="spiritualcounseling-bg-decoration spiritualcounseling-bg-decoration-2"></div>
        <div className="spiritualcounseling-bg-decoration spiritualcounseling-bg-decoration-3"></div>
        
        {/* Floating Particles */}
        <div className="spiritualcounseling-particle spiritualcounseling-particle-1"></div>
        <div className="spiritualcounseling-particle spiritualcounseling-particle-2"></div>
        <div className="spiritualcounseling-particle spiritualcounseling-particle-3"></div>
        <div className="spiritualcounseling-particle spiritualcounseling-particle-4"></div>
      </section>
    </>
  );
};

export default SpiritualCounselingSection;