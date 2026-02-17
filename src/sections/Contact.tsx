import React from 'react';
import '../styles/Contact.css';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="contact-section">
            <h2 className="section-title">Get In Touch</h2>
            <div className="contact-container">
                <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" placeholder="Your Name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Your Email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows={5} placeholder="Your Message" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
                <div className="contact-info">
                    <h3>Contact Information</h3>
                    <p>Open to opportunities in SRE, DevOps, and Cloud Infrastructure.</p>
                    <div className="info-item">
                        <span>Email:</span> <a href="mailto:pratik.janagle16@gmail.com">pratik.janagle16@gmail.com</a>
                    </div>
                    <div className="info-item">
                        <span>Phone:</span> +91 7666763212
                    </div>
                    <div className="info-item">
                        <span>LinkedIn:</span> <a href="https://www.linkedin.com/in/pratik-jangale/" target="_blank" rel="noopener noreferrer">pratik-jangale</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
