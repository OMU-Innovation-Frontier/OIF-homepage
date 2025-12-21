import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Briefcase } from 'lucide-react';
import './Courses.css';

const areas = [
    {
        id: 'ai',
        title: 'AI 領域',
        jpTitle: 'AI・データ',
        icon: <Brain size={48} />,
        color: '#ff0055',
        tagline: '「AIを使って何ができるか？」',
        description: '最新の生成AIを触ってみたり、株価予測などのデータ分析に挑戦したりします。',
        activities: [
            'Chat GPT APIを使ったアプリ開発',
            'データ分析コンペ（Kaggle）への挑戦',
            '数学やAI理論の勉強会'
        ]
    },
    {
        id: 'dev',
        title: 'Dev 領域',
        jpTitle: 'アプリ開発',
        icon: <Code size={48} />,
        color: '#00f0ff',
        tagline: '「アイデアを形にする」',
        description: 'Webサイトやスマホアプリなど、実際に動くものを作ります。',
        activities: [
            'iPhone/Androidアプリ開発',
            '学内で使えるWebサービスの開発',
            '初心者でもアプリが作れるツール（NoCode）の研究'
        ]
    },
    {
        id: 'biz',
        title: 'Biz 領域',
        jpTitle: 'ビジネス・企画',
        icon: <Briefcase size={48} />,
        color: '#ffaa00',
        tagline: '「技術を社会に届ける」',
        description: 'アプリをどう広めるか考えたり、ビジネスコンテストの資料を作ったりします。',
        activities: [
            'ビジネスコンテストへの出場・プレゼン作成',
            'サークルの広報活動・イベント企画',
            '将来的な企業連携やスポンサー獲得の作戦会議'
        ]
    }
];

const Areas = () => {
    return (
        <section id="areas" className="section courses-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    活動テーマ（領域）
                </motion.h2>
                <p className="section-subtitle">
                    OIFに決まった「時間割」はありません。<br />
                    以下の3つのジャンルを中心に、興味のあるメンバー同士で自由にプロジェクトを立ち上げます。
                </p>

                <div className="courses-grid">
                    {areas.map((area, index) => (
                        <motion.div
                            key={area.id}
                            className="course-card glass-panel"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="course-card-header">
                                <div className="course-icon-wrapper" style={{ color: area.color, borderColor: area.color }}>
                                    {area.icon}
                                </div>
                                <div className="course-titles">
                                    <h3 className="course-en-title">{area.title}</h3>
                                    <span className="course-jp-title">{area.jpTitle}</span>
                                </div>
                            </div>

                            <p className="guild-tagline" style={{ color: area.color }}>{area.tagline}</p>
                            <p className="course-desc">{area.description}</p>

                            <div className="guild-activities">
                                <h4>活動イメージ:</h4>
                                <ul>
                                    {area.activities.map((activity, i) => (
                                        <li key={i}>{activity}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Areas;
