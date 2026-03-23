import React, { useState } from 'react';
import './FAQ.css';

const faqs = [
    {
        question: "Who is this NOT a fit for?",
        answer: "You sell low-ticket products under $500. You don't have a defined, validated offer. You expect overnight results without iteration. You want vanity metrics instead of pipeline."
    },
    {
        question: "Who IS this a fit for?",
        answer: "You sell high-value services or contracts. You understand acquisition is a system, not a campaign. You want predictable pipeline, not sporadic wins. You're ready to invest in infrastructure."
    },
    {
        question: "What about Ad Spend?",
        answer: "Starter uses 100% organic methods — no ad budget needed. Growth and Scale tiers include paid campaign management. You control the ad budget directly; we manage strategy and optimization."
    },
    {
        question: "Do you have a Performance Guarantee?",
        answer: "Yes. If we don't deliver qualified leads within 30 days, your next month is on us. We focus on results, not just effort."
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq-section" aria-labelledby="faq-title">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <div className="faq-container">
                <h2 id="faq-title" className="section-title center">Is This For You?</h2>

                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                        >
                            <button
                                className="faq-question"
                                onClick={() => toggleFAQ(index)}
                                aria-expanded={activeIndex === index}
                                aria-controls={`faq-answer-${index}`}
                            >
                                {faq.question}
                                <span 
                                    className="faq-icon"
                                    style={{ transform: activeIndex === index ? 'rotate(45deg)' : 'rotate(0deg)' }}
                                >
                                    +
                                </span>
                            </button>
                            <div
                                id={`faq-answer-${index}`}
                                className="faq-answer-container"
                                style={{ maxHeight: activeIndex === index ? '200px' : '0' }}
                            >
                                <p className="faq-answer">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
