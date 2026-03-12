import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEO = ({ title, description, keywords, jsonLd }) => {
    const location = useLocation();

    useEffect(() => {
        // Update Title
        document.title = title ? `${title} | MuchosLeads` : 'MuchosLeads | B2B Client Acquisition & Lead Generation';

        // Update Description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', description || 'Scale your B2B pipeline with predictable client acquisition systems. We replace temporary campaigns with scalable outbound infrastructure.');
        }

        // Update Keywords
        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) {
            metaKeywords.setAttribute('content', keywords || 'B2B lead generation, client acquisition, sales pipeline, outbound systems');
        }

        // Update OG Tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute('content', title || 'MuchosLeads | Predictable B2B Pipeline');

        const ogUrl = document.querySelector('meta[property="og:url"]');
        if (ogUrl) ogUrl.setAttribute('content', `https://muchosleads.mx${location.pathname}`);

        // JSON-LD Structured Data
        if (jsonLd) {
            const existingScript = document.getElementById('json-ld');
            if (existingScript) {
                existingScript.innerHTML = JSON.stringify(jsonLd);
            } else {
                const script = document.createElement('script');
                script.id = 'json-ld';
                script.type = 'application/ld+json';
                script.innerHTML = JSON.stringify(jsonLd);
                document.head.appendChild(script);
            }
        }

        // Scroll to top on route change
        window.scrollTo(0, 0);

    }, [title, description, keywords, location.pathname, jsonLd]);

    return null;
};


export default SEO;
