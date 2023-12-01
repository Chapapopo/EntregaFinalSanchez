/* ItemDetail viene de ItemDetailContainer y va a ItemCount 
Encargado de mostrar los datos por pantalla.*/
import React from 'react'
import ItemCount from './ItemCount'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const ItemDetail = ({ producto }) => {

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
                  <ItemCount />
                </Card.Text>
                <Link><Button variant="primary">Agregar al carrito</Button></Link>
              </Card.Body>
            </Card>
          </div>
    </div>
  )
}

export default ItemDetail