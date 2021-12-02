import React from 'react'
import { Link } from 'react-router-dom';
import { Card, Image } from 'semantic-ui-react'
import './Item.css'

const Item = ({item}) => (
    <Link to={`/item/${item.id}`}>
    <Card className="Item">
        <Image src={item.thumbnail} wrapped ui={false} />
        <Card.Content>
        <Card.Header>AR$ {Number(item.price).toLocaleString()}</Card.Header>
        <Card.Meta>
            <span className="date"> {item.title.slice(0,25)}</span>
        </Card.Meta>
        <Card.Description>
        Item ID: {item.id}
        </Card.Description>
        </Card.Content>
    </Card>
    </Link>
)

export default Item
