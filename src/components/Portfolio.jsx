import React from "react";
import '@styles/Portfolio.scss'

// Colored works
import atardecer from '@pics/atardecer.jpg';
import zorro from '@pics/zorro.jpg';
import red_hair_girl from '@pics/red_hair_girl.jpg';
import ferrari from '@pics/ferrari.jpg'

// Graphite
import caballo from '@pics/caballo.jpg';
import ardilla from '@pics/ardilla.jpeg';
import puppy_paw from '@pics/puppy_paw.jpg';
import auto_antiguo from '@pics/auto_antiguo.jpg';

const trabajos_color = [
    <figure className="port-box">
        <img src={zorro} alt=""/>
    </figure>,
    <figure className="port-box">
        <img src={red_hair_girl} alt=""/>
    </figure>,
    <figure className="port-box">
        <img src={atardecer} alt=""/>
    </figure>,
    <figure className="port-box">
        <img src={ferrari} alt=""/>
    </figure>,
]
const trabajos_grafito = [
    <figure className="port-box">
        <img src={ardilla} alt=""/>
    </figure>,
    <figure className="port-box">
        <img src={puppy_paw} alt=""/>
    </figure>,
    <figure className="port-box">
        <img src={caballo} alt=""/>
    </figure>,
    <figure className="port-box">
        <img src={auto_antiguo} alt=""/>
    </figure>,
]

const Portfolio = () => {
    return (
        <div className="portfolio">
            <div className="port-draws">
            <h2>Conoce nuestros trabajos</h2>

                <div className="section-box">
                    <p>Color</p>
                    <div className="subsection-box">
                        {trabajos_color[0]}
                        {trabajos_color[1]}
                        {trabajos_color[2]}
                        {trabajos_color[3]}
                    </div>
                    <a href="#">Ver más &#8594;</a>
                </div>

                <div className="section-box">
                    <p>Grafito</p>
                    <div className="subsection-box">
                        {trabajos_grafito[0]}
                        {trabajos_grafito[1]}
                        {trabajos_grafito[2]}
                        {trabajos_grafito[3]}
                    </div>
                    <a href="#">Ver más &#8594;</a>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;