import React from 'react';
import './Features.css';
import FlowingTimeline from './animations/FlowingTimeline';

const features = [
    {
        title: 'B2B SaaS (Series A)',
        description: '127 qualified demos booked in 45 days. Cost Per Lead (CPL): $31 USD.',
        number: '01'
    },
    {
        title: 'Accounting / Fractional CFO',
        description: '43 discovery calls in 30 days, closing 6 new recurring retainer clients.',
        number: '02'
    },
    {
        title: 'B2B Law Firm',
        description: '89 consultations in 90 days, generating $180K in new closed cases.',
        number: '03'
    },
    {
        title: 'Commercial Real Estate',
        description: '$2.3M pipeline generated in 60 days. Maintained a 34% email open rate.',
        number: '04'
    },
    {
        title: 'Financial Services',
        description: '14 meetings secured with C-suite executives and board members in 30 days.',
        number: '05'
    },
    {
        title: 'Enterprise SaaS',
        description: 'Scaled from $0 to an $890K pipeline in 75 days with a solid 22% reply rate.',
        number: '06'
    }
];

const Features = () => {
    return (
        <section className="features-section">
            <div className="container">
                <div className="features-header-centered">
                    <h2 className="section-title">Verified Results <br />(Under NDA)</h2>
                    <p className="features-subtitle">Real pipeline generated from our outbound infrastructure.</p>
                </div>

                <FlowingTimeline items={features} />
            </div>
        </section>
    );
};

export default Features;
