import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const Item = ({data}) => (
    <Card>
        <Image src={data.avatar_url} wrapped ui={false} />
        <Card.Content>
        <Card.Header>{data.login}</Card.Header>
        <Card.Meta>
            <span className="date"> Item ID: {data.id}</span>
        </Card.Meta>
        </Card.Content>
    </Card>
)

export default Item
