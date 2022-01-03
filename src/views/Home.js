import React from 'react'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import { Icon } from 'semantic-ui-react'

import './Home.css'

const Home = () => {
    return (
        <div>
            <div className="title">
                <h1 className="display-4">2Bike or not 2Bike</h1>
                <ul className="list-inline">
                    <li className="list-inline-item"><Icon name='truck' size='big' />Envíos a todo el pais</li>
                    <li className="list-inline-item"><Icon name='whatsapp' size='big' />Dejanos tu consulta</li>
                    <li className="list-inline-item"><Icon name='payment' size='big' />Consultá por nuestros medios de pago</li>
                    
                </ul>

            </div>
            <div>
                <ItemListContainer/>
            </div>
        </div>
    )
}

export default Home
