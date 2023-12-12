import React from 'react'
import { useContext } from 'react';
import { CartContext } from './Context/ShoppingCardContext';
import Card from 'react-bootstrap/Card';

const CosasCarrito = () => {
    
    const {cart} = useContext(CartContext)
    const total = cart.reduce((accumulator, item) => {
        return accumulator + (item.cantidad * item.precio);
    }, 0);

    return (
        <div className='container'>
            {cart.map((item) => (
                <Card key={item.id}>
                    <Card.Body>Título: {item.titulo} Cantidad: {item.cantidad} Precio: {item.precio}</Card.Body>
                </Card>
            ))}
            <Card><Card.Body>Precio final: {total}</Card.Body></Card>
        </div>
    )
}

export default CosasCarrito