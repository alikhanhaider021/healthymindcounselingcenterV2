import React from 'react';
import { FaFingerprint, FaBolt, FaPaperPlane, FaHeart, FaFilter } from "react-icons/fa";
import './InsurancePaymentsection.css';
import Image from 'next/image';

export default function InsurancePaymentSection() {
  const insuranceQuestions = [
    {
      icon: "fingerprint",
      question: "Do I have mental health insurance benefits?"
    },
    {
      icon: "bolt",
      question: "What is my insurance deductible and has it been met?"
    },
    {
      icon: "paper-plane",
      question: "How many sessions per year does my insurance cover?"
    },
    {
      icon: "heart",
      question: "What is the coverage amount per therapy session?"
    },
    {
      icon: "filter",
      question: "Do I need a referral from my primary doctor?"
    }
  ];

  const iconMap = {
    fingerprint: <FaFingerprint />,
    bolt: <FaBolt />,
    "paper-plane": <FaPaperPlane />,
    heart: <FaHeart />,
    filter: <FaFilter />
  };

  return (
    <div className="insurance-payment-section-bg">

    <div className="insurance-payment-wrapper">
      <div>
        <h3 className="insurance-section-header">Insurance</h3>

        <p className="insurance-description-text">
          Services might be covered in full or in part by your health insurance. We currently only accept
          <span className="insurance-provider-highlight"> Aetna </span>
          and
          <span className="insurance-provider-highlight"> Florida Health Care Plans </span>
          Insurance.
        </p>

        <div className="insurance-logos-container">
          <div className="insurance-logo-card">
            <Image
              src="/images/aetna.png"
              alt="Aetna Insurance"
              width={600}
              height={500}
              className="insurance-logo-image"
              priority
            />
          </div>
          <div className="insurance-logo-card">
            <Image
              src="/images/floridaHealthCarePlan.png"
              alt="Florida Health Care Plan Insurance"
              width={600}
              height={500}
              className="insurance-logo-image"
              priority
            />
          </div>
        </div>

        <p className="insurance-examination-prompt">
          Please examine your insurance coverage carefully by going through the following questions:
        </p>

        <ul className="insurance-questions-list">
          {insuranceQuestions.map((item, index) => (
            <li key={index} className="insurance-question-item">
              <div className="insurance-question-icon-badge">
                {iconMap[item.icon]}
              </div>
              <h4 className="insurance-question-text">
                {item.question}
              </h4>
            </li>
          ))}
        </ul>

        <div className="payment-section-divider"></div>

        <h3 className="payment-section-header">Payment</h3>

        <p className="payment-description-text">
          We accept cash, check and all major credit cards as forms of payment.
        </p>
      </div>
    </div>
    </div>
  );
}