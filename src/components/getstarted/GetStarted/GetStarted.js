'use client';
import "./GetStarted.css"

export default function AppointmentSection() {
  return (
    <section className="appointment-section">
      <div className="appointment-container">
        <div className="appointment-card">
          <div className="appointment-header">
            <div className="icon-wrapper">
              <svg className="calendar-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="appointment-title">Appointment Request</h2>
            <p className="appointment-subtitle">Fill out the form below and we&apos;ll get back to you shortly</p>
          </div>
          
          <div className="iframe-container">
            <iframe 
              className="appointment-iframe"
              src="https://docs.google.com/forms/d/e/1FAIpQLSdj7NlA4gEKuEvuYjwBjijF0rkhn4wL_lDllNIqCDIy6J50AQ/viewform?embedded=true"
              title="Appointment Request Form"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
}