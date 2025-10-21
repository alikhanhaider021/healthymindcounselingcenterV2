
// app/components/Footer.jsx
import Link from 'next/link';
import { FaTwitter, FaFacebookSquare, FaReddit, FaMapMarkerAlt, FaBuilding } from "react-icons/fa";
import "./footer.css";

import { MdOutlineEmail } from "react-icons/md";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import Image from 'next/image';
import FooterMap from './Footermap';

export default function FooterSection() {
  return (
    <footer className="footer">
      {/* Emergency Call & Email Signup Section */}
      <div className='footer-emergency-signup-down'>
        <div className="footer-top hidden sm:block">
          <div className="container">
            <div className="reachout-section flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="text-start max-w-xl">
                <h5>Let&apos;s connect online and get started!</h5>
                <p>
                  Everyone deserves peace of mind. Let&apos;s talk, listen, and work
                  together toward a healthier, happier you — because mental health
                  is just as important as physical health.
                </p>
              </div>
              <div>
                <Link href="/contact-us" aria-label="Get started">
                  <button className="btn-get-started">GET STARTED</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*............................................ Main Footer Content */}
      <div className='footer-main-section'>
        <div className="footer-main">
          <div className="container">
            {/* Responsive grid: 1 on mobile, 2 on sm/md, 3 on lg, 4 on xl */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 text-center lg:text-left items-start">
              
              {/* ===== CONTACT INFO ===== */}
              <div className="w-full">
                <h4>Contact Information</h4>

                <h5 className="mb-2">
                  <Link href="tel:+13862439299" aria-label="Call (386) 243-9299">
                    <span className='inline-flex items-center gap-2'>
                      <LiaPhoneVolumeSolid /> <span className="break-words">(386) 243-9299</span>
                    </span>
                  </Link>
                </h5>

                <h5 className='flex items-center gap-2 mb-2 justify-center lg:justify-start'>
                  <MdOutlineEmail className=" text-2xl text-[#0d419a]" />
                  <span className="break-words">sophia@healthymindcounselingcenter.com</span>
                </h5>

                <div className=" mb-4 text-sm">
                  <div className="flex items-start gap-2 justify-center lg:justify-start">
                    <FaMapMarkerAlt className="text-2xl text-[#0d419a]" />
                    <span className="break-words">395 Palm Coast Parkway SW, Suite 4</span>
                  </div>
                  <div className="flex items-start gap-2 justify-center lg:justify-start location-line"> 
                    <FaMapMarkerAlt className="text-2xl text-[#0d419a]" />
                    <span>Palm Coast, FL 32137</span>
                  </div>
                </div>

                {/* Social Icons */}
                <div className="social-icons flex items-center justify-center lg:justify-start gap-3 mt-2">
                  <Link
                    href="https://twitter.com/HealthyMindCoun"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                    className="social-btn twitter p-2 rounded"
                  >
                    <FaTwitter />
                  </Link>

                  <Link
                    href="https://www.facebook.com/Healthy-Mind-Counseling-Center-109616265215558"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="social-btn facebook p-2 rounded"
                  >
                    <FaFacebookSquare />
                  </Link>

                  <Link
                    href="https://www.reddit.com/user/healthymindcoun"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Reddit"
                    className="social-btn reddit p-2 rounded"
                  >
                    <FaReddit />
                  </Link>
                </div>
              </div>

              {/* ===== HOURS OF OPERATION ===== */}
              <div className="w-full">
                <h4>Hours of Operation</h4>
                <ul className="list-decimal-styled mt-2 text-sm space-y-1">
                  <li className='list-content'>Monday: 10:00 AM - 7:00 PM</li>
                  <li className='list-content'>Tuesday: 10:00 AM - 7:00 PM</li>
                  <li className='list-content'>Wednesday: 10:00 AM - 7:00 PM</li>
                  <li className='list-content'>Thursday: Closed</li>
                  <li className='list-content'>Friday: Closed</li>
                  <li className='list-content'>Saturday: Closed</li>
                  <li className='list-content'>Sunday: Closed</li>
                </ul>
              </div>

              {/* ===== OTHER RESOURCES ===== */}
              <div className="w-full">
                <h4>Other Resources</h4>
                <div className="flex flex-col items-center lg:items-start mb-6">
                  <ul className="list-unstyled mt-2 space-y-2 text-sm">
                    <li>
                      <Link href="/terms-and-conditions" className="hover:underline">Terms &amp; Conditions</Link>
                    </li>
                    <li>
                      <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link href="/contact" className="hover:underline">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* .............................................................Footermap */}
              <div className="w-full">
                <h4>Location</h4>
                <div className="map-wrapper h-48 md:h-40 lg:h-48 w-full rounded overflow-hidden border">
                  <FooterMap />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="footer-logo flex items-center gap-3">
              <Image
                alt="Healthy Mind Counseling Center"
                className="rounded-full align-middle border-none shadow-lg"
                src="/images/logo.png"
                width={58}
                height={58}
              />
              <div className="text-sm text-white">Healthy Mind Counseling Center</div>
            </div>

            <nav className="footer-nav flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm">
              <Link href="/">SERVICES</Link>
              <Link href="/about">ABOUT</Link>
              <Link href="/departments">RATES AND INSURANCE</Link>
              <Link href="/portfolio">GET STARTED</Link>
              <Link href="/blog">CONTACT</Link>
              <Link href="/contact">RESOURCES</Link>
            </nav>
          </div>

          <div className="copyright text-center md:text-left mt-4">
            <Link href="/">Healthy Mind Counseling Center</Link> &nbsp; Copyright © 2025
          </div>
        </div>
      </div>
    </footer>
  );    
}
