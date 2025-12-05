import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    return (
        <section id="about" className="section about-section">
            <div className="container">
                <motion.div
                    className="about-content"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">OIFとは？</h2>
                    <div className="about-text">
                        <p>
                            OIF（OMU Innovation Frontier）は、大阪公立大学を拠点に、テクノロジーとビジネスの力でイノベーションを創出する学生コミュニティです。
                        </p>
                        <p>
                            AI、Web開発、データサイエンス、Web3といった最先端技術を学ぶだけでなく、それらを社会実装するためのビジネススキルも習得します。
                            「学び」で終わらせず、「創る」ことにこだわり、ハッカソンや産学連携プロジェクトを通じて、実際に動くプロダクトや事業案を生み出します。
                        </p>
                        <p>
                            学部・学年・経験を問わず、高い志を持つ仲間が集まり、互いに切磋琢磨しながら成長できる環境がここにはあります。
                            あなたの「やりたい」を形にし、大阪から世界へインパクトを与えましょう。
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
