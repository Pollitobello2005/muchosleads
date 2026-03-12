import React, { useEffect, useRef, useState } from 'react';
import './FlowingTimeline.css';

const FlowingTimeline = ({ items }) => {
    const timelineRef = useRef(null);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!timelineRef.current) return;
            const rect = timelineRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            // Calculate how much of the timeline has been scrolled past
            const elementTop = rect.top;
            const elementHeight = rect.height;
            
            // Start progress when top of timeline is at 80% of window height
            const startScroll = windowHeight * 0.8;
            
            if (elementTop < startScroll) {
                const scrolled = startScroll - elementTop;
                let newProgress = (scrolled / elementHeight) * 100;
                newProgress = Math.min(Math.max(newProgress, 0), 100);
                setProgress(newProgress);
            } else {
                setProgress(0);
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Initial check
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="flowing-timeline-container" ref={timelineRef}>
            <div className="timeline-line-bg"></div>
            <div 
                className="timeline-line-progress" 
                style={{ height: `${progress}%` }}
            ></div>
            
            <div className="timeline-items">
                {items.map((item, index) => {
                    const isActive = progress > (index / items.length) * 100;
                    return (
                        <div 
                            key={index} 
                            className={`timeline-item ${isActive ? 'active' : ''}`}
                        >
                            <div className="timeline-node">
                                <div className="timeline-dot"></div>
                            </div>
                            <div className="timeline-content">
                                <div className="timeline-number">{item.number}</div>
                                <h3 className="timeline-title">{item.title}</h3>
                                <p className="timeline-desc">{item.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default FlowingTimeline;
