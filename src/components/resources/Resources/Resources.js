import React from 'react';
import "./Resources.css"

export default function ResourcesTable() {
 

  return (
     <div className="containerresources">
        <div className="wrapper-resourrces">
            <div className="card-resourrces">
                
                {/* <!-- Header Section --> */}
                <div className="header-resourrces">
                    <div className="header-content">
                        <div className="header-inner">
                            <div className="accent-bar"></div>
                            <div>
                                <h3 className="title">Mental Health Resources</h3>
                                <p className="subtitle">Available for support and assistance</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Table Section --> */}
                <div className="table-wrapper">
                    <table className="resources-table">
                        <thead>
                            <tr>
                                <th className="table-header">
                                    <div className="header-flex">
                                        <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                        Resources
                                    </div>
                                </th>
                                <th className="table-header">
                                    <div className="header-flex">
                                        <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        Contact
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="table-row">
                                <th className="resource-name">
                                    <div className="name-flex">
                                        <div className="icon-circle">
                                            <svg className="heart-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                            </svg>
                                        </div>
                                        <span className="resource-text">National Suicide Prevention Lifeline</span>
                                    </div>
                                </th>
                                <td className="contact-cell">
                                    <div className="contact-badge">1-888-273-8255</div>
                                </td>
                            </tr>

                            <tr className="table-row">
                                <th className="resource-name">
                                    <div className="name-flex">
                                        <div className="icon-circle">
                                            <svg className="heart-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                            </svg>
                                        </div>
                                        <span className="resource-text">The National Domestic Violence Hotline</span>
                                    </div>
                                </th>
                                <td className="contact-cell">
                                    <div className="contact-badge">1-800-799-SAFE (7233)</div>
                                </td>
                            </tr>

                            <tr className="table-row">
                                <th className="resource-name">
                                    <div className="name-flex">
                                        <div className="icon-circle">
                                            <svg className="heart-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                            </svg>
                                        </div>
                                        <span className="resource-text">National Sexual Assault Hotline</span>
                                    </div>
                                </th>
                                <td className="contact-cell">
                                    <div className="contact-badge">1-800-656-HOPE (4673)</div>
                                </td>
                            </tr>

                            <tr className="table-row">
                                <th className="resource-name">
                                    <div className="name-flex">
                                        <div className="icon-circle">
                                            <svg className="heart-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                            </svg>
                                        </div>
                                        <span className="resource-text">Boy&apos;s Town Hotline</span>
                                    </div>
                                </th>
                                <td className="contact-cell">
                                    <div className="contact-badge">1-800-448-3000</div>
                                </td>
                            </tr>

                            <tr className="table-row">
                                <th className="resource-name">
                                    <div className="name-flex">
                                        <div className="icon-circle">
                                            <svg className="heart-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                            </svg>
                                        </div>
                                        <span className="resource-text">Crisis Text Line</span>
                                    </div>
                                </th>
                                <td className="contact-cell">
                                    <div className="contact-badge">741-741</div>
                                </td>
                            </tr>

                            <tr className="table-row">
                                <th className="resource-name">
                                    <div className="name-flex">
                                        <div className="icon-circle">
                                            <svg className="heart-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                            </svg>
                                        </div>
                                        <span className="resource-text">Veterans Crisis Line</span>
                                    </div>
                                </th>
                                <td className="contact-cell">
                                    <div className="contact-badge">1-800-273-8255, Press 1</div>
                                </td>
                            </tr>

                            <tr className="table-row">
                                <th className="resource-name">
                                    <div className="name-flex">
                                        <div className="icon-circle">
                                            <svg className="heart-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                            </svg>
                                        </div>
                                        <span className="resource-text">Substance Abuse and Mental Health Services Administration</span>
                                    </div>
                                </th>
                                <td className="contact-cell">
                                    <div className="contact-badge">1-800-662-4357</div>
                                </td>
                            </tr>

                            <tr className="table-row">
                                <th className="resource-name">
                                    <div className="name-flex">
                                        <div className="icon-circle">
                                            <svg className="heart-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                            </svg>
                                        </div>
                                        <span className="resource-text">Trevor Project Crisis Counseling</span>
                                    </div>
                                </th>
                                <td className="contact-cell">
                                    <div className="contact-badge">1-866-488-7386</div>
                                </td>
                            </tr>

                            <tr className="table-row">
                                <th className="resource-name">
                                    <div className="name-flex">
                                        <div className="icon-circle">
                                            <svg className="heart-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                            </svg>
                                        </div>
                                        <span className="resource-text">Mental Health First Aid</span>
                                    </div>
                                </th>
                                <td className="contact-cell">
                                    <div className="contact-badge">1-800-488-3000</div>
                                </td>
                            </tr>

                            <tr className="table-row">
                                <th className="resource-name">
                                    <div className="name-flex">
                                        <div className="icon-circle">
                                            <svg className="heart-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                            </svg>
                                        </div>
                                        <span className="resource-text">National Alliance on Mental Illness</span>
                                    </div>
                                </th>
                                <td className="contact-cell">
                                    <div className="contact-badge">1-800-950-NAMI (6264)</div>
                                </td>
                            </tr>

                            <tr className="table-row">
                                <th className="resource-name">
                                    <div className="name-flex">
                                        <div className="icon-circle">
                                            <svg className="heart-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                            </svg>
                                        </div>
                                        <span className="resource-text">Victims of Sexual Abuse and Assault</span>
                                    </div>
                                </th>
                                <td className="contact-cell">
                                    <div className="contact-badge">
                                        <a className="contact-link" href="https://helpingsurvivors.org/" target="_blank" rel="noopener noreferrer">
                                            https://helpingsurvivors.org/
                                        </a>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* <!-- Footer Note --> */}
                <div className="footer-resourrces">
                    <p className="footer-text">
                        <svg className="footer-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="footer-message">These resources are available. Don&apos;t hesitate to reach out for help.</span>
                    </p>
                </div>

            </div>
        </div>
    </div>
  );
}