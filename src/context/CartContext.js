import {useState, createContext, useContext} from 'react'

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)


const CartContextProvider = ({children}) => {
    const [item, setItem] = useState([])

    const addToCart = (product, quantity) =>{
        setItem([...item, {item: product, quantity: quantity}])
    }

    const removeItem = (id) => {
        setItem(item.filter((items)=> items.id !== id))
    }

    const clear = () => {
        setItem([])
    }

    const isInCart = (item) => {
        return item.some((items) => items.id === item.id);
    }

    console.log(item)
    return (
        <CartContext.Provider value={ { item, addToCart, removeItem, clear, isInCart } }>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;