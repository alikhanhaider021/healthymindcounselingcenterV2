import React from 'react';
import './Genz.css';
export default function GenzSection() {
  return (
    <section className="Genz-section" aria-labelledby="Genz-heading">
      <div className="Genz-container">
        <div className="Genz-grid">
          <div className="Genz-media" role="img" aria-hidden="true">
            <svg className="Genz-illustration" viewBox="0 0 600 600" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor="#8B5CF6" />
                  <stop offset="50%" stopColor="#EC4899" />
                  <stop offset="100%" stopColor="#F59E0B" />
                </linearGradient>
                <linearGradient id="g2" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.3" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              <rect width="100%" height="100%" fill="url(#g2)" rx="28" />
              
              <g opacity="0.15">
                <circle cx="120" cy="100" r="100" fill="#fff" />
                <circle cx="480" cy="180" r="80" fill="#fff" />
                <circle cx="300" cy="450" r="120" fill="#fff" />
              </g>

              <g transform="translate(150, 150)">
                <circle cx="150" cy="150" r="140" fill="none" stroke="url(#g1)" strokeWidth="8" opacity="0.6" filter="url(#glow)" />
                <circle cx="150" cy="150" r="110" fill="none" stroke="url(#g1)" strokeWidth="6" opacity="0.4" />
                <circle cx="150" cy="150" r="80" fill="none" stroke="url(#g1)" strokeWidth="4" opacity="0.3" />
                
                <g className="phone-icon" transform="translate(105, 80)">
                  <rect x="0" y="0" width="90" height="140" rx="12" fill="#fff" opacity="0.95" />
                  <rect x="8" y="12" width="74" height="100" rx="4" fill="url(#g1)" opacity="0.7" />
                  <circle cx="45" cy="125" r="8" fill="url(#g1)" opacity="0.8" />
                  <rect x="25" y="6" width="40" height="4" rx="2" fill="#ddd" />
                </g>

                <g className="notification-icon" transform="translate(220, 100)">
                  <circle cx="0" cy="0" r="18" fill="#EC4899" opacity="0.9" filter="url(#glow)" />
                  <text x="0" y="6" textAnchor="middle" fill="#fff" fontSize="20" fontWeight="bold">!</text>
                </g>

                <g className="heart-icon" transform="translate(80, 220)">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" 
                        fill="#F59E0B" opacity="0.85" filter="url(#glow)" transform="scale(1.2)" />
                </g>

                <g className="chat-icon" transform="translate(210, 200)">
                  <rect x="0" y="0" width="50" height="35" rx="8" fill="#6EE7B7" opacity="0.8" />
                  <circle cx="12" cy="17" r="3" fill="#fff" />
                  <circle cx="25" cy="17" r="3" fill="#fff" />
                  <circle cx="38" cy="17" r="3" fill="#fff" />
                </g>
              </g>

              <g opacity="0.1">
                <path d="M50 300 Q150 250, 250 300 T450 300" stroke="#fff" strokeWidth="3" fill="none" strokeDasharray="5,5">
                  <animate attributeName="stroke-dashoffset" from="0" to="20" dur="2s" repeatCount="indefinite" />
                </path>
              </g>
            </svg>
          </div>

          <div className="Genz-card">
            <div className="Genz-badge">GEN Z</div>
            <h2 id="Genz-heading" className="Genz-title">Generation Z — Tech, Stress &amp; Mental Health</h2>

            <p className="Genz-body">
              Generation Z is the first generation to grow up with smartphones and social media. Mental health experts say they are more likely than previous generations to suffer from anxiety, depression and other mental illnesses.
            </p>

            <p className="Genz-body">
              The new generation of teens and young adults has been dubbed Generation Z by psychologists who believe it will be the most tech-savvy in history. They&apos;re also known as iGen or &quot;the millennials&quot; for their age group.
            </p>

            <ul className="Genz-list">
              <li>
                <strong>Always connected:</strong> They&apos;ve grown up with smartphones and social networks like Facebook and Instagram, often online 24/7, spending hours on their phones each day.
              </li>
              <li>
                <strong>Mental health challenges:</strong> Experts report they are less trusting of authority figures and more prone to anxiety, depression and other disorders than older generations.
              </li>
              <li>
                <strong>Tech-savvy generation:</strong> Believed to be the most technologically proficient generation in history, constantly connected through digital platforms.
              </li>
            </ul>

            <div className="Genz-cta-row">
              <a className="Genz-cta" href="#" role="button">Read more</a>
              <a className="Genz-ghost" href="#" role="button">Contact us</a>
            </div>

            <p className="Genz-note">Designed to be bold, modern and client-ready — fully responsive and accessible.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
