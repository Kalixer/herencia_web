import React from "react";
import '@styles/Home.scss';
import logo from '@icons/logo.jpg';
import atarceder from '@pics/atardecer.jpg';
import zorro from '@pics/zorro.jpg';
import red_hair_girl from '@pics/red_hair_girl.jpg';
import caballo from '@pics/caballo.jpg';
import ardilla from '@pics/ardilla.jpeg';
import puppy_paw from '@pics/puppy_paw.jpg';

const Temp = () => {
    return (
        <div>
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
    <main>
        <div className="main-message">
            <h1>¿Amas el arte?<br/> Nosotros también</h1>
            <h2>Regala, decora... O aprende a hacer arte</h2>
        </div>
        <div className="portfolio">
            <h2>Conoce nuestros trabajos</h2>
            <div className="port-draws">

                <div className="section-box">
                    <p>Color</p>
                    <div className="subsection-box">
                        <figure className="port-box">
                            <img src={atarceder} alt=""/>
                        </figure>
                        <figure className="port-box">
                            <img src={zorro} alt=""/>
                        </figure>
                        <figure className="port-box">
                            <img src={red_hair_girl} alt=""/>
                        </figure>
                    </div>
                    <a href="#">Ver más &#8594;</a>
                </div>

                <div className="section-box">
                    <p>Grafito</p>
                    <div className="subsection-box">
                        <figure className="port-box">
                            <img src={caballo} alt=""/>
                        </figure>
                        <figure className="port-box">
                            <img src={ardilla} alt=""/>
                        </figure>
                        <figure className="port-box">
                            <img src={puppy_paw} alt=""/>
                        </figure>
                    </div>
                    <a href="#">Ver más &#8594;</a>
                </div>
            </div>
        </div>
        <div className="seccion-convencer">
            <div className="argument">
                <div>Por qué elegir arte</div>
                <div>
                    "El arte​ es entendido generalmente como cualquier actividad o producto realizado con una finalidad estética y también comunicativa, mediante la cual se expresan ideas, emociones y, en general, una visión del mundo, a través de diversos recursos, como los plásticos, lingüísticos, sonoros, corporales y mixtos.​ El arte es un componente de la cultura, reflejando en su concepción las bases económicas y sociales, y la transmisión de ideas y valores, inherentes a cualquier cultura humana a lo largo del espacio y el tiempo." -Wikipedia
                </div>
            </div>
        </div>
        <div className="selling">
            <div className="message">
                Entonces, <br/> 
                ¿Quieres regalar o decorar con arte? <br/>
                ¿Quieres aprender a hacer arte?
            </div>
            <div className="contacto">
                <div className="sub-contacto">
                    <div>
                        Ponte en contacto con nosotros 👉
                    </div>
                    <div>
                        <a href="https://l.instagram.com/?u=http%3A%2F%2Fwa.me%2F56966016968&amp;e=ATMZo8BzW0SBdDF9n8fslPcCt8EE6kvZzgiV7k1GWAocu-kV8qJ1TZr7UxNzE2edY1HPU1CeTM0aPupHeHsu3A&amp;s=1" rel="me nofollow noopener noreferrer" target="_blank"><div className="_aacl _aacp _aacw _aacz _aada _aade">+569 6601 6968</div></a>
                    </div>
                </div>
                <div>
                    Siguenos también en<> </>
                    <a href="https://www.instagram.com/herencia_familiar/">
                         Instagram
                    </a>
                </div>
            </div>
        </div>
        <footer></footer>
    </main>
        </div>
    )
}

export default Temp;