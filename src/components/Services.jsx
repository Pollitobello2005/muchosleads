import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import './Services.css';

const Services = () => {
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "B2B Client Acquisition System",
        "description": "A 4-week process from zero to leads in your CRM. We build target lists, execute omnichannel outreach, drive engagement, and help you close deals.",
        "provider": {
            "@type": "Organization",
            "name": "MuchosLeads"
        },
        "serviceType": "Lead Generation",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Acquisition Process",
            "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Target & List Building" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Omnichannel Outreach & Tracking" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Engagement to Drive Sales" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Close & Scale" } }
            ]
        }
    };

    return (
        <section id="process" className="services-exact section-padding" aria-labelledby="services-title">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <div className="container">
                <div className="services-header text-center">
                    <p className="subtitle-sm text-primary">From Zero to Leads in the CRM</p>
                    <h2 id="services-title" className="section-title">
                        The Process: <span className="text-primary">less than 4 Weeks</span>
                    </h2>
                    <p className="section-desc">
                        Here's exactly what happens after you book a strategy call.
                    </p>
                </div>

                <div className="services-list stack">
                    {/* Step 1 */}
                    <div className="service-row">
                        <div className="service-visual">
                            <div className="placeholder-device" style={{ background: 'transparent', boxShadow: 'none', border: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: 'auto', minHeight: 'auto', padding: '0' }}>
                                <DotLottieReact
                                    src="/animations/list-building.lottie"
                                    loop
                                    autoplay
                                    style={{ width: '100%', maxWidth: '800px', height: 'auto', transform: 'scale(1.5)' }}
                                />
                            </div>
                        </div>
                        <div className="service-content">
                            <h3>1. Target & List Building</h3>
                            <p>We define your Ideal Customer Profile, then build verified effective lists using LinkedIn, Apollo, and Clay and more, filtered by buying intent, company size, and industry or whatever helps us find your ideal client.</p>
                            <ul className="service-features">
                                <li><span className="arrow-icon">→</span> Leads with money and intent to buy</li>
                                <li><span className="arrow-icon">→</span> Start building a real LTV-oriented Database</li>
                                <li><span className="arrow-icon">→</span> Identifying conversations to build automations</li>
                            </ul>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="service-row reverse">
                        <div className="service-visual">
                            <div className="placeholder-device" style={{ background: 'transparent', boxShadow: 'none', border: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: 'auto', minHeight: 'auto', padding: '0' }}>
                                <DotLottieReact
                                    src="/animations/omnichannel-outreach.lottie"
                                    loop
                                    autoplay
                                    style={{ width: '100%', maxWidth: '800px', height: 'auto', transform: 'scale(1.5)' }}
                                />
                            </div>
                        </div>
                        <div className="service-content">
                            <h3>2. Omnichannel Outreach & Tracking</h3>
                            <p>Time to reach those leads. Personalized sequences across Email, Social Media, Phone, everything that pushes them forward to buy. Your CRM becomes a real-time map of opportunities, not a contact graveyard. We track every touchpoint.</p>
                            <ul className="service-features">
                                <li><span className="arrow-icon">→</span> Not a single lead is left unattended</li>
                                <li><span className="arrow-icon">→</span> Real sales automations, no soft follow-up</li>
                                <li><span className="arrow-icon">→</span> Automated and with real-time visibility</li>
                            </ul>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="service-row">
                        <div className="service-visual">
                            <div className="placeholder-device" style={{ background: 'transparent', boxShadow: 'none', border: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: 'auto', minHeight: 'auto', padding: '0' }}>
                                <DotLottieReact
                                    src="/animations/speed-to-lead.lottie"
                                    loop
                                    autoplay
                                    style={{ width: '100%', maxWidth: '800px', height: 'auto', transform: 'scale(1.15)' }}
                                />
                            </div>
                        </div>
                        <div className="service-content">
                            <h3>3. Engagement to drive sales</h3>
                            <p>As soon as a lead enters the CRM, we respond as soon as it matters to turn them into a potential client. We use well thought messaging to make every lead book that call, make that inquiry, take that demo, or whatever moves them further in the funnel.</p>
                            <ul className="service-features">
                                <li><span className="arrow-icon">→</span> Rapid response protocols</li>
                                <li><span className="arrow-icon">→</span> Copywriting based on data made by humans</li>
                                <li><span className="arrow-icon">→</span> Use of best channels</li>
                            </ul>
                        </div>
                    </div>

                    {/* Step 4 */}
                    <div className="service-row reverse">
                        <div className="service-visual">
                            <div className="placeholder-device" style={{ background: 'transparent', boxShadow: 'none', border: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: 'auto', minHeight: 'auto', padding: '0' }}>
                                <DotLottieReact
                                    src="/animations/close-scale.lottie"
                                    loop
                                    autoplay
                                    style={{ width: '100%', maxWidth: '800px', height: 'auto', transform: 'scale(1.15)' }}
                                />
                            </div>
                        </div>
                        <div className="service-content">
                            <h3>4. Close & Scale</h3>
                            <p>We help your team close the conversations we start. We track cost per opportunity, expand to new channels, and scale revenue. <strong>Note: If your sales process is broken, we tell you before charging a dime.</strong></p>
                            <ul className="service-features">
                                <li><span className="arrow-icon">→</span> Deal closing support</li>
                                <li><span className="arrow-icon">→</span> Cost-per-meeting tracking</li>
                                <li><span className="arrow-icon">→</span> Channel expansion</li>
                            </ul>
                            <div className="btn-group mt-4">
                                <a href="https://api.leadconnectorhq.com/widget/bookings/20-strategy-call" className="btn-primary">Book Strategy Call</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Services;
