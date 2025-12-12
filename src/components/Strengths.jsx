import React from 'react';
import { motion } from 'framer-motion';
import { School, Users, Handshake } from 'lucide-react';
import './Strengths.css';

const strengths = [
    {
        icon: <School size={80} strokeWidth={1.5} />,
        title: '多領域を学べる',
        text: 'AI・開発・ビジネスなど様々な分野について学び、実践できる'
    },
    {
        icon: <Users size={80} strokeWidth={1.5} />,
        title: '仲間と共有する',
        text: '同じ意思を持つ仲間と出会い、興味を共有することができる。'
    },
    {
        icon: <Handshake size={80} strokeWidth={1.5} />,
        title: 'キャリアにつながる',
        text: '学んだ技術をそのまま実務へ。インターン、受託開発、起業など、リアルなキャリアにつながる導線を用意しています。'
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
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
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
