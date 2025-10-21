import React from 'react';
import './SolutionFocusedTherapy.css';
import Image from 'next/image';

const SolutionFocusedTherapy = () => {
  return (
    <>
    

      <section className="solutionFocusedTherapySection">
        <div className="solutionFocusedTherapyContainer">
          <div className="solutionFocusedTherapyWrapper">
            <div className="solutionFocusedTherapyImageCol">
              <div className="solutionFocusedTherapyImageWrapper">

                <Image
                 alt="Sophia Penafiel, M.S. Licensed Mental Health Counselor"
                  className="solutionFocusedTherapyImage"
                  src="/images/solutionfocused.jpg"
                                width={400}
                                height={420}
                />
                
              </div>
            </div>

            <div className="solutionFocusedTherapyContentCol">
              <div className="solutionFocusedTherapyContent">
                <div className="solutionFocusedTherapyTitleWrapper">
                  <h3 className="solutionFocusedTherapyTitle">
                    Solution Focused Therapy
                  </h3>
                </div>
                <p className="solutionFocusedTherapyDescription">
                  The Solution Focused Approach is a client-centered, solution focused therapy that focuses on the present moment and helps clients to identify their own solutions. The approach was developed by Dr. Ronald E. Rapee in the 1970s and has been used successfully with children and adults for over thirty years. It can be applied across a range of problems including anxiety, depression, anger management, and relationship issues.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SolutionFocusedTherapy;