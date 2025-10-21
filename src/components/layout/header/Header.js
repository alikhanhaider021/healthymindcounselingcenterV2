// src/components/layout/HeaderNavbar.jsx
"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Topheader from "../topheader/topheader";
import "./header.css";

const HeaderNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }
    return () => document.body.classList.remove('mobile-menu-open');
  }, [isMenuOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isMenuOpen) closeMenu();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1450 && isMenuOpen) closeMenu();
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  return (
    <>
      <div className="header-main-navbar-section" role="banner">
        <div className=" hidden sm:block ">
 <Topheader />
        </div>
       

        <header className="header" aria-label="Site header">
          <div className="header-container">
            {/* Logo */}
            <div className="logo">
              <Link
                href="/"
                className="logo-link"
                aria-label="Healthy Mind Counseling Center home"
                onClick={closeMenu}
              >
                <Image
                  alt="Healthy Mind Counseling Center"
                  src="/images/logo.png"
                  width={58}
                  height={58}
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="nav" role="navigation" aria-label="Main navigation">
              <Link href="/" className="nav-link">
                HOME
              </Link>

              <div className="nav-dropdown">
                <button 
                  className="nav-link dropdown-trigger"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  SERVICES
                  <ChevronDown className="dropdown-icon" size={16} />
                </button>
                <div className="dropdown-menu" role="menu">
                  <Link href="/services" role="menuitem">All Services</Link>
                  <Link href="/emdr" role="menuitem">EMDR Therapy</Link>
                  <Link href="/cbt" role="menuitem">Cognitive-Behavioral Therapy</Link>
                  <Link href="/person-centered" role="menuitem">Person-Centered Therapy</Link>
                  <Link href="/solution-focused" role="menuitem">Solution Focused Therapy</Link>
                </div>
              </div>

              <Link href="/about" className="nav-link">
                ABOUT
              </Link>

              <Link href="/ratesInsurancepolicy" className="nav-link">
                RATES & INSURANCE
              </Link>

              <Link href="/client-portal" className="nav-link">
                CLIENT PORTAL
              </Link>

              <div className="nav-dropdown">
                <button 
                  className="nav-link dropdown-trigger"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  GET STARTED
                  <ChevronDown className="dropdown-icon" size={16} />
                </button>
                <div className="dropdown-menu" role="menu">
                  <Link href="/Getstarted" role="menuitem">Get Started</Link>
                  <Link href="/faqs" role="menuitem">FAQs</Link>
                  <Link href="/pricing" role="menuitem">Client Portal</Link>
                </div>
              </div>

              <Link href="/privacyconfidentiality" className="nav-link">
                PRIVACY
              </Link>

              <Link href="/contact" className="nav-link">
                CONTACT
              </Link>

              <Link href="/resources" className="nav-link">
                RESOURCES
              </Link>
            </nav>

            {/* Header Actions */}
            <div className="header-actions">
              <Link href="/appointment" className="book-btn">
                Book Appointment
              </Link>

              {/* Hamburger Menu Button - Only show when menu is closed */}
              {!isMenuOpen && (
                <button
                  type="button"
                  className="menu-toggle"
                  onClick={toggleMenu}
                  aria-label="Open menu"
                  aria-expanded={false}
                  aria-controls="mobile-menu"
                >
                  <Menu size={24} strokeWidth={2} />
                </button>
              )}
            </div>
          </div>

          {/* Mobile Menu Overlay */}
          {isMenuOpen && (
            <div 
              className="mobile-overlay" 
              onClick={closeMenu}
              aria-hidden="true"
            />
          )}

          {/* Mobile Slide Menu */}
          <div 
            id="mobile-menu"
            className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}
            aria-hidden={!isMenuOpen}
          >
            <div className="mobile-menu-header">
              <h3>Menu</h3>
              
              {/* Close Button - Inside mobile menu header */}
              <button
                type="button"
                className="menu-toggle active"
                onClick={closeMenu}
                aria-label="Close menu"
                aria-expanded={true}
              >
                <X size={24} strokeWidth={2} />
              </button>
            </div>

            <nav className="mobile-nav" role="navigation" aria-label="Mobile navigation">
              <Link href="/" onClick={closeMenu}>
                Home
              </Link>

              <div className="mobile-dropdown">
                <button
                  type="button"
                  className={`mobile-dropdown-trigger ${activeDropdown === 'services' ? 'active' : ''}`}
                  onClick={() => toggleDropdown('services')}
                  aria-expanded={activeDropdown === 'services'}
                  aria-controls="services-dropdown"
                >
                  Services
                  <ChevronDown 
                    className={`mobile-dropdown-icon ${activeDropdown === 'services' ? 'rotate' : ''}`} 
                    size={20}
                  />
                </button>
                {activeDropdown === 'services' && (
                  <div id="services-dropdown" className="mobile-dropdown-content">
                    <Link href="/services" onClick={closeMenu}>All Services</Link>
                    <Link href="/emdr" onClick={closeMenu}>EMDR Therapy</Link>
                    <Link href="/cbt" onClick={closeMenu}>Cognitive-Behavioral Therapy</Link>
                    <Link href="/person-centered" onClick={closeMenu}>Person-Centered Therapy</Link>
                    <Link href="/solution-focused" onClick={closeMenu}>Solution Focused Therapy</Link>
                  </div>
                )}
              </div>

              <Link href="/about" onClick={closeMenu}>
                About
              </Link>

              <Link href="/ratesInsurancepolicy" onClick={closeMenu}>
                Rates & Insurance
              </Link>

              <Link href="/client-portal" onClick={closeMenu}>
                Client Portal
              </Link>

              <div className="mobile-dropdown">
                <button
                  type="button"
                  className={`mobile-dropdown-trigger ${activeDropdown === 'getstarted' ? 'active' : ''}`}
                  onClick={() => toggleDropdown('getstarted')}
                  aria-expanded={activeDropdown === 'getstarted'}
                  aria-controls="getstarted-dropdown"
                >
                  Get Started
                  <ChevronDown 
                    className={`mobile-dropdown-icon ${activeDropdown === 'getstarted' ? 'rotate' : ''}`} 
                    size={20}
                  />
                </button>
                {activeDropdown === 'getstarted' && (
                  <div id="getstarted-dropdown" className="mobile-dropdown-content">
                    <Link href="/Getstarted" onClick={closeMenu}>Get Started</Link>
                    <Link href="/faqs" onClick={closeMenu}>FAQs</Link>
                    <Link href="/pricing" onClick={closeMenu}>Client Portal</Link>
                  </div>
                )}
              </div>

              <Link href="/privacyconfidentiality" onClick={closeMenu}>
                Privacy & Confidentiality
              </Link>

              <Link href="/contact" onClick={closeMenu}>
                Contact
              </Link>

              <Link href="/resources" onClick={closeMenu}>
                Resources
              </Link>

              <Link href="/appointment" className="mobile-book-btn" onClick={closeMenu}>
                Book Appointment
              </Link>
            </nav>
          </div>
        </header>
      </div>
    </>
  );
};

export default HeaderNavbar;