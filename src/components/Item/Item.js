import React from 'react'
import { Link } from 'react-router-dom';
import { Card, Image } from 'semantic-ui-react'
import './Item.css'

const Item = ({item}) => (
    <Link to={`/item/${item.id}`}>
    <Card className="Item">
        <Image src={item.thumbnail} size="small" centered className='image'/>
        <Card.Content className='cardContent'>
            <Card.Header>UD$ {Number(item.price).toLocaleString()}</Card.Header>
            <Card.Description>
                <p>{item.title}</p>
            </Card.Description>
                <Card.Content extra>
                    <p>Item ID: {item.id}</p>
                </Card.Content>
        </Card.Content>
    </Card>
    </Link>
)

export default Item
