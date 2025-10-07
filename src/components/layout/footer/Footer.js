// app/components/Footer.jsx
import Link from 'next/link';
import { FaTwitter, FaFacebookSquare, FaReddit } from "react-icons/fa";
import "./footer.css";

import { MdOutlineEmail } from "react-icons/md";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { FaMapMarkerAlt, FaBuilding } from "react-icons/fa";
import Image from 'next/image';

export default function FooterSection() {
  return (
    <footer className="footer">
      {/* Emergency Call & Email Signup Section */}
      <div className='footer-emergency-signup-down'>
        <div className="footer-top">
          <div className="container">
            <div className="reachout-section">
              <div className="text-start">
                <h5>Let&apos;s connect online and get started!</h5>
                <p>
                  Everyone deserves peace of mind. Let&apos;s talk, listen, and work
                  together toward a healthier, happier you — because mental health
                  is just as important as physical health.
                </p>
              </div>
              <div>
                <Link href="/contact-us">
                  <button>GET STARTED</button>
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
            {/* Top 3 Columns */}
            <div className="flex text-center lg:text-left">
              
              {/* ===== CONTACT INFO ===== */}
              <div className="w-full lg:w-1/3 px-4">
                <h4>Contact Information</h4>

                <h5>
                  <Link href="tel:+13862439299">
                    <span className='flex items-center gap-2'>
                      <LiaPhoneVolumeSolid /> (386) 243-9299
                    </span>
                  </Link>
                </h5>

                <h5 className='flex items-center gap-2'>
                  <MdOutlineEmail className=" text-2xl text-[#0d419a] " /> sophia@healthymindcounselingcenter.com
                </h5>
                <h5 className='flex items-center gap-2'>
                  <FaMapMarkerAlt className="text-2xl text-[#0d419a] " /> 395 Palm Coast Parkway SW
                </h5>
                <h5 className='flex items-center gap-2'>
                  <FaBuilding className="text-2xl text-[#0d419a] " /> Suite 4
                </h5>
                <h5 className='flex items-center gap-2'>
                  <FaMapMarkerAlt className="text-2xl text-[#0d419a] " /> Palm Coast, FL 32137
                </h5>

                {/* Social Icons */}
                <div className="social-icons">
                  <Link
                    href="https://twitter.com/HealthyMindCoun"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                    className="social-btn twitter"
                  >
                    <FaTwitter />
                  </Link>

                  <Link
                    href="https://www.facebook.com/Healthy-Mind-Counseling-Center-109616265215558"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="social-btn facebook"
                  >
                    <FaFacebookSquare />
                  </Link>

                  <Link
                    href="https://www.reddit.com/user/healthymindcoun"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Reddit"
                    className="social-btn reddit"
                  >
                    <FaReddit />
                  </Link>
                </div>
              </div>

              {/* ===== HOURS OF OPERATION ===== */}
              <div className="w-full lg:w-1/3 px-4 mb-4">
                <h4>Hours of Operation</h4>
                <ul className="list-decimal-styled"> 
                  <li className=' list-content '> Monday: 10:00AM - 7:00PM</li>
                  <li className=' list-content '> Tuesday: 10:00AM - 7:00PM</li>
                  <li className=' list-content '> Wednesday: 10:00AM - 7:00PM</li>
                  <li className=' list-content '> Thursday: Closed</li>
                  <li className=' list-content '> Friday: Closed</li>
                  <li className=' list-content '> Saturday: Closed</li>
                  <li className=' list-content '> Sunday: Closed</li>
                </ul>
              </div>

              {/* ===== OTHER RESOURCES ===== */}
              <div className="w-full lg:w-1/3 px-4 sm:mt-2">
                <div className="flex flex-wrap items-top mb-6">
                  <div className="">
                    <h4>Other Resources</h4>
                    <ul className="list-unstyled">
                      <li>
                        <Link href="/terms-and-conditions">
                          Terms &amp; Conditions
                        </Link>
                      </li>
                      <li>
                        <Link href="/privacy-policy">
                          Privacy Policy
                        </Link>
                      </li>
                      <li>
                        <Link href="/contact">
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <div className="footer-logo">
              <Image
                alt="Healthy Mind Counseling Center"
                className="w-full rounded-full align-middle border-none shadow-lg"
                src="/images/logo.png"
                width={58}
                height={58}
              />
            </div>

            <nav className="footer-nav">
              <Link href="/">SERVICES</Link>
              <Link href="/about">ABOUT</Link>
              <Link href="/departments">RATES AND INSURANCE</Link>
              <Link href="/portfolio">GET STARTED</Link>
              <Link href="/blog">CONTACT</Link>
              <Link href="/contact">RESOURCES</Link>
            </nav>
          </div>

          <div className="copyright">
            <Link href="/">Healthy Mind Counseling Center</Link> &nbsp; Copyright © 2025
          </div>
        </div>
      </div>
    </footer>
  );
}
