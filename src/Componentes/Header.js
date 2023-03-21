import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { BsFacebook } from 'react-icons/bs'
import { FiInstagram } from 'react-icons/fi'
import { IoLogoYoutube } from 'react-icons/io'


function Header({ isOpen, setIsOpen }) {

    
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (



        <header>
            <div className='header-container'>
                <div className='name-container'>
                    <Link className='navLink' to='/'>
                        <h1>NAHUEL BRACCHITTA</h1>
                    </Link>
                    <h2>GUITARRISTA DE JAZZ, EDUCADOR </h2>
                </div>
                <div className='redes-container'>
                    <a href='https://www.youtube.com/channel/UCVVeaTpLbXeCXzMwvSFcnXg' target="_blank" rel="noreferrer"><BsFacebook className='social-icon' /></a>
                    <a href='https://www.facebook.com/nahuelbracchittamusica' target="_blank" rel="noreferrer"><FiInstagram className='social-icon' /></a>
                    <a href='https://www.instagram.com/nahuelbracchitta/' target="_blank" rel="noreferrer"><IoLogoYoutube className='social-icon' /></a>
                </div>
            </div>

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className="navbar-toggler"
                            type="button"
                            onClick={toggleNavbar}>
                        
                            <span className="navbar-toggler-icon"></span>
                        
                    </Navbar.Toggle>

                    <Navbar.Collapse id="responsive-navbar-nav"  className={`navbar-collapse collapse ${
          isOpen ? "show" : ""
        }`}>
                        <Nav className="me-auto navBar-cont">
                            <NavDropdown title="CLASES" id="collasible-nav-dropdown">
                                <NavDropdown.Item>
                                    <Link to='/guitarra' className='navLink'>GUITARRA</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/improvisacion" className='navLink'>IMPROVISACIÓN</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to='ensambles' className='navLink'>ENSAMBLES</Link></NavDropdown.Item>
                            </NavDropdown>
                            <Link to='musica' className='navLink'>MÚSICA</Link>
                            <Link to='conciertos' className='navLink'>CONCIERTOS</Link>
                            <Link to='about' className='navLink'>SOBRE MI</Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header