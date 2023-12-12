import { createContext, useState } from "react";

export const CartContext = createContext(null)

const ShoppingCartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [agregado, setAgregado] = useState(0)

    return(
        <CartContext.Provider value={{cart, setCart, agregado, setAgregado}}>
            {children}
        </CartContext.Provider>
    )
}
export default ShoppingCartProvider