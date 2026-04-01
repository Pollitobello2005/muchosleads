import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import './JobDetails.css';

const JobDetails = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="job-details-container">
            <SEO title="Elite B2B Sales Executive | MuchosLeads Careers" />
            <Navbar />
            
            <main className="job-details-main">
                <div className="job-details-header">
                    <div className="container">
                        <Link to="/jobs" className="back-link">&larr; Back to Open Roles</Link>
                        <div className="job-meta">
                            <span className="meta-tag">Sales</span>
                            <span className="meta-tag type">100% Commission (High-Ticket)</span>
                            <span className="meta-tag location">Remote</span>
                        </div>
                        <h1 className="job-title">Elite B2B Sales Representative (SRv2B)</h1>
                        <p className="job-subtitle">Join a hyper-scaling B2B infrastructure company and close $5,000+ USD deals with uncapped commission upside.</p>
                    </div>
                </div>

                <div className="job-content container">
                    <div className="job-description">
                        <h2>The Opportunity</h2>
                        <p>We are a rapidly scaling B2B growth infrastructure company backed by accelerator-proven founders. We help US-based enterprises scale through high-quality, predictable lead generation. Our core offer is a high-ticket system (averaging <strong>$5,000 USD</strong>), which translates into massive, highly competitive income opportunities for elite closers.</p>
                        <p>If you are looking for a comfortable base salary to make average cold calls, this is not for you. If you are a predatory closer who wants un-capped upside, 30% commissions, and access to an elite operating system—welcome to the big leagues.</p>

                        <h2>Your Mission (¿Qué harás?)</h2>
                        <ul>
                            <li><strong>Hunt & Close:</strong> Prospect, engage, and close enterprise clients, dominating LinkedIn as your primary battlefield.</li>
                            <li><strong>Pipeline Management:</strong> Generate and command a high volume of intensely qualified leads.</li>
                            <li><strong>Communicate Value:</strong> Effectively communicate our results-obsessed value proposition to C-level executives in the US.</li>
                            <li><strong>Iterate & Dominate:</strong> Collaborate directly with the founders to optimize conversion frameworks and sales collateral across multiple niches.</li>
                        </ul>

                        <h2>The Arsenal (¿Qué ofrecemos?)</h2>
                        <ul>
                            <li><strong>Aggressive Compensation:</strong> 100% commission model. You keep <strong>30% per close</strong> immediately. Average ticket: $5,000 USD. Close 4 deals? That's $6,000 USD in your pocket.</li>
                            <li><strong>Warmed Engine:</strong> You aren't starting from zero. Get a baseline of initial leads plus full access to our premium tech stack to print your own meetings.</li>
                            <li><strong>Elite Training:</strong> Access to our proven playbooks, advanced objection-handling scripts, and systematic sales workflows.</li>
                            <li><strong>Autonomy:</strong> 100% remote. High-performance, dynamic environment with massive exposure to the international B2B arena.</li>
                        </ul>

                        <h2>Your DNA (¿Qué buscamos?)</h2>
                        <ul>
                            <li><strong>Savage Commercial Mindset:</strong> You are radically driven by results. You eat rejection for breakfast.</li>
                            <li><strong>B2B Pedigree:</strong> Experience or extreme obsession with B2B services, SaaS, or high-ticket sales.</li>
                            <li><strong>LinkedIn Dominance:</strong> You know how to maneuver, prospect, and extract attention on LinkedIn actively.</li>
                            <li><strong>Flawless Communication:</strong> Clear, persuasive, and strictly professional (Intermediate-Advanced English is highly recommended/required for US accounts).</li>
                            <li><strong>Total Ownership:</strong> Proactive, autonomous, and capable of managing your own pipeline velocity without micromanagement.</li>
                        </ul>

                        <h2>This is for you if...</h2>
                        <ul>
                            <li>You demand a high economic upside based purely on your execution and merit.</li>
                            <li>You thrive in the startup ecosystem and want to ride a massive growth wave.</li>
                            <li>You are obsessed with developing real, hard tactical skills in international enterprise sales.</li>
                        </ul>

                        <div className="job-apply-section">
                            <h3>Ready to scale your income?</h3>
                            <p>Send us your pitch. Don't just send a resume—sell us on why you are the closer we need.</p>
                            <a href="mailto:coralie@muchosleads.mx?subject=Application:%20Elite%20B2B%20Sales%20Representative%20(SRv2B)" className="apply-massive-btn">Apply For This Role &rarr;</a>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default JobDetails;