import React from 'react'
import { useCartContext } from '../../context/CartContext';
import { Table, Button } from 'semantic-ui-react'
import { Link } from "react-router-dom";
const imageNotAvailable = require('../../assets/img/ImageNotAvailable.png')

const Cart = () => {
    const { item, removeItem, clear ,totalPrice } = useCartContext()
        return (
        <div>
            { item.length === 0
            ? 
            <div>
                <h1>Su carrito está vacio</h1>
                <Link to="/" ><Button primary className="ui primary button">Seguir comprando</Button></Link>
            </div>
            :
            <Table singleLine>
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
                    <Table.Row>
                        <Table.Cell>{item.map(prod => <p><img alt={prod.item.thumbnail} src={(prod.item.thumbnail === "") ? imageNotAvailable : prod.item.thumbnail}/></p>)}</Table.Cell>
                        <Table.Cell>{item.map(prod => <p key={prod.item.id}> {prod.item.title.slice(0,50)}</p>)}</Table.Cell>
                        <Table.Cell>{item.map(prod =><p>{prod.quantity}</p>)}</Table.Cell>
                        <Table.Cell>{item.map(prod =><p>AR$ {Number(prod.item.price * prod.quantity).toLocaleString()}</p>)}</Table.Cell>
                        <Table.Cell>{item.map(prod => <p><Button onClick={() => removeItem(prod.item.id)}>Borrar Item</Button></p>)}</Table.Cell>
                    </Table.Row>
                </Table.Body>
                <div><p>Su compra fue por un total de AR$ {Number(totalPrice().toLocaleString())}</p></div>
                <Button primary onClick={() => clear()}>Borrar todos los Productos</Button>
                <Link to='/'><Button primary>Continuar Comprando</Button></Link>
            </Table>


              }           
              
        </div>
    )
}

export default Cart
