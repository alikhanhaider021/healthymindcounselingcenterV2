import React from 'react';
import './LGBTQIA.css';
import Image from 'next/image';

export default function LGBTQIASection() {
  return (
    <section className="LGBTQIA-section">
      <div className="LGBTQIA-container">
        <div className="LGBTQIA-grid">
          
          <div className="LGBTQIA-image-wrapper">
            <div className="LGBTQIA-image-glow"></div>

            <Image
              alt="LGBTQIA+ Support and Mental Health"
              className="LGBTQIA-image"
              src="/images/lgbt2.jpg"
              width={400}
              height={620}
            />
            
            <div className="LGBTQIA-decoration">
              <div className="LGBTQIA-decoration-circle LGBTQIA-circle-1"></div>
              <div className="LGBTQIA-decoration-circle LGBTQIA-circle-2"></div>
              <div className="LGBTQIA-decoration-circle LGBTQIA-circle-3"></div>
            </div>
          </div>

          <div className="LGBTQIA-content">
            <div className="LGBTQIA-badge-wrapper">
              <span className="LGBTQIA-badge">SUPPORT & ADVOCACY</span>
            </div>
            
            <h3 className="LGBTQIA-title">
              LGBTQIA+ Mental Health & Wellbeing
            </h3>

            <div className="LGBTQIA-text-content">
              <p className="LGBTQIA-paragraph">
                The LGBTQIA+ community is a diverse group of people who identify as lesbian, gay, bisexual, transgender, queer, intersex and/or asexual. The term &quot;queer&quot; was coined in the 1970s to describe those whose sexual orientation or gender identity differs from that which society deems normal. In recent years, the term has been used more broadly to include all individuals who do not conform to traditional gender roles.
              </p>
              
              <div className="LGBTQIA-highlight-box">
                <div className="LGBTQIA-highlight-icon">⚠️</div>
                <p className="LGBTQIA-paragraph">
                  LGBTQIA youth face higher rates of bullying, harassment and discrimination than any other demographic. According to the National Center for Transgender Equality, nearly one in five trans students have attempted suicide at some point in their lives.
                </p>
              </div>

              <p className="LGBTQIA-paragraph">
                In addition, LGBTQIA youth experience homelessness at twice the rate of non-transgender youth.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
