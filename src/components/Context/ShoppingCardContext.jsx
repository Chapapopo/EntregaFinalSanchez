import { createContext, useState } from "react";

export const CartContext = createContext(null)

const ShoppingCartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const Agregado = 0

    return(
        <CartContext.Provider value={{cart, setCart, Agregado}}>
            {children}
        </CartContext.Provider>
    )
}
export default ShoppingCartProvider