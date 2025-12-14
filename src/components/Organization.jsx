import React from 'react';
import { motion } from 'framer-motion';
import './Organization.css';

const Organization = () => {
    return (
        <section id="organization" className="section org-section">
            <div className="container">
                <h2 className="section-title">組織構成</h2>
                <p className="org-intro">
                    OIFは、広く門戸を開く「GDGoC（コミュニティ層）」と、その運営母体となる「OIF（正規メンバー）」の2層構造で成り立っています。
                </p>

                <div className="org-content-wrapper">
                    {/* Left Side: Venn Diagram */}
                    <div className="org-visual-area">
                        <div className="venn-diagram-wrapper">
                            <div className="venn-container">
                                {/* Community Circle (Outer) */}
                                <div className="venn-community">
                                    <span className="label-community">GDGoC Audience</span>
                                </div>

                                {/* Core Circles (Inner) */}
                                <div className="venn-core-group">
                                    <div className="venn-circle ai">
                                        <span className="label-core">AI<br />コース</span>
                                    </div>
                                    <div className="venn-circle dev">
                                        <span className="label-core">Dev<br />コース</span>
                                    </div>
                                    <div className="venn-circle biz">
                                        <span className="label-core">Biz<br />コース</span>
                                    </div>
                                    {/* Intersection */}
                                    <div className="venn-center">
                                        <span>OIF<br />Core</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Membership Details */}
                    <div className="org-details-area">
                        <div className="membership-grid">
                            <motion.div
                                className="membership-card layer-1"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className="layer-badge">Layer 1</div>
                                <h4>正規メンバー (Core Member)</h4>
                                <p className="definition">
                                    <strong>定義:</strong> OIFの選抜研修（Bootcamp）を修了したメンバー。全員がいずれかの専門コース（AI/Dev/Biz）に所属し、プロジェクト活動を行います。
                                </p>
                                <div className="activity-block">
                                    <h5>主な活動:</h5>
                                    <ul className="feature-list">
                                        <li>Solution Challengeやハッカソンに向けたチーム開発</li>
                                        <li>受託開発や研究開発（R&D）への取り組み</li>
                                        <li>GDGoC OMU Core Teamとして運営に参加</li>
                                    </ul>
                                </div>
                                <div className="privilege-block">
                                    <h5>正規メンバーの特権:</h5>
                                    <ul className="feature-list">
                                        <li><strong>リソース活用:</strong> サーバー代などのサークル予算使用権</li>
                                        <li><strong>案件参加:</strong> 企業連携プロジェクトや受託開発へのアサイン</li>
                                        <li><strong>Closed Community:</strong> 正規メンバー専用Discordへのアクセス</li>
                                    </ul>
                                </div>
                            </motion.div>

                            <motion.div
                                className="membership-card layer-2"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <div className="layer-badge">Layer 2</div>
                                <h4>コミュニティメンバー (GDGoC Audience)</h4>
                                <p className="definition">
                                    <strong>定義:</strong> テクノロジーに興味があり、イベントや学習リソースを活用したい層。
                                </p>
                                <div className="rights-block">
                                    <h5>参加できること:</h5>
                                    <ul>
                                        <li><strong>Google公式イベント:</strong> ハンズオンやLT会への参加</li>
                                        <li><strong>教材アクセス:</strong> OIF監修の学習ロードマップやGoogle教材の利用</li>
                                        <li><strong>交流:</strong> Discordでの情報交換、他大学GDGoCとの交流</li>
                                    </ul>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Organization;
