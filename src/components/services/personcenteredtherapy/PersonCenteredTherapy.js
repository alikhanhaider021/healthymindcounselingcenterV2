import React from 'react';
import './PersonCenteredTherapy.css';
import Image from 'next/image';

const PersonCenteredTherapy = () => {
  return (
    <section className="PersonCenteredTherapy">
      <div className="PersonCenteredTherapy__container">
        <div className="PersonCenteredTherapy__wrapper">
          
          {/* Content Side */}
          <div className="PersonCenteredTherapy__content">
            <div className="PersonCenteredTherapy__contentInner">
              <div className="PersonCenteredTherapy__badge">
                <span className="PersonCenteredTherapy__badgeIcon">✨</span>
                <span className="PersonCenteredTherapy__badgeText">Therapeutic Approach</span>
              </div>
              
              <h2 className="PersonCenteredTherapy__title">
                Person-Centered
                <span className="PersonCenteredTherapy__titleHighlight"> Therapy</span>
              </h2>
              
              <div className="PersonCenteredTherapy__decorativeLine">
                <span className="PersonCenteredTherapy__decorativeDot"></span>
                <span className="PersonCenteredTherapy__decorativeDot"></span>
                <span className="PersonCenteredTherapy__decorativeDot"></span>
              </div>
              
              <p className="PersonCenteredTherapy__description">
                The person-centered approach to therapy is a therapeutic method that emphasizes 
                the importance of understanding and responding to each client&apos;s unique needs. 
                This approach focuses on helping clients identify their own values, beliefs, 
                attitudes, feelings, and behaviors in order to develop more effective ways of 
                coping with life situations.
              </p>
              
              <p className="PersonCenteredTherapy__descriptionSecondary">
                The person-centered therapist helps clients understand how they think about 
                themselves, others, and the world.
              </p>
              
              <div className="PersonCenteredTherapy__features">
                <div className="PersonCenteredTherapy__feature">
                  <div className="PersonCenteredTherapy__featureIcon">🎯</div>
                  <span className="PersonCenteredTherapy__featureText">Personalized Care</span>
                </div>
                <div className="PersonCenteredTherapy__feature">
                  <div className="PersonCenteredTherapy__featureIcon">💙</div>
                  <span className="PersonCenteredTherapy__featureText">Empathetic Support</span>
                </div>
                <div className="PersonCenteredTherapy__feature">
                  <div className="PersonCenteredTherapy__featureIcon">🌱</div>
                  <span className="PersonCenteredTherapy__featureText">Growth Focused</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Image Side */}
          <div className="PersonCenteredTherapy__imageWrapper">
            <div className="PersonCenteredTherapy__imageContainer">
              <div className="PersonCenteredTherapy__imageGradient"></div>
              <Image
                alt="Sophia Penafiel, M.S. Licensed Mental Health Counselor"
                className="PersonCenteredTherapy__image"
                src="/images/person-centered-therapy.jpg"
                width={400}
                height={420}
              />

              <div className="PersonCenteredTherapy__floatingCard">
                <div className="PersonCenteredTherapy__floatingCardIcon">💬</div>
                <div className="PersonCenteredTherapy__floatingCardText">
                  <div className="PersonCenteredTherapy__floatingCardTitle">Client-Focused</div>
                  <div className="PersonCenteredTherapy__floatingCardSubtitle">Your journey, your pace</div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Background Decorations */}
      <div className="PersonCenteredTherapy__bgDecoration PersonCenteredTherapy__bgDecoration--1"></div>
      <div className="PersonCenteredTherapy__bgDecoration PersonCenteredTherapy__bgDecoration--2"></div>
      <div className="PersonCenteredTherapy__bgDecoration PersonCenteredTherapy__bgDecoration--3"></div>
    </section>
  );
};

export default PersonCenteredTherapy;
