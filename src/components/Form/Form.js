import React, {useState} from 'react'
import { Input, Button } from 'semantic-ui-react'
import { useCartContext } from '../../context/CartContext';

/* FIREBASE */
import { db } from '../../firebase/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';


const initialState = {
    name : '',
    phone : '',
    email : ''
}

const Form = () => {
    const { item, totalPrice } = useCartContext()

    const [buyers, setBuyers] = useState(initialState);
    const [purchaseId, setPurchaseId] = useState('');

    const onChangeHandler = (e) => {
        const {name, value} = e.target;
        setBuyers({...buyers, [name]:value})
    };

    const onSubmitHandler = async (e) => {
        e.preventDefault()

        const precioFinal = totalPrice()
        const date = new Date().toLocaleString()

        const docRef = await addDoc(collection(db, 'clients'),{ buyers ,  item , date, precioFinal })

        setPurchaseId(docRef.id);
        setBuyers(initialState)
    }


    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <Input placeholder='Nombre' name="name" value={buyers.name} onChange={onChangeHandler}/>
                <Input placeholder='Telefono' name="phone" value={buyers.phone} onChange={onChangeHandler}/>
                <Input placeholder='E-Mail' name="email" value={buyers.email} onChange={onChangeHandler}/>
                <Button>Enviar</Button>
            </form>
            <p></p>
            {(purchaseId && (
                <div> Su compra quedó registrada bajo el ID: {purchaseId} </div>
            ))}
        </div>
    )
}

export default Form
