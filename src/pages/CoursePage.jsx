import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, ExternalLink } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';
import './CoursePage.css';
import heroBg1 from '../assets/hero_bg_1.jpg';
import heroBg2 from '../assets/hero_bg_2.jpg';
import heroBg3 from '../assets/hero_bg_3.jpg';

const courseData = {
    ai: {
        title: 'AI Course',
        subtitle: 'The Brain: 理論の習得と、論文の社会実装',
        color: '#ff0055',
        description: 'APIを叩くだけの体験（GDGoC層）を超え、数学的背景からAIを深く理解したいメンバーが集まります。',
        mission: '「金融×AI」「生成AI」「強化学習」など、興味のあるテーマごとにグループを作り、論文実装やコンペに挑みます。',
        trainingProgram: [
            { title: '基礎研修', desc: '未経験からでも安心して学べる基礎カリキュラム。Pythonや数学の基礎からスタートします。' },
            { title: '応用実践', desc: '実際のデータを扱った分析や、AIモデルの構築を通じて実践的なスキルを磨きます。' }
        ],
        coreActivities: [
            { title: '金融AIギルド', desc: '株価や仮想通貨の予測モデルを構築し、実際の市場データで検証する。' },
            { title: 'LLM開発チーム', desc: '最新の論文（RAG, Agents等）を読み解き、サークル専用のチャットボットをゼロから実装する。' },
            { title: 'Kaggle部', desc: 'コンペ開催期間中にチームを結成し、夜通し議論しながら金メダルを目指す。' },
            { title: '松尾研講座 修了チャレンジ', desc: '東大松尾研の講座（GCI/DL）を、有志メンバーで集まって脱落者ゼロで完走する。' }
        ],
        schedule: '週1回の定例会 + プロジェクト活動'
    },
    dev: {
        title: 'Dev Course',
        subtitle: 'The Body: チーム開発によるプロダクトの社会実装',
        color: '#00f0ff',
        description: 'チュートリアルをなぞる学習（GDGoC層）を超え、ユーザーに使われるレベルの品質を追求したいメンバーが集まります。',
        mission: '「このアプリがあったら便利だよね」というアイデアを出し合い、モダンな技術選定で開発・リリースまで行います。',
        trainingProgram: [
            { title: '基礎研修', desc: 'Web開発の基礎となるHTML/CSS/JavaScriptから、Gitなどのツール使いまでを習得します。' },
            { title: '応用実践', desc: 'Firebase や Next.js を用いたモダンなアプリケーション開発に挑戦します。' }
        ],
        coreActivities: [
            { title: 'SaaS開発プロジェクト', desc: 'サークルの出席管理や会計を自動化するWebシステムを開発し、実際に運用する。' },
            { title: 'モダン技術研究会', desc: 'Next.jsの最新機能や、Rust、Go言語など、個人的に触りたい技術を教え合うLT会。' },
            { title: 'ハッカソン特攻隊', desc: '外部のハッカソンイベントに「OIFチーム」として出場し、賞金稼ぎに行く。' },
            { title: '個人開発の相互レビュー', desc: '自分が作っているポートフォリオを持ち寄り、コードの汚い部分を指摘し合う（レビュー会）。' }
        ],
        schedule: '週1回の定例会 + プロジェクト活動'
    },
    biz: {
        title: 'Biz Course',
        subtitle: 'The Direction: 組織の経営と、事業のインキュベーション',
        color: '#ffaa00',
        description: '組織を動かす経営視点や、事業を作る感覚を養いたいメンバーが集まります。',
        mission: 'GDGoCという巨大な組織を「実験場」として使い、マーケティングやマネジメントの実践を行います。',
        trainingProgram: [
            { title: '基礎研修', desc: 'ビジネスの基礎知識や、論理的思考力、プレゼンテーションスキルを学びます。' },
            { title: '応用実践', desc: '実際のビジネス課題に対する解決策の立案や、事業計画の作成を行います。' }
        ],
        coreActivities: [
            { title: 'GDGoC経営会議', desc: '組織を拡大するための広報戦略や、予算獲得のための企業スポンサー営業を行う（実際に企業と商談する）。' },
            { title: 'テックイベント主催', desc: '他大学や企業を巻き込んだ、100人規模のLT大会やハッカソンをゼロから企画・運営する。' },
            { title: 'Start-up Studio', desc: 'AI/Devコースのメンバーが作ったアプリに対し、「どうマネタイズするか？」「競合優位性は？」を分析し、ビジネスコンテストに出場する。' },
            { title: 'UI/UXギルド', desc: '既存の大学ポータルサイトやアプリのUIを勝手にリデザインし、Figmaで理想のプロトタイプを作る。' }
        ],
        schedule: '週1回の定例会 + プロジェクト活動'
    }
};

const CoursePage = () => {
    const { courseId } = useParams();
    const course = courseData[courseId];

    if (!course) {
        return <div className="container section">Course not found.</div>;
    }

    return (
        <div className="course-page" style={{ '--accent-color': course.color }}>
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

            {/* Premium Hero Section */}
            <section className="course-hero-premium">
                <Link to="/" className="back-link-premium">
                    <ArrowLeft size={20} /> Back to OIF Top
                </Link>
                <div className="container hero-content-premium">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="hero-text-wrapper"
                    >
                        <span className="course-badge-premium">{course.title}</span>
                        <h1 className="course-hero-title-premium">
                            {course.subtitle.split(':')[0]}<br />
                            <span className="glow-text">{course.subtitle.split(':')[1]}</span>
                        </h1>
                        <p className="course-hero-desc-premium">{course.description}</p>
                        <p className="course-hero-mission">{course.mission}</p>
                    </motion.div>
                </div>
            </section>



            {/* Premium Training Program Section */}
            {course.trainingProgram && (
                <section className="section training-section-premium">
                    <div className="container">
                        <motion.h2
                            className="section-title-premium"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Training Program
                        </motion.h2>
                        <p className="section-desc-premium">
                            入会直後の研修生が受講するプログラムです。<br />
                            ※内容は年度やメンバーのスキルレベルに合わせて最適化されます。
                        </p>
                        <div className="core-activities-grid-premium">
                            {course.trainingProgram.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="core-activity-card-premium glass-card-premium"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.15 }}
                                    whileHover={{ scale: 1.02, translateY: -5 }}
                                    style={{ '--accent-color': course.color }}
                                >
                                    <div className="activity-icon-placeholder" style={{ backgroundColor: course.color, opacity: 0.7 }}></div>
                                    <h3 className="activity-title-premium">{item.title}</h3>
                                    <p className="activity-desc-premium">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Premium Core Activities Section */}
            {course.coreActivities && (
                <section className="section core-activities-section-premium">
                    <div className="container">
                        <motion.h2
                            className="section-title-premium"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Project Examples (活動例)
                        </motion.h2>
                        <div className="core-activities-grid-premium">
                            {course.coreActivities.map((activity, index) => (
                                <motion.div
                                    key={index}
                                    className="core-activity-card-premium glass-card-premium"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.15 }}
                                    whileHover={{ scale: 1.02, translateY: -5 }}
                                    style={{ '--accent-color': course.color }}
                                >
                                    <div className="activity-icon-placeholder" style={{ backgroundColor: course.color }}></div>
                                    <h3 className="activity-title-premium">{activity.title}</h3>
                                    <p className="activity-desc-premium">{activity.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Schedule & Join (Premium Style) */}
            <section className="section join-section-premium">
                <div className="container">
                    <div className="join-grid-premium">
                        <motion.div
                            className="schedule-card-premium glass-card-premium"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            style={{ '--accent-color': course.color }}
                        >
                            <Calendar size={32} color={course.color} />
                            <div>
                                <h4>Weekly Activity</h4>
                                <p className="schedule-time">{course.schedule}</p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="join-cta-premium glass-card-premium"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            style={{ '--accent-color': course.color }}
                        >
                            <div className="cta-content">
                                <h4>Start Your Journey</h4>
                                <p>まずはGDGoC OMUのイベントへお越しください。</p>
                            </div>
                            <HashLink to="/#join" className="btn-course-join-premium" style={{ backgroundColor: course.color }}>
                                説明会に申し込む <ExternalLink size={18} />
                            </HashLink>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CoursePage;
