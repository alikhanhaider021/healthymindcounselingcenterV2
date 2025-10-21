import React from 'react';
import './TraumaInformedTherapy.css';
import Image from 'next/image';
const TraumaInformedTherapy = () => {
  return (
    <>
    

      <section className="TraumaInformedTherapy-section">
        <div className="TraumaInformedTherapy-container">
          <div className="TraumaInformedTherapy-wrapper">
            
            {/* Image Column */}
            <div className="TraumaInformedTherapy-imageCol">
              <div className="TraumaInformedTherapy-imageWrapper">


                <Image
                          alt="Sophia Penafiel, M.S. Licensed Mental Health Counselor"
                  className="TraumaInformedTherapy-image"
                                  src="/images/traumainformed.jpg"
                                width={400}
                                height={420}
                              />
               
                <div className="TraumaInformedTherapy-imageBorder"></div>
              </div>
            </div>

            {/* Content Column */}
            <div className="TraumaInformedTherapy-contentCol">
              <div className="TraumaInformedTherapy-content">
                
                {/* Decorative Element */}
                <div className="TraumaInformedTherapy-decorative">
                  <span className="TraumaInformedTherapy-dot"></span>
                  <span className="TraumaInformedTherapy-line"></span>
                </div>

                {/* Heading */}
                <h3 className="TraumaInformedTherapy-heading">
                  Trauma-Informed Therapy
                </h3>

                {/* Subtitle */}
                <div className="TraumaInformedTherapy-subtitle">
                  Compassionate Care for Your Healing Journey
                </div>

                {/* Description */}
                <p className="TraumaInformedTherapy-text">
                  Trauma-Informed Care is a term used to describe the practice of providing care that addresses the needs and experiences of people who have been exposed to trauma. Trauma-Informed Care recognizes that all people are affected by traumatic events, including those who have not experienced direct physical harm or loss of life. It also acknowledges that some individuals may experience multiple traumas over time. The goal of this kind of care is to reduce the risk of future trauma and promote healing from past trauma.
                </p>

                <p className="TraumaInformedTherapy-text">
                  Trauma-Informed Care acknowledges that all people are affected when they have been exposed to trauma, including those who have had no direct exposure to violence. This includes the effects of childhood sexual abuse, domestic violence, war, natural disasters, accidents, and other forms of trauma.
                </p>

                {/* CTA Button */}
                <button className="TraumaInformedTherapy-btn">
                  <span>Learn More About Our Approach</span>
                  <svg className="TraumaInformedTherapy-btnIcon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>

              </div>
            </div>

          </div>
        </div>

        {/* Background Decoration */}
        <div className="TraumaInformedTherapy-bgDecor TraumaInformedTherapy-bgDecor1"></div>
        <div className="TraumaInformedTherapy-bgDecor TraumaInformedTherapy-bgDecor2"></div>
      </section>
    </>
  );
};

export default TraumaInformedTherapy;