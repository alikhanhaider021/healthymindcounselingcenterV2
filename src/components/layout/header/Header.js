// src/components/layout/HeaderNavbar.jsx
import Link from 'next/link'
import React from 'react'
import './header.css'
import Image from 'next/image';
import Topheader from '../topheader/topheader';

const HeaderNavbar = () => {
  return (
    <>
      <div>
        {/* top section */}
        {/* ..............................................................................................header */}
        <div className="header-main-navbar-section">
          <Topheader />
          <header className="header">
            <div className="header-container">
              {/* Logo */}
              <div className="logo">
                <Image
                  alt="Healthy Mind Counseling Center"
                  className="w-full rounded-full align-middle border-none shadow-lg"
                  src="/images/logo.png"
                  width={58}
                  height={58}
                />
              </div>

              {/* Mobile menu checkbox (controls the slide-in menu) */}
              <input
                type="checkbox"
                id="mobile-menu-toggle"
                className="mobile-menu-toggle"
                aria-hidden="true"
              />

              {/* Navigation */}


              <nav className="nav" role="navigation" aria-label="Main navigation">
 {/* Home */}
                <div className="nav-item nav-has-children">
                  <input
                    type="checkbox"
                    id="toggle-about"
                    className="submenu-toggle"
                    aria-hidden="true"
                  />
                  <label htmlFor="toggle-about" className="nav-link" tabIndex="0">
            <Link href="/" className="nav-link">Home</Link>     
                  </label>
                </div>

                {/* HOME (Services) */}
                <div className="nav-item nav-has-children">
                  <input
                    type="checkbox"
                    id="toggle-home"
                    className="submenu-toggle"
                    aria-hidden="true"
                  />
                  <label htmlFor="toggle-home" className="nav-link" tabIndex="0">
                    Services <span className="dropdown-arrow">▾</span>
                  </label>

                  <ul className="dropdown" id="menu-home" role="menu" aria-label="Home submenu">
                    <li role="none"><Link href="/" role="menuitem">EMDR Therapy</Link></li>
                    <li role="none"><Link href="/index-2" role="menuitem">Cognitive-Behavioral Therapy</Link></li>
                    <li role="none"><Link href="/index-3" role="menuitem">Person-Centered Therapy</Link></li>
                    <li role="none"><Link href="/index-3" role="menuitem">Solution Focused Therapy</Link></li>
                  </ul>
                </div>

                {/* ABOUT */}
                <div className="nav-item nav-has-children">
                  <input
                    type="checkbox"
                    id="toggle-about"
                    className="submenu-toggle"
                    aria-hidden="true"
                  />
                   <Link href="/about" className="nav-link">ABOUT</Link>
                </div>

                {/* DEPARTMENTS */}
                <div className="nav-item nav-has-children">
                  <input
                    type="checkbox"
                    id="toggle-departments"
                    className="submenu-toggle"
                    aria-hidden="true"
                  />
                  <label htmlFor="toggle-departments" className="nav-link" tabIndex="0">
                    Rates and Insurance
                  </label>
                </div>

                {/* PAGES */}
                <div className="nav-item nav-has-children">
                  <input
                    type="checkbox"
                    id="toggle-pages"
                    className="submenu-toggle"
                    aria-hidden="true"
                  />
                  <label htmlFor="toggle-pages" className="nav-link" tabIndex="0">
                    Client Portal
                  </label>
                </div>

                {/* Get Started */}
                <div className="nav-item nav-has-children">
                  <input
                    type="checkbox"
                    id="toggle-getstarted"
                    className="submenu-toggle"
                    aria-hidden="true"
                  />
                  <label htmlFor="toggle-getstarted" className="nav-link" tabIndex="0">
                    Get Started <span className="dropdown-arrow">▾</span>
                  </label>

                  <ul className="dropdown" id="menu-getstarted" role="menu" aria-label="Pages submenu">
                    <li role="none"><Link href="/doctors" role="menuitem">Get Started</Link></li>
                    <li role="none"><Link href="/portfolio" role="menuitem">FAQs</Link></li>
                    <li role="none"><Link href="/pricing" role="menuitem">Client Portal</Link></li>
                  </ul>
                </div>

                {/* BLOG / Privacy & Confidentiality */}
                <div className="nav-item">
                  {/* escaped ampersand */}
                  <Link href="/privacyconfidentiality" className="nav-link">Privacy &amp; Confidentiality</Link>
                </div>

                {/* CONTACT */}
                <div className="nav-item">
                  <Link href="/contact" className="nav-link">CONTACT</Link>
                      
                </div>

                {/* RESOURCE */}
                <div className="nav-item">
                  <Link href="/resources" className="nav-link">RESOURCES</Link>
                </div>
              </nav>

              {/* Header Actions */}
              <div className="header-actions">
                <Link href="/appointment" aria-label="Book Appointment">
                  <button className="book-btn">Book Appointment</button>
                </Link>

                {/* Mobile menu label toggles the hidden checkbox above */}
                <label
                  htmlFor="mobile-menu-toggle"
                  className="menu-btn"
                  aria-hidden="true"
                  tabIndex="0"
                >
                  <span></span><span></span><span></span>
                </label>
              </div>
            </div>

            {/* Mobile slide-in menu (mirrors nav but styled differently on small screens) */}
            <div className="mobile-menu">
              <nav className="mobile-nav" role="navigation" aria-label="Mobile menu">
                <ul>
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/about">About</Link></li>
                  <li><Link href="/departments">Departments</Link></li>
                  <li><Link href="/portfolio">Portfolio</Link></li>
                  <li><Link href="/blog">Blog</Link></li>
                  <li><Link href="/contact">Contact</Link></li>
                </ul>
              </nav>
            </div>
          </header>
        </div>
      </div>
    </>
  )
}

export default HeaderNavbar
