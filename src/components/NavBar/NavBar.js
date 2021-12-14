import "./NavBar.css";
import { useCartContext } from '../../context/CartContext';


/* COMPONENTS */
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";

const NavBar = () =>{
    const { totalQuantity } = useCartContext()
    return (
            <nav className="Navigation">
                <ul className="List-ul">
                    <NavLink to="/" className="img_logo"><img src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Yellow_bike_logo.png" alt="Logo"></img></NavLink>
                    <NavLink activeclassname="active" className="Link" to="/category/Bicicletas">Bicicletas</NavLink>
                    <NavLink activeclassname="active" className="Link" to="/category/Cascos">Cascos</NavLink>
                    <NavLink activeclassname="active" className="Link" to="/category/Cuadros de Bicicleta">Cuadros de Bicicleta</NavLink>
                    {totalQuantity() !== 0 && <li><CartWidget /></li>}
                </ul>
            </nav>
    )
}

export default NavBar;
