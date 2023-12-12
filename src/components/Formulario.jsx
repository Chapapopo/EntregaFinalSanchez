import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useContext } from 'react';
import { UserContext } from './Context/UserContext';

const Formulario = () => {
    const {nombre, setNombre, apellido, setApellido, email, setEmail, password, setPassword, provincia, setProvincia, ciudad, setCiudad, direccion, setDireccion, cp, setCP, userExist, setUserExist} = useContext(UserContext)

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

        setUserExist(false)
        /* aca quiero cargar el user con todos los datos */
    }

    return (
        <>
            <form action='' onSubmit={handelSubmit}>
                <Container>
                    <Row>
                        <Col>
                            <Form.Control type="text" onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" />
                            <Form.Control type="text" onChange={(e) => setApellido(e.target.value)} placeholder="Apellido" />
                            <Form.Control type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                            <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
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

                            <Form.Control type="text" onChange={(e) => setCiudad(e.target.value)} placeholder="Ciudad" />
                            <Form.Control type="text" onChange={(e) => setDireccion(e.target.value)} placeholder="Direccion" />
                            <Form.Control type="text" onChange={(e) => setCP(e.target.value)} placeholder="Codigo Postal" />
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

export default Formulario