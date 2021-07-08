import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import './menu.css'
import { Navigation } from "./HamburgerMenu";

const Menu = () => {

    const [isExpanded, setIsExpanded] = useState(false);

    function toggleMenu() {
        setIsExpanded(!isExpanded);
    }

    return (
        <div className="menuBar">
            <div className="menuItems">
                <Navigation>
                    <nav className="nav">
                        <i
                            className="fa fa-bars"
                            aria-hidden="true"
                            onClick={toggleMenu}
                        />
                        <ul className={`collapsed ${isExpanded ? "is-expanded" : ""}`}>
                            <NavLink activeClassName="active" onClick={toggleMenu} to="/">
                                <li>Home</li>
                            </NavLink>
                            <NavLink activeClassName="active" onClick={toggleMenu} to="/tjanster">
                                <li>Tjänster</li>
                            </NavLink>
                            <NavLink activeClassName="active" onClick={toggleMenu} to="/ayatana">
                                <li>Vad betyder Ayatana?</li>
                            </NavLink>
                            <NavLink activeClassName="active" onClick={toggleMenu} to="/om-mig">
                                <li>Om mig</li>
                            </NavLink>
                            <NavLink activeClassName="active" onClick={toggleMenu} to="/kontakt">
                                <li>Kontakt</li>
                            </NavLink>
                        </ul>
                    </nav>
                </Navigation>
            </div>
        </div>
    )
}

export default Menu;
