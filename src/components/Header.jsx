import React from "react";
import '@styles/Header.scss';
import logo from '@icons/logo.jpg'; // It's a logo


const Header = () => {
    return (
        <nav>
        <figure className="logo">
            <img src={logo} alt="logo"/>
        </figure>
        <div className="navigation">
            <ul className="secciones-nav">
                <li>Inicio</li>
                <li>Sobre nosotros</li>
                <li>Dibujo</li>
                <li>Pintura</li>
                <li>Clases</li>
            </ul>
            <div className="contact">
                <p>Contáctanos</p>
            </div>
        </div>
    </nav>
    )
}

export default Header