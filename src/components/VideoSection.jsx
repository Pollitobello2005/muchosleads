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
                    <video
                        className="video-thumbnail"
                        src="https://res.cloudinary.com/dr8qkyfvj/video/upload/v1774229746/clideooo_nsoxx9.mp4"
                        poster="https://res.cloudinary.com/dr8qkyfvj/video/upload/so_1/v1774229746/clideooo_nsoxx9.jpg"
                        controls
                        playsInline
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default VideoSection;
