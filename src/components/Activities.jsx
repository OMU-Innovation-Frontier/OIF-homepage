import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';
import './Activities.css';

const schedule = [
    { month: '4月', event: '新歓・オリエンテーション', desc: 'OIFのビジョン共有とチームビルディング' },
    { month: '5月', event: '春のブートキャンプ', desc: '各コース基礎スキルの集中習得' },
    { month: '6-7月', event: '前期プロジェクト', desc: '小規模チームでのアジャイル開発実践' },
    { month: '8月', event: 'サマーハッカソン', desc: '24時間でアイデアを形にする集中イベント' },
    { month: '9月', event: '中間発表・フィードバック', desc: 'メンター・外部講師からのレビュー' },
    { month: '10-11月', event: '後期プロジェクト（産学連携）', desc: '企業課題や社会課題への挑戦' },
    { month: '12月', event: 'Advent Calendar / LT大会', desc: '技術・知見のアウトプット祭り' },
    { month: '2月', event: '最終成果発表会 (Demo Day)', desc: '1年間の集大成をプレゼン' },
    { month: '3月', event: '次年度リーダー選出', desc: '組織の継承とアップデート' },
];

const weekly = [
    { day: '平日夜', title: 'コース別勉強会', desc: 'オンライン・オフラインでの技術キャッチアップ' },
    { day: '土曜日', title: '定例ミーティング', desc: '進捗共有と全体アナウンス' },
    { day: '日曜日', title: 'もくもく会 / 開発', desc: 'プロジェクト作業や自由な交流' },
];

const Activities = () => {
    return (
        <section id="activities" className="section activities-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    Activities
                </motion.h2>

                <div className="activities-content">
                    <motion.div
                        className="weekly-schedule"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="subsection-title"><Clock size={24} /> Weekly Routine</h3>
                        <div className="weekly-grid">
                            {weekly.map((item, index) => (
                                <div key={index} className="weekly-card">
                                    <div className="weekly-header">{item.day}</div>
                                    <div className="weekly-body">
                                        <h4>{item.title}</h4>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className="annual-schedule"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h3 className="subsection-title"><Calendar size={24} /> Annual Schedule</h3>
                        <div className="timeline">
                            {schedule.map((item, index) => (
                                <div key={index} className="timeline-item">
                                    <div className="timeline-marker"></div>
                                    <div className="timeline-content">
                                        <span className="timeline-date">{item.month}</span>
                                        <h4 className="timeline-title">{item.event}</h4>
                                        <p className="timeline-desc">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Activities;
