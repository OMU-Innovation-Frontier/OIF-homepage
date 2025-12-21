import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Users, Zap } from 'lucide-react';
import './Strengths.css';

const strengths = [
    {
        icon: <Compass size={80} strokeWidth={1.5} />,
        title: '視座は高く、世界へ',
        subtitle: 'Global Mindset',
        text: '世界中のスタートアップや巨大テック企業が使っている「最先端の技術（生成AI、モダンWeb開発）」をキャッチアップ。英語の情報や新しいトレンドにも貪欲に触れ、視野を世界へ広げます。'
    },
    {
        icon: <Users size={80} strokeWidth={1.5} />,
        title: '知識を共有する',
        subtitle: 'Knowledge Sharing',
        text: '学んだことはアウトプットし、仲間と共有する文化を大切にします。勉強会やLT（ライトニングトーク）を通じて、お互いの知識やノウハウを交換。教えることで自分の理解も深まり、教わることで新しい視点が生まれます。'
    },
    {
        icon: <Zap size={80} strokeWidth={1.5} />,
        title: '実践中心',
        subtitle: 'Real Experience',
        text: '手を動かして、作りながら学ぶ。チームを組んでアプリを作る、ビジネスコンテストに出る、ハッカソンで賞金を狙う。将来的には企業と連携し、「強いチーム」をみんなで作っていきます。'
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
                    transition={{ duration: 0.8 }}
                >
                    OIFの3つの特徴
                </motion.h2>

                <div className="strengths-grid">
                    {strengths.map((item, index) => (
                        <motion.div
                            key={index}
                            className="strength-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                        >
                            <div className="strength-icon-wrapper">
                                {item.icon}
                            </div>
                            <h3 className="strength-title">{item.title}</h3>
                            <span className="strength-subtitle">{item.subtitle}</span>
                            <p className="strength-text">{item.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Strengths;
