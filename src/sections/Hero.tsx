import React from 'react';
import '../styles/Hero.css';

const Hero: React.FC = () => {
    return (
        <section id="hero" className="hero-section">
            <div className="hero-content">
                <span className="hero-greeting">Hello, I'm</span>
                <h1 className="hero-title">Kaustubh Wagh</h1>
                <p className="hero-subtitle">Frontend Developer & UI/UX Enthusiast</p>
                <div className="hero-actions">
                    <a href="#projects" className="btn btn-primary">View Projects</a>
                    <a href="#contact" className="btn btn-outline">Contact Me</a>
                </div>
            </div>
            <div className="hero-background">
                <div className="gradient-sphere sphere-1"></div>
                <div className="gradient-sphere sphere-2"></div>
            </div>
        </section>
    );
};

export default Hero;
