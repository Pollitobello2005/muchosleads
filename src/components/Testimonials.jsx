import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
    return (
        <section id="pricing" className="pricing-premium-section">
            <div className="container">
                <div className="pricing-premium-wrapper">
                    <h2 className="pricing-premium-title">
                        Custom Infrastructure.<br />
                        <span className="text-secondary">Pricing made easy.</span>
                    </h2>
                    
                    <p className="pricing-premium-desc">
                        We don't believe in boxed solutions. We build the exact client acquisition infrastructure your market demands.
                    </p>

                    <div className="pricing-premium-highlight">
                        Partner engagements start at <strong>$2,500/month</strong>.<br/>
                        Your exact ROI and tech stack are custom-designed during our strategy session.
                    </div>

                    <div className="pricing-premium-cta">
                        <a href="#contact" className="btn-primary btn-large">Apply for Pricing & Strategy</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
