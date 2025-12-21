import React from 'react';
import { motion } from 'framer-motion';
import { Sprout, Sun, Leaf, Snowflake } from 'lucide-react';
import './Activities.css';

const roadmap = [
    {
        period: '春 (4-6月)',
        title: 'メンバー募集期間',
        icon: <Sprout size={28} />,
        items: [
            '新入生歓迎会（体験会）',
            'Discordでの仲間探し',
            'チーム結成'
        ],
        color: '#7CFC00'
    },
    {
        period: '夏 (7-9月)',
        title: 'GDGoC始動？',
        icon: <Sun size={28} />,
        items: [
            'Googleコミュニティ(GDGoC)としての活動開始を目指す',
            '夏休みを利用した集中開発（ハッカソン）'
        ],
        color: '#FFD700'
    },
    {
        period: '秋 (10-12月)',
        title: 'チャレンジ期間',
        icon: <Leaf size={28} />,
        items: [
            'ビジネスコンテストや学外イベントへの参加',
            '学園祭での成果発表'
        ],
        color: '#FF6347'
    },
    {
        period: '冬 (1-3月)',
        title: '成果発表',
        icon: <Snowflake size={28} />,
        items: [
            '1年間の活動を振り返る発表会',
            '次年度に向けた準備'
        ],
        color: '#00BFFF'
    }
];

const Activities = () => {
    return (
        <section id="activities" className="section activities-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="roadmap-header"
                >
                    <h2 className="section-title">年間スケジュール（予定）</h2>
                    <p className="section-desc">
                        1年目は、みんなで組織を作り上げていくフェーズです。
                    </p>
                </motion.div>

                <div className="timeline-container">
                    <div className="timeline-line"></div>
                    {roadmap.map((item, index) => (
                        <motion.div
                            key={index}
                            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <div className="timeline-dot" style={{ backgroundColor: item.color, boxShadow: `0 0 15px ${item.color}` }}></div>
                            <div className="timeline-card">
                                <div className="timeline-icon" style={{ color: item.color }}>
                                    {item.icon}
                                </div>
                                <div className="timeline-content">
                                    <span className="timeline-period" style={{ color: item.color }}>{item.period}</span>
                                    <h3 className="timeline-title">{item.title}</h3>
                                    <ul className="timeline-items">
                                        {item.items.map((listItem, i) => (
                                            <li key={i}>{listItem}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Activities;
