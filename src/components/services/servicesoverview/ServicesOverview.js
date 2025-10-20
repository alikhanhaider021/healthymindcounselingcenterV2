'use client';
import { useEffect, useRef } from "react";
import "./ServicesOverview.css";

export default function WhatWeDo({ whatwedo }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            el.classList.add("wwd-inview");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="wwd-section relative bg-white py-20" ref={whatwedo}>
      <div className="wwd-container">
        <div className="wwd-inner items-center text-justify">
          <div ref={cardRef} className="wwd-card w-full md:w-10-12 ml-auto mr-auto px-4">
            <div className="wwd-content md-pr-12">
              <div className="wwd-title-wrap">
                <h3 className="wwd-title">
                  What We Do
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wwd-shape wwd-shape-1" aria-hidden="true"></div>
      <div className="wwd-shape wwd-shape-2" aria-hidden="true"></div>
    </section>
  );
}
