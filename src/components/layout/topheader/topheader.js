// src/components/layout/Topheader.js
import React from "react";
import Image from "next/image";
import Link from "next/link";

import { MdOutlineEmail } from "react-icons/md";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { BsWhatsapp } from "react-icons/bs";

import "./topheader.css";

const Topheader = () => {
  return (
    <div className="header-top">
      <div className="outer-container">
        <div className="top-inner">
          {/* Left: message */}
          <div className="text">
            <p>{"Your health is our priority — we're here for you 24/7"}</p>
          </div>

          {/* Right: contact + social */}
          <div className="phone" >
            <div className="contact-info-phone" >
              <div className=" info-list ">
                <div>
                  <MdOutlineEmail />
                  <a href="mailto:example@info.com">example@info.com</a>
                </div>
                <div>
                  <LiaPhoneVolumeSolid  />
                  <a href="tel:+911234567890">+91 1234567890</a>
                </div>
              </div>
            </div>

            <div className="social-info">
              <ul role="list">
                <li>
                  <h6>Follow Us</h6>
                </li>
                <li>
                  <Link href="/" >
                    <FaFacebook />
                  </Link>
                </li>
                <li>
                  <Link href="/" >
                    <IoLogoInstagram />
                  </Link>
                </li>
                <li>
                  <Link href="/" >
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
