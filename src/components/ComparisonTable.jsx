import React from 'react';
import './ComparisonTable.css';

const ComparisonTable = () => {
    return (
        <section id="problem" className="comparison-section section-padding">
            <div className="container">
                <div className="comparison-header text-center mb-5">
                    <h2 className="section-title">The New Standard in B2B Client Acquisition</h2>
                    <p className="section-desc">Why established businesses choose MuchosLeads over traditional agencies.</p>
                </div>
                <div className="table-wrapper">
                    <table className="comparison-table">
                        <thead>
                            <tr>
                                <th className="feature-col"></th>
                                <th>Traditional Agencies</th>
                                <th>In-House Team</th>
                                <th className="highlight-col">
                                    <div className="highlight-header">
                                        <img src="/imagenegro.png" alt="MuchosLeads B2B Lead Generation Methodology" style={{ height: '24px', marginRight: '4px' }} />
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="feature-col">Unified Tech Stack</td>
                                <td><span className="icon cross bg-gray">✕</span></td>
                                <td><span className="icon cross bg-gray">✕</span></td>
                                <td className="highlight-cell"><span className="icon check bg-blue">✓</span></td>
                            </tr>
                            <tr>
                                <td className="feature-col">Guaranteed Qualified Pipeline</td>
                                <td><span className="icon cross bg-gray">✕</span></td>
                                <td><span className="icon cross bg-gray">✕</span></td>
                                <td className="highlight-cell"><span className="icon check bg-blue">✓</span></td>
                            </tr>
                            <tr>
                                <td className="feature-col">Leads in less than 7 days*</td>
                                <td><span className="icon cross bg-gray">✕</span></td>
                                <td><span className="icon cross bg-gray">✕</span></td>
                                <td className="highlight-cell"><span className="icon check bg-blue">✓</span></td>
                            </tr>
                            <tr>
                                <td className="feature-col">Long-term Infrastructure</td>
                                <td><span className="icon cross bg-gray">✕</span></td>
                                <td><span className="icon check bg-blue">✓</span></td>
                                <td className="highlight-cell"><span className="icon check bg-blue">✓</span></td>
                            </tr>
                            <tr>
                                <td className="feature-col">Integrated Outreach and Follow-up</td>
                                <td><span className="icon cross bg-gray">✕</span></td>
                                <td><span className="icon cross bg-gray">✕</span></td>
                                <td className="highlight-cell"><span className="icon check bg-blue">✓</span></td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td className="highlight-cta">
                                    <a href="https://api.leadconnectorhq.com/widget/bookings/20-strategy-call" className="btn-primary w-full">Book Strategy Call</a>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <p className="table-footnote">*From acquisition system date activation</p>
            </div>
        </section>
    );
};

export default ComparisonTable;
