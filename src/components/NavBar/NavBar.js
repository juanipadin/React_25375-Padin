import "./NavBar.css";
import { useCartContext } from '../../context/CartContext';


/* COMPONENTS */
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";

const NavBar = () =>{
    const { totalQuantity } = useCartContext()
    return (
            <nav className="navbar navbar-dark bg-primary">
                <ul className="List-ul">
                    <NavLink to="/" className="img_logo"><img src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Yellow_bike_logo.png" alt="Logo"></img></NavLink>
                    <NavLink className="navbar-brand" to="/">Inicio</NavLink>
                    <NavLink className="nav-item" to="/category/bicicleta">Bicicletas</NavLink>
                    <NavLink className="nav-item" to="/category/casco">Cascos</NavLink>
                    <NavLink className="nav-item" to="/category/guantes">Guantes de Bicicleta</NavLink>
                    {totalQuantity() !== 0 && <NavLink  to="/cart"><li><CartWidget /></li></NavLink>}
                </ul>
            </nav>
    )
}

export default NavBar;
