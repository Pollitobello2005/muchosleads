import React from 'react';
import './AnimatedBackground.css';

const AnimatedBackground = () => {
    return (
        <div className="animated-bg-container">
            <div className="mesh-gradient-layer">
                <div className="color-blob blob-1"></div>
                <div className="color-blob blob-2"></div>
                <div className="color-blob blob-3"></div>
            </div>
            {/* Grid overlay for texture */}
            <div className="noise-overlay"></div>
        </div>
    );
};

export default AnimatedBackground;
