import { React, useState } from 'react';
import emailjs from 'emailjs-com';

import './contactForm.css'

const ContactForm = () => {

  const [emailStatus, setEmailStatus] = useState('');
  const [sendingEmail, setSendingEmail] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSendingEmail(true);

    setEmailStatus("Ditt mail skickas nu med ljusets hastighet")

    emailjs.sendForm('service_lj5200b', 'template_ztaayy8', e.target, 'user_Y6VHJEF9OLg64vSxsWdxm')
      .then((result) => {
        e.target.reset();
        setEmailStatus("Tack för ditt mail! Jag önskar dig en underbar dag!")
        console.log(result.text);
      }, (error) => {
        setEmailStatus("Någonting gick fel, försök skicka mailet igen")
        console.log(error.text);
      })
      .then(() => setSendingEmail(false));
  }

  return (
    <div className="email-container">
      <form className="contact-form" onSubmit={sendEmail}>
        <input placeholder="Namn" type="text" name="name" required
          onInvalid={(e) => e.target.setCustomValidity("Fyll i ditt namn")}
          onInput={(e) => e.target.setCustomValidity("")}
        />
        <input placeholder="Email" type="text" name="email" required
          onInvalid={(e) => e.target.setCustomValidity("Fyll i din email")}
          onInput={(e) => e.target.setCustomValidity("")}
        />
        <textarea placeholder="Skriv ditt meddelande här" name="message" required
          onInvalid={(e) => e.target.setCustomValidity("Glöm inte att skriva ett meddelande")}
          onInput={(e) => e.target.setCustomValidity("")}
        />
        <button className="send-btn" type="submit" value="Skicka" disabled={sendingEmail}>
          Skicka {sendingEmail && <i className="fa fa-refresh fa-spin"></i>}

        </button>
      </form>
      <span>{emailStatus}</span>
    </div>
  );
}

export default ContactForm;