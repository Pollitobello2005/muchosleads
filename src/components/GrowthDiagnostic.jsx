import React, { useState, useCallback } from 'react';
import './GrowthDiagnostic.css';

const questions = [
    {
        label: "Question 1 of 5 — Your Current Acquisition Channel",
        question: "How does your business get most of its clients right now?",
        subtext: "Be honest — there is no wrong answer here. This helps us understand your starting point.",
        options: [
            { text: "Referrals & word of mouth", subtitle: "Clients come from people who know us. It works, but it is unpredictable.", score: 1, emoji: "🤝" },
            { text: "Referrals, plus some occasional outreach", subtitle: "We have tried a few things, but there is no real system in place yet.", score: 2, emoji: "📣" },
            { text: "We run active marketing campaigns", subtitle: "We have some infrastructure. We are looking to optimize or scale it.", score: 3, emoji: "🚀" }
        ]
    },
    {
        label: "Question 2 of 5 — Your Growth Velocity",
        question: "How many new clients does your business typically close in a year?",
        subtext: "This gives us a sense of your current pipeline volume and how much room there is to grow.",
        options: [
            { text: "1 to 5 new clients", subtitle: "Each client matters a lot. Consistent flow would change everything.", score: 1, emoji: "📦" },
            { text: "6 to 20 new clients", subtitle: "We have traction. We need a repeatable system to keep it going.", score: 2, emoji: "📈" },
            { text: "More than 20 new clients", subtitle: "We close at volume. We need efficiency, automation, and scale.", score: 3, emoji: "🏢" }
        ]
    },
    {
        label: "Question 3 of 5 — Your Marketing Capacity",
        question: "Who handles marketing at your company today?",
        subtext: "Knowing your internal bandwidth helps us understand what we would need to own vs. support.",
        options: [
            { text: "It is mostly me — the owner or founder", subtitle: "I wear a lot of hats. Marketing usually gets whatever time is left.", score: 1, emoji: "🙋" },
            { text: "We have one marketing person", subtitle: "There is someone focused on it, but they cannot do everything alone.", score: 2, emoji: "👤" },
            { text: "We have a marketing team or a CMO", subtitle: "We have real marketing capacity. We want an execution partner, not a consultant.", score: 3, emoji: "🏛️" }
        ]
    },
    {
        label: "Question 4 of 5 — Your Revenue Scale",
        question: "What is your approximate monthly revenue?",
        subtext: "This helps us calibrate the right level of infrastructure — and what kind of ROI is realistic for you.",
        options: [
            { text: "Under $30,000 per month", subtitle: "We are building. Every dollar has to work hard.", score: 1, emoji: "💼" },
            { text: "Between $30,000 and $100,000 per month", subtitle: "We are established. Marketing investment makes sense now.", score: 2, emoji: "💰" },
            { text: "Over $100,000 per month", subtitle: "We generate serious revenue. We need serious infrastructure to match.", score: 3, emoji: "🏆" }
        ]
    },
    {
        label: "Question 5 of 5 — Your Growth Ambition",
        question: "What does success look like for you in the next 12 months?",
        subtext: "This is about clarity, not pressure. Knowing your goal shapes the entire strategy.",
        options: [
            { text: "Consistent, predictable lead flow", subtitle: "I want to stop relying on luck and referrals. Give me a system I can count on.", score: 1, emoji: "🎯" },
            { text: "Scale fast and fill my pipeline", subtitle: "I am ready to invest and move quickly. I want volume and velocity.", score: 2, emoji: "⚡" },
            { text: "Dominate my market", subtitle: "I want to be everywhere my ideal client looks. All channels. All the time.", score: 3, emoji: "👑" }
        ]
    }
];

const plans = {
    starter: {
        badge: '🌱 Starter Acquisition System',
        matchLine: 'Based on your answers, this is your recommended starting point.',
        headline: 'You have built something real. Now let us build the system that brings clients to you.',
        body: 'Right now, your business survives on relationships — and that is actually a strength. It means you deliver results and people trust you. But referrals have a ceiling, and you know it. The next step is not more hustle — it is infrastructure. We build you a lean, efficient client acquisition system that takes what is already working and turns it into something you can control, measure, and scale.',
        price: '$2,500',
        priceSub: 'Exact pricing defined in your strategy session',
        leads: '15–40',
        leadsSub: 'qualified new conversations per month',
        techStack: [
            { name: 'Apollo.io', desc: 'B2B contact data and targeted outreach platform.', img: '/3.png' },
            { name: 'Clay', desc: 'Automated data enrichment for highly personalized outreach.', img: '/4.png' },
            { name: 'LinkedIn', desc: 'Primary channel for organic B2B outreach and authority building.', img: '/14.png' },
            { name: 'Google Maps Scraper', desc: 'Extracts local business data to build targeted regional prospect lists.', img: '/10.png' },
            { name: 'GoHighLevel', desc: 'All-in-one CRM for pipeline management and follow-up automation.', img: '/6.png' },
            { name: 'n8n', desc: 'Advanced workflow automation connecting all your sales tools.', img: '/5.png' }
        ],
        capabilities: [
            { title: 'Prospect List Building', desc: 'We identify and verify your ideal clients using Apollo and Clay, so your outreach starts with the right people — not a guess.' },
            { title: 'LinkedIn Organic Strategy', desc: 'We engage in your industry conversations, post strategic content, and position you as the go-to authority in your space.' },
            { title: 'Content & Newsletter', desc: '2–4 blog posts and newsletters per month that educate your audience, drive search traffic, and keep you top of mind.' },
            { title: 'Conversion-Focused Website', desc: 'We audit or build landing pages designed to do one thing: turn visitors into leads. Every CTA has a purpose.' },
            { title: 'CRM Pipeline Setup', desc: 'Your leads are organized, scored, and tracked — nothing falls through the cracks, and every follow-up happens on time.' },
            { title: 'Booking Automation', desc: 'Automated reminders before calls, and recovery sequences for no-shows — so your calendar stays full without the manual chase.' },
            { title: 'Lead Capture Systems', desc: 'Email opt-ins, inquiry forms, free downloads, phone CTAs — multiple entry points so leads can reach you however they prefer.' },
            { title: 'Monthly Performance Report', desc: 'A clear breakdown of what is working, what we are testing, and where the next opportunity is.' }
        ],
        ctaHeadline: 'Your plan is ready. Let us get it to you.',
        ctaSubtext: 'Enter your details below and we will send you the full Starter plan — investment breakdown, deliverables, onboarding timeline, and your personalized growth roadmap. No pitch. No pressure. Just the plan.',
        buttonText: 'Send Me My Starter Plan →',
        confirmHeadline: '✅ You are in.',
        confirmBody: 'Your Starter Acquisition Plan is on its way to your inbox. It includes your full strategy breakdown, the tools we would use, expected timelines, and investment details. If you would rather talk through it live, grab a time below.'
    },
    growth: {
        badge: '🚀 Growth Engine',
        popular: true,
        matchLine: 'Based on your answers, this is your recommended acquisition system.',
        headline: 'You are ready to stop piecing things together — and build something that actually scales.',
        body: 'You have got traction. Maybe you have run some campaigns, maybe you have someone on marketing, maybe you have seen what is possible when things click. What you do not have yet is a unified system — one where outbound, paid, organic, and automation are all working together toward the same number. That is exactly what we build.',
        price: '$5,000',
        priceSub: 'Exact scope and pricing defined in your strategy session',
        leads: '60–150',
        leadsSub: 'qualified new conversations per month',
        techStack: [
            { name: 'Apollo.io', desc: 'B2B contact data and targeted outreach platform.', img: '/3.png' },
            { name: 'Clay', desc: 'Automated data enrichment for highly personalized outreach.', img: '/4.png' },
            { name: 'Instantly', desc: 'Scalable cold email infrastructure with high deliverability.', img: '/7.png' },
            { name: 'HubSpot', desc: 'Comprehensive CRM for pipeline management and reporting.', img: '/12.png' },
            { name: 'LinkedIn Sales Navigator', desc: 'Advanced LinkedIn search for specific decision-makers.', img: '/14.png' },
            { name: 'Google Ads', desc: 'High-intent search campaigns targeting active buyers.', img: '/2.png' },
            { name: 'Meta Ads', desc: 'Targeted social campaigns to drive top-of-funnel awareness.', img: '/11.png' },
            { name: 'n8n', desc: 'Advanced workflow automation connecting all your sales tools.', img: '/5.png' },
            { name: 'Looker Studio', desc: 'Live data dashboards for tracking acquisition performance.', img: '/13.png' }
        ],
        capabilitiesPrefix: 'Everything in Starter, plus:',
        capabilities: [
            { title: 'Cold Email Outreach at Scale', desc: 'Automated, personalized email sequences sent to hundreds of prospects weekly — without ever touching spam filters.' },
            { title: 'LinkedIn Outbound Strategy', desc: 'Sales Navigator prospecting combined with strategic connection and messaging sequences to generate conversations.' },
            { title: 'Google Ads Campaigns', desc: 'We build, manage, and optimize search and display campaigns targeting the exact keywords your buyers use.' },
            { title: 'Meta & Social Ad Campaigns', desc: 'We run paid social campaigns that build your brand and drive qualified traffic to your highest-converting pages.' },
            { title: 'Video Production & Editing', desc: 'Short-form content for ads, social, and outreach — edited for performance, not just aesthetics.' },
            { title: 'Live Data Dashboards', desc: 'Real-time visibility into every channel performance — leads, cost per acquisition, conversion rates, and more.' },
            { title: 'Advanced CRM Automation', desc: 'Full pipeline logic: automated lead scoring, nurture flows, deal stage triggers, and re-engagement sequences.' },
            { title: 'Dedicated Account Strategist', desc: 'One senior point of contact who knows your business, owns your results, and is reachable when you need them.' },
            { title: 'Bi-Weekly Strategy Calls', desc: 'Structured reviews where we analyze what is working, make decisions together, and align on next moves.' }
        ],
        ctaHeadline: 'Your Growth Engine plan is ready.',
        ctaSubtext: 'Leave your details and we will send you the complete breakdown — every deliverable, every tool with context, investment range, and how we would ramp up your pipeline from day one.',
        buttonText: 'Send Me My Growth Plan →',
        confirmHeadline: '✅ You are in.',
        confirmBody: 'Your Growth Engine Plan is heading to your inbox now. It includes your full strategy, the exact tech stack we would configure, expected pipeline impact, and investment details. Want to talk through it? Grab a time below.'
    },
    enterprise: {
        badge: '🏢 Enterprise Growth Infrastructure',
        matchLine: 'Based on your answers, this is your recommended acquisition system.',
        headline: 'You are ready for a dedicated growth team — not just a better set of tools.',
        body: 'At this level, the bottleneck is not strategy — it is execution capacity. You know what needs to happen. You may even have the tools. What is missing is a team of specialists who are fully dedicated to your pipeline: waking up every morning thinking about your numbers, your market, your next move.',
        price: '$8,000',
        priceSub: 'Custom scope and pricing defined in your strategy session',
        leads: '200+',
        leadsSub: 'qualified new conversations per month',
        techStack: [
            { name: 'Apollo.io', desc: 'B2B contact data and targeted outreach platform.', img: '/3.png' },
            { name: 'Clay', desc: 'Automated data enrichment for highly personalized outreach.', img: '/4.png' },
            { name: 'Instantly', desc: 'Scalable cold email infrastructure with high deliverability.', img: '/7.png' },
            { name: 'HubSpot', desc: 'Comprehensive CRM for pipeline management and reporting.', img: '/12.png' },
            { name: 'LinkedIn Sales Navigator', desc: 'Advanced LinkedIn search for specific decision-makers.', img: '/14.png' },
            { name: 'Google Ads', desc: 'High-intent search campaigns targeting active buyers.', img: '/2.png' },
            { name: 'Meta Ads', desc: 'Targeted social campaigns to drive top-of-funnel awareness.', img: '/11.png' },
            { name: 'OpenAI', desc: 'Intelligent lead scoring and personalized outreach generation.', img: '/8.png' },
            { name: 'n8n', desc: 'Advanced workflow automation connecting all your sales tools.', img: '/5.png' },
            { name: 'Claude', desc: 'Advanced AI analysis for strategy and content optimization.', img: '/9.png' },
            { name: 'Python', desc: 'Custom scripts for data processing and pipeline intelligence.', img: '/1.png' },
            { name: 'Stripe', desc: 'Automated payment processing and subscription billing.', img: '/18.png' }
        ],
        capabilitiesPrefix: 'Everything in Growth, plus:',
        capabilities: [
            { title: 'Dedicated Senior SDR', desc: 'A full-time outbound specialist working your pipeline every day — prospecting, sequencing, following up, and booking qualified meetings.' },
            { title: 'Dedicated Traffic Specialist', desc: 'One person who owns every paid channel end-to-end: strategy, creative, bidding, and optimization — all focused on your CAC.' },
            { title: 'CRM & CX Automation Specialist', desc: 'Manages your entire customer journey: from first touch to closed deal to retention — with automations that never let a lead go cold.' },
            { title: 'Content & Data Team', desc: 'Writers, editors, and analysts dedicated to your brand — producing content that attracts, converts, and retains at every stage.' },
            { title: 'AI-Powered Lead Scoring', desc: 'Every lead that enters your pipeline is scored, segmented, and routed automatically — so your team focuses on the ones most likely to close.' },
            { title: 'Custom AI Workflows', desc: 'We build AI automations specific to your business: personalized outreach at scale, smart follow-up logic, and pipeline intelligence.' },
            { title: 'Full Brand Content Production', desc: 'Video, design, copywriting, social content — produced at the volume and quality your market presence demands.' },
            { title: 'Weekly Executive Strategy Sessions', desc: 'Structured weekly calls with senior strategists — covering performance, decisions, market shifts, and next-quarter planning.' },
            { title: 'Priority Slack Access', desc: 'Your team is one message away — no tickets, no queues, no waiting 48 hours for an answer.' },
            { title: 'Quarterly Growth Audit', desc: 'A deep-dive review every quarter: what is working, what has changed in your market, and a full roadmap for the next 90 days.' }
        ],
        ctaHeadline: 'Your dedicated team plan is ready.',
        ctaSubtext: 'This is a significant commitment — and it should be. Leave your details and we will send you the full Enterprise plan: the team structure, tools, onboarding process, and investment breakdown.',
        buttonText: 'Send Me My Enterprise Plan →',
        confirmHeadline: '✅ You are in.',
        confirmBody: 'Your Enterprise Growth Infrastructure Plan is on its way. It includes your custom team structure, full tech stack configuration, pipeline impact projections, and investment details.'
    }
};

const GHL_WEBHOOK_URL = 'https://services.leadconnectorhq.com/hooks/1AMk1RZMFnRz4SUyAglf/webhook-trigger/d9e1363c-9357-4c67-bce3-67d7269d33ed';

const GrowthDiagnostic = () => {
    const pricingSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "MuchosLeads Pricing Tiers",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "item": {
                    "@type": "Service",
                    "name": "Starter Acquisition System",
                    "description": plans.starter.body,
                    "offers": { "@type": "Offer", "price": "2500", "priceCurrency": "USD" }
                }
            },
            {
                "@type": "ListItem",
                "position": 2,
                "item": {
                    "@type": "Service",
                    "name": "Growth Engine",
                    "description": plans.growth.body,
                    "offers": { "@type": "Offer", "price": "5000", "priceCurrency": "USD" }
                }
            },
            {
                "@type": "ListItem",
                "position": 3,
                "item": {
                    "@type": "Service",
                    "name": "Enterprise Growth Infrastructure",
                    "description": plans.enterprise.body,
                    "offers": { "@type": "Offer", "price": "8000", "priceCurrency": "USD" }
                }
            }
        ]
    };

    const [screen, setScreen] = useState('intro'); // intro | email | quiz | loading | result
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [resultPlan, setResultPlan] = useState(null);
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');

    const sendToGHL = async (data) => {
        try {
            await fetch(GHL_WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
        } catch (err) {
            console.error('GHL webhook error:', err);
        }
    };

    const startQuiz = () => {
        setScreen('email');
    };

    const proceedToQuiz = (e) => {
        e.preventDefault();
        // Send lead to GHL immediately
        sendToGHL({
            name: userName,
            email: userEmail,
            source: 'growth_diagnostic',
            step: 'email_captured',
        });
        setScreen('quiz');
        setCurrentQuestion(0);
        setAnswers([]);
    };

    const selectOption = (index) => {
        const newAnswers = [...answers];
        newAnswers[currentQuestion] = index;
        setAnswers(newAnswers);
    };

    const nextQuestion = () => {
        if (answers[currentQuestion] === undefined) return;
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            // Calculate result
            setScreen('loading');
            setTimeout(() => {
                const totalScore = answers.reduce((sum, answerIndex, qIndex) => {
                    return sum + questions[qIndex].options[answerIndex].score;
                }, 0);
                
                let plan;
                if (totalScore <= 8) plan = 'starter';
                else if (totalScore <= 12) plan = 'growth';
                else plan = 'enterprise';

                setResultPlan(plan);
                setScreen('result');
                const planDataObj = plans[plan];
                // Send complete data to GHL
                sendToGHL({
                    name: userName,
                    email: userEmail,
                    source: 'growth_diagnostic',
                    step: 'quiz_completed',
                    recommended_plan: plan,
                    plan_name: planDataObj?.badge || plan,
                    total_score: totalScore,
                });
                // Scroll to top of section
                document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
            }, 2500);
        }
    };

    const previousQuestion = () => {
        if (currentQuestion > 0) setCurrentQuestion(currentQuestion - 1);
    };

    const restartQuiz = (e) => {
        e.preventDefault();
        setScreen('intro');
        setCurrentQuestion(0);
        setAnswers([]);
        setResultPlan(null);
        setUserName('');
        setUserEmail('');
    };

    const planData = resultPlan ? plans[resultPlan] : null;

    return (
        <section id="pricing" className="gd-section" aria-label="Pricing and Growth Diagnostic">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }}
            />
            <div className="container">
                <div className="gd-wrapper">

                    {/* INTRO SCREEN */}
                    {screen === 'intro' && (
                        <div className="gd-intro" key="intro">
                            <h2 className="pricing-premium-title">
                                Custom Infrastructure.<br />
                                <span className="text-secondary">Pricing made easy.</span>
                            </h2>
                            <div className="gd-pre-title">60-Second Growth Diagnostic</div>
                            <h3 className="gd-intro-headline">
                                Find Out the Right Strategy, Tools & Investment for Your Business — and Exactly How It Would Work.
                            </h3>
                            <p className="gd-intro-desc">
                                Leave your name and email, answer 5 quick questions about where your business stands today, and we will show you the exact acquisition system we would build for you — and send you the full breakdown straight to your inbox.
                            </p>
                            <button className="gd-start-btn" onClick={startQuiz}>
                                Build My Acquisition Plan →
                            </button>
                        </div>
                    )}

                    {/* EMAIL CAPTURE SCREEN */}
                    {screen === 'email' && (
                        <div className="gd-email-screen" key="email">
                            <div className="gd-email-screen-icon">📩</div>
                            <h2 className="gd-email-screen-title">Before we start — where should we send your plan?</h2>
                            <p className="gd-email-screen-desc">
                                After the diagnostic, we will build your personalized acquisition plan and send the full breakdown to your inbox. No spam. No sales calls unless you ask.
                            </p>
                            <form className="gd-email-form" onSubmit={proceedToQuiz}>
                                <input
                                    type="text"
                                    className="gd-email-input"
                                    placeholder="Your full name"
                                    value={userName}
                                    onChange={(e) => setUserName(e.target.value)}
                                    required
                                />
                                <input
                                    type="email"
                                    className="gd-email-input"
                                    placeholder="your@email.com"
                                    value={userEmail}
                                    onChange={(e) => setUserEmail(e.target.value)}
                                    required
                                />
                                <button type="submit" className="gd-start-btn">Start My Diagnostic →</button>
                            </form>
                            <p className="gd-reassurance">No spam. No sales calls unless you ask for one.</p>
                        </div>
                    )}

                    {/* QUIZ SCREEN */}
                    {screen === 'quiz' && (
                        <div className="gd-quiz" key="quiz">
                            <div className="gd-progress-bar-container">
                                <div
                                    className="gd-progress-bar"
                                    style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                                />
                            </div>
                            <div className="gd-question-label">{questions[currentQuestion].label}</div>
                            <div className="gd-question-card">
                                <h2>{questions[currentQuestion].question}</h2>
                                <p className="gd-question-subtext">{questions[currentQuestion].subtext}</p>
                                <div className="gd-options">
                                    {questions[currentQuestion].options.map((option, index) => (
                                        <div
                                            key={index}
                                            className={`gd-option ${answers[currentQuestion] === index ? 'selected' : ''}`}
                                            onClick={() => selectOption(index)}
                                        >
                                            <div className="gd-option-title">{option.text}</div>
                                            <div className="gd-option-subtitle">{option.subtitle}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="gd-nav-buttons">
                                {currentQuestion > 0 ? (
                                    <button className="gd-nav-btn gd-back-btn" onClick={previousQuestion}>← Back</button>
                                ) : <span />}
                                <button
                                    className="gd-nav-btn gd-next-btn"
                                    onClick={nextQuestion}
                                    disabled={answers[currentQuestion] === undefined}
                                >
                                    {currentQuestion === questions.length - 1 ? 'See My Plan →' : 'Next Question →'}
                                </button>
                            </div>
                        </div>
                    )}

                    {/* LOADING SCREEN */}
                    {screen === 'loading' && (
                        <div className="gd-loading" key="loading">
                            <div className="gd-spinner" />
                            <h2>Building your acquisition blueprint<span className="gd-loading-dots" /></h2>
                            <p>We are matching your profile to the right strategy, tools, and investment range.</p>
                        </div>
                    )}

                    {/* RESULT SCREEN */}
                    {screen === 'result' && planData && (
                        <div className="gd-result" key="result">
                            {/* Header */}
                            <div className="gd-result-header">
                                <div className={`gd-plan-badge ${resultPlan}`}>
                                    {planData.badge}
                                    {planData.popular && <span className="gd-popular-ribbon">Most Popular</span>}
                                </div>
                                <div className="gd-match-line">{planData.matchLine}</div>
                                <h2>{planData.headline}</h2>
                                <p>{planData.body}</p>
                                <div className="gd-investment-boxes">
                                    <div className="gd-info-box">
                                        <div className="gd-info-label">Recommended Investment</div>
                                        <div className="gd-info-value">{planData.price}</div>
                                        <div className="gd-info-sublabel">{planData.priceSub}</div>
                                    </div>
                                    <div className="gd-info-box">
                                        <div className="gd-info-label">Estimated Pipeline Impact</div>
                                        <div className="gd-info-value">{planData.leads}</div>
                                        <div className="gd-info-sublabel">{planData.leadsSub}</div>
                                    </div>
                                </div>
                            </div>

                            {/* Tech Stack */}
                            <div className={`gd-tech-section ${resultPlan}`}>
                                <h3 className="gd-section-title">Your Tech Stack</h3>
                                <p className="gd-section-subtitle">Every tool we use has a specific job. Here is what we would deploy for you and why.</p>
                                <div className="gd-tech-pills">
                                    {planData.techStack.map((tool, i) => (
                                        <div className="gd-tech-pill" key={i}>
                                            <div className="gd-tech-pill-header">
                                                {tool.img && <img src={tool.img} alt={tool.name} className="gd-tech-pill-img" />}
                                                <div className="gd-tech-pill-name">{tool.name}</div>
                                            </div>
                                            <div className="gd-tech-pill-desc">{tool.desc}</div>
                                        </div>
                                    ))}
                                </div>

                                <div className="gd-divider">
                                    <div className="gd-divider-line" />
                                    <div className="gd-divider-text">Powered by strategy, not just software</div>
                                    <div className="gd-divider-line" />
                                </div>

                                {/* Capabilities */}
                                <div className="gd-capabilities">
                                    <h3 className="gd-section-title">What We Execute</h3>
                                    {planData.capabilitiesPrefix && (
                                        <div className="gd-capabilities-prefix">{planData.capabilitiesPrefix}</div>
                                    )}
                                    <div className="gd-capabilities-grid">
                                        {planData.capabilities.map((cap, i) => (
                                            <div className={`gd-capability-item ${resultPlan}`} key={i}>
                                                <div className="gd-capability-title">✅ {cap.title}</div>
                                                <div className="gd-capability-desc">{cap.desc}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* CTA — email already captured */}
                            <div className="gd-cta-section">
                                <div className="gd-confirmation">
                                    <h3>✅ Your plan is on its way.</h3>
                                    <p>We are sending the full {planData.badge.replace(/^\S+\s/, '')} breakdown to <strong>{userEmail}</strong> — including investment details, deliverables, onboarding timeline, and your personalized growth roadmap. Want to talk through it live?</p>
                                    <a href="https://api.leadconnectorhq.com/widget/bookings/20-strategy-call" className="gd-secondary-cta">Book a Strategy Call →</a>
                                </div>
                            </div>

                            <a href="#" className="gd-restart-link" onClick={restartQuiz}>← Start over — retake the diagnostic</a>
                        </div>
                    )}

                </div>
            </div>
        </section>
    );
};

export default GrowthDiagnostic;
