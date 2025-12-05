import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-background">
                <div className="hero-gradient"></div>
                <div className="hero-grid"></div>
            </div>

            <div className="container hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="hero-subtitle">未踏の領域へ、共に。</h2>
                    <h1 className="hero-title">
                        OMU Innovation <br />
                        <span className="text-primary">Frontier</span>
                    </h1>
                    <p className="hero-description">
                        大阪から、世界を変えるイノベーションを。<br />
                        AI・Web3・ビジネス・データサイエンス。<br />
                        最先端を学び、未来を実装する学生コミュニティ。
                    </p>

                    <div className="hero-buttons">
                        <a href="#join" className="btn btn-primary">
                            説明会に申し込む <ArrowRight size={18} />
                        </a>
                        <a href="#courses" className="btn btn-outline">
                            コースを見る
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
