import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Rocket } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';
import heroBg1 from '../assets/hero_bg_1.jpg';
import heroBg2 from '../assets/hero_bg_2.jpg';
import heroBg3 from '../assets/hero_bg_3.jpg';
import './Hero.css';

const Hero = () => {
    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -80;
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
    };

    return (
        <section className="hero">
            <div className="hero-background">
                <div className="hero-images-container">
                    <img src={heroBg1} alt="" className="hero-bg-img" />
                    <img src={heroBg2} alt="" className="hero-bg-img" />
                    <img src={heroBg3} alt="" className="hero-bg-img" />
                </div>
                <div className="hero-gradient-1"></div>
                <div className="hero-gradient-2"></div>
                <div className="hero-grid"></div>
            </div>

            <div className="container hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                >
                    <div className="hero-badge">
                        <Rocket size={16} />
                        <span>GDGoC (Google Developer Groups on Campus) 設立準備中</span>
                    </div>
                    <h1 className="hero-title">
                        OMU Innovation <br />
                        <span className="text-primary glow-text">Frontier</span>
                    </h1>
                    <h2 className="hero-subtitle">
                        大阪公立大学 IT・イノベーションサークル
                    </h2>
                    <p className="hero-description">
                        <strong>勉強だけで、終わらせない。</strong><br />
                        ここは、技術を「武器」に変える場所。<br />
                        <span className="hero-concept">「作りたい」が見つかり、「仲間」が集まる。</span>
                    </p>

                    <div className="hero-buttons">
                        <HashLink to="/#join" className="btn btn-primary" scroll={scrollWithOffset}>
                            Discordに参加する <ArrowRight size={18} />
                        </HashLink>
                        <HashLink to="/#areas" className="btn btn-outline" scroll={scrollWithOffset}>
                            活動テーマを見る
                        </HashLink>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
