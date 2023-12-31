import React from 'react'
import Formulario from './Formulario'
import { useContext } from 'react';
import { UserContext } from './Context/UserContext';
import CosasCarrito from './CosasCarrito';
import ResetButton from './ResetButton';

const Checkout = () => {
    const { userExist } = useContext(UserContext)
    const isLoggedIn = userExist

    return (
        <div className='container'>
            {isLoggedIn ? <Formulario /> : <p>Estas logeado</p>}
            <CosasCarrito/>
            {!isLoggedIn ? <ResetButton/> : <p>No Estas logeado</p>}
        </div>
    )
}

export default Checkout