'use client'

import React, { useState, useEffect } from 'react'
import Demo from '../Demo1/demo'
import Demo2 from '../Demo2/demo2'
import './MentalhealthproviderSlider.css'

const MentalhealthproviderSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = 2

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  // Auto-play (optional - remove if not needed)
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 5000) // 5 seconds per slide

    return () => clearInterval(timer)
  }, [currentSlide])

  return (
    <div className="slider-container">
      <div 
        className="slider-wrapper"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        <div className="slide">
          <Demo />
        </div>
        <div className="slide">
          <Demo2 />
        </div>
      </div>

      {/* Navigation Arrows */}
      <button 
        className="slider-arrow slider-arrow-left" 
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        ‹
      </button>
      <button 
        className="slider-arrow slider-arrow-right" 
        onClick={nextSlide}
        aria-label="Next slide"
      >
        ›
      </button>

      {/* Dots Navigation */}
      <div className="slider-dots">
        {[...Array(totalSlides)].map((_, index) => (
          <button
            key={index}
            className={`slider-dot ${currentSlide === index ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default MentalhealthproviderSlider