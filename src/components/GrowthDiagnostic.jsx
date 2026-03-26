import React, { useState, useCallback } from 'react';
import './GrowthDiagnostic.css';

const questions = [
    {
        label: "Phase 1 of 5 — Infrastructure Audit",
        question: "How are you currently acquiring high-value clients?",
        subtext: "Our diagnostic engine analyzes your current acquisition framework to architect your ideal growth system.",
        options: [
            { text: "Network & Organic Word-of-Mouth", subtitle: "Clients arrive through our established network. High quality, but unpredictable flow.", score: 1 },
            { text: "Hybrid Network & Tactical Outreach", subtitle: "We occasionally engage in manual prospecting, but lack a systematic, scaled approach.", score: 2 },
            { text: "Active Multi-Channel Campaigns", subtitle: "We have deployed marketing infrastructure and require advanced optimization and scale.", score: 3 }
        ]
    },
    {
        label: "Phase 2 of 5 — Pipeline Velocity",
        question: "What is your current closed-won deal volume per year?",
        subtext: "This metric calibrates the data parameters required to scale your specific sales engine.",
        options: [
            { text: "1 to 5 new clients", subtitle: "Each deal is highly significant. We need a consistent, calculated flow.", score: 1 },
            { text: "6 to 20 new clients", subtitle: "Early traction demonstrated. We require a repeatable, automated system to multiply this.", score: 2 },
            { text: "More than 20 new clients", subtitle: "High-volume closing. We need maximum efficiency, AI automation, and omni-channel scale.", score: 3 }
        ]
    },
    {
        label: "Phase 3 of 5 — Operational Bandwidth",
        question: "Who commands the marketing and acquisition operations internally?",
        subtext: "Understanding your internal capacity allows us to determine the exact level of operational deployment we must execute.",
        options: [
            { text: "Founder / Executive Led", subtitle: "I manage acquisition. Time is scarce and we need a fully managed ecosystem.", score: 1 },
            { text: "Solo Marketing Operator", subtitle: "We have an internal specialist, but they require a robust infrastructure engine to support them.", score: 2 },
            { text: "Dedicated Team / CMO", subtitle: "We have deep capacity. We are seeking a high-level execution partner, not just consultation.", score: 3 }
        ]
    },
    {
        label: "Phase 4 of 5 — Revenue Parameters",
        question: "What is your current monthly revenue threshold?",
        subtext: "We use this data point to engineer the exact ROI models and campaign aggression tailored for your stage.",
        options: [
            { text: "Scaling Phase (Under $30k/mo)", subtitle: "We are aggressively building. Every dollar deployed must be efficiently engineered.", score: 1 },
            { text: "Growth Phase ($30k - $100k/mo)", subtitle: "We are established. We're ready to deploy capital into advanced acquisition assets.", score: 2 },
            { text: "Enterprise Phase (Over $100k/mo)", subtitle: "Significant revenue base. We require elite, omni-channel infrastructure to match our scale.", score: 3 }
        ]
    },
    {
        label: "Phase 5 of 5 — Strategic Trajectory",
        question: "What is your primary growth objective for the next 12 months?",
        subtext: "This critical input dictates the architecture of your entire customized acquisition plan.",
        options: [
            { text: "Establish Predictable Systems", subtitle: "Eliminate reliance on network luck. Deploy a calculated, predictable lead engine.", score: 1 },
            { text: "Aggressive Pipeline Expansion", subtitle: "Capital is ready to deploy. We seek rapid velocity and a fully loaded sales pipeline.", score: 2 },
            { text: "Total Market Dominance", subtitle: "We aim for absolute omnipresence. We need to be exactly where our ideal clients look, 24/7.", score: 3 }
        ]
    }
];

const plans = {
    starter: {
        badge: 'Starter Acquisition System',
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
        confirmHeadline: 'You are in.',
        confirmBody: 'Your Starter Acquisition Plan is on its way to your inbox. It includes your full strategy breakdown, the tools we would use, expected timelines, and investment details. If you would rather talk through it live, grab a time below.'
    },
    growth: {
        badge: 'Growth Engine',
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
        confirmHeadline: 'You are in.',
        confirmBody: 'Your Growth Engine Plan is heading to your inbox now. It includes your full strategy, the exact tech stack we would configure, expected pipeline impact, and investment details. Want to talk through it? Grab a time below.'
    },
    enterprise: {
        badge: 'Enterprise Growth Infrastructure',
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
        confirmHeadline: 'You are in.',
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
    const [selectedTechTool, setSelectedTechTool] = useState(null);
    const [selectedCapability, setSelectedCapability] = useState(null);

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
                                Proprietary Infrastructure.<br />
                                <span className="text-secondary">Engineered for Scale.</span>
                            </h2>
                            <div className="gd-pre-title">Strategic Growth Data Assessment</div>
                            <h3 className="gd-intro-headline">
                                Unlock the Exact Acquisition Systems, Advanced Auto-Tooling & Framework Required to Scale.
                            </h3>
                            <p className="gd-intro-desc">
                                Provide your email, map your current data inside our 5-phase assessment, and our system will instantly architect the precise client acquisition blueprint tailored for your exact revenue threshold.
                            </p>
                            <button className="gd-start-btn" onClick={startQuiz}>
                                Initialize Assessment Engine →
                            </button>
                        </div>
                    )}

                    {/* EMAIL CAPTURE SCREEN */}
                    {screen === 'email' && (
                        <div className="gd-email-screen" key="email">
                            <h2 className="gd-email-screen-title">Before we start — where should we send your plan?</h2>
                            <p className="gd-email-screen-desc">
                                After the diagnostic, we will build your personalized acquisition plan and send the full breakdown to your inbox. No spam. No sales calls unless you ask.
                            </p>
                            <form className="gd-email-form" onSubmit={proceedToQuiz}>
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
                            <div className="gd-question-label" key={`label-${currentQuestion}`}>{questions[currentQuestion].label}</div>
                            <div className="gd-question-card" key={`card-${currentQuestion}`}>
                                <h2>{questions[currentQuestion].question}</h2>
                                <p className="gd-question-subtext">{questions[currentQuestion].subtext}</p>
                                <div className="gd-options">
                                    {questions[currentQuestion].options.map((option, index) => (
                                        <div
                                            key={index}
                                            className={`gd-option ${answers[currentQuestion] === index ? 'selected' : ''}`}
                                            onClick={() => selectOption(index)}
                                        >
                                            <span className="letter-icon">{['A', 'B', 'C'][index]}</span>
                                            <div className="gd-option-content">
                                                <div className="gd-option-title">{option.text}</div>
                                                <div className="gd-option-subtitle">{option.subtitle}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="gd-nav-buttons">
                                {currentQuestion > 0 ? (
                                    <button className="gd-nav-btn gd-back-btn" onClick={previousQuestion}>← Rewind</button>
                                ) : <span />}
                                <button
                                    className="gd-nav-btn gd-next-btn"
                                    onClick={nextQuestion}
                                    disabled={answers[currentQuestion] === undefined}
                                >
                                    {currentQuestion === questions.length - 1 ? 'Compile Blueprint →' : 'Next Phase →'}
                                </button>
                            </div>
                        </div>
                    )}

                    {/* LOADING SCREEN */}
                    {screen === 'loading' && (
                        <div className="gd-loading" key="loading">
                            <div className="gd-spinner" />
                            <h2>Processing data & architecting your acquisition engine<span className="gd-loading-dots" /></h2>
                            <p>Our system is engineering the precise infrastructure, tools, and strategic deployment required for your scale.</p>
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
                                        <div className="gd-tech-icon-wrapper" key={i} onClick={() => setSelectedTechTool(tool)}>
                                            {tool.img && <img src={tool.img} alt={tool.name} className="gd-tech-icon-img" title={tool.name} />}
                                        </div>
                                    ))}
                                </div>
                                
                                {selectedTechTool && (
                                    <div className="gd-tech-modal" onClick={() => setSelectedTechTool(null)}>
                                        <div className="gd-tech-modal-content" onClick={e => e.stopPropagation()}>
                                            <button className="gd-tech-modal-close" onClick={() => setSelectedTechTool(null)}>×</button>
                                            <div className="gd-tech-modal-header">
                                                {selectedTechTool.img && <img src={selectedTechTool.img} alt={selectedTechTool.name} className="gd-tech-modal-img" />}
                                                <h4>{selectedTechTool.name}</h4>
                                            </div>
                                            <p>{selectedTechTool.desc}</p>
                                        </div>
                                    </div>
                                )}

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
                                        {planData.capabilities.map((cap, i) => {
                                            const isSelected = selectedCapability === cap;
                                            return (
                                                <div 
                                                    className={`gd-capability-item ${resultPlan} ${isSelected ? 'expanded' : ''}`} 
                                                    key={i}
                                                    onClick={() => setSelectedCapability(isSelected ? null : cap)}
                                                >
                                                    <div className="gd-capability-header">
                                                        <div className="gd-capability-title">{cap.title}</div>
                                                        <span className="gd-capability-toggle">{isSelected ? '−' : '+'}</span>
                                                    </div>
                                                    <div className={`gd-capability-desc ${isSelected ? 'open' : ''}`}>
                                                        {cap.desc}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>

                            {/* CTA — email already captured */}
                            <div className="gd-cta-section">
                                <div className="gd-confirmation">
                                    <h3>Your plan is on its way.</h3>
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
