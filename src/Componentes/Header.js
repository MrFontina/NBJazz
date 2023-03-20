import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <header>
        <h1>NAHUEL BRACCHITTA</h1>
        <h2>GUITARRISTA DE JAZZ, EDUCADOR </h2>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
      <Container>       
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto navBar-cont">
          <NavDropdown title="Clases" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#guitarra">Guitarra</NavDropdown.Item>
              <NavDropdown.Item href="improvisacion">Improvisación</NavDropdown.Item>
              <NavDropdown.Item href="#ensambles">Ensambles</NavDropdown.Item>              
            </NavDropdown>
            <Nav.Link href="#musica">Música</Nav.Link>
            <Nav.Link href="#conciertos">Conciertos</Nav.Link>
            <Nav.Link href="#Sobre mi">Sobre mi</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}

export default Header