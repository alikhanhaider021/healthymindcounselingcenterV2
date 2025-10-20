// components/TypesOfTherapists.jsx
import Link from "next/link";
import "./TypesOfTherapists.css";

export default function TypesOfTherapists() {
  return (
    <section className="service-section">
      <div className="service-container">
        <div className="service-header">
          <h2 className="service-title">
            Understanding Mental Health Professionals
          </h2>
          <p className="service-subtitle">
            Learn about different mental health specialists and their
            qualifications
          </p>
        </div>

        <div className="service-divider"></div>

        <div className="service-content-wrapper">
          <div className="service-card">
            <p className="service-card-text">
              A{" "}
              <span className="service-highlight">
                clinical psychology graduate
              </span>{" "}
              has a PhD after their name. A clinical psychologist completes an
              extensive internship in a clinical setting. Members of this field
              focus on the understanding, diagnosing, and treating of people who
              suffer from mental illness. Therapies used to help individuals
              include individual, group, marital and family therapies.
            </p>
          </div>

          <div className="service-card">
            <p className="service-card-text">
              <span className="service-highlight">Social workers</span> will
              show their master&apos;s degree initials after their name (MSW).
              These clinicians help people, families or community members.
              Members of this field are trained to help people who experience
              difficulties in their social and emotional lives. L.C.S.W. after a
              social worker&apos;s name stands for Licensed Clinical Social
              Worker. These people have completed a significant amount of time
              in the clinical setting under the supervision of a qualified
              professional licensed therapist and passed an examination.
            </p>
          </div>

          <div className="service-card">
            <p className="service-card-text">
              <span className="service-highlight">
                Licensed mental health counselors (L.M.H.Cs)
              </span>{" "}
              are people who have completed a master&apos;s degree program.
              These types of services focus on helping people achieve mental
              wellness and diagnose mental illnesses. Programs also prepare the
              practitioner to perform personality testing under the supervision
              of a clinical psychologist. To be eligible for licensure, you must
              complete a certain number of supervised clinical sessions under a
              licensed professional and pass an examination.
            </p>
          </div>

          <div className="service-card">
            <p className="service-card-text">
              A closely related counseling discipline that&apos;s often found in
              the phone directory is that of{" "}
              <span className="service-highlight">
                licensed marital and family therapists (L.M.F.T.)
              </span>
              . As the title suggests, the main emphasis of this discipline is
              marital and family therapy. These therapists, who have also
              completed a master&apos;s degree program and passed the state
              licensing exams, have been trained by a licensed therapist and
              have met the requirements for licensure.
            </p>
          </div>

          <div className="service-card">
            <p className="service-card-text">
              The last discipline of therapists commonly found in private
              practice is that which is known as an{" "}
              <span className="service-highlight">
                advanced registered nurse practitioner (A.R.N.P.)
              </span>
              . These nurses have a master&apos;s degree in psychiatric nursing.
              In Palm Coast, an A.R.N.P. can prescribe medications if they have
              completed the required courses and are under the supervision of a
              physician.
            </p>
          </div>

          <div className="service-card">
            <p className="service-card-text">
              Other resources for selecting a provider include{" "}
              <span className="service-highlight">
                Mayo Clinic, National Alliance on Mental Illness, and Mental
                Health America
              </span>
              .
            </p>
          </div>

          <div className="service-source-container">
            <p className="service-source-label">Information Source</p>
            <Link
              href="https://flaglerlifeline.org"
              className="service-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit flaglerlifeline.org
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
