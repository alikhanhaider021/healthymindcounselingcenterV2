import React from "react";
import { FaSitemap, FaNewspaper, FaDraftingCompass, FaFileAlt } from "react-icons/fa";
import Image from "next/image";
import "./WhyTherapy.css";

const WhyTherapy = () => {
  // store the icon component (not an element) so we can pass size/aria properly
  const features = [
    {
      Icon: FaSitemap,
      title: "Professional Guidance",
      description:
        "A good friend or family member can provide an objective perspective when we&apos;re feeling down, but they might not always know exactly what to say to help us feel better. Therapists, however, have experience dealing with people who&apos;ve been through similar situations, so they can offer advice that&apos;s helpful."
    },
    {
      Icon: FaDraftingCompass,
      title: "Confidential Support",
      description:
        "Many people have sensitive subjects to talk about; perhaps an addiction or an issue with their relationships that they&apos;re embarrassed to speak about with their close friends and/or partners. A Palm Coast family therapist with a private practice may be able to assist you in confronting these types of mental health issues and finding new methods for facing them and healing."
    },
    {
      Icon: FaNewspaper,
      title: "Safe & Supportive Space",
      description:
        "Mental health counselors want to help you achieve a healthier emotional life, regardless of whatever issues you might be facing. They can provide a safe place for you to discuss any problem you might be having."
    },
    {
      Icon: FaFileAlt,
      title: "Local & Accessible",
      description:
        "With more than 85,000 residents in the city of Palm Coast, Florida, finding a mental health counselor with a private practice can be both expensive and difficult to do. Our goal here is to help you locate a local psychologist near 32164 or the neighboring zip codes."
    }
  ];

  // explicit order so we get: image, feature, feature, image, feature, feature
  const gridOrder = [
    { type: "image", id: "img-1", src: "/images/img8.jpg", alt: "Professional Therapy Support" },
    { type: "feature", featureIndex: 0 },
    { type: "feature", featureIndex: 1 },
    { type: "image", id: "img-2", src: "/images/img8.jpg", alt: "Mental Health Counseling" },
    { type: "feature", featureIndex: 2 },
    { type: "feature", featureIndex: 3 }
  ];

  return (
    <section className="WhyTherapy-section" aria-labelledby="whytherapy-title">
      <div className="WhyTherapy-decorator" aria-hidden="true">
        <svg
          className="WhyTherapy-svg"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 2560 100"
        >
          <polygon className="WhyTherapy-polygon" points="2560 0 2560 100 0 100" />
        </svg>
      </div>

      <div className="WhyTherapy-container">
        {/* Header */}
        <div className="WhyTherapy-header">
          <span className="WhyTherapy-badge">Mental Health Support</span>
          <h2 id="whytherapy-title" className="WhyTherapy-title">
            Want to know if therapy is right for you? Here&apos;s how to tell.
          </h2>
          <p className="WhyTherapy-subtitle">
            Discover the benefits of professional mental health support and how it can transform your life.
          </p>
        </div>

        {/* Grid */}
        <div className="WhyTherapy-grid">
          {gridOrder.map((item, idx) => {
            if (item.type === "image") {
              return (
                <div
                  key={item.id}
                  className="WhyTherapy-image-wrapper WhyTherapy-image-wrapper--wide"
                >
                  <div className="WhyTherapy-image-card">
                    <Image
                      alt={item.alt}
                      src={item.src}
                      width={500}
                      height={700}
                      className="WhyTherapy-image"
                      priority
                    />
                    <div className="WhyTherapy-image-overlay" />
                  </div>
                </div>
              );
            }

            const f = features[item.featureIndex];
            const Icon = f.Icon;
            return (
              <article key={`feature-${idx}`} className="WhyTherapy-feature-card" aria-labelledby={`ft-${idx}-title`}>
                <div className="WhyTherapy-icon-wrapper" aria-hidden="true">
                  {/* react-icons accept size prop; color will be controlled by CSS gradient text clipping */}
                  <Icon size={28} />
                </div>

                <div className="WhyTherapy-feature-content">
                  <h3 id={`ft-${idx}-title`} className="WhyTherapy-feature-title">
                    {f.title}
                  </h3>
                  <p className="WhyTherapy-feature-description">{f.description}</p>
                </div>
              </article>
            );
          })}
        </div>

        {/* CTA */}
        <div className="WhyTherapy-cta">
          <button className="WhyTherapy-btn-primary" type="button">
            Find a Therapist Near You
          </button>
          <button className="WhyTherapy-btn-secondary" type="button">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyTherapy;
