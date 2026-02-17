import React from 'react';
import '../styles/Projects.css';

const Projects: React.FC = () => {
    return (
        <section id="projects" className="projects-section">
            <h2 className="section-title">Projects</h2>
            <div className="projects-grid">
                <div className="project-card">
                    <div className="project-image">
                        {/* Placeholder for project image */}
                        <div className="placeholder-img">Project 1</div>
                    </div>
                    <div className="project-content">
                        <h3>E-Commerce Platform</h3>
                        <p>A full-featured e-commerce platform built with React, Node.js, and MongoDB.</p>
                        <div className="project-tags">
                            <span>React</span>
                            <span>Node.js</span>
                            <span>MongoDB</span>
                        </div>
                        <div className="project-links">
                            <a href="#" target="_blank" rel="noreferrer">Live Demo</a>
                            <a href="#" target="_blank" rel="noreferrer">GitHub</a>
                        </div>
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-image">
                        <div className="placeholder-img">Project 2</div>
                    </div>
                    <div className="project-content">
                        <h3>Task Management App</h3>
                        <p>A collaborative task management tool with real-time updates using Socket.io.</p>
                        <div className="project-tags">
                            <span>TypeScript</span>
                            <span>Firebase</span>
                            <span>Tailwind</span>
                        </div>
                        <div className="project-links">
                            <a href="#" target="_blank" rel="noreferrer">Live Demo</a>
                            <a href="#" target="_blank" rel="noreferrer">GitHub</a>
                        </div>
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-image">
                        <div className="placeholder-img">Project 3</div>
                    </div>
                    <div className="project-content">
                        <h3>Portfolio Website</h3>
                        <p>The website you are currently viewing. Built with performance and aesthetics in mind.</p>
                        <div className="project-tags">
                            <span>Vite</span>
                            <span>React</span>
                            <span>CSS3</span>
                        </div>
                        <div className="project-links">
                            <a href="#">Live Demo</a>
                            <a href="#">GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
