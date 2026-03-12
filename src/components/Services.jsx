import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import './Services.css';

const Services = () => {
    return (
        <section id="process" className="services-exact section-padding">
            <div className="container">
                <div className="services-header text-center">
                    <p className="subtitle-sm text-primary">From Zero to Qualified Pipeline</p>
                    <h2 className="section-title">
                        The Process: <span className="text-primary">In 4 Weeks</span>
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
                            <h3>1. ICP Mapping & List Building</h3>
                            <p>We define your Ideal Customer Profile, then build verified prospect lists using LinkedIn, Apollo, and Clay — filtered by buying intent, company size, and industry.</p>
                            <ul className="service-features">
                                <li><span className="arrow-icon">→</span> Hand-curated B2B leads</li>
                                <li><span className="arrow-icon">→</span> Filtered by intent</li>
                                <li><span className="arrow-icon">→</span> You approve before launch</li>
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
                            <p>We launch personalized sequences across email, LinkedIn, and phone. Your CRM becomes a real-time map of opportunities, not a contact graveyard. We track every touchpoint.</p>
                            <ul className="service-features">
                                <li><span className="arrow-icon">→</span> Email, LinkedIn, Phone, SMS</li>
                                <li><span className="arrow-icon">→</span> Reply categorization</li>
                                <li><span className="arrow-icon">→</span> Real-time pipeline visibility</li>
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
                            <h3>3. Speed to Lead Execution</h3>
                            <p>When a prospect shows interest, we respond in hours, not days. We use speed as a competitive advantage to qualify interested prospects against your criteria before reaching your calendar.</p>
                            <ul className="service-features">
                                <li><span className="arrow-icon">→</span> Rapid response protocols</li>
                                <li><span className="arrow-icon">→</span> Strict qualification criteria</li>
                                <li><span className="arrow-icon">→</span> Pre-qualified appointments</li>
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
