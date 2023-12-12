import React from 'react'
import Formulario from './Formulario'
import { useContext } from 'react';
import { UserContext } from './Context/UserContext';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Usuario = () => {
    const { userExist } = useContext(UserContext)
    const isLoggedIn = userExist
    console.log(userExist)

    return (
        <div className='container'>
            {isLoggedIn ? <Formulario /> : <Button variant="success"><Link to={"/"}>Ya Estas logedo, Buelve a la pagina principal</Link></Button>}
        </div>
    )
}

export default Usuario