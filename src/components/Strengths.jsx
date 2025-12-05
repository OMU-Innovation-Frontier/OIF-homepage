import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Users, Trophy, Rocket, ShieldCheck } from 'lucide-react';
import './Strengths.css';

const strengths = [
    {
        icon: <Zap size={32} />,
        title: '圧倒的な成長環境',
        text: '学生主体でありながら、東大・京大のトップサークルに匹敵するカリキュラムと開発環境を用意。'
    },
    {
        icon: <Users size={32} />,
        title: '強力なメンター陣',
        text: '実務経験のある先輩やOB/OGがメンターとして並走。技術的な壁もキャリアの悩みも相談可能。'
    },
    {
        icon: <Trophy size={32} />,
        title: '実力主義のプロジェクト',
        text: '学年に関係なく、成果を出せばリーダーに抜擢。ハッカソン優勝や起業を目指すチームも多数。'
    },
    {
        icon: <Rocket size={32} />,
        title: '大阪発のエコシステム',
        text: '関西のテック企業や自治体との連携プロジェクトも実施。大学の枠を超えた活動ができる。'
    },
    {
        icon: <ShieldCheck size={32} />,
        title: '心理的安全性',
        text: '「失敗を恐れない」文化。挑戦した結果の失敗は称賛される。初心者でも安心して質問できる空気感。'
    }
];

const Strengths = () => {
    return (
        <section id="strengths" className="section strengths-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    OIFの強み
                </motion.h2>

                <div className="strengths-grid">
                    {strengths.map((item, index) => (
                        <motion.div
                            key={index}
                            className="strength-card"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="strength-icon-wrapper">
                                {item.icon}
                            </div>
                            <h3 className="strength-title">{item.title}</h3>
                            <p className="strength-text">{item.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Strengths;
