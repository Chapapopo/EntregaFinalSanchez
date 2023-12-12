import React from 'react'
import Formulario from './Formulario'
import { useContext } from 'react';
import { UserContext } from './Context/UserContext';
import CosasCarrito from './CosasCarrito';

const Checkout = () => {
    const { userExist } = useContext(UserContext)
    const isLoggedIn = userExist
    return (
        <>
            {isLoggedIn ? <Formulario /> : <p>Estas logeado</p>}
            <CosasCarrito/>
        </>
    )
}

export default Checkout