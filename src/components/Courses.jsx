import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Database, Globe, Briefcase, Cpu, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import './Courses.css';

const courses = [
    {
        id: 'ai',
        title: 'AIコース',
        icon: <Brain size={40} />,
        color: '#ff0055',
        description: '機械学習・深層学習の基礎から実装までを学び、実社会で使えるAIモデルを構築します。',
        roadmap: [
            'Python基礎・数学（線形代数・微積）',
            '機械学習ライブラリ（Scikit-learn）',
            '深層学習（PyTorch/TensorFlow）',
            'Kaggleコンペティション参加',
            'AIプロダクト開発・論文実装'
        ],
        deliverables: '画像認識アプリ、チャットボット、需要予測モデル'
    },
    {
        id: 'ds',
        title: 'データサイエンスコース',
        icon: <Database size={40} />,
        color: '#00ffaa',
        description: 'データの収集・加工・分析・可視化を一気通貫で学び、ビジネスの意思決定を支援します。',
        roadmap: [
            '統計学基礎・SQL',
            'データ前処理（Pandas）',
            '可視化（Matplotlib/Tableau）',
            '探索的データ分析（EDA）',
            '実データを用いた分析プロジェクト'
        ],
        deliverables: '分析レポート、BIダッシュボード、改善提案書'
    },
    {
        id: 'web',
        title: 'Webアプリ開発コース',
        icon: <Globe size={40} />,
        color: '#00f0ff',
        description: 'モダンなWeb技術を駆使して、ユーザーに使われるWebサービスをゼロから開発します。',
        roadmap: [
            'HTML/CSS/JavaScript基礎',
            'React/Next.js入門',
            'バックエンド（Node.js/Go）',
            'データベース・API設計',
            'チーム開発（Git/GitHub）'
        ],
        deliverables: 'ポートフォリオサイト、SNSアプリ、業務効率化ツール'
    },
    {
        id: 'biz',
        title: 'ビジネスコース',
        icon: <Briefcase size={40} />,
        color: '#ffaa00',
        description: 'テクノロジーを社会実装するためのビジネスモデル構築、マーケティング、ピッチスキルを磨きます。',
        roadmap: [
            'ロジカルシンキング・市場調査',
            'ビジネスモデル図解',
            'マーケティング・ファイナンス基礎',
            '事業計画書作成',
            'ビジネスコンテスト・ピッチ'
        ],
        deliverables: '事業計画書、ピッチ資料、MVP検証結果'
    },
    {
        id: 'web3',
        title: 'Web3コース',
        icon: <Cpu size={40} />,
        color: '#aa00ff',
        description: 'ブロックチェーン技術の本質を理解し、次世代の分散型アプリケーション（DApps）を開発します。',
        roadmap: [
            'ブロックチェーンの仕組み理解',
            'スマートコントラクト（Solidity）',
            'フロントエンド連携（Ethers.js）',
            'NFT/DAOの企画・設計',
            'DAppsプロトタイプ開発'
        ],
        deliverables: '独自トークン、NFTマーケットプレイス、DAO投票システム'
    }
];

const CourseCard = ({ course, index }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div
            className={`course-card ${isExpanded ? 'expanded' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            layout
        >
            <div className="course-header" onClick={() => setIsExpanded(!isExpanded)}>
                <div className="course-icon" style={{ color: course.color }}>
                    {course.icon}
                </div>
                <div className="course-title-wrapper">
                    <h3 className="course-title">{course.title}</h3>
                    <p className="course-short-desc">{course.description}</p>
                </div>
                <div className="expand-icon">
                    {isExpanded ? <ChevronUp /> : <ChevronDown />}
                </div>
            </div>

            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        className="course-details"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                    >
                        <div className="detail-section">
                            <h4><CheckCircle size={16} /> Roadmap</h4>
                            <ul className="roadmap-list">
                                {course.roadmap.map((step, i) => (
                                    <li key={i}>{step}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="detail-section">
                            <h4><CheckCircle size={16} /> Deliverables</h4>
                            <p>{course.deliverables}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const Courses = () => {
    return (
        <section id="courses" className="section courses-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    学べるコース
                </motion.h2>

                <div className="courses-grid">
                    {courses.map((course, index) => (
                        <CourseCard key={course.id} course={course} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Courses;
