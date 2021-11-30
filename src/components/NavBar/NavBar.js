import "./NavBar.css";

/* COMPONENTS */
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () =>{
    return (
        <div>
            <nav>
                <ul>
                    <h1>2Bike or not 2Bike</h1>
                    <li>Sobre Nosotros</li>
                    <li>Productos</li>
                    <li>Servicios</li>
                    <li>Contacto</li>
                    <li><CartWidget /></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;
