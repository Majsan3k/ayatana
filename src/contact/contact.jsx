import React from 'react'
import './contact.css'
import ContactForm from './contactForm'

 const Contact = () => {
     return (
         <div className="contact-container">
           <img className="image" src="/img/forest.jpg" />
           <div className="container reversed">
              <ContactForm />
              <span className="half-screen container-item">
              {`Letar du efter ett mer holistiskt och hållbart förhållningssätt till din hälsa? Vill du njuta av en härlig behandling? Eller undrar du något helt annat? Tveka inte att höra av dig! 

              Fyll i formuläret här bredvid eller skicka ett mail till maja.lund@live.se.`}
              </span>
           </div>
         </div>
     )
 }

 export default Contact;