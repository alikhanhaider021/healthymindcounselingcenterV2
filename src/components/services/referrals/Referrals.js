import React from 'react';
import { Sparkles } from 'lucide-react';
import './Referrals.css';
const EvaluationsReferrals = () => {
  return (
    <div className="referrals-wrapper">
    

      <div className="referrals-container">
        <div className="referrals-content-wrapper">
          <div className="referrals-main-card">
            <div className="referrals-decorative-circle referrals-circle-1"></div>
            <div className="referrals-decorative-circle referrals-circle-2"></div>
            
            <div className="referrals-header">
              <div className="referrals-title-wrapper">
                <div className="referrals-icon-badge">
                  <Sparkles size={32} />
                </div>
                <h3 className="referrals-title">Evaluations and Referrals</h3>
              </div>
              
              <p className="referrals-description">
                Healthy Mind Counseling Center accepts referrals from parents and family members, professionals, schools, physicians, and providers from the community, both in state and out of state.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EvaluationsReferrals;