import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Brain, Globe, Briefcase, ArrowRight } from 'lucide-react';
import './Courses.css';

const courses = [
    {
        id: 'ai',
        title: 'AI Course',
        jpTitle: '理論の習得と、論文の社会実装',
        icon: <Brain size={48} />,
        color: '#ff0055',
        description: '「金融×AI」「生成AI」「強化学習」など、興味のあるテーマごとにコミュニティが点在しています。'
    },
    {
        id: 'dev',
        title: 'Dev Course',
        jpTitle: 'チーム開発によるプロダクトの社会実装',
        icon: <Globe size={48} />,
        color: '#00f0ff',
        description: '「モバイル」「Web」「インフラ」など、興味のあるテーマごとにコミュニティが点在しています。'
    },
    {
        id: 'biz',
        title: 'Biz Course',
        jpTitle: '組織の経営と、事業のインキュベーション',
        icon: <Briefcase size={48} />,
        color: '#ffaa00',
        description: '組織を動かす経営視点や、事業を作る感覚を養いたいメンバーが集まります。'
    }
];

const Courses = () => {
    return (
        <section id="courses" className="section courses-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    3つの専門コース
                </motion.h2>
                <p className="section-subtitle">
                    正規メンバーは以下の3コースに分かれ、専門性を磨きます。
                </p>

                <div className="courses-grid">
                    {courses.map((course, index) => (
                        <motion.div
                            key={course.id}
                            className="course-card glass-panel"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="course-card-header">
                                <div className="course-icon-wrapper" style={{ color: course.color, borderColor: course.color }}>
                                    {course.icon}
                                </div>
                                <div className="course-titles">
                                    <h3 className="course-en-title">{course.title}</h3>
                                    <span className="course-jp-title">{course.jpTitle}</span>
                                </div>
                            </div>

                            <p className="course-desc">{course.description}</p>


                            <Link to={`/course/${course.id}`} className="course-link-btn" style={{ '--hover-color': course.color }}>
                                View Details <ArrowRight size={18} />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Courses;
