import Link from 'next/link'

import React from 'react'
import './header.css'
import Image from 'next/image';
import Topheader from '../topheader/topheader';
const HeaderNavbar = () => {

    
    return (
        <>

        {/* top section */}
         <Topheader/>

{/* ..............................................................................................header */}
 <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">

{/* <div class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
  <a href="/"><span class="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full">

      </span></a>
    <button class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button"><i class="fas fa-bars"></i></button>
    </div> */}
    <Image
  alt="Healthy Mind Counseling Center"
  className="w-full rounded-full align-middle border-none shadow-lg"
  src="/images/logo.png"
  width={58}
  height={58}
/>


          {/* <div className="logo-icon" aria-hidden="true">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" role="img" aria-label="Logo">
              <path d="M20 5L25 15H15L20 5Z M20 35L15 25H25L20 35Z M5 20L15 15V25L5 20Z M35 20L25 25V15L35 20Z" fill="currentColor"/>
            </svg>
          </div>
          <div className="logo-text">
            <span className="logo-name">Healthy Mind</span>
            <span className="logo-subtitle">Counseling Center </span>
          </div> */}
        </div>

        {/* Mobile menu checkbox (controls the slide-in menu) */}
        <input type="checkbox" id="mobile-menu-toggle" className="mobile-menu-toggle" aria-hidden="true" />

        {/* Navigation */}
        <nav className="nav" role="navigation" aria-label="Main navigation">
          {/* Desktop/Tablet nav: each dropdown also supports keyboard via :focus-within */}
          
          {/* HOME */}
          <div className="nav-item nav-has-children">
            {/* checkbox for small-screen toggle of this submenu */}
            <input type="checkbox" id="toggle-home" className="submenu-toggle" aria-hidden="true" />
            <label htmlFor="toggle-home" className="nav-link" tabIndex="0">
              Services <span className="dropdown-arrow">▾</span>
            </label>

            <ul className="dropdown" id="menu-home" role="menu" aria-label="Home submenu">
              <li role="none"><Link href="/" role="menuitem">EMDR Therapy</Link></li>
              <li role="none"><Link href="/index-2" role="menuitem">Cognitive-Behavioral Therapy </Link></li>
              <li role="none"><Link href="/index-3" role="menuitem">Person-Centered Therapy</Link></li>
              <li role="none"><Link href="/index-3" role="menuitem">Solution Focoused Therapy</Link></li>
            </ul>
          </div>

          {/* ABOUT */}
          <div className="nav-item nav-has-children">
            <input type="checkbox" id="toggle-about" className="submenu-toggle" aria-hidden="true" />
            <label htmlFor="toggle-about" className="nav-link" tabIndex="0">
              ABOUT  
              {/* <span className="dropdown-arrow">▾</span> */}
            </label>

            {/* <ul className="dropdown" id="menu-about" role="menu" aria-label="About submenu">
              <li role="none"><Link href="/about" role="menuitem">About Us</Link></li>
              <li role="none"><Link href="/team" role="menuitem">Our Team</Link></li>
            </ul> */}
          </div>

          {/* DEPARTMENTS */}
          <div className="nav-item nav-has-children">
            <input type="checkbox" id="toggle-departments" className="submenu-toggle" aria-hidden="true" />
            <label htmlFor="toggle-departments" className="nav-link" tabIndex="0">
             Rates and Insurance
             {/* <span className="dropdown-arrow">▾</span> */}
            </label>

            {/* <ul className="dropdown" id="menu-departments" role="menu" aria-label="Departments submenu">
              <li role="none"><Link href="/departments" role="menuitem">Our Departments</Link></li>
              <li role="none"><Link href="/department-details" role="menuitem">Cardiology</Link></li>
              <li role="none"><Link href="/department-details-2" role="menuitem">Dental</Link></li>
            </ul> */}
          </div>

          {/* PAGES */}
          <div className="nav-item nav-has-children">
            <input type="checkbox" id="toggle-pages" className="submenu-toggle" aria-hidden="true" />
            <label htmlFor="toggle-pages" className="nav-link" tabIndex="0">
             Client Portal
              {/* <span className="dropdown-arrow">▾</span> */}
            </label>

            {/* <ul className="dropdown" id="menu-pages" role="menu" aria-label="Pages submenu">
              <li role="none"><Link href="/doctors" role="menuitem">Doctors</Link></li>
              <li role="none"><Link href="/portfolio" role="menuitem">Portfolio</Link></li>
              <li role="none"><Link href="/pricing" role="menuitem">Pricing</Link></li>
            </ul> */}
          </div>
{/* Get Started */}

 <div className="nav-item nav-has-children">
            <input type="checkbox" id="toggle-pages" className="submenu-toggle" aria-hidden="true" />
            <label htmlFor="toggle-pages" className="nav-link" tabIndex="0">
            Get Started
              <span className="dropdown-arrow">▾</span>
            </label>

            <ul className="dropdown" id="menu-pages" role="menu" aria-label="Pages submenu">
              <li role="none"><Link href="/doctors" role="menuitem"> Get Started</Link></li>
              <li role="none"><Link href="/portfolio" role="menuitem">FAQs</Link></li>
              <li role="none"><Link href="/pricing" role="menuitem">Client Portal</Link></li>
            </ul>
          </div>





          {/* BLOG */}
          <div className="nav-item">
            <Link href="/blog" className="nav-link">Privacy &  Confidentiality</Link>
          </div>

          {/* CONTACT */}
          <div className="nav-item">
            <Link href="/contact" className="nav-link">CONTACT</Link>
          </div>
          {/* RESOURCE */}
           <div className="nav-item">
            <Link href="/contact" className="nav-link">RESOURCES</Link>
          </div>
        </nav>

        {/* Header Actions */}
        <div className="header-actions">
          {/* <button className="search-btn" aria-label="Search" type="button">
           
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="2"/>
              <path d="M14 14L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button> */}
<Link href="/appointment">
  <button className="book-btn">Book Appointment</button>
</Link>
          {/* Mobile menu label toggles the hidden checkbox above */}
          <label htmlFor="mobile-menu-toggle" className="menu-btn" aria-hidden="true" tabIndex="0">
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
        </>
    )
}

export default HeaderNavbar
