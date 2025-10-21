"use client";
import { useState, useEffect } from 'react';

export default function BannnerSliders() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showContent, setShowContent] = useState(false);

  const slides = [

 {
  image: "/images/banner-2.jpg",
  title: 'Counseling Services Offered',
  subtitle: 'Your Mental Wellness Matters',
  description:
    'I use an eclectic style of therapeutic techniques and theories in my counseling - including EMDR, Cognitive-Behavioral, Person-Centered, Solution Focused, Spirituality Counseling, and other evidence-based treatment methods. I also offer services geared towards women dealing with Postpartum, Prenatal, and Pregnancy issues.',
  buttonText: 'EXPLORE OUR SERVICES'
},
{
  image: "/images/banner-3.jpg",
  title: 'My Promise To You - Your Needs Come First',
  subtitle: 'Supporting You Every Step of the Way',
  description:
    'Whatever brought you to Healthy Mind Counseling, the first thing I want you to know is that you are very brave. Sometimes the hardest thing to do is ask for help. Even if you just need help in finding the right counselor for your needs, I want you to feel free to contact me so that at the very least, I can point you in the right direction.',
  buttonText: 'LEARN MORE'
}


//  {
//   image: "/images/banner-2.jpg",
//   title: 'GUIDING YOU TOWARD INNER PEACE',
//   subtitle: 'Your Mental Wellness Matters',
//   description:
//     'At Healthy Mind Counseling Center, we help you navigate life’s challenges with compassion and care. Our therapists provide a safe space for healing, growth, and emotional balance.',
//   buttonText: 'EXPLORE OUR SERVICES'
// },
// {
//   image: "/images/banner-3.jpg",
//   title: 'HEAL. GROW. THRIVE.',
//   subtitle: 'Supporting You Every Step of the Way',
//   description:
//     'Our counseling sessions focus on self-discovery, resilience, and personal well-being. Together, we’ll build healthier thoughts and emotional strength for a more fulfilling life.',
//   buttonText: 'LEARN MORE'
// }

    
  ];

  useEffect(() => {
    setShowContent(false);
    
    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 500);

    const slideTimer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => {
      clearTimeout(contentTimer);
      clearTimeout(slideTimer);
    };
  }, [currentSlide, slides.length]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <style jsx>{`
        @keyframes zoomIn {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.1);
          }
        }
        
        .zoom-animation {
          animation: zoomIn 5s ease-out forwards;
        }
      `}</style>

      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat ${
              index === currentSlide ? 'zoom-animation' : ''
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/60 to-transparent"></div>
          </div>
        </div>
      ))}

      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-6 lg:px-16 max-w-7xl">
          <div className="max-w-2xl">
            <div
              className={`transition-all duration-1000 transform ${
                showContent
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-10'
              }`}
            >
              <p className="text-blue-300 text-lg mb-4 font-light italic">
                {slides[currentSlide].subtitle}
              </p>
              
              <h1 className="text-white text-5xl lg:text-6xl font-bold leading-tight mb-6">
                {slides[currentSlide].title}
              </h1>
              
              <p className="text-gray-200 text-lg mb-8 leading-relaxed">
                {slides[currentSlide].description}
              </p>
              
              <button
  onClick={() => {}}
  aria-label={slides[currentSlide].buttonText}
  className="bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm tracking-wide transition-all duration-300 inline-flex items-center justify-center rounded-full shadow-md"
  // Inline styles used to avoid being overridden by other CSS
  style={{
    padding: "12px 26px",   // vertical 12px, horizontal 26px (adjust if needed)
    gap: "14px",
    width: "auto",
    minWidth: "fit-content",
    alignItems: "center",
    marginTop: "10px",
  }}
>
  <span style={{ display: "inline-block", lineHeight: 1 }}>
    {slides[currentSlide].buttonText}
  </span>

  {/* white circle with explicit margin so purple BG never touches it */}
  <span
    className="rounded-full flex items-center justify-center transition-transform"
    style={{
      width: 36,
      height: 36,
      marginLeft: 6,
      background: "#fff",
      flex: "0 0 36px",
    }}
  >
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      style={{ color: "#6d28d9" }} // purple-600 (arrow color)
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        d="M9 5l7 7-7 7"
      />
    </svg>
  </span>
</button>

              {/* <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 flex items-center gap-3 group">
                {slides[currentSlide].buttonText}
                <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <svg 
                    className="w-3 h-3 text-purple-600" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={3} 
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </button> */}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white w-12' 
                : 'bg-white/50 w-2 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}