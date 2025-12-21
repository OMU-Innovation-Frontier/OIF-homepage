import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import './FAQ.css';

const faqs = [
    {
        question: 'プログラミング未経験でも参加できますか？',
        answer: 'もちろんです。OIFはこれから一緒に学んでいく仲間を求めています。Discordで質問すれば、先輩や仲間が教えてくれます。まずは「やってみたい」という気持ちがあればOKです。'
    },
    {
        question: '文系学部でも大丈夫ですか？',
        answer: '大歓迎です。むしろ求めています。技術は一緒に学べますが、あなたの学部ならではの視点や知識は、面白いプロダクトを作るための貴重な材料になります。'
    },
    {
        question: '活動頻度はどのくらいですか？',
        answer: 'コミュニティメンバーは完全に自由参加です。イベントや勉強会に興味があるときだけ参加してください。コアメンバーは週1回程度のミーティングがありますが、テスト期間などは柔軟に調整できます。'
    },
    {
        question: '他のサークルと掛け持ちできますか？',
        answer: 'できます。多くのメンバーが他のサークルや部活と両立しています。自分のペースで参加してください。'
    },
    {
        question: '費用はかかりますか？',
        answer: '費用は一切かかりません。'
    }
];

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`faq-item ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
            <div className="faq-question">
                <span>{question}</span>
                {isOpen ? <Minus size={20} /> : <Plus size={20} />}
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="faq-answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="faq-answer-content">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ = () => {
    return (
        <section className="section faq-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    よくある質問
                </motion.h2>
                <motion.div
                    className="faq-list"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.2
                            }
                        }
                    }}
                >
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                            }}
                        >
                            <FAQItem {...faq} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default FAQ;
