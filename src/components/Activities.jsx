import React from 'react';
import { motion } from 'framer-motion';
import { Users, PartyPopper, Code, Rocket, Flag, Award, Sprout } from 'lucide-react';
import './Activities.css';

const roadmap = [
    {
        period: '4月',
        title: '新歓',
        icon: <Users size={28} />,
        desc: 'GDGoC新歓イベントで新入生を集客。OIFの活動内容と熱量を伝えます。',
        color: '#7CFC00'
    },
    {
        period: '6月',
        title: '友好祭',
        icon: <PartyPopper size={28} />,
        desc: '大学祭でのイベント出展。技術デモやワークショップを開催します。',
        color: '#FF69B4'
    },
    {
        period: '8-9月',
        title: '夏休みハッカソン',
        icon: <Code size={28} />,
        desc: '夏休み期間を活用した集中開発イベント。チームでプロダクトを作り上げます。',
        color: '#FFD700'
    },
    {
        period: '10月',
        title: 'Solution Challenge チーム結成',
        icon: <Rocket size={28} />,
        desc: 'Google世界大会に挑戦するAI/Dev/Biz混成チームを結成（任意参加）。',
        color: '#00BFFF'
    },
    {
        period: '11月',
        title: '白鷺祭',
        icon: <Flag size={28} />,
        desc: '大学祭でのイベント出展。1年間の成果を外部に発信します。',
        color: '#FF6347'
    },
    {
        period: '1月',
        title: 'Solution Challenge 提出 & 成果発表会',
        icon: <Award size={28} />,
        desc: 'Google主催の世界大会にアプリを提出。1年間の活動成果を発表します。',
        color: '#9370DB'
    },
    {
        period: '2-3月',
        title: '春休みハッカソン',
        icon: <Sprout size={28} />,
        desc: '春休み期間を活用した集中開発イベント。新年度に向けてスキルを磨きます。',
        color: '#00FA9A'
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
                    <h2 className="section-title">活動ロードマップ</h2>
                    <p className="section-desc">
                        OIF全体の基本的な活動スケジュール
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
                                    <p className="timeline-desc">{item.desc}</p>
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
