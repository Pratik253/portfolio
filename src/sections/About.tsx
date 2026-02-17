import React from 'react';
import '../styles/About.css';

const About: React.FC = () => {
    return (
        <section id="about" className="about-section">
            <h2 className="section-title">About Me</h2>
            <div className="about-content">
                <div className="about-text">
                    <p>
                        I'm a passionate developer with a knack for creating immersive web experiences.
                        With a strong foundation in frontend technologies and a keen eye for design,
                        I build applications that not only function flawlessly but also look stunning.
                    </p>
                    <p>
                        My journey started with simple HTML pages and has evolved into building
                        complex React applications. I'm always eager to learn new tools and frameworks
                        to stay ahead in the fast-paced tech world.
                    </p>
                </div>
                <div className="skills-grid">
                    <div className="skill-item">React</div>
                    <div className="skill-item">TypeScript</div>
                    <div className="skill-item">CSS3/SASS</div>
                    <div className="skill-item">Node.js</div>
                    <div className="skill-item">Git</div>
                    <div className="skill-item">UI/UX Design</div>
                </div>
            </div>
        </section>
    );
};

export default About;
