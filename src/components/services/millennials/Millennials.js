import React from 'react';
import './Millennials.css';
import Image from 'next/image';

const MillennialsSection = () => {
  return (
    <>
      <section className="millennials-section">
        <div className="millennials-container">
          <div className="millennials-content-wrapper">
            
            {/* LEFT IMAGE */}
            <div className="millennials-image-left">
              <div className="millennials-image-container-left">
                <div className="millennials-image-backdrop"></div>
                <Image
                  alt="Millennials Collaboration"
                  className="millennials-image"
                  src="/images/Millennials.jpg"
                  width={350}
                  height={420}
                />
                <div className="millennials-image-overlay"></div>
              </div>
            </div>

            {/* CENTER TEXT CONTENT */}
            <div className="millennials-text-center">
              <div className="millennials-text-content">
                
                {/* Badge */}
                <div className="millennials-badge">
                  <span className="millennials-badge-icon">✨</span>
                  <span>Generation of Change</span>
                </div>

                {/* Title */}
                <div className="millennials-title">
                  <span className="millennials-title-main">Millennials</span>
                  <span className="millennials-title-underline"></span>
                </div>

                {/* Description Paragraphs */}
                <div className="millennials-description">
                  <p className="millennials-paragraph millennials-paragraph-first">
                    Millennials are the largest generation in history. They&apos;re also the most diverse, and they have a lot of power.
                  </p>
                  
                  <p className="millennials-paragraph">
                    They&apos;ve been called &quot;the future of America,&quot; but that doesn&apos;t mean we can&apos;t learn from them. Millennials are not just a demographic; they&apos;re an idea — one with a powerful message about how to live your best life.
                  </p>
                  
                  <p className="millennials-paragraph millennials-paragraph-last">
                    The first step toward understanding millennials is realizing that they&apos;re not a homogeneous group. There are more than 80 million millennials living in the United States today, and they come from every race, ethnicity, gender identity, religion, socioeconomic background, and political affiliation.
                  </p>
                </div>

                {/* Stats Cards */}
                <div className="millennials-stats">
                  <div className="millennials-stat-card">
                    <div className="millennials-stat-number">80M+</div>
                    <div className="millennials-stat-label">Millennials in US</div>
                  </div>
                  <div className="millennials-stat-card">
                    <div className="millennials-stat-number">#1</div>
                    <div className="millennials-stat-label">Largest Generation</div>
                  </div>
                  <div className="millennials-stat-card">
                    <div className="millennials-stat-number">∞</div>
                    <div className="millennials-stat-label">Diverse Backgrounds</div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="millennials-image-right">
              <div className="millennials-image-container-right">
                <div className="millennials-image-backdrop"></div>
                <Image
                  alt="Millennials Innovation"
                  className="millennials-image"
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop"
                  width={350}
                  height={420}
                />
                <div className="millennials-image-overlay"></div>
              </div>
            </div>

          </div>
        </div>

        {/* Decorative Elements */}
        <div className="millennials-decoration millennials-decoration-top"></div>
        <div className="millennials-decoration millennials-decoration-bottom"></div>
        <div className="millennials-blob millennials-blob-1"></div>
        <div className="millennials-blob millennials-blob-2"></div>
      </section>
    </>
  );
};

export default MillennialsSection;
