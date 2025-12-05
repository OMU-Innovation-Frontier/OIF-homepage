import React from 'react';
import { motion } from 'framer-motion';
import './Organization.css';

const Organization = () => {
    return (
        <section className="section org-section">
            <div className="container">
                <h2 className="section-title">Organization Structure</h2>

                <div className="org-chart">
                    {/* Level 1 */}
                    <motion.div
                        className="org-level"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="org-card founder">
                            <span className="role">Founder</span>
                            <span className="name">代表</span>
                        </div>
                    </motion.div>

                    <div className="connector-vertical"></div>

                    {/* Level 2 */}
                    <motion.div
                        className="org-level"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <div className="org-card vice">
                            <span className="role">Vice Founder</span>
                            <span className="name">副代表</span>
                        </div>
                    </motion.div>

                    <div className="connector-vertical"></div>

                    {/* Level 3 */}
                    <motion.div
                        className="org-level"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="org-group-label">Executive Board</div>
                        <div className="org-row">
                            {['広報', '会計', '外部連携', '人材'].map((role) => (
                                <div key={role} className="org-card board">
                                    <span className="role">{role}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <div className="connector-vertical"></div>

                    {/* Level 4 */}
                    <motion.div
                        className="org-level"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <div className="org-group-label">Course Leaders</div>
                        <div className="org-row">
                            {['AI', 'Web', 'DS', 'Biz', 'Web3'].map((role) => (
                                <div key={role} className="org-card leader">
                                    <span className="role">{role}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <div className="connector-vertical"></div>

                    {/* Level 5 & 6 */}
                    <motion.div
                        className="org-level"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <div className="org-row wide">
                            <div className="org-card mentor">
                                <span className="role">Mentors</span>
                            </div>
                            <div className="org-card member">
                                <span className="role">Members</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Organization;
