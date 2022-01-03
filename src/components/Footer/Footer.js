import React from 'react'
import './Footer.css'
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
<div className="footer-dark">
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-3 item">
                        <h3>Productos</h3>
                        <ul>
                            <li><NavLink to="/category/bicicleta">Bicicletas</NavLink></li>
                            <li><NavLink to="/category/casco">Cascos</NavLink></li>
                            <li><NavLink to="/category/guantes">Guantes de Bicicleta</NavLink></li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-3 item">
                        <h3>Nuestros valores</h3>
                        <ul>
                            <li>Compromiso</li>
                            <li>Honestidad</li>
                            <li>Confianza</li>
                        </ul>
                    </div>
                    <div className="col-md-6 item text">
                        <h3>2Bike or not 2Bike</h3>
                        <p>Nuestro principal objetivo es que Ud. pueda seleccionar la bicicleta que mejor se adapte a sus necesidades y su entorno. Asimismo, proveemos de accesorios para bicicletas a fin de mejorar día a día su andar.</p>
                    </div>
                    <div className="col item social"><i className="icon ion-social-facebook"></i><i className="icon ion-social-twitter"></i><i className="icon ion-social-instagram"></i></div>
                </div>
                <p className="copyright">Juan Ignacio Padin © 2021</p>
            </div>
        </footer>
    </div>
    )
}

export default Footer
