// src/components/layout/Topheader.js
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaReddit } from "react-icons/fa";

import { MdOutlineEmail } from "react-icons/md";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { FaFacebook } from "react-icons/fa";

import { BsWhatsapp } from "react-icons/bs";

import "./topheader.css";

const Topheader = () => {
  return (
    <div className="header-top">
      <div className="outer-container">
        <div className="top-inner">
          {/* Left: message */}
          <div className="text">
            <p>{"Your health is our priority — I'm here for you"}</p>
          </div>

          {/* Right: contact + social */}
          <div className="phone">
            <div className="contact-info-phone">
              <div className="info-list">
                <div>
                  <MdOutlineEmail />
                  <Link href="mailto:example@info.com">sophia@healthymindcounselingcenter.com</Link>
                </div>
                <div>
                  <LiaPhoneVolumeSolid />
                  <Link href="tel:+911234567890"> (386) 243-9299</Link>
                </div>
              </div>
            </div>

            <div className="social-info">
              <ul role="list">
                <li>
                  <h6>Follow Us</h6>
                </li>
                <li>
                  <Link  href="https://www.facebook.com/Healthy-Mind-Counseling-Center-109616265215558" aria-label="Facebook">
                    <FaFacebook />
                  </Link>
                </li>
                <li>
                  <Link  href="https://www.reddit.com/user/healthymindcoun" aria-label="Instagram">
                    <FaReddit />
                  </Link>
                </li>
                <li>
                  <Link href="tel:(386) 243-9299" aria-label="WhatsApp">
                    <BsWhatsapp />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topheader;
