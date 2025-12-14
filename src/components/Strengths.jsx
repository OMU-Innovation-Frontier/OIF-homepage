import React from 'react';
import { motion } from 'framer-motion';
import { Globe, GraduationCap, Briefcase } from 'lucide-react';
import './Strengths.css';

const strengths = [
    {
        icon: <Globe size={80} strokeWidth={1.5} />,
        title: '世界標準の技術',
        subtitle: 'Global Standard',
        text: 'GDGoCの活動を通じ、Googleの最新技術（Gemini, Firebase, Cloud）を実践レベルで習得。Google主催の世界大会「Solution Challenge」には、本気のチームで挑む環境があります。'
    },
    {
        icon: <GraduationCap size={80} strokeWidth={1.5} />,
        title: '領域横断の学び',
        subtitle: 'Multi-disciplinary',
        text: 'AI・開発・ビジネス。一点突破ではなく、これらを掛け合わせることで市場価値の高い人材を目指します。文系・理系を問わず、多様なバックグラウンドを持つメンバーが在籍。'
    },
    {
        icon: <Briefcase size={80} strokeWidth={1.5} />,
        title: 'キャリアへの導線',
        subtitle: 'Career Pipeline',
        text: '学んだ技術をサークル内で終わらせません。実力がつけば、企業からの受託開発や、テックベンチャーへのインターンなど、リアルなキャリアにつながるチャンスがあります。'
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
                    OIFの3つの強み
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
