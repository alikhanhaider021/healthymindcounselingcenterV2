import React from "react";

import "./ZipSection.css";
import Link from "next/link";

function Li({ data }) {
  return (
    <li className="zip-item" aria-label={`zip ${data}`}>
      <span className="zip-bubble">{data}</span>
      <svg className="zip-check" viewBox="0 0 24 24" aria-hidden>
        <path d="M20.285 6.709a1 1 0 0 0-1.414-1.418L9 15.158 5.129 11.29A1 1 0 0 0 3.715 12.704l4.586 4.586a1 1 0 0 0 1.414 0L20.285 6.709z"/>
      </svg>
    </li>
  );
}

export default function ZipSection() {
  return (
    <section className="zip-section">
      <div className="zip-bg-decor"></div>

      <div className="zip-container">
        <div className="zip-card">
          <div className="zip-left">
            <h3 className="zip-title">Mental Health Services Treatment Plan Zip Codes Served</h3>

            <ul className="zip-list" role="list">
              <Li data={"32164."}/>
              <Li data={"32174."}/>
              <Li data={"32137."}/>
              <Li data={"32110."}/>
              <Li data={"32136."}/>
              <Li data={"32112."}/>
              <Li data={"32145."}/>
              <Li data={"32187."}/>
            </ul>

         <p className="zip-source">
  <strong>Source: </strong>
  <Link
    href="https://betterhelp.com"
    target="_blank"
    rel="noopener noreferrer"
  >
    betterhelp.com
  </Link>
</p>

          </div>

          <div className="zip-right" aria-hidden>
            <div className="zip-illustration">
              <div className="pill pill-1" />
              <div className="pill pill-2" />
              <div className="pill pill-3" />
              <div className="heart">💙</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
