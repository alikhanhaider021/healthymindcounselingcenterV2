
'use client';
import { useState } from 'react';
import Image from 'next/image';
import './FAQSection.css';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Are people who seek therapy weak?",
      answer: [
        "No. People who request help are brave and strong. Every person needs support occasionally. Just because you haven't needed help before, there are still good reasons to get help today. Maybe this problem feels overwhelming and is making things hard to get back to your \"normal\". In our work together, I'm going to assist you in discovering exactly what recovery looks like to you so that you can be fast-tracked to your best self."
      ]
    },
    {
      question: "What's the difference between talking with a therapist or my best friend or family?",
      answer: [
        "While a friend or family member might be sympathetic to how you are feeling, that doesn't mean they are trained to deal with it. Just as a friend might be sympathetic to how it feels to break an arm or leg, that doesn't mean they know how to properly wrap the break so that it can heal properly. If a broken limb is wrapped incorrectly, it can heal poorly and result in a lifetime of pain. In these cases, sometimes you may even have to rebreak the limb so that you can have it heal properly! Like other health care professionals, a licensed mental health practitioner is trained on how to best tend to emotional and mental wounds so that they heal properly, and don't cause you more pain and discomfort in the future.",
        "A psychological wellness professional can aid you by approaching your circumstances in a new way-- educate you with brand-new abilities, get different viewpoints, listen to you without judgment or expectations, and also help you pay attention on your own. Moreover, therapy is entirely confidential. You won't have to stress about others \"knowing my business.\"",
        "Finally, if your scenario provokes a large number of unfavorable feelings, if you've been relying on a good friend or member of the family, there is the threat that as soon as you are feeling far better you could begin staying clear of that person so you aren't reminded of this difficult time in your life."
      ]
    },
    {
      question: "Why shouldn't I just take medication to treat my mental health?",
      answer: [
        "Medication alone can not solve all concerns. What medication does is deal with the symptoms. Therapy is designed to get to the root of the problem, dig deep into your actions and also show strategies that can assist you in completing your personal and/or relational objectives.",
        "While medications prescribed by a doctor can be useful in treating some issues, they are just a tool and so they don't work by themselves. If a drug is simply masking a symptom, and you aren't addressing the cause of the problem, this can be a lot like putting a bandaid over a bullet wound. While it may \"cover up\" the problem, you will still keep bleeding and suffering until the wound itself has been properly tended."
      ]
    },
    {
      question: "How does therapy work? What do I need to do in sessions?",
      answer: [
        "Since each person has various concerns and also goals for therapy, treatment will certainly vary depending upon the person. I tailor my therapeutic technique to your particular needs and circumstances. There is no \"one size fits all\" when it comes to therapy."
      ]
    },
    {
      question: "How long will it take?",
      answer: [
        "Regrettably, this is not possible to say on a basic Frequently Asked Questions page. Everyone's circumstances are unique and the length of time treatment can take to allow you to complete your objectives depends upon your wish for personal development, your dedication, and the elements that are driving you to seek therapy, to begin with. Suffice it to say, if you expect your issues to be addressed in just 2 or 3 sessions, that is unlikely."
      ]
    },
    {
      question: "I wish to get the most out of treatment. What can I do to make each session count?",
      answer: [
        "I am so happy you are committed to getting as much as possible out of your sessions. Your active involvement and also dedication is vital to your success. After all, we may only see each other for a single session a week. It's the work you do beyond our sessions that will actually help you see your personal growth.",
        "Like many things in life, when it comes to therapy, you will get out of it what you put into it. Progress, however, is coincident with how you APPLY what you learn from each session into your daily life. The more you practice what you learn in therapy, the more rapid your results will be."
      ]
    },
    {
      question: "My companion and I are having problems. Should we be in private therapy or come together?",
      answer: [
        "If you are concerned regarding your partnership and you would both like to work with me, I would first deal with both of you together. After this work, if one of you wants to continue in individual sessions, I may treat only one of you. The reason for this is that it is not practical to relocate from individual to couple's work with the very same therapist due to potential trust concerns."
      ]
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section" aria-hidden={typeof window !== 'undefined' && window.innerWidth < 768 ? "true" : "false"}>
        <div className="hero-background" />
        <div className="hero-particles" />
        <Image
          className="hero-logo"
          alt="Healthy mind counseling center"
          src="/images/logo.png"
          width={300}
          height={100}
          priority
        />
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        {/* Decorative Wave */}
        <div className="wave-container">
          <svg
            className="wave-svg"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
            aria-hidden="true"
          >
            <polygon
              className="fill-current text-gray-50"
              points="2560 0 2560 100 0 100"
            />
          </svg>
        </div>

        <div className="faq-wrapper">
          <div className="faq-container">
            <div className="faq-content">
              {/* Title */}
              <div className="faq-header">
                <h2 className="faq-title">
                  Flagler County Mental Health FAQ
                </h2>
                <div className="title-underline" />
              </div>

              {/* FAQ Items */}
              <div className="faq-list">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className={`faq-item ${openIndex === index ? 'faq-item-active' : ''}`}
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="faq-question"
                      aria-expanded={openIndex === index}
                      aria-controls={`faq-answer-${index}`}
                    >
                      <span className="faq-question-text">
                        {faq.question}
                      </span>
                      <svg
                        className={`faq-icon ${openIndex === index ? 'faq-icon-open' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    <div
                      id={`faq-answer-${index}`}
                      className={`faq-answer-wrapper ${openIndex === index ? 'faq-answer-open' : ''}`}
                      aria-hidden={openIndex !== index}
                    >
                      <div className="faq-answer-content">
                        {faq.answer.map((paragraph, pIndex) => (
                          <p key={pIndex} className="faq-answer-text">
                            {paragraph.includes('beyond') ? (
                              <>
                                {paragraph.split('beyond')[0]}
                                <span className="font-bold text-gray-800">beyond</span>
                                {paragraph.split('beyond')[1]}
                              </>
                            ) : (
                              paragraph
                            )}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
