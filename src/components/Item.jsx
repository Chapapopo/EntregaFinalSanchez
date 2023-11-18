import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = ({Producto, Precio, Imagen, Descripcion, Id}) => {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Imagen} />
      <Card.Body>
        <Card.Title>{Producto}</Card.Title>
        <Card.Text>
            Descripcion: {Descripcion}
        </Card.Text>
        <Card.Text>
          Precio: {Precio}
        </Card.Text>
        <Link to={Id}><Button variant="primary">Paguina del Preoducto</Button></Link>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Item