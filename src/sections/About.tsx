import React from 'react';
import '../styles/About.css';

const About: React.FC = () => {
    return (
        <section id="about" className="about-section">
            <h2 className="section-title">About Me</h2>
            <div className="about-content">
                <div className="about-text">
                    <p>
                        I am a Site Reliability Engineer with 2.5 years of hands-on experience in designing, automating,
                        and operating large-scale cloud-native systems. My expertise lies in Kubernetes, Terraform,
                        CI/CD, observability (Prometheus/Grafana/Loki/Tempo), and multi-cloud infrastructure (GCP, AWS, Azure).
                    </p>
                    <p>
                        I have a proven track record in infrastructure automation, reducing management costs by ~30%,
                        and implementing DevSecOps practices to improve reliability and security.
                    </p>
                </div>
                <div className="skills-grid">
                    <div className="skill-item">Kubernetes (GKE)</div>
                    <div className="skill-item">Terraform</div>
                    <div className="skill-item">GCP/AWS/Azure</div>
                    <div className="skill-item">CI/CD (Azure DevOps)</div>
                    <div className="skill-item">Prometheus/Grafana</div>
                    <div className="skill-item">Python/Golang</div>
                    <div className="skill-item">Docker</div>
                    <div className="skill-item">Ansible</div>
                </div>
            </div>
        </section>
    );
};

export default About;
