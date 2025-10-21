import React from 'react';
import './POC.css';
import Image from 'next/image';
const POCSection = () => {
  return (
    <>
     

      <section className="poc-section">
        <div className="poc-grid-overlay"></div>
        <div className="poc-container">
          <div className="poc-content-wrapper">
            
            {/* Image Section */}
            <div className="poc-image-container">
              <div className="poc-image-wrapper">
                 <Image
                                          alt="Sophia Penafiel, M.S. Licensed Mental Health Counselor"
                  className="poc-image"
                                                  src="/images/poc.jpg"
                                                width={400}
                                                height={420}
                                              />
               
              </div>
            </div>

            {/* Text Content Section */}
            <div className="poc-text-container">
              <div className="poc-text-wrapper">
                <div className="poc-badge">
                  <svg className="poc-badge-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Mental Health Advocacy
                </div>

                <div className="poc-heading-container">
                  <h3 className="poc-heading">POC</h3>
                </div>
                
                <p className="poc-paragraph">
                  The people of color mental health movement is a social justice and human rights movement 
                  that aims to improve the lives of people of color (POC) in the United States. It focuses 
                  on issues such as racism, discrimination, poverty, incarceration, and other forms of 
                  oppression. The movement was founded by Dr. Carol Gilligan in 1980. In her book In A 
                  Different Voice: Psychological Theory, she describes how women tend to have a different 
                  voice from men, which leads them to think differently about situations. This difference 
                  in thinking has implications for how they approach life and relationships.
                </p>

                <p className="poc-paragraph">
                  In addition, POCs often experience additional stressors due to their race, gender, class, 
                  sexual orientation, religion, disability, age, immigration status, socioeconomic status, 
                  and/or ability. These factors can lead to increased vulnerability to psychological 
                  disorders. For example, African Americans are more likely than whites to be diagnosed with 
                  depression, anxiety, substance abuse, schizophrenia, bipolar disorder, post-traumatic 
                  stress disorder, eating disorders, and suicide attempts.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Decorative Elements */}
        <div className="poc-bg-decoration poc-bg-decoration-1"></div>
        <div className="poc-bg-decoration poc-bg-decoration-2"></div>
        <div className="poc-bg-decoration poc-bg-decoration-3"></div>
        
        {/* Floating Particles */}
        <div className="poc-particle poc-particle-1"></div>
        <div className="poc-particle poc-particle-2"></div>
        <div className="poc-particle poc-particle-3"></div>
        <div className="poc-particle poc-particle-4"></div>
        <div className="poc-particle poc-particle-5"></div>
      </section>
    </>
  );
};

export default POCSection;