import React from 'react'
import { useContext } from 'react';
import { CartContext } from './Context/ShoppingCardContext';

const CosasCarrito = () => {
    
    const {cart} = useContext(CartContext)
    const total = cart.reduce((accumulator, item) => {
        return accumulator + (item.cantidad * item.precio);
    }, 0);

    return (
        <div className='container'>
            {cart.map((item) => (
                <div key={item.id}>
                    <p>Título: {item.titulo} Cantidad: {item.cantidad} Precio: {item.precio}</p>
                </div>
            ))}
            <div>Precio final: {total}</div>
        </div>
    )
}

export default CosasCarrito