import React from 'react'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import CosasCarrito from './CosasCarrito';

const Carrito = () => {/* 
    const { Agregado } = useContext(UserContext)
    console.log(Agregado) */
    /* 1 = agregados */
    const isLoggedIn = 1 > 0 ? true : false;
    console.log(isLoggedIn)

    return (
        <>
            <div className='container'>
                {isLoggedIn ? <CosasCarrito /> : <p>No hay nada en el carrito</p>}
                <Link to={"/finalizar"}><Button>Finalizar Compra</Button></Link>
            </div>
        </>
    )
}

export default Carrito