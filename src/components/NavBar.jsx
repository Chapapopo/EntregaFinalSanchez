/* NavBar viene de App y solo tiene de salida CartWidget, que por ahora no Hace nada
Esta Correcta*/
import React from 'react'
import CartWidget from './CartWidget'/* 
import Button from 'react-bootstrap/Button'; */
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">
        <Link to={"/"}><img src="../../src/images/logo/havaianas-logo-2-1-2048x404.png" alt="Logo" width="auto" height="50"/></Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          <Nav.Link href="#home"><Link to={"/usuario"}>Usuario</Link></Nav.Link>
            <NavDropdown title="Categorias" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action1"><Link to={"/categoria/Mujer"}>Mujer</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action2"><Link to={"/categoria/Hombre"}>Hombre</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action3"><Link to={"/categoria/Niño"}>Niño</Link></NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <CartWidget/>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default NavBar
