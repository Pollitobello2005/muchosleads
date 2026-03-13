import React from 'react';
import './LogoGarden.css';

const LogoGarden = () => {
    return (
        <section className="logo-garden">
            <div className="container">
                <div className="garden-pills">
                    <span className="garden-pill">1,000,000+ Qualified Leads Generated</span>
                    <span className="garden-pill">$500+ USD Sales for over 100 clients</span>
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
            </div>
        </section>
    );
};

export default LogoGarden;
