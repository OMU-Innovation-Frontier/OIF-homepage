import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Instagram } from 'lucide-react';
import './JoinUs.css';

const steps = [
    { number: '01', title: 'GDGoC 参加', desc: 'まずはGDGoC OMUのイベント（新歓・勉強会）に参加し、Discordに入る。ここでコミュニティメンバーとなります。' },
    { number: '02', title: 'OIF エントリー', desc: '「もっと深くやりたい」「運営側に回りたい」と思ったら、OIFの研修（Bootcamp）にエントリー。' },
    { number: '03', title: 'Bootcamp', desc: 'Notionで配られる課題に取り組む。メンターがレビューし、成長をサポートします。' },
    { number: '04', title: '正規メンバー', desc: '研修プログラムを修了し、晴れてOIF正規メンバーとなります。' },
];

const JoinUs = () => {
    return (
        <section id="join" className="section join-section">
            <div className="container">
                <h2 className="section-title">Join Us</h2>
                <p className="join-intro">
                    入り口は「GDGoC」、目指す場所は「OIF Core」。<br />
                    あなたの挑戦を待っています。
                </p>

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
                    <a href="#" className="btn btn-primary btn-large">
                        説明会に申し込む <ArrowRight />
                    </a>
                    <p className="cta-note">※次回説明会の日程はSNSで告知します</p>
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
