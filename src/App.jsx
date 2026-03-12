import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoGarden from './components/LogoGarden';
import VideoSection from './components/VideoSection';
import Services from './components/Services';
import ComparisonTable from './components/ComparisonTable';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import ErrorBoundary from './components/ErrorBoundary';
import SEO from './components/SEO';
import './index.css';

const LandingPage = () => (
    <>
        <SEO 
            title="MuchosLeads | B2B Client Acquisition & Lead Generation"
            description="Predictable client acquisition systems for B2B. We build the infrastructure you need for scalable lead generation and sales meetings."
            keywords="B2B lead generation, sales pipeline, client acquisition, outbound systems, marketing infrastructure"
            jsonLd={{
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "MuchosLeads",
                "url": "https://muchosleads.mx",
                "logo": "https://muchosleads.mx/logo-dark.png",
                "description": "Predictable client acquisition systems for B2B companies.",
                "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+525616889945",
                    "contactType": "sales",
                    "email": "coralie@muchosleads.mx"
                }
            }}
        />
        <Navbar />
        <main>
            <ErrorBoundary>
                <Hero />
            </ErrorBoundary>
            <LogoGarden />
            <ErrorBoundary>
                <VideoSection />
            </ErrorBoundary>
            <ErrorBoundary>
                <Services />
            </ErrorBoundary>
            <ComparisonTable />
            <Features />
            <Testimonials />
            <FAQ />
            <Contact />
        </main>
        <Footer />
        <FloatingWhatsApp />
    </>
);

function App() {
    return (
        <ErrorBoundary>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsOfService />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </ErrorBoundary>
    );
}

export default App;

