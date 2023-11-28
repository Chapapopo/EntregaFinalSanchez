/* Item viene de ItemList y muestra las card
Esta Correcta*/
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = ({Producto, Precio, Imagen, Id}) => {
  return (
    <div key={Id}>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Imagen} />
      <Card.Body>
        <Card.Title>{Producto}</Card.Title>
        <Card.Text>
          Precio: {Precio}
        </Card.Text>
        <Link to={`/item/${Id}`}><Button variant="primary">Pagina del Preoducto</Button></Link>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Item