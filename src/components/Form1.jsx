import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Checkout = () => {

    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [provincia, setProvincia] = useState("")
    const [ciudad, setCiudad] = useState("")
    const [direccion, setDireccion] = useState("")
    const [cp, setCP] = useState("")

    const handelSubmit = (e) => {
        e.preventDefault()

        console.log(nombre)
        console.log(apellido)
        console.log(email)
        console.log(password)
        console.log(provincia)
        console.log(ciudad)
        console.log(direccion)
        console.log(cp)
    }

    return (
        <>
            <form action='' onSubmit={handelSubmit}>
                <Container>
                    <Row>
                        <Col>
                            <Row className="mb-3">
                                <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control type="text" onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" />
                                </Form.Group>

                                <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
                                    <Form.Label>Apellido</Form.Label>
                                    <Form.Control type="text" onChange={(e) => setApellido(e.target.value)} placeholder="Apellido" />
                                </Form.Group>
                            </Row>

                            <Form.Group controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                            </Form.Group>

                            <Form.Group controlId="formGridPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                            </Form.Group>

                            <Form.Group controlId="formGridState">
                                <Form.Label>Provincia</Form.Label>
                                <Form.Select type="text" onChange={(e) => setProvincia(e.target.value)} placeholder="Elegi..." >
                                    <option>Elegi...</option>
                                    <option>Buenos Aires</option>
                                    <option>Catamarca</option>
                                    <option>Chaco</option>
                                    <option>Chubut</option>
                                    <option>Córdoba</option>
                                    <option>Corrientes</option>
                                    <option>Entre Ríos</option>
                                    <option>Formosa</option>
                                    <option>Jujuy</option>
                                    <option>La Pampa</option>
                                    <option>La Rioja</option>
                                    <option>Mendoza</option>
                                    <option>Misiones</option>
                                    <option>Neuquén</option>
                                    <option>Río Negro</option>
                                    <option>Salta</option>
                                    <option>San Juan</option>
                                    <option>San Luis</option>
                                    <option>Santa Cruz</option>
                                    <option>Santa Fe</option>
                                    <option>Santiago del Estero</option>
                                    <option>Tierra del Fuego, Antártida e Islas del Atlántico Sur</option>
                                    <option>Tucumán</option>
                                    <option>Ciudad Autónoma de Buenos Aires</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group controlId="formGridCity">
                                <Form.Label>Ciudad</Form.Label>
                                <Form.Control type="text" onChange={(e) => setCiudad(e.target.value)} placeholder="Ciudad" />
                            </Form.Group>

                            <Row className="mb-3">
                                <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
                                    <Form.Label>Direccion</Form.Label>
                                    <Form.Control type="text" onChange={(e) => setDireccion(e.target.value)} placeholder="Direccion" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>Codigo Postal</Form.Label>
                                    <Form.Control type="text" onChange={(e) => setCP(e.target.value)} placeholder="Codigo Postal" />
                                </Form.Group>
                            </Row>

                            <Button variant="primary" type="submit">
                                Registrar
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </form >
        </>
    )
}

export default Form