import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, ExternalLink, Zap } from 'lucide-react';
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
        description: '数学的背景からAIを深く理解し、最先端の論文を自ら実装できるレベルを目指します。',
        mission: '「金融×AI」「生成AI」「強化学習」など、興味のあるテーマごとにグループを作り、論文実装やコンペに挑みます。',
        skills: ['Python', 'PyTorch / TensorFlow', 'Kaggle', 'LLM / RAG', '統計学', '論文読解'],
        coreActivities: [
            { title: '金融AIチーム', desc: '株価や仮想通貨の予測モデルを構築し、実際の市場データで検証する。' },
            { title: 'LLM開発チーム', desc: '最新の論文（RAG, Agents等）を読み解き、サークル専用のチャットボットをゼロから実装する。' },
            { title: 'Kaggle部', desc: 'コンペ開催期間中にチームを結成し、夜通し議論しながら金メダルを目指す。' },
            { title: '松尾研講座 修了チャレンジ', desc: '東大松尾研の講座（GCI/DL）を、有志メンバーで集まって脱落者ゼロで完走する。' }
        ],
        schedule: '週1回の定例会 + プロジェクト活動',
        targetAudience: 'データサイエンティスト・MLエンジニア・研究者を目指す方'
    },
    dev: {
        title: 'Dev Course',
        subtitle: 'The Body: チーム開発によるプロダクトの社会実装',
        color: '#00f0ff',
        description: 'ユーザーに使われるレベルの品質を追求し、チームでプロダクトを作りリリースまで行います。',
        mission: '「このアプリがあったら便利だよね」というアイデアを出し合い、モダンな技術選定で開発・リリースまで行います。',
        skills: ['React / Next.js', 'TypeScript', 'Firebase', 'Git / GitHub', 'UI/UX', 'Flutter'],
        coreActivities: [
            { title: 'SaaS開発プロジェクト', desc: 'サークルの出席管理や会計を自動化するWebシステムを開発し、実際に運用する。' },
            { title: 'モダン技術研究会', desc: 'Next.jsの最新機能や、Rust、Go言語など、個人的に触りたい技術を教え合うLT会。' },
            { title: 'ハッカソン特攻隊', desc: '外部のハッカソンイベントに「OIFチーム」として出場し、賞金稼ぎに行く。' },
            { title: '個人開発の相互レビュー', desc: '自分が作っているポートフォリオを持ち寄り、コードの汚い部分を指摘し合う（レビュー会）。' }
        ],
        schedule: '週1回の定例会 + プロジェクト活動',
        targetAudience: 'Webエンジニア・アプリ開発者・プロダクト志向のエンジニアを目指す方'
    },
    biz: {
        title: 'Biz Course',
        subtitle: 'The Direction: 組織の経営と、事業のインキュベーション',
        color: '#ffaa00',
        description: '組織を動かす経営視点や、事業を作る感覚を養い、ビジネスリーダーとしての素養を身につけます。',
        mission: 'GDGoCという組織を「実験場」として使い、マーケティングやマネジメントの実践を行います。',
        skills: ['マーケティング', 'ファイナンス', 'プロジェクト管理', 'UI/UX', 'Figma', 'プレゼンテーション'],
        coreActivities: [
            { title: 'GDGoC経営会議', desc: '組織を拡大するための広報戦略や、予算獲得のための企業スポンサー営業を行う（実際に企業と商談する）。' },
            { title: 'テックイベント主催', desc: '他大学や企業を巻き込んだ、100人規模のLT大会やハッカソンをゼロから企画・運営する。' },
            { title: 'Start-up Studio', desc: 'AI/Devコースのメンバーが作ったアプリに対し、「どうマネタイズするか？」「競合優位性は？」を分析し、ビジネスコンテストに出場する。' },
            { title: 'UI/UXチーム', desc: '既存の大学ポータルサイトやアプリのUIを勝手にリデザインし、Figmaで理想のプロトタイプを作る。' }
        ],
        schedule: '週1回の定例会 + プロジェクト活動',
        targetAudience: 'PM・起業家・コンサルタント・ビジネス職を目指す方'
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
                    <ArrowLeft size={20} /> トップへ戻る
                </Link>
                <div className="container hero-content-premium">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="hero-text-wrapper"
                    >
                        <h1 className="course-hero-title-large" style={{ color: course.color }}>
                            {course.title}
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* Skills Section */}
            {course.skills && (
                <section className="section skills-section-premium">
                    <div className="container">
                        <motion.h2
                            className="section-title-premium"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <Zap size={32} style={{ display: 'inline', marginRight: '10px', verticalAlign: 'middle' }} />
                            習得できるスキル
                        </motion.h2>
                        <motion.div
                            className="skills-grid"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            {course.skills.map((skill, index) => (
                                <span
                                    key={index}
                                    className="skill-tag"
                                    style={{ borderColor: course.color, color: course.color }}
                                >
                                    {skill}
                                </span>
                            ))}
                        </motion.div>
                    </div>
                </section>
            )}

            {/* Training Program Description */}
            <section className="section training-desc-section">
                <div className="container">
                    <motion.div
                        className="training-desc-card glass-card-premium"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ '--accent-color': course.color }}
                    >
                        <h3>研修プログラムについて</h3>
                        <p>
                            GDGoCの学習イベント、Googleの講座を組み合わせたカリキュラムで段階的にスキルアップ。<br />
                            未経験からでも安心して学べる環境を整えています。
                        </p>
                    </motion.div>
                </div>
            </section>

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
                            活動例
                        </motion.h2>
                        <p className="section-desc-premium">
                            各活動のコミュニティはDiscord内のチャンネルで構築されています。<br />
                            興味のあるテーマに自由に参加できます。
                        </p>
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
                                <h4>活動頻度</h4>
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
                                <h4>参加する</h4>
                                <p>まずはGDGoC OMUのイベントへお越しください。</p>
                            </div>
                            <HashLink to="/#join" className="btn-course-join-premium" style={{ backgroundColor: course.color }}>
                                説明会に申し込む <ExternalLink size={18} />
                            </HashLink>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div >
    );
};

export default CoursePage;
