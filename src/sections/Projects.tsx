import React from 'react';
import '../styles/Projects.css';

const Projects: React.FC = () => {
    return (
        <section id="projects" className="projects-section">
            <h2 className="section-title">Selected Projects</h2>
            <div className="projects-grid">
                <div className="project-card">
                    <div className="project-image">
                        <div className="placeholder-img">K8s Ops</div>
                    </div>
                    <div className="project-content">
                        <h3>Kubernetes Infrastructure & Observability</h3>
                        <p>Deployed large-scale GKE clusters & integrated Mimir, Loki, Tempo for unified observability.</p>
                        <div className="project-tags">
                            <span>Kubernetes</span>
                            <span>GKE</span>
                            <span>Observability</span>
                        </div>
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-image">
                        <div className="placeholder-img">CPaaS CI/CD</div>
                    </div>
                    <div className="project-content">
                        <h3>CI/CD Automation for CPaaS</h3>
                        <p>Automated builds, tests, and deployments for a multi-channel communications platform.</p>
                        <div className="project-tags">
                            <span>CI/CD</span>
                            <span>Automation</span>
                            <span>DevOps</span>
                        </div>
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-image">
                        <div className="placeholder-img">AIOps</div>
                    </div>
                    <div className="project-content">
                        <h3>AIOps & Intelligent Automation</h3>
                        <p>Implemented anomaly detection and automated incident workflows using ML-driven insights.</p>
                        <div className="project-tags">
                            <span>AIOps</span>
                            <span>Machine Learning</span>
                            <span>Automation</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
