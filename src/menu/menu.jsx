import React from 'react'
import { Link } from 'react-router-dom';
import './menu.css'

const Menu = () => {
    return (
        <div className="menuBar">
            <div className="menuItems">
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/tjanster">Tjänster</Link>
                <Link className="link" to="/ayatana">Vad betyder Ayatana?</Link>
                <Link className="link" to="/om-mig">Om mig</Link>
                <Link className="link" to="/kontakt">Kontakt</Link>
            </div>
        </div>
    )
}

export default Menu;