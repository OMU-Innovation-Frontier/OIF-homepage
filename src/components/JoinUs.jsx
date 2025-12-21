import React from 'react';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import './JoinUs.css';

const steps = [
    {
        number: '01',
        title: 'Discordに参加',
        desc: 'SNS (X/Instagram) のリンクからDiscordサーバーに参加。'
    },
    {
        number: '02',
        title: '自己紹介',
        desc: '「自己紹介チャンネル」で挨拶＆興味のある分野を教えてください。'
    },
    {
        number: '03',
        title: '交流する',
        desc: '興味のある話題にリアクションしたり、相談したりしてみましょう。'
    },
    {
        number: '04',
        title: '参加する',
        desc: '「一緒にやりたい！」と思ったら、プロジェクトに参加したり、運営に手を挙げてください。'
    },
];

const JoinUs = () => {
    return (
        <section id="join" className="section join-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    Join Us
                </motion.h2>
                <div className="join-intro">
                    <p className="intro-highlight">初期メンバー募集中！</p>
                    <p>
                        プログラミング未経験でも、「何か新しいことを始めたい」という熱意があれば大歓迎です。<br />
                        まずはDiscordという「広場」に来てください。
                    </p>
                </div>

                <h3 className="steps-heading">参加ステップ</h3>
                <div className="steps-container">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className="step-item"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                        >
                            <div className="step-number">{step.number}</div>
                            <div className="step-content">
                                <h3 className="step-title">{step.title}</h3>
                                <p className="step-desc">{step.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="join-cta">
                    <p className="cta-note">最新情報はSNSで発信中。DMでのお問い合わせもお気軽に。</p>
                    <div className="sns-links">
                        <a href="https://x.com/OIF_OMU" target="_blank" rel="noopener noreferrer" className="sns-btn sns-btn-x">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                            </svg> <span>@OIF_OMU</span>
                        </a>
                        <a href="https://instagram.com/omu.innovation.frontier" target="_blank" rel="noopener noreferrer" className="sns-btn sns-btn-instagram">
                            <Instagram size={20} /> <span>@omu.innovation.frontier</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JoinUs;
