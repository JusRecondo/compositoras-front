import React from "react";
import './navbar.css';
import { Link } from 'react-router-dom'; 

const Navbar = () => {
    return (
        <nav>
            <ul id="main-menu">
                <li className="menu-item">
                    <Link to="/">Home</Link>
                </li>
                <li className="menu-item">
                    <Link to="/compositoras">Compositoras</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;