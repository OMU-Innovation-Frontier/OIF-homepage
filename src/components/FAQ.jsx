import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import './FAQ.css';

const faqs = [
    {
        question: 'プログラミング未経験でも「正規メンバー」になれますか？',
        answer: 'なれます。OIFのBootcampは未経験者をプロレベルに引き上げるために設計されています。Googleのわかりやすい教材と先輩のサポートがあれば、文系未経験からでもアプリが作れるようになります。'
    },
    {
        question: 'GDGoCとOIFの違いは何ですか？',
        answer: '対外的には「GDGoC OMU」として活動し、Googleの支援を受けますが、その運営母体としてより高度な技術・起業を目指すチームが「OIF」です。'
    },
    {
        question: 'Googleの技術しか学べませんか？',
        answer: 'いいえ。Web開発の標準であるNext.jsや、AIの基礎となるPython/数学など、「エンジニアとして市場価値の高い技術」はGoogle製品以外でも積極的に取り入れます。'
    },
    {
        question: '活動頻度はどのくらいですか？',
        answer: 'コミュニティメンバーは自由参加です。正規メンバーは週1回の定例会＋プロジェクト活動があります。テスト期間などは柔軟に休みが取れます。'
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
                <h2 className="section-title">FAQ</h2>
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
                                staggerChildren: 0.3
                            }
                        }
                    }}
                >
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
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
