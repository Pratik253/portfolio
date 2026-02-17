import React from 'react';
import '../styles/Experience.css';

const Experience: React.FC = () => {
    return (
        <section id="experience" className="experience-section">
            <h2 className="section-title">Experience</h2>
            <div className="timeline">
                <div className="timeline-item">
                    <div className="timeline-date">2023 - Present</div>
                    <div className="timeline-content">
                        <h3>Senior Frontend Engineer</h3>
                        <h4>Tech Corp</h4>
                        <p>Leading the frontend team in building scalable web applications using React and TypeScript. Improved performance by 40%.</p>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-date">2021 - 2023</div>
                    <div className="timeline-content">
                        <h3>Frontend Developer</h3>
                        <h4>Web Solutions Inc.</h4>
                        <p>Developed responsive websites for various clients. Collaborated with designers to implement pixel-perfect user interfaces.</p>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-date">2020 - 2021</div>
                    <div className="timeline-content">
                        <h3>Junior Developer</h3>
                        <h4>Startuply</h4>
                        <p>Assisted in the development of the MVP. Learned modern frontend frameworks and agile methodologies.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
