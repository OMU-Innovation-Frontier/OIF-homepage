import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import './Message.css';

const Message = () => {
    return (
        <section className="section message-section">
            <div className="container">
                <motion.div
                    className="message-container"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="quote-icon">
                        <Quote size={48} />
                    </div>
                    <h2 className="message-title">代表メッセージ</h2>

                    <div className="message-body">
                        <h3 className="message-headline">
                            「イノベーションは、一部の天才だけのものじゃない。」
                        </h3>
                        <p>
                            AIやWeb3といった最先端技術は、遠い世界の出来事のように感じるかもしれません。
                            しかし、それらは今、私たちの日常を変えようとしています。
                        </p>
                        <p>
                            OIFは、「技術」と「情熱」が出会う場所です。
                            プログラミング未経験でも構いません。「何かを作りたい」「社会を変えたい」という想いがあれば、
                            ここは最高の遊び場であり、学び舎になります。
                        </p>
                        <p>
                            大阪から、世界を驚かせるようなプロダクトを一緒に作りませんか？
                            あなたの挑戦を、私たちは全力でサポートします。
                        </p>
                    </div>

                    <div className="message-author">
                        <div className="author-info">
                            <span className="author-name">山田 太郎</span>
                            <span className="author-role">OIF 代表 / 大阪公立大学 工学部 3年</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Message;
