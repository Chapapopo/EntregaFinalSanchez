/* CartWidget viene de NavBar y por ahora no hace nada 
Esta Correcta*/
import React from 'react'
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from './Context/ShoppingCardContext';

const CartWidget = () => {
  const {agregado} = useContext(CartContext)
  return (
    <>
    <div>
      <Link to={"/carrito"}><img src="../../src/images/logo/pngwing.com.png" alt="Logo" width="auto" height="50"/></Link>
    </div>
    <div>
        <Badge bg="danger">{agregado}</Badge>
    </div>
    </>
  )
}

export default CartWidget