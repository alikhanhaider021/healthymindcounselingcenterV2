import React from "react";

import "./VideoCouncellingsection.css";
const VideoCouncellingSection = () => {
  return (
    <>
      <main className="main">
        {/* Hero Section */}
        <section className="heroSection">
          <div className="container">
            <div className="heroContent">
              {/* Left Side - Video */}
              <div className="videoWrapper">
                {/* Video element (note corrected JSX comment syntax and attributes) */}
<video
  className="video"
  muted
  autoPlay
  controls
  playsInline
  preload="metadata"
  poster="/counseling-thumbnail.jpg"
>
 <source src="/images/landingpageCopy .mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

                
                {/* <video
                  className="video"
                  muted        
                  autoPlay
                  controls
                  playsInline
                  preload="metadata"
                  poster="/counseling-thumbnail.jpg"
                >
                  <source src="/images/landingpageCopy .mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video> */}
              </div>

              {/* Right Side - Content */}
              <div className="textContent">
                <h1 className="title">
                  Healthy Mind
                  <span className="subtitle"> Counseling Center</span>
                </h1>

                <p className="description">
                  Healthy Mind Counseling is a safe space for young people to be
                  heard, validated, and uplifted. I believe there is no higher
                  calling than to support those in need who are struggling.
                  Young people in particular are often overlooked by
                  &quot;adults,&quot; who have become so jaded by their own
                  suffering that they dismiss the traumas and tribulations that
                  today we understand should never be ignored.
                </p>

                <p className="description">
                  Your problems and suffering are real, and you deserve to be
                  heard. That is what I am here for, so that you don&apos;t have
                  to face them alone.
                </p>

                <div className="highlights">
                  <div className="highlight-item">
                    <span className="highlight-icon">✓</span>
                    <span className="highlight-text">
                      Safe &amp; confidential environment for healing
                    </span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">✓</span>
                    <span className="highlight-text">
                      Specialized support for young adults &amp; women
                    </span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">✓</span>
                    <span className="highlight-text">
                      LGBTQIA+ affirming therapy
                    </span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">✓</span>
                    <span className="highlight-text">
                      Expert care for depression, anxiety &amp; trauma
                    </span>
                  </div>
                </div>

                <p className="specialization">
                  I treat young adults, women and LGBTQIA+ struggling with
                  depression, anxiety, and trauma
                </p>

                <button className="ctaButton">GET STARTED</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default VideoCouncellingSection;
