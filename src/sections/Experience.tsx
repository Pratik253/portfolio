import React from 'react';
import '../styles/Experience.css';

const Experience: React.FC = () => {
    return (
        <section id="experience" className="experience-section">
            <h2 className="section-title">Experience</h2>
            <div className="timeline">
                <div className="timeline-item">
                    <div className="timeline-date">Oct 2023 - Present</div>
                    <div className="timeline-content">
                        <h3>Site Reliability Engineer</h3>
                        <h4>Jio Platforms Limited</h4>
                        <p>
                            Designed and implemented observability solutions using Prometheus, Grafana, Loki, Tempo, and Elasticsearch across 100+ projects.
                            Automated infrastructure provisioning with Terraform and Ansible, reducing management costs by ~30%.
                            Built and maintained CI/CD pipelines using Azure DevOps and Cloud Build with security integrations.
                        </p>
                    </div>
                </div>
                {/* Add Education as an experience item or separate section? Resume lists it separately.
                    For now, I'll add it here to keep the flow or maybe just keep it as professional experience.
                    Let's add Education as the last item to be comprehensive.
                */}
                <div className="timeline-item">
                    <div className="timeline-date">Aug 2019 - Jun 2023</div>
                    <div className="timeline-content">
                        <h3>B.E., Computer Science</h3>
                        <h4>Savitribai Phule Pune University</h4>
                        <p>GPA: 8.41/10. Focused on Computer Science fundamentals.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
