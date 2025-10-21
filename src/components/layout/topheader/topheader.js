import React from "react";
import Link from "next/link";
import { FaReddit, FaFacebook } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { BsWhatsapp } from "react-icons/bs";

import "./topheader.css";

const Topheader = () => {
  return (
    <header className="header-top" role="banner" aria-label="Top header">
      <div className="outer-container">
        <div className="top-inner">
          {/* Left: message */}
          <div className="text">
            <p className="top-message">
              Your health is our priority — I&apos;m here for you
            </p>
          </div>

          {/* Right: contact + social */}
          <div className="phone" aria-hidden={false}>
            <div className="contact-info-phone" aria-label="Contact information">
              <div className="info-list">
                <div className="info-item">
                  <MdOutlineEmail className="icon" aria-hidden="true" />
                  <Link
                    href="mailto:sophia@healthymindcounselingcenter.com"
                    className="info-link"
                  >
                    sophia@healthymindcounselingcenter.com
                  </Link>
                </div>

                <div className="info-item">
                  <LiaPhoneVolumeSolid className="icon" aria-hidden="true" />
                  <Link href="tel:+13862439299" className="info-link">
                    (386) 243-9299
                  </Link>
                </div>
              </div>
            </div>

            <nav className="social-info" aria-label="Follow us">
              <ul className="social-list" role="list">
                <li className="social-heading">Follow Us</li>
                <li>
                  <Link
                    href="https://www.facebook.com/Healthy-Mind-Counseling-Center-109616265215558"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="social-link"
                  >
                    <FaFacebook className="social-icon" aria-hidden="true" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.reddit.com/user/healthymindcoun"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Reddit"
                    className="social-link"
                  >
                    <FaReddit className="social-icon" aria-hidden="true" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://wa.me/13862439299"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className="social-link"
                  >
                    <BsWhatsapp className="social-icon" aria-hidden="true" />
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topheader;
