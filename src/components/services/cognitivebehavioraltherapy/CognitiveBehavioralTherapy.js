import React from 'react';
import './CognitiveBehavioralTherapy.css';
import Image from 'next/image';
const CognitiveBehavioralTherapy = () => {
  return (
    <>
    
      <section className="CognitiveBehavioralTherapy">
        <div className="CognitiveBehavioralTherapy__container">
          <div className="CognitiveBehavioralTherapy__wrapper">
            
            {/* Image Column */}
            <div className="CognitiveBehavioralTherapy__imageColumn">
              <div className="CognitiveBehavioralTherapy__imageWrapper">
<Image
            alt="Sophia Penafiel, M.S. Licensed Mental Health Counselor"
                  className="CognitiveBehavioralTherapy__image"
                  src="/images/cognitivebehavioral.jpg"
                width={400}
                height={420}
              />


               
                <div className="CognitiveBehavioralTherapy__imageOverlay"></div>
              </div>
            </div>

            {/* Content Column */}
            <div className="CognitiveBehavioralTherapy__contentColumn">
              <div className="CognitiveBehavioralTherapy__content">
                <div className="CognitiveBehavioralTherapy__badge">
                  <span className="CognitiveBehavioralTherapy__badgeIcon">🧠</span>
                  <span className="CognitiveBehavioralTherapy__badgeText">Evidence-Based Treatment</span>
                </div>
                
                <h3 className="CognitiveBehavioralTherapy__title">
                  Cognitive-Behavioral Therapy
                </h3>
                
                <div className="CognitiveBehavioralTherapy__divider"></div>
                
                <p className="CognitiveBehavioralTherapy__description">
                  Cognitive behavioral therapy (CBT) is a type of talk therapy that helps you change your thoughts and behaviors by teaching new ways of thinking and acting. CBT focuses on changing how you think about yourself, your relationships, and your environment.
                </p>
                
                <p className="CognitiveBehavioralTherapy__description">
                  It is the most common form of therapy and has been shown to be effective in treating anxiety, depression, eating disorders, substance abuse, and other mental health problems. It can also help people with chronic pain manage their symptoms more effectively.
                </p>

                <div className="CognitiveBehavioralTherapy__features">
                  <div className="CognitiveBehavioralTherapy__feature">
                    <div className="CognitiveBehavioralTherapy__featureIcon">✓</div>
                    <span className="CognitiveBehavioralTherapy__featureText">Proven Effectiveness</span>
                  </div>
                  <div className="CognitiveBehavioralTherapy__feature">
                    <div className="CognitiveBehavioralTherapy__featureIcon">✓</div>
                    <span className="CognitiveBehavioralTherapy__featureText">Goal-Oriented Approach</span>
                  </div>
                  <div className="CognitiveBehavioralTherapy__feature">
                    <div className="CognitiveBehavioralTherapy__featureIcon">✓</div>
                    <span className="CognitiveBehavioralTherapy__featureText">Practical Strategies</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="CognitiveBehavioralTherapy__decorCircle CognitiveBehavioralTherapy__decorCircle--top"></div>
        <div className="CognitiveBehavioralTherapy__decorCircle CognitiveBehavioralTherapy__decorCircle--bottom"></div>
      </section>
    </>
  );
};

export default CognitiveBehavioralTherapy;