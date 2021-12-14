import {useState, createContext, useContext} from 'react'

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)


const CartContextProvider = ({children}) => {
    const [item, setItem] = useState([])
    //const [quantItems, setQuantItems] = useState(0)

    const addToCart = (product, quantity) =>{
        if (item.lenght !== 0){
            const index = item.findIndex( prod => {return prod.id === product.id})
            if (index !== -1 ){
                const newItem = item;
                newItem[index].quantity = newItem[index].quantity + quantity;
                setItem(newItem)
            } else setItem ([...item, {product, quantity : quantity}]);
        } else setItem([{product, quantity : quantity}])
        //setQuantItems(quantItems + quantity)
        setItem([...item, {item: product, quantity: quantity}])
    }

    const removeItem = (id) => {
        setItem(item.filter((items)=> items.item.id !== id))
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