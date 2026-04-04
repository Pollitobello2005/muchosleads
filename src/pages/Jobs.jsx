import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
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
            description: "Build and maintain the robust automation pipelines and internal tooling that power our acquisition systems. Experience with React, Node.js and workflow automations (n8n, Make) required.",
            isExternal: true,
            actionLink: "https://wa.me/523344577874?text=Hola,%20quisiera%20aplicar%20para%20la%20vacante%20de%20Full-Stack%20Engineer.",
            actionLabel: "Apply via WhatsApp \u2192"
        },
        {
            title: "Elite B2B Appointment Setter (SDR)",
            department: "Sales",
            type: "100% Commission",
            location: "Remote (LATAM)",
            description: (
                <>
                    <p style={{ marginBottom: '12px' }}>
                        Conviértete en la punta de lanza de nuestro crecimiento prospectando y abriendo oportunidades con directivos y C-levels. Tu objetivo es simple pero vital: romper el hielo, despertar interés y agendar la primera reunión de ventas dentro del mercado B2B.</p>
                    <div style={{ marginBottom: '12px' }}>
                        <strong style={{ display: 'block', color: '#1e293b', marginBottom: '8px' }}>Core Focus:</strong>
                        <ul style={{ paddingLeft: '20px', margin: '0' }}>
                            <li style={{ marginBottom: '6px' }}>Generación masiva de pipeline y <em>appointment setting</em> en LinkedIn.</li>
                            <li style={{ marginBottom: '6px' }}>Filtro de leads y transición de conversaciones en citas calificadas.</li>
                        </ul>
                    </div>
                </>
            ),
            isExternal: false,
            actionLink: "/jobs/sales-representative",
            actionLabel: "View Details \u2192"
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
                                        {job.isExternal ? (
                                            <a href={job.actionLink} target="_blank" rel="noopener noreferrer" className="apply-btn">
                                                {job.actionLabel}
                                            </a>
                                        ) : (
                                            <Link to={job.actionLink} className="apply-btn">
                                                {job.actionLabel}
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="spontaneous-application">
                            <h3>Don't see a fit?</h3>
                            <p>We are always looking for exceptional talent. If you believe you belong here, send us your resume and tell us how you can impact our growth.</p>
                            <a href="https://wa.me/523344577874?text=Hi%20MuchosLeads!%20I'd%20love%20to%20submit%20a%20spontaneous%20application:%20" target="_blank" rel="noopener noreferrer" className="secondary-apply-btn">Submit via WhatsApp</a>
                        </div>
                    </div>
                </section>
            </main>
            
            <Footer />
        </div>
    );
};

export default Jobs;





