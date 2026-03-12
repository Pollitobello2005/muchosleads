import React from 'react';
import './Hero.css';
import BlurText from './animations/BlurText';
import ShinyText from './animations/ShinyText';
import Aurora from './animations/Aurora';

const Hero = () => {
    return (
        <section className="hero-exact">
            <Aurora
              colorStops={["#3b82f6", "#FFFFFF", "#3b82f6"]}
              blend={0.5}
              amplitude={1.0}
              speed={0.5}
            />

            <div className="container hero-container">

                <h1 className="hero-title">
                    <BlurText
                        text="Zero Vanity Metrics."
                        delay={50}
                        animateBy="words"
                        direction="bottom"
                    />
                    <br />
                    <BlurText
                        text="Just Predictable"
                        className="text-primary"
                        delay={200}
                        animateBy="words"
                        direction="bottom"
                    />
                    <br />
                    <BlurText
                        text="B2B Pipeline."
                        delay={350}
                        animateBy="words"
                        direction="bottom"
                    />
                </h1>

                <p className="hero-subtitle animate-fade-in-up stagger-2">
                    We replace temporary campaigns with scalable outbound systems that deliver qualified sales meetings straight to your calendar. <br />
                    <strong>For SaaS, Professional Services, and High-Ticket Businesses.</strong>
                </p>

                <div className="hero-cta-container animate-fade-in-up stagger-3">
                    <a href="https://api.leadconnectorhq.com/widget/bookings/20-strategy-call" className="btn-primary hero-btn">Build Your Pipeline Today →</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
