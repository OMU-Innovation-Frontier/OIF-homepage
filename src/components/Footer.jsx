import React from 'react';
import { Twitter, Instagram, Github, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h2 className="footer-logo">OIF.</h2>
                        <p className="footer-desc">
                            大阪公立大学発<br />
                            イノベーション創出コミュニティ
                        </p>
                    </div>

                    <div className="footer-links">
                        <h3>Links</h3>
                        <ul>
                            <li><a href="#about">About</a></li>
                            <li><a href="#courses">Courses</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#join">Join Us</a></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h3>Contact</h3>
                        <div className="social-icons">
                            <a href="#" className="social-icon"><Twitter size={20} /></a>
                            <a href="#" className="social-icon"><Instagram size={20} /></a>
                            <a href="#" className="social-icon"><Github size={20} /></a>
                        </div>
                        <a href="#" className="contact-link">
                            <Mail size={16} /> お問い合わせフォーム
                        </a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} OMU Innovation Frontier. All rights reserved.</p>
                    <p className="university-name">大阪公立大学 (Osaka Metropolitan University)</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
