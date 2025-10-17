import React from 'react';
import "./therapistprofile.css";
import Image from 'next/image';

const Li = ({ data }) => (
  <li className="therapist-list-item">
    <svg className="therapist-icon" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
    <span className="therapist-list-text">{data}</span>
  </li>
);

export default function TherapistProfile() {
  const specialties = [
    "Depression",
    "Anxiety",
    "Post-Traumatic Stress",
    "Abuse",
    "Mood disorders",
    "Anger management",
    "Self-harm",
    "Self-esteem",
    "Pre-teens",
    "Adolescents",
    "Young Adults",
    "Multicultural / POC",
    "LGBTQIA+",
    "Spirituality",
    "Adoption / Foster care",
    "Family systems",
    "Vegan"
  ];

  return (
    <section className="therapist-section">
      <div className="therapist-container">
        {/* Header */}
        <div className="therapist-header">
          <div className="therapist-header-content">
            <div className="therapist-badge">
              <span className="therapist-badge-text">
                Licensed Mental Health Professional
              </span>
            </div>
            <h1 className="therapist-title">
              Sophia Penafiel, M.S.
            </h1>
            <p className="therapist-subtitle">
              Licensed Mental Health Counselor
            </p>
            <div className="therapist-divider"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="therapist-main-grid">
          {/* Image */}
          <div className="therapist-image-column">
            <div className="therapist-image-wrapper">
              <div className="therapist-image-background"></div>
              <Image
                alt="Sophia Penafiel, M.S. Licensed Mental Health Counselor"
                className="therapist-image"
                src="/images/sophia.jpg"
                width={600}
                height={700}
                priority
              />
            </div>
          </div>

          {/* Specialties */}
          <div className="therapist-specialty-column">
            <div className="therapist-specialty-card">
              <h2 className="therapist-specialty-title">
                Areas of Treatment
              </h2>
              <p className="therapist-specialty-description">
                Sophia provides treatment for a range of symptoms, disorders and populations including:
              </p>
              <ul className="therapist-specialty-list">
                {specialties.map((specialty, index) => (
                  <Li key={index} data={specialty} />
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Biography Section */}
        <div className="therapist-bio-wrapper">
          <div className="therapist-bio-container">
            <div className="therapist-bio-card">
              <h2 className="therapist-bio-title">
                About Sophia
              </h2>
              
              <div className="therapist-bio-content">
                <p className="therapist-bio-paragraph">
                  Sophia was born and raised in a large, multicultural family in South Florida. In 2011, she obtained her Bachelor&apos;s degree in Communication Studies at Stetson University. In 2013, she earned her Master&apos;s degree through Stetson&apos;s Counselor Education Program for Mental Health Counseling. She completed her internship at an inpatient crisis stabilization unit for children and adolescents where she worked with youth suffering from an array of behavioral health and mental illnesses. For years Sophia worked in the agency setting; specifically in group homes for children in the foster care system. In the past, she has worked in supervisory and leadership roles but prefers the slower pace of the private practice setting.
                </p>
                
                <div className="therapist-approach-box">
                  <h3 className="therapist-approach-title">
                    Therapeutic Approaches
                  </h3>
                  <p className="therapist-approach-text">
                    Sophia uses a wide range of therapeutic techniques and theories in her counseling from EMDR Therapy, Cognitive-Behavioral Therapy, Person-Centered Therapy, Solution Focused Therapy, Expressive Art and Play Therapies, Sandtray Therapy, Spirituality Counseling and other evidence-based treatment methods.
                  </p>
                </div>
                
                <p className="therapist-bio-paragraph">
                  Sophia enjoys painting, cooking, kayaking, traveling, and yoga. She moved to Palm Coast 15 years ago before graduating with her Bachelor&apos;s degree. She is a vegan and strives to live as ethically and sustainably as possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}