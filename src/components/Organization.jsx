import React from 'react';
import { motion } from 'framer-motion';
import './Organization.css';

const Organization = () => {
    return (
        <section id="organization" className="section org-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    参加の仕組み
                </motion.h2>
                <p className="org-intro">
                    堅苦しい組織ではありません。<br />
                    興味レベルに合わせて自由に参加できます。
                </p>

                <div className="membership-grid">
                    {/* Community Member */}
                    <motion.div
                        className="membership-card community-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="card-header">
                            <div className="member-info">
                                <h3>コミュニティメンバー</h3>
                                <span className="member-subtitle">一般参加</span>
                            </div>
                        </div>
                        <p className="member-tagline">「まずは気軽に、のぞいてみる」</p>

                        <div className="member-details">
                            <div className="detail-item">
                                <span><strong>対象:</strong> 全学生（学部・学年不問）</span>
                            </div>
                            <div className="detail-item">
                                <span><strong>活動:</strong> Discord（チャットツール）への参加</span>
                            </div>
                        </div>

                        <div className="member-benefits">
                            <h4>できること:</h4>
                            <ul>
                                <li>勉強会やイベントへの参加</li>
                                <li>技術やキャリアについての情報交換</li>
                            </ul>
                        </div>

                        <div className="member-join">
                            <p><strong>参加方法:</strong> Discordサーバーに入るだけ。出入り自由です。</p>
                        </div>
                    </motion.div>

                    {/* Core Member */}
                    <motion.div
                        className="membership-card core-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="card-header">
                            <div className="member-info">
                                <h3>コアメンバー</h3>
                                <span className="member-subtitle">運営・開発</span>
                            </div>
                        </div>
                        <p className="member-tagline">「ガッツリ開発する・組織を作る」</p>

                        <div className="member-details">
                            <div className="detail-item">
                                <span><strong>対象:</strong> 本気でスキルを伸ばしたい人、初期メンバーとして組織を作りたい人</span>
                            </div>
                            <div className="detail-item">
                                <span><strong>活動:</strong> プロジェクト開発、サークル運営</span>
                            </div>
                        </div>

                        <div className="member-benefits">
                            <h4>できること:</h4>
                            <ul>
                                <li><strong>チーム開発:</strong> コンテストやアプリリリースに向けた活動</li>
                                <li><strong>Discord専門チャンネルへのアクセス</strong></li>
                            </ul>
                        </div>

                        <div className="member-join">
                            <p><strong>参加方法:</strong> 運営にお申し出ください。</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Organization;
