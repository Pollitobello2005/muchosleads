import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <header className="navbar-exact">
            <div className="container nav-container">
                <a href="/" className="logo-link">
                    <img src="/imagenegro.png" alt="MuchosLeads - B2B Lead Generation & Predictable Pipeline Logo" className="nav-logo-img" />
                </a>

                <nav className="nav-links-exact desktop-only">
                    <a href="#process">The Process</a>
                    <a href="#pricing">Pricing</a>
                    <a href="#contact">Contact</a>
                </nav>

                <div className="nav-actions">
                    <a href="https://api.leadconnectorhq.com/widget/bookings/20-strategy-call" className="btn-primary">Book Strategy Call</a>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
