
// components/AboutSection.js
import Image from 'next/image';
import './Introsection.css';

export default function IntroSection() {
  return (
    <>
    <div className='introsection'>
    <div className="about-section">
      <div className="about-container">
        <div className="about-grid">
          {/* Left Content */}
        <div className="about-content">
  {/* Heading */}
  <div className="about-header">
    <p className="about-subtitle">About Me</p>
    <h2 className="about-title">Transforming Mental Health with Care and Purpose</h2>
  </div>

  {/* Description */}
  <p className="about-description">
    I’m <strong>Sophia Penafiel</strong>, and I’m right here to make a meaningful difference in mental
    health within our community. My approach centers on leveraging each client’s unique strengths
    and personal goals to design effective behavioral therapies and counseling strategies that
    improve relationships, enhance emotional well-being, and support overall life balance.
  </p>

  {/* Read More Button */}
  <div className="mt-6">
    <a href="#more" className="read-more-btn">
      Read More
    </a>
  </div>
</div>


          {/* Right Image with Experience Box */}
          <div className="about-image-wrapper">
            <div className="image-container">
              <Image
                src="/images/sophia.jpg"
                alt="Medical Professional"
                width={600}
                height={500}
                className="doctor-image"
                priority
              />
              
              {/* Experience Box Overlay */}
              <div className="experience-box">
                <div className="experience-number">30</div>
                <div className="experience-text">
                  Years of Experience in<br />This Field
                </div>
              </div>
            </div>

            {/* Decorative Icon */}
            <div className="decorative-icon">
              <svg viewBox="0 0 64 64" fill="currentColor">
                <path d="M32 8c-4 0-8 2-10 5-3 4-4 9-4 14 0 8 4 15 10 19v10c0 2 2 4 4 4s4-2 4-4V46c6-4 10-11 10-19 0-5-1-10-4-14-2-3-6-5-10-5zm0 4c3 0 5 1 7 3 2 3 3 7 3 11 0 6-3 11-7 14-1 1-1 1-1 2v10c0 1-1 2-2 2s-2-1-2-2V42c0-1 0-1-1-2-4-3-7-8-7-14 0-4 1-8 3-11 2-2 4-3 7-3z"/>
                <circle cx="32" cy="20" r="3"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}
