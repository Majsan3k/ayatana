import React from 'react';
import emailjs from 'emailjs-com';

import './contactForm.css'

const ContactForm = () => {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lj5200b', 'template_ztaayy8', e.target, 'user_Y6VHJEF9OLg64vSxsWdxm')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input placeholder="Namn" type="text" name="name" />
      <input placeholder="Email" type="email" name="email" />
      <textarea placeholder="Skriv ditt meddelande här" name="message" />
      <button className="send-btn" type="submit" value="Skicka">Skicka</button>
    </form>
  );
}

export default ContactForm;