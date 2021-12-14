import React from 'react'
import './CartWidget.css'
import { useCartContext } from '../../context/CartContext';

function CartWidget() {
    const { totalQuantity } = useCartContext()
    return (
            <div>
                <img className="img_carrito" 
            src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-campus-recreation-university-nebraska-lincoln-30.png" 
            alt="Imagen Carrito"></img>
                <p>{totalQuantity()}</p>
                </div>
    )
}

export default CartWidget
