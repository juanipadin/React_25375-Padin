import React from 'react'
import { Link } from 'react-router-dom';
import { Card, Image } from 'semantic-ui-react'

const Item = ({item}) => (
    <Link to={`/item/${item.id}`}>
    <Card>
        <Image src={item.thumbnail} size="small" centered />
        <Card.Content>
            <Card.Header>AR$ {Number(item.price).toLocaleString()}</Card.Header>
            <Card.Description>
                <p>{item.title.slice(0,100)}</p>
            </Card.Description>
                <Card.Content extra>
                    <p>Item ID: {item.id}</p>
                </Card.Content>
        </Card.Content>
    </Card>
    </Link>
)

export default Item
