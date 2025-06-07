"use client";

import emailjs from "@emailjs/browser";
import { useState } from "react";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../translations/translations";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { language } = useLanguage();
  const t = translations[language];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send form using EmailJS
    emailjs
      .send((import.meta.env.VITE_SERVICE_ID), (import.meta.env.VITE_TEMPLATE_ID), formData, (import.meta.env.VITE_USER_ID))
      .then(
        () => {
          alert(t.contact.form.successMessage);
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          console.error("Erro ao enviar mensagem:", error);
          alert(t.contact.form.errorMessage);
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <h2>{t.contact.title}</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>{t.contact.subtitle}</h3>
          <p>
            {t.contact.description}
          </p>
          <div className="info-item">
            <div className="info-icon">📍</div>
            <div className="info-content">
              <h4>{t.contact.info.location}</h4>
              <p>{t.contact.info.locationValue}</p>
            </div>
          </div>
          <div className="info-item">
            <div className="info-icon">📧</div>
            <div className="info-content">
              <h4>{t.contact.info.email}</h4>
              <p>pedromoitinhoprado@gmail.com</p>
            </div>
          </div>
          <div className="info-item">
            <div className="info-icon">📱</div>
            <div className="info-content">
              <h4>{t.contact.info.phone}</h4>
              <p>(75) 99864-9199</p>
            </div>
          </div>
          <div className="social-links">
            <a href="https://github.com/pedromoitinho" className="social-link" target="_blank" rel="noopener noreferrer">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/pedrohmoitinho/" className="social-link" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder={t.contact.form.namePlaceholder}
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder={t.contact.form.emailPlaceholder}
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder={t.contact.form.subjectPlaceholder}
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder={t.contact.form.messagePlaceholder}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              {t.contact.form.submitButton}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
