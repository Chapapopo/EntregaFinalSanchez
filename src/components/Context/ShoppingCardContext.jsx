import { createContext, useState } from "react";

export const CartContext = createContext(null)

const ShoppingCartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [agregado, setAgregado] = useState(0)
    const [productoEnCarrito, setProductoEnCarrito] = useState(true)
    const [idDeProductosEnCarrito, setIdDeProductosEnCarrito] = useState([])

    return(
        <CartContext.Provider value={{cart, setCart, agregado, setAgregado, productoEnCarrito, setProductoEnCarrito, idDeProductosEnCarrito, setIdDeProductosEnCarrito}}>
            {children}
        </CartContext.Provider>
    )
}
export default ShoppingCartProvider