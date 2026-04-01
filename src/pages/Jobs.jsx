import React, { useEffect } from 'react';
import './Jobs.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const Jobs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const positions = [
        {
            title: "Full-Stack Engineer",
            department: "Engineering",
            type: "Full-Time",
            location: "Remote",
            description: "Build and maintain the robust automation pipelines and internal tooling that power our acquisition systems. Experience with React, Node.js and workflow automations (n8n, Make) required."
        },
        {
            title: "Elite B2B Sales Executive (SRv2B)",
            department: "Sales",
            type: "100% Commission",
            location: "Remote (US/LATAM)",
            description: (
                <>
                    <p style={{ marginBottom: '12px' }}>
                        Drive predictable revenue growth by executing targeted, multi-channel outbound campaigns. As the front-line ambassador for our brand, you will engage C-level executives and key decision-makers within enterprise target accounts. We operate on a highly systematic, data-driven sales methodology rather than relying on volume without strategy.
                    </p>
                    <div style={{ marginBottom: '12px' }}>
                        <strong style={{ display: 'block', color: '#1e293b', marginBottom: '8px' }}>Core Focus:</strong>
                        <ul style={{ paddingLeft: '20px', margin: '0' }}>
                            <li style={{ marginBottom: '6px' }}>Manage high-ticket pipelines ($5,000+ USD average deal size).</li>
                            <li style={{ marginBottom: '6px' }}>Execute hyper-personalized outreach driving US market penetration.</li>
                        </ul>
                    </div>
                </>
            )
        }
    ];

    return (
        <div className="jobs-page-container">
            <SEO 
                title="Careers at MuchosLeads | Join Our Growth Team"
                description="Join MuchosLeads and help build the future of B2B client acquisition. Explore our open roles and become part of a high-performance team."
            />
            <Navbar />
            
            <main className="jobs-main">
                {/* Hero Section */}
                <section className="jobs-hero">
                    <div className="jobs-hero-content">
                        <div className="jobs-badge">Careers at MuchosLeads</div>
                        <h1 className="jobs-title">Build the Future of B2B Growth.</h1>
                        <p className="jobs-subtitle">
                            We engineer the infrastructure that powers enterprise acquisition. Join a culture of high performance, systematic execution, and absolute ownership.
                        </p>
                    </div>
                </section>

                {/* Values Section */}
                <section className="jobs-values">
                    <div className="jobs-container">
                        <div className="values-grid">
                            <div className="value-card">
                                <h3>Systematic Output</h3>
                                <p>We don't rely on luck. We build predictable, scalable systems that generate measurable outcomes for every client.</p>
                            </div>
                            <div className="value-card">
                                <h3>Radical Ownership</h3>
                                <p>From engineers to strategists, every team member runs their domain with full autonomy and accountability.</p>
                            </div>
                            <div className="value-card">
                                <h3>Continuous Optimization</h3>
                                <p>We iterate relentlessly. Good is the baseline; elite performance is the standard.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Open Roles Section */}
                <section className="jobs-openings">
                    <div className="jobs-container">
                        <h2 className="openings-title">Open Positions</h2>
                        <div className="positions-list">
                            {positions.map((job, index) => (
                                <div key={index} className="position-card">
                                    <div className="position-info">
                                        <div className="position-meta">
                                            <span className="meta-tag">{job.department}</span>
                                            <span className="meta-tag location">{job.location}</span>
                                            <span className="meta-tag type">{job.type}</span>
                                        </div>
                                        <h3 className="position-title">{job.title}</h3>
                                        <div className="position-desc">{job.description}</div>
                                    </div>
                                    <div className="position-action">
                                        <Link to="/jobs/sales-representative" className="apply-btn">
                                            View Full Details &rarr;
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <div className="spontaneous-application">
                            <h3>Don't see a fit?</h3>
                            <p>We are always looking for exceptional talent. If you believe you belong here, send us your resume and tell us how you can impact our growth.</p>
                            <a href="mailto:coralie@muchosleads.mx?subject=Spontaneous%20Application" className="secondary-apply-btn">Submit Spontaneous Application</a>
                        </div>
                    </div>
                </section>
            </main>
            
            <Footer />
        </div>
    );
};

export default Jobs;
