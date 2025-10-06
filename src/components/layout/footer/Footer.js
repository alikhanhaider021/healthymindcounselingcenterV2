// app/components/Footer.jsx
import Link from 'next/link';
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      {/* Emergency Call & Email Signup Section */}
      <div className="footer-top">
        <div className="container">
          <div className="footer-top-grid">
            {/* Emergency Call Box */}
            <div className="emergency-box">
              <div className="emergency-content">
                <div className="phone-icon">
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <path d="M45 52.5C36.75 52.5 28.875 49.5 22.5 43.125C16.125 36.75 13.125 28.875 13.125 20.625C13.125 19.5 13.5 18.375 14.25 17.625L19.5 12.375C20.25 11.625 21.375 11.25 22.5 11.25C23.625 11.25 24.75 11.625 25.5 12.375L31.5 18.375C32.25 19.125 32.625 20.25 32.625 21.375C32.625 22.5 32.25 23.625 31.5 24.375L28.5 27.375C30.375 31.125 33.375 34.125 37.125 36L40.125 33C40.875 32.25 42 31.875 43.125 31.875C44.25 31.875 45.375 32.25 46.125 33L52.125 39C52.875 39.75 53.25 40.875 53.25 42C53.25 43.125 52.875 44.25 52.125 45L46.875 50.25C46.125 51 45 51.375 43.875 51.375C43.75 52.125 44.25 52.5 45 52.5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="emergency-text">
                  <h3>Emergency Call</h3>
                  <p className="label">Telephone</p>
                  <p className="phone">+ (111) 45 456 4567</p>
                </div>
              </div>
              <div className="emergency-icon-bg">
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none" opacity="0.1">
                  <path d="M90 105C73.5 105 57.75 99 45 86.25C32.25 73.5 26.25 57.75 26.25 41.25C26.25 39 27 36.75 28.5 35.25L39 24.75C40.5 23.25 42.75 22.5 45 22.5C47.25 22.5 49.5 23.25 51 24.75L63 36.75C64.5 38.25 65.25 40.5 65.25 42.75C65.25 45 64.5 47.25 63 48.75L57 54.75C60.75 62.25 66.75 68.25 74.25 72L80.25 66C81.75 64.5 84 63.75 86.25 63.75C88.5 63.75 90.75 64.5 92.25 66L104.25 78C105.75 79.5 106.5 81.75 106.5 84C106.5 86.25 105.75 88.5 104.25 90L93.75 100.5C92.25 102 90 102.75 87.75 102.75C87.5 104.25 88.5 105 90 105Z" stroke="white" strokeWidth="3"/>
                </svg>
              </div>
            </div>

            {/* Email Signup Box */}
            <div className="signup-box">
              <h3>Sign up for Email</h3>
              <form className="signup-form">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  required 
                />
                <button type="submit">Submit Now</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* About Us Column */}
            <div className="footer-column">
              <h4>About Us</h4>
              <p>To provide accessible and equitable healthcare for all individuals, regardless of their or socioeconomic status.</p>
              <div className="social-links">
                <a href="#" aria-label="Facebook"><FaFacebook /></a>
                <a href="#" aria-label="Dribbble"><FaDribbble /></a>
                <a href="#" aria-label="Twitter"><FaTwitter /></a>
              </div>
            </div>

            {/* Links Column */}
            <div className="footer-column">
              <h4>Links</h4>
              <ul>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/surgery">Surgery</Link></li>
                <li><Link href="/medications">Medications</Link></li>
                <li><Link href="/chemotherapy">Chemotherapy</Link></li>
                <li><Link href="/physical-therapy">Physical therapy</Link></li>
              </ul>
            </div>

            {/* Services Column */}
            <div className="footer-column">
              <h4>Services</h4>
              <ul>
                <li><Link href="/primary-care">Primary care</Link></li>
                <li><Link href="/specialty-care">Specialty care</Link></li>
                <li><Link href="/emergency-care">Emergency care</Link></li>
                <li><Link href="/diagnostic-services">Diagnostic services</Link></li>
                <li><Link href="/rehabilitation-services">Rehabilitation services</Link></li>
              </ul>
            </div>

            {/* Contacts Column */}
            <div className="footer-column">
              <h4>Contacts</h4>
              <ul className="contact-info">
                <li>
                  <span className="icon">✉</span>
                  <div>
                    <strong>Email:</strong>
                    <a href="mailto:info@yourmail.com">info@yourmail.com</a>
                  </div>
                </li>
                <li>
                  <span className="icon">📞</span>
                  <div>
                    <strong>Call:</strong>
                    <a href="tel:+12304561523">+1 (230)-456-155-23</a>
                  </div>
                </li>
                <li>
                  <span className="icon">📍</span>
                  <div>
                    <strong>Address:</strong>
                    <span>2972 Westheimer Rd. Santa Ana, Illinois 85486</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <div className="footer-logo">
              <div className="logo-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="18" stroke="#0052CC" strokeWidth="2"/>
                  <path d="M20 10V30M10 20H30" stroke="#0052CC" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="logo-text">
                <span className="brand-name">Medicinsk</span>
                <span className="brand-tagline">CENTRAL HOSPITAL</span>
              </div>
            </div>

            <nav className="footer-nav">
              <Link href="/">Home</Link>
              <Link href="/about">About Us</Link>
              <Link href="/departments">Departments</Link>
              <Link href="/portfolio">Portfolio</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>

          <div className="copyright">
            <Link href="/">Medicinsk</Link> © 2025 All Right Reserved
          </div>
        </div>
      </div>
    </footer>
  );
}