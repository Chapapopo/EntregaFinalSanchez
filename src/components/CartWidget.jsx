import React from 'react'
import Badge from 'react-bootstrap/Badge';

const CartWidget = () => {
  return (
    <>
    <div>
        <button><img src="images/logo/pngwing.com.png" alt="Logo" width="auto" height="50"/></button>
    </div>
    <div>
        <Badge bg="danger">5</Badge>
    </div>
    </>
  )
}

export default CartWidget