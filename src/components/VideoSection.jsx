import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './VideoSection.css';

const VideoSection = () => {
    const containerRef = useRef(null);
    
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end center"]
    });

    // Scale from 85% to 100% as you scroll down
    const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);

    return (
        <section className="video-section section-padding" ref={containerRef}>
            <div className="container">
                <motion.div 
                    className="video-wrapper"
                    style={{ scale }}
                >
                    <div className="video-overlay">
                        <button className="play-button" aria-label="Play Video">
                            <span className="play-icon">▶</span>
                        </button>
                    </div>
                    {/* Placeholder for actual video iframe or html5 video */}
                    <img 
                        src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                        alt="Video Thumbnail" 
                        className="video-thumbnail"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default VideoSection;
