import { FaAward } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import "./PolicyBannersection.css";
export default function RatesAndInsurancePolicyBanner() {
  return (
    <>
      
       <div className="policy-hero-section">
        <div className="policy-bg-image">
          <span className="policy-overlay"></span>
        </div>
        <div className="policy-container">
          <div className="policy-content-wrapper">
            <div className="policy-text-center">
              <div>
                <h1 className="policy-main-heading">
                  Rates & Insurance Policy
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="policy-cards-section">
        <div className="policy-cards-container">
          <div className="policy-cards-flex">
            <div className="policy-card-wrapper">
              <div className="policy-card">
                <div className="policy-card-accent"></div>
                <div className="policy-card-inner">
                  <div className="policy-icon-wrapper policy-icon-red bg-red-400">

                    <FaAward className="fas fa-award policy-icon" />
                    
                  </div>
                  <h6 className="policy-price-heading">$175</h6>
                  <p className="policy-description">
                    For the Initial Assessment
                  </p>
                </div>
              </div>
            </div>

            <div className="policy-card-wrapper">
              <div className="policy-card">
                <div className="policy-card-accent"></div>
                <div className="policy-card-inner">
                  <div className="policy-icon-wrapper policy-icon-blue bg-blue-400">
                    <FaRetweet  className="fas fa-retweet policy-icon" />

                   
                  </div>
                  <h6 className="policy-price-heading">$125</h6>
                  <p className="policy-description">
                    Per Session
                  </p>
                </div>
              </div>
            </div>

            <div className="policy-card-wrapper">
              <div className="policy-card">
                <div className="policy-card-accent"></div>
                <div className="policy-card-inner">
                  <div className="policy-icon-wrapper policy-icon-darkred bg-red-700">
                    <FaHandshake className="fas fa-handshake policy-icon"/>
                  
                  </div>
                  <h6 className="policy-price-heading">$150</h6>
                  <p className="policy-description">
                    Couple Session
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}