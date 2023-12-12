/* CartWidget viene de NavBar y por ahora no hace nada 
Esta Correcta*/
import React from 'react'
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';

const CartWidget = ({Agregados}) => {
  return (
    <>
    <div>
      <Link to={"/carrito"}><img src="../../src/images/logo/pngwing.com.png" alt="Logo" width="auto" height="50"/></Link>
    </div>
    <div>
        <Badge bg="danger">{Agregados}</Badge>
    </div>
    </>
  )
}

export default CartWidget