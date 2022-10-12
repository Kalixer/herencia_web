import React from "react";

const Header = () => {
    return (
        <nav>
        <figure className="logo">
            <img src="../../assets/pics/logo.jpg" alt=""/>
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