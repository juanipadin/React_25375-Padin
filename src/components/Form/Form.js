import React, {useState} from 'react'
import { useCartContext } from '../../context/CartContext';

/* FIREBASE */
import { db } from '../../firebase/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

import './Form.css'

const initialState = {
    name : '',
    phone : '',
    email : '',
    validation : '',
}

const Form = () => {
    const { item, totalPrice } = useCartContext()

    const [buyers, setBuyers] = useState(initialState);
    const [purchaseId, setPurchaseId] = useState('');
    const [validation, setValidation] = useState(true)

    const onChangeHandler = (e) => {
        const {name, value} = e.target;
        setBuyers({...buyers, [name]:value})
    };
    
    const onSubmitHandler = async (e) => {
        e.preventDefault()
        
        if (buyers.validation !== buyers.email){
            return (setValidation(false), setBuyers(initialState))
            }

        const precioFinal = totalPrice()
        const date = new Date().toLocaleString()
        
        const docRef = await addDoc(collection(db, 'clients'),{ buyers ,  item , date, precioFinal })
        
        setPurchaseId(docRef.id);
        setBuyers(initialState)
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <div class="form-group">
                <label>Nombre Completo</label>
                <input className="form-control" placeholder='Nombre' name="name" value={buyers.name} onChange={onChangeHandler}/>
                <label>Telefono</label>
                <input className="form-control" placeholder='Telefono' name="phone" value={buyers.phone} onChange={onChangeHandler}/>
                <label>Correo Electrónico</label>
                <input className="form-control" placeholder='Correo' name="email" value={buyers.email} onChange={onChangeHandler}/>
                <label>Vuelva a Introducir su Correo Electrónico</label>
                <input className="form-control" placeholder='Correo' name="validation" value={buyers.validation} onChange={onChangeHandler}/>
                {!validation && <div class="p-3 mb-2 bg-warning text-dark">Sus correos no coinciden, por favor vuelva a intentarlo</div> }
                <button type="submit" class="btn btn-primary">Enviar</button>
                </div>
            </form>

            {(purchaseId && (
                <div class="p-3 mb-2 bg-success text-white"> Su compra quedó registrada bajo el ID: {purchaseId} </div>
            ))}
        </div>
    )
}

export default Form
