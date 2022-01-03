import React from 'react'
import './CartWidget.css'
import { useCartContext } from '../../context/CartContext';
import { Icon } from 'semantic-ui-react'

function CartWidget() {
    const { totalQuantity } = useCartContext()
    return (
            <div>
                <Icon name='cart' size='big' color="black" className="cartIcon"/>
                <p className="totalQuantity">{totalQuantity()}</p>
                </div>
    )
}

export default CartWidget
