import React from 'react';
import './LogoGarden.css';

const LogoGarden = () => {
    return (
        <section className="logo-garden">
            <div className="container">
                <p className="garden-title"><strong>$120M+</strong> Revenue Generated · <strong>2M+</strong> Meetings Booked · <strong>47+</strong> Clients Served</p>
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
