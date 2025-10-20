// components/ServicesBanner.jsx
import React from 'react';
import './ServicesBanner.css';

export default function ServicesBanner() {
  return (
    <section className="services-banner">
      <div className="banner-overlay"></div>
      <div className="banner-content">
        <h1 className="banner-title">Services</h1>
        <p className="banner-description">
          Here is what you need to know about Healthy Mind Counseling Center&apos;s Mental Health Services here in Palm Coast.
        </p>
      </div>
    </section>
  );
}
