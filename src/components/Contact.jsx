// src/components/Contact.jsx
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { emailjsConfig } from '../config/emailjs';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    emailjs.sendForm(
      emailjsConfig.serviceId,
      emailjsConfig.templateId,
      form.current,
      emailjsConfig.publicKey
    )
    .then((result) => {
      console.log('Email envoyé avec succès:', result.text);
      setMessage('Message envoyé avec succès !');
      setIsLoading(false);
      form.current.reset(); // Réinitialise le formulaire
    })
    .catch((error) => {
      console.error('Erreur lors de l\'envoi:', error.text);
      setMessage('Erreur lors de l\'envoi du message. Veuillez réessayer.');
      setIsLoading(false);
    });
  };

  return (
    <section id="contact" className="contact">
      <h2>Contactez-moi</h2>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <label>
          Nom:
          <input type="text" name="user_name" required />
        </label>
        <label>
          Email:
          <input type="email" name="user_email" required />
        </label>
        <label>
          Message:
          <textarea name="message" rows="5" required></textarea>
        </label>
        <button type="submit" className="btn" disabled={isLoading}>
          {isLoading ? 'Envoi en cours...' : 'Envoyer'}
        </button>
      </form>
      {message && (
        <div className={`contact-message ${message.includes('succès') ? 'success' : 'error'}`}>
          {message}
        </div>
      )}
    </section>
  );
};

export default Contact;
