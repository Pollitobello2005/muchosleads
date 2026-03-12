import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">
                <div className="contact-content animate-slide-up">
                    <h2 className="contact-title">Launch Your System Today</h2>
                    <p className="contact-subtitle">Book a 30-minute Strategy Call. No commitment. We'll audit your current acquisition model and map out an action plan for qualified businesses.</p>

                    <div className="contact-cta-wrapper" style={{ marginTop: '2.5rem' }}>
                        <a 
                            href="https://api.leadconnectorhq.com/widget/bookings/20-strategy-call" 
                            className="btn-primary w-full large text-center"
                            style={{ display: 'block', padding: '1.25rem' }}
                        >
                            Book Your Strategy Call
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
