import React from 'react';
import './FindTherapistGuide.css';
import Image from 'next/image';

export default function FindTherapistGuide() {
  return (
    <>
      <section className="service-section-find-therapist-guide">
        <div className="service-container-find-therapist-guide">
          <div className="service-wrapper-find-therapist-guide">
            <div className="service-content-find-therapist-guide">
              <div className="service-content-inner">
                <p className="service-paragraph">
                  Finding a good therapist in Palm Coast can be difficult - <span className="service-highlight">We&apos;re happy to help!</span>
                </p>

                <p className="service-paragraph">
                  First, before beginning any kind of therapy, research which kind of therapy you want to pursue. Perhaps it&apos;s psychodynamic, CBT, couples, marital, or some other; just search &quot;therapists near me&quot; and find the one that&apos;s best suited for your needs. Then consider if the gender of your therapist matters, the types of treatments he or she has experience with and then choose a nearby Palm Coast, FL, doctor who specializes in the kind of therapy you require.
                </p>

                <p className="service-paragraph">
                  Finding the right therapist may seem daunting, but there are some easy ways to narrow down your choices when you&apos;re struggling to find one who accepts new patients.
                </p>

                <p className="service-paragraph">
                  Mental health professionals that have a private practice or provide therapy services for professional counseling can help improve healthy relationships and communication skills whether that be working through life&apos;s obstacles and life issues in couples counseling, changing negative thinking patterns, or just providing a listening ear.
                </p>

                <p className="service-paragraph">
                  If you&apos;re looking for a therapist who provides professional couples&apos; therapy, helps change negative thinking patterns, and creates a therapeutic relationship, then you may want to consider finding a certified counselor at a National Certified Counselor site. These counselors help people heal from physical ailments such as chronic back pain, as well as emotional ones such as depression, anxiety, and stress. They also help people deal with childhood trauma, abuse, and other adult issues.
                </p>
              </div>
            </div>

            <div className="service-image-wrapper">
              <div className="service-image-container">
                <Image
                  alt="Finding a good therapist in Palm Coast can be difficult We&apos;re happy to help!"
                  className="service-image"
                  src="/images/img5.jpg"
                  width={600}
                  height={400}
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
