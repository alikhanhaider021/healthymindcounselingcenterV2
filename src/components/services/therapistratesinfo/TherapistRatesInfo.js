import Image from 'next/image';
import './TherapistRatesInfo.css';

export default function TherapistRateInfo() {
  return (
    <section className="TherapistRate-section">
      <div className="TherapistRate-topDecor">
        <svg
          className="TherapistRate-svg"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="TherapistRate-polygon"
            points="2560 0 2560 100 0 100"
          />
        </svg>
      </div>

      <div className="TherapistRate-container TherapistRate-topContent">
        <div className="TherapistRate-flexWrap">
          <div className="TherapistRate-textColumn">
            <div className="TherapistRate-textInner">
              <h3 className="TherapistRate-heading">
                What do Mental Health Counselor services in Flagler County Cost?
              </h3>
              <p className="TherapistRate-paragraph">
                Therapists in the U.S. charge anywhere between $200 and $300 for each individual therapy sessions. And in some cases, the average cost of a therapy sessions in Palm Coast, Florida ranges from $85 to $150. Some therapists in the state of Florida will work on a sliding scale, meaning they&apos;ll factor in your income and charge what you can afford per session.
              </p>
            </div>
          </div>

          <div className="TherapistRate-imageColumn">
            <Image
              alt="Therapy session illustration"
              className="TherapistRate-image"
              src="/images/img6.png"
              width={1000}
              height={458}
            />
          </div>
        </div>
      </div>

      <div className="TherapistRate-bottomSection">
        <div className="TherapistRate-bottomContent">
          <h2 className="TherapistRate-mainHeading">
            We offer online therapy sessions too!
          </h2>
          <p className="TherapistRate-descriptionText">
            Online therapists, including those listed above (all located in the U.S.), who specialize in working with clients like you in or near Palm Coast offer creative ways to communicate with patients so they get the best kind of care for their needs.
          </p>
          <p className="TherapistRate-descriptionText">
            Online therapy allows you to connect with a professional who can help you manage any number of issues, including depression, anxiety, stress, trauma, eating disorder, OCD, bipolar disorder, ADHD, substance abuse, relationship difficulties, grief, and more. You can meet with them virtually, by phone, or face-to-face.
          </p>
          <p className="TherapistRate-descriptionText">
            If you&apos;re dealing with things such as relationships problems that could be addressed by couples counseling, you may benefit from working with an experienced Cognitive Behavioral Therapists (CBT) who specializes in behavioral healthcare, help with eating disorders, or someone else who has experience helping people deal with other common mental illnesses (such as stress, depression, grief, and so forth).
          </p>
          <p className="TherapistRate-descriptionText">
            Counselors, therapists, psychologists, and supervisors offer clients a wide range of services including individual Solution-Focused therapy, couples, family, group, marriage therapies as well as other types of therapy. Online psychotherapy allows clients to work with a counselor anywhere they choose. Therapists in Palm Coast are able to assist clients with issues such as anxiety, stress management, depression, grief, trauma, and substance abuse. Clients may also benefit from working with a licensed professional in Palm Coast who specializes in treating eating disorders, OCD, PTSD, bipolar disorder, and schizophrenia.
          </p>
        </div>
      </div>
    </section>
  );
}
