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
            title: "Senior Growth Strategist",
            department: "Client Acquisition",
            type: "Full-Time",
            location: "Remote / Mexico City",
            description: "Lead comprehensive growth strategies for our highest-tier B2B accounts. You will design outbound infrastructures and analyze data to optimize client results."
        },
        {
            title: "Full-Stack Engineer",
            department: "Engineering",
            type: "Full-Time",
            location: "Remote",
            description: "Build and maintain the robust automation pipelines and internal tooling that power our acquisition systems. Experience with React, Node.js and workflow automations (n8n, Make) required."
        },
        {
            title: "B2B Sales Development Representative (SDR)",
            department: "Sales",
            type: "Full-Time",
            location: "Remote",
            description: "Drive predictable revenue growth by executing targeted multichannel outreach. You will be the front-line ambassador for our brand, engaging enterprise prospects."
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
                                        <p className="position-desc">{job.description}</p>
                                    </div>
                                    <div className="position-action">
                                        <a href={`mailto:coralie@muchosleads.mx?subject=Application:%20${encodeURIComponent(job.title)}`} className="apply-btn">
                                            Apply Now &rarr;
                                        </a>
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
