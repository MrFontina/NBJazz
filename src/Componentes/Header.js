import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {BsFacebook} from 'react-icons/bs'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoYoutube} from 'react-icons/io'

function Header() {
    return (
        <header>
            <div className='header-container'>
                <div className='name-container'>
                    <h1>NAHUEL BRACCHITTA</h1>
                    <h2>GUITARRISTA DE JAZZ, EDUCADOR </h2>
                </div>
                <div className='redes-container'>
                    <a href='www.google.com'><BsFacebook className='social-icon'/></a>
                    <a href='www.google.com'><FiInstagram className='social-icon'/></a>
                    <a href='www.google.com'><IoLogoYoutube className='social-icon'/></a>
                </div>
            </div>

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto navBar-cont">
                            <NavDropdown title="CLASES" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#guitarra">GUITARRA</NavDropdown.Item>
                                <NavDropdown.Item href="improvisacion">IMPROVISACIÓN</NavDropdown.Item>
                                <NavDropdown.Item href="#ensambles">ENSAMBLES</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#musica">MÚSICA</Nav.Link>
                            <Nav.Link href="#conciertos">CONCIERTOS</Nav.Link>
                            <Nav.Link href="#Sobre mi">SOBRE MI</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header