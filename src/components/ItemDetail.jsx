/* ItemDetail viene de ItemDetailContainer y va a ItemCount 
Encargado de mostrar los datos por pantalla.*/
import React from 'react'
import ItemCount from './ItemCount'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useParams } from 'react-router-dom';

const ItemDetail = ({ productos }) => {
  const { id } = useParams();

  const filtrarProductos = productos.filter((producto) => producto.id == id)
  return (
    <div className='container'>
      {filtrarProductos.map((p) => {
        return (
          <div key={p.id}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={p.image} />
              <Card.Body>
                <Card.Title>{p.titulo}</Card.Title>
                <Card.Text>
                  Descripcion: {p.descripcion}
                </Card.Text>
                <Card.Text>
                  Precio: {p.precio}
                </Card.Text>
                <Card.Text>
                  <ItemCount />
                </Card.Text>
                <Link><Button variant="primary">Agregar al carrito</Button></Link>
              </Card.Body>
            </Card>
          </div>
        )
      })}
    </div>
  )
}

export default ItemDetail