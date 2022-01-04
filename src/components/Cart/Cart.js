import React from 'react'
import { useCartContext } from '../../context/CartContext';
import { Table, Button } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import './Cart.css'
const imageNotAvailable = require('../../assets/img/ImageNotAvailable.png')


const Cart = () => {
    const { item, removeItem, clear ,totalPrice, totalQuantity } = useCartContext()
        return (
        <div>
            { item.length === 0
            ? 
            <div>
                <h1>Su carrito está vacio</h1>
                <Link to="/" ><Button primary className="ui primary button">Seguir comprando</Button></Link>
            </div>
            :
            <div>
                <Table celled selectable>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Foto</Table.HeaderCell>
                            <Table.HeaderCell>Producto</Table.HeaderCell>
                            <Table.HeaderCell>Cantidad</Table.HeaderCell>
                            <Table.HeaderCell>Precio</Table.HeaderCell>
                            <Table.HeaderCell>Borrar</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {item.map(prod =>
                            <Table.Row>
                                <Table.Cell><img className="Image" alt={prod.item.thumbnail} src={(prod.item.thumbnail === "") ? imageNotAvailable : prod.item.thumbnail}/></Table.Cell>
                                <Table.Cell>{prod.item.title}</Table.Cell>
                                <Table.Cell>{prod.quantity}</Table.Cell>
                                <Table.Cell>U$D {Number(prod.item.price * prod.quantity).toLocaleString()}</Table.Cell>
                                <Table.Cell><Button onClick={() => removeItem(prod.item.id)}>Borrar Item</Button></Table.Cell>
                            </Table.Row>
                            )}
                    </Table.Body>
                </Table>
            
                <p className="h3"><strong>Ud. seleccionó {totalQuantity()} productos por un total de U$D {totalPrice()}</strong></p>
                <Button primary onClick={() => clear()}>Borrar todos los Productos</Button>
                <Link to='/'><Button primary>Continuar Comprando</Button></Link>
                <Link to='/form'><Button primary>Finalizar Compra</Button></Link>
            </div>


    }           

        </div>
    )
}

export default Cart
