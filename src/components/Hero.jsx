import React from 'react';
import './Hero.css';
import BlurText from './animations/BlurText';
import ShinyText from './animations/ShinyText';
import Aurora from './animations/Aurora';

const Hero = () => {
    return (
        <section className="hero-exact">
            <Aurora
              colorStops={["#CCFF00", "#4A0E4E", "#8B1E7E"]}
              blend={0.5}
              amplitude={1.0}
              speed={0.5}
            />

            <div className="container hero-container">

                <h1 className="hero-title">
                    <BlurText
                        text="Your business needs clients."
                        delay={50}
                        animateBy="words"
                        direction="bottom"
                    />
                    <br />
                    <BlurText
                        text="Period."
                        className="text-primary"
                        delay={200}
                        animateBy="words"
                        direction="bottom"
                    />
                    <br />
                    <BlurText
                        text="We get them."
                        delay={350}
                        animateBy="words"
                        direction="bottom"
                    />
                </h1>

                <p className="hero-subtitle animate-fade-in-up stagger-2">
                    We create acquisition systems combining digital paid media, outbound &amp; inbound, cold outreach, content, etc. that generate leads that, with the help of CRM, Automations &amp; Tech, fills your DMs, Email, Bookings, asking for your Business.
                </p>

                <div className="hero-cta-container animate-fade-in-up stagger-3">
                    <a href="https://api.leadconnectorhq.com/widget/bookings/20-strategy-call" className="btn-primary hero-btn">Start getting leads →</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
