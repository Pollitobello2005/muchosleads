import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';


const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="app-container">
            <SEO 
                title="Privacy Policy"
                description="Our commitment to protecting your data and privacy at MuchosLeads."
            />
            <Navbar />
            <main className="legal-page section-padding" style={{ paddingTop: '10rem', paddingBottom: '8rem' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h1 className="section-title text-center" style={{ marginBottom: '3rem' }}>Privacy Policy</h1>
                    
                    <div className="legal-content text-left" style={{ lineHeight: '1.8', color: 'var(--color-text-main)' }}>
                        <p><strong>Last Updated: March 2026</strong></p>
                        
                        <h3 className="mt-4" style={{ marginTop: '2.5rem', marginBottom: '1rem', fontSize: '1.5rem' }}>1. Introduction</h3>
                        <p>
                            At MuchosLeads, we respect your privacy and are committed to protecting it through our compliance with this policy. 
                            This policy describes the types of information we may collect from you or that you may provide when you visit the website 
                            muchosleads.mx (our "Website") and our practices for collecting, using, maintaining, protecting, and disclosing that information.
                        </p>

                        <h3 className="mt-4" style={{ marginTop: '2.5rem', marginBottom: '1rem', fontSize: '1.5rem' }}>2. Information We Collect</h3>
                        <p>
                            We collect several types of information from and about users of our Website, including:
                        </p>
                        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Personal Data:</strong> Information by which you may be personally identified, such as name, postal address, e-mail address, telephone number, or any other identifier by which you may be contacted online or offline.</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Technical Data:</strong> Information about your internet connection, the equipment you use to access our Website, and usage details.</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong>B2B Data:</strong> Business-related information collected through forms to assess compatibility for our lead generation infrastructure services.</li>
                        </ul>

                        <h3 className="mt-4" style={{ marginTop: '2.5rem', marginBottom: '1rem', fontSize: '1.5rem' }}>3. How We Use Your Information</h3>
                        <p>
                            We use information that we collect about you or that you provide to us, including any personal information:
                        </p>
                        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                            <li style={{ marginBottom: '0.5rem' }}>To present our Website and its contents to you.</li>
                            <li style={{ marginBottom: '0.5rem' }}>To provide you with information, products, or services that you request from us.</li>
                            <li style={{ marginBottom: '0.5rem' }}>To fulfill any other purpose for which you provide it.</li>
                            <li style={{ marginBottom: '0.5rem' }}>To notify you about changes to our Website or any products or services we offer or provide though it.</li>
                            <li style={{ marginBottom: '0.5rem' }}>To allow you to participate in interactive features on our Website.</li>
                        </ul>

                        <h3 className="mt-4" style={{ marginTop: '2.5rem', marginBottom: '1rem', fontSize: '1.5rem' }}>4. Disclosure of Your Information</h3>
                        <p>
                            We may disclose aggregated information about our users without restriction. 
                            We do not sell your personal data to third parties. We may disclose personal information that we collect or you provide as described in this privacy policy to our subsidiaries, affiliates, contractors, service providers, and other third parties we use to support our business.
                        </p>

                        <h3 className="mt-4" style={{ marginTop: '2.5rem', marginBottom: '1rem', fontSize: '1.5rem' }}>5. Contact Information</h3>
                        <p>
                            To ask questions or comment about this privacy policy and our privacy practices, contact us at: <a href="mailto:coralie@muchosleads.mx" style={{ color: 'var(--color-primary)' }}>coralie@muchosleads.mx</a>.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
