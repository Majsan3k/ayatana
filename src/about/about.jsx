import React from 'react'
import './about.css'
import Description from './description';

 const About = () => {
     return (
         <div className="about container">
            <img className="half-screen" src="/img/handpan.jpeg" />
            <Description />
         </div>
     )
 }

 export default About;