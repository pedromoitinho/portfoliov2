"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

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
          alert("Mensagem enviada com sucesso!");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          console.error("Erro ao enviar mensagem:", error);
          alert("Ocorreu um erro. Tente novamente mais tarde.");
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <h2>Entre em Contato</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Vamos Discutir</h3>
          <p>
            Estou sempre aberto à novas oportunidades de projetos e negócios.
          </p>
          <div className="info-item">
            <div className="info-icon">📍</div>
            <div className="info-content">
              <h4>Localização</h4>
              <p>Brasil 🇧🇷</p>
            </div>
          </div>
          <div className="info-item">
            <div className="info-icon">📧</div>
            <div className="info-content">
              <h4>Email</h4>
              <p>pedromoitinhoprado@gmail.com</p>
            </div>
          </div>
          <div className="info-item">
            <div className="info-icon">📱</div>
            <div className="info-content">
              <h4>Telefone</h4>
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
                placeholder="Seu Nome"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Seu Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Assunto"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Sua Mensagem"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
