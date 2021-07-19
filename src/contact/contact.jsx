import React from 'react'
import './contact.css'
import ContactForm from './contactForm'
import forest from '../img/forest.jpg'

 const Contact = () => {
     return (
         <div className="contact-container">
           <img className="image" src={forest} />
           <div className="container reversed">
              <ContactForm />
              <span className="half-screen container-item">
              {`Letar du efter ett mer holistiskt och hållbart förhållningssätt till din hälsa? Vill du njuta av en härlig behandling? Eller undrar du något helt annat? Tveka inte att höra av dig! 

              Fyll i formuläret eller skicka ett mail till direkt till mig på info@ayatana.se.`}
              </span>
           </div>
         </div>
     )
 }

 export default Contact;