import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';


const TermsOfService = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="app-container">
            <SEO 
                title="Terms of Service"
                description="The terms and conditions for using MuchosLeads services."
            />
            <Navbar />
            <main className="legal-page section-padding" style={{ paddingTop: '10rem', paddingBottom: '8rem' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h1 className="section-title text-center" style={{ marginBottom: '3rem' }}>Terms of Service</h1>
                    
                    <div className="legal-content text-left" style={{ lineHeight: '1.8', color: 'var(--color-text-main)' }}>
                        <p><strong>Last Updated: March 2026</strong></p>
                        
                        <h3 className="mt-4" style={{ marginTop: '2.5rem', marginBottom: '1rem', fontSize: '1.5rem' }}>1. Acceptance of Terms</h3>
                        <p>
                            Welcome to MuchosLeads. By accessing our website (muchosleads.mx) or using our B2B lead generation services and infrastructure, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.
                        </p>

                        <h3 className="mt-4" style={{ marginTop: '2.5rem', marginBottom: '1rem', fontSize: '1.5rem' }}>2. Description of Services</h3>
                        <p>
                            MuchosLeads provides B2B lead generation infrastructure, omnichannel outreach services, and cold outbound consulting. The specific deliverables, timelines, and metrics for your engagement will be outlined in a separate Master Service Agreement (MSA) signed upon formal engagement.
                        </p>
                        <p>
                            All case studies and results displayed on this website are factual representations of past performance but are not guarantees of future results for your specific business or industry.
                        </p>

                        <h3 className="mt-4" style={{ marginTop: '2.5rem', marginBottom: '1rem', fontSize: '1.5rem' }}>3. User Responsibilities</h3>
                        <p>
                            By engaging with MuchosLeads, you agree:
                        </p>
                        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                            <li style={{ marginBottom: '0.5rem' }}>To provide accurate, current, and complete information about your business, ICP (Ideal Customer Profile), and offers.</li>
                            <li style={{ marginBottom: '0.5rem' }}>To cooperate with our team during the onboarding and list-building approval process.</li>
                            <li style={{ marginBottom: '0.5rem' }}>Not to use our infrastructure for any illegal, abusive, or unsolicited spam activities that violate international email or telecommunication laws (e.g., CAN-SPAM, GDPR).</li>
                        </ul>

                        <h3 className="mt-4" style={{ marginTop: '2.5rem', marginBottom: '1rem', fontSize: '1.5rem' }}>4. Intellectual Property</h3>
                        <p>
                            The technology stacks, outreach copy methodologies, scraping algorithms, and proprietary workflows developed by MuchosLeads remain the intellectual property of MuchosLeads unless explicitly transferred via a separate written agreement. The website's design, text, and graphics are owned by and copyright to MuchosLeads.
                        </p>

                        <h3 className="mt-4" style={{ marginTop: '2.5rem', marginBottom: '1rem', fontSize: '1.5rem' }}>5. Limitation of Liability</h3>
                        <p>
                            In no event shall MuchosLeads, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
                        </p>

                        <h3 className="mt-4" style={{ marginTop: '2.5rem', marginBottom: '1rem', fontSize: '1.5rem' }}>6. Contact Information</h3>
                        <p>
                            If you have any questions about these Terms, please contact us at: <a href="mailto:coralie@muchosleads.mx" style={{ color: 'var(--color-primary)' }}>coralie@muchosleads.mx</a>.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default TermsOfService;
