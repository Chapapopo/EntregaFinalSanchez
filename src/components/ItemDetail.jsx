/* ItemDetail viene de ItemDetailContainer y va a ItemCount 
Encargado de mostrar los datos por pantalla.*/
import React, { useState } from 'react'
import { useContext } from 'react';
import { CartContext } from './Context/ShoppingCardContext';
import ItemCount from './ItemCount'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const ItemDetail = ({ producto }) => {
  
  const {cart, setCart} = useContext(CartContext)
  const [newProducto, setNewProducto] = useState({
    id: "", titulo: "", cantidad: 0, precio: 0
  })
  
  const [cantidadSeleccionada, setCantidadSeleccionada] = useState(0);

  const agregarCantidad = (cantidad) => {
    setCantidadSeleccionada(cantidad);
  };

  const agregarAlCarrito = () => {
    const productoNuevo = {
      id: producto.id,
      titulo: producto.titulo,
      cantidad: cantidadSeleccionada,
      precio: producto.precio,
    };

    if (productoNuevo.id && productoNuevo.titulo && productoNuevo.cantidad && productoNuevo.precio) {
      setNewProducto(productoNuevo);
      setCart([...cart, productoNuevo]);
    }
  };
  console.log(newProducto);
  console.log(cart);

  return (
    <div className='container'>
          <div key={producto.id}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={producto.image} />
              <Card.Body>
                <Card.Title>{producto.titulo}</Card.Title>
                <Card.Text>
                  Descripcion: {producto.descripcion}
                </Card.Text>
                <Card.Text>
                  Precio: {producto.precio}
                </Card.Text>
                <Card.Text>
                  <ItemCount onCountChange={agregarCantidad}/>
                </Card.Text>
                <Link><Button onClick={agregarAlCarrito} variant="primary">Agregar al carrito</Button></Link>
              </Card.Body>
            </Card>
          </div>
    </div>
  )
}

export default ItemDetail