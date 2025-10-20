import Image from 'next/image';
import './EMDRSection.css'

export default function EMDRSection() {
  return (
    <section className="emdr-section">
      {/* Decorative background elements */}
      <div className="emdr-bg-decoration-top"></div>
      <div className="emdr-bg-decoration-bottom"></div>
      
      <div className="emdr-container">
        <div className="emdr-flex-wrapper">
          {/* Image Column with Enhanced Styling */}
          <div className="emdr-image-column">
            <div className="emdr-image-group">
              {/* Decorative border */}
              <div className="emdr-decorative-border"></div>
              
              {/* Image container */}
              <div className="emdr-image-container">
                <Image
                  alt="Sophia Penafiel, M.S. Licensed Mental Health Counselor" 
                  className="emdr-image" 
                  src="/images/emdr.jpg" 
                  width={600}
                  height={600}
                />
                
                {/* Overlay gradient on hover */}
                <div className="emdr-image-overlay"></div>
              </div>
              
              {/* Floating decorative element */}
              <div className="emdr-floating-decoration"></div>
            </div>
          </div>

          {/* Content Column with Enhanced Typography */}
          <div className="emdr-content-column">
            <div className="emdr-content-wrapper">
              {/* Heading Section */}
              <div className="emdr-heading-wrapper">
                <div className="emdr-heading-container">
                  <h3 className="emdr-heading">
                    EMDR Therapy
                  </h3>
                  {/* Animated underline */}
                  <div className="emdr-heading-underline"></div>
                </div>
              </div>

              {/* Description with enhanced readability */}
              <div className="emdr-description-container">
                <p className="emdr-description">
                  <span className="emdr-first-letter">E</span>
                  MDR therapy is a psychotherapy that was developed by Francine Shapiro in the 1970s. It has been used to treat trauma-related disorders such as posttraumatic stress disorder (PTSD), anxiety, and depression. EMDR therapy is based on the theory of traumatic memory processing and involves the use of bilateral stimulation with eye movements.
                </p>
                
                {/* Decorative accent */}
                <div className="emdr-decorative-accent"></div>
              </div>

              {/* Badge Section */}
              <div className="emdr-badge-section">
                <div className="emdr-badge">
                  Evidence-Based Treatment
                </div>
                <div className="emdr-pulse-dot"></div>
                <span className="emdr-badge-text">Since 1970s</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}