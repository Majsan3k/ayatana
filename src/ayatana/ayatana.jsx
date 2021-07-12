import React from 'react'
import './ayatana.css'

 const Ayatana = () => {
     return (
         <div className="ayatana-container">
             <img className="ayatana-img"/>
             <div className="ayatana-header">Ayatana</div>

             <div className="ayatana-desc">
                 {`Ayatana har sitt ursprung i den buddhistiska filosofin. Det finns ingen direkt översättning till varken svenska eller engelska men ordet kan beskrivas som sinnessfär. Inom buddhismen brukar det sägas att det finns 12 Ayatanas, vilka är grunden till vårt medvetande. Dessa 12 innefattar både de sinnen vi besitter, interna sinnesbaser, och de objekt vi kan uppleva med våra sinnen, externa sinnesbaser. Tillsammans skapas sex par av interna-externa sinnesbaser:
                 `}
                 <ul className="ayatana-list">
                    <li>ögat och objekt vi ser​ </li>
                    <li>örat och ljud</li>
                    <li>näsan och lukter</li>
                    <li>tungan och smaker</li>
                    <li>kroppen och beröring</li>
                    <li>själen och mentala objekt som påverkas oss</li>
                 </ul>
             </div>
         </div>
     )
 }

 export default Ayatana;