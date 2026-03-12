import React from 'react';
import './Logo.css';

const Logo = ({ className = '' }) => {
    return (
        <div className={`muchos-logo ${className}`}>
            <span className="logo-part m-part">M</span>
            <span className="logo-part u-part">
                <span className="magnet-tip left"></span>
                <span className="magnet-tip right"></span>
                u
            </span>
            <span className="logo-part chos-part">chosLeads</span>
        </div>
    );
};

export default Logo;
