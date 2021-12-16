import {useState, createContext, useContext} from 'react'

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)


const CartContextProvider = ({children}) => {
    const [item, setItem] = useState([])

    const addToCart = (product, quantity) =>{
        if (inCart(product)) {
            const newItem = item;
            newItem.forEach((cartItem) => {
                if (cartItem.id === product.id) {
                    cartItem.quantity += quantity;
                }})
            setItem(newItem)
        } else {
            setItem([...item, {  item: product, quantity: quantity }])
        }
    };

    const inCart = (product) => {
        return item.some((items) => items.id === product.id);
    };

    const removeItem = (id) => {
        setItem(item.filter((items)=> items.id !== id))
    }

    const clear = () => {
        setItem([])
    }

    const totalQuantity = () => {
        return item.reduce((total , product) => total + product.quantity, 0)
    }

    const totalPrice = () => {
        return item.reduce((total, value) => (total + (value.quantity * value.price)), 0)
    }

    return (
        <CartContext.Provider value={ { item, addToCart, removeItem, clear, totalQuantity, totalPrice } }>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;