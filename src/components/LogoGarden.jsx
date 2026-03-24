import React from 'react';
import './LogoGarden.css';

const LogoGarden = () => {
    return (
        <section className="logo-garden">
            <div className="container">
                <div className="garden-pills">
                    <span className="garden-pill">1,000,000+ Qualified Leads Generated</span>
                    <span className="garden-pill">$500m+ USD Sales for 200+ clients</span>
                    <span className="garden-pill">🏆 Internationally Awarded</span>
                </div>
                <div className="garden-marquee">
                    <div className="garden-track">
                        {/* Logos Repeated for Infinite Scroll Effect */}
                        <div className="garden-logo">Admira</div>
                        <div className="garden-logo text-red">Claro-</div>
                        <div className="garden-logo">LEASEMD</div>
                        <div className="garden-logo text-red">AMOS</div>
                        <div className="garden-logo">humanquality</div>
                        <div className="garden-logo text-teal">Apurata</div>

                        <div className="garden-logo">Admira</div>
                        <div className="garden-logo text-red">Claro-</div>
                        <div className="garden-logo">LEASEMD</div>
                        <div className="garden-logo text-red">AMOS</div>
                        <div className="garden-logo">humanquality</div>
                        <div className="garden-logo text-teal">Apurata</div>

                        <div className="garden-logo">Admira</div>
                        <div className="garden-logo text-red">Claro-</div>
                        <div className="garden-logo">LEASEMD</div>
                        <div className="garden-logo text-red">AMOS</div>
                        <div className="garden-logo">humanquality</div>
                        <div className="garden-logo text-teal">Apurata</div>
                    </div>
                </div>

                <div className="tech-garden-title">Our Elite Tech Stack</div>
                <div className="garden-marquee">
                    <div className="garden-track-reverse">
                        {[1, 2, 3].map((set) => (
                            <React.Fragment key={set}>
                                <div className="garden-logo"><img src="/4.png" alt="Clay" className="garden-logo-img" title="Clay" /></div>
                                <div className="garden-logo"><img src="/7.png" alt="Instantly" className="garden-logo-img" title="Instantly" /></div>
                                <div className="garden-logo"><img src="/12.png" alt="HubSpot" className="garden-logo-img" title="HubSpot" /></div>
                                <div className="garden-logo"><img src="/14.png" alt="LinkedIn" className="garden-logo-img" title="LinkedIn" /></div>
                                <div className="garden-logo"><img src="/2.png" alt="Google Ads" className="garden-logo-img" title="Google Ads" /></div>
                                <div className="garden-logo"><img src="/11.png" alt="Meta Ads" className="garden-logo-img" title="Meta Ads" /></div>
                                <div className="garden-logo"><img src="/8.png" alt="OpenAI" className="garden-logo-img" title="OpenAI" /></div>
                                <div className="garden-logo"><img src="/5.png" alt="n8n" className="garden-logo-img" title="n8n" /></div>
                                <div className="garden-logo"><img src="/9.png" alt="Claude" className="garden-logo-img" title="Claude" /></div>
                                <div className="garden-logo"><img src="/1.png" alt="Python" className="garden-logo-img" title="Python" /></div>
                                <div className="garden-logo"><img src="/18.png" alt="Stripe" className="garden-logo-img" title="Stripe" /></div>
                                <div className="garden-logo"><img src="/3.png" alt="Apollo.io" className="garden-logo-img" title="Apollo.io" /></div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LogoGarden;
