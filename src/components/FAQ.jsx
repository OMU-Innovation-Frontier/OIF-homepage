import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import './FAQ.css';

const faqs = [
    {
        question: 'プログラミング未経験でも参加できますか？',
        answer: 'はい、大歓迎です！OIFメンバーの約半数は未経験からスタートしています。メンター制度や基礎からの勉強会を用意しており、やる気さえあれば確実にスキルを習得できる環境です。'
    },
    {
        question: '活動頻度はどのくらいですか？',
        answer: '基本的には週1回の定例会と、コースごとの勉強会（週1回程度）があります。プロジェクト期間中はチームごとの活動が増えますが、学業やアルバイトとの両立も十分に可能です。'
    },
    {
        question: '会費はかかりますか？',
        answer: 'サーバー代や学習教材の共有などの運営費として、半期ごとに数千円程度の会費をいただいています。詳細は説明会にてご案内します。'
    },
    {
        question: '他大学の学生も参加できますか？',
        answer: '現在は大阪公立大学の学生を中心に活動していますが、熱意のある他大学生の参加も受け入れています。一度お問い合わせください。'
    },
    {
        question: '兼部・兼サークルは可能ですか？',
        answer: '可能です。ただし、プロジェクト開発期間（特に夏休みや春休み）はコミットが求められるため、スケジュール管理が重要になります。'
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
                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} {...faq} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
