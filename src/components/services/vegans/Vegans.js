import React from 'react';
import './Vegans.css';
import Image from 'next/image';

const VegansSection = () => {
  return (
    <>
      <section className="vegans-section">
        <div className="vegans-container">
          <div className="vegans-content-wrapper">
            
            {/* Image Column */}
            <div className="vegans-image-column">
              <div className="vegans-image-wrapper">
                <Image
                  alt="Sophia Penafiel, M.S. Licensed Mental Health Counselor"
                  className="vegans-image"
                  src="/images/vegans.jpg"
                  width={400}
                  height={420}
                />
                <div className="vegans-image-overlay"></div>
              </div>
            </div>

            {/* Text Content Column */}
            <div className="vegans-text-column">
              <div className="vegans-text-wrapper">
                <div className="vegans-heading-container">
                  <div className="vegans-heading-decoration"></div>
                  <h3 className="vegans-heading">Vegans</h3>
                </div>
                
                <p className="vegans-paragraph">
                  The vegan community is a diverse group of people with many different needs. 
                  Some vegans are more mentally healthy than others, and some need help to achieve 
                  that level of wellness. If you&apos;re looking for someone who can provide this type 
                  of support, we are here to help.
                </p>
                
                <p className="vegans-paragraph">
                  Our services specialize in helping individuals overcome their mental health issues 
                  through various methods by encouraging counseling, hypnotherapy, meditation, yoga, 
                  and more.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Decorative Elements */}
        <div className="vegans-bg-decoration vegans-bg-decoration-1"></div>
        <div className="vegans-bg-decoration vegans-bg-decoration-2"></div>
      </section>
    </>
  );
};

export default VegansSection;
