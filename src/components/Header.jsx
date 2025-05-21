import 'bootstrap-icons/font/bootstrap-icons.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import '../App.css';

function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Navbar 
            fixed="top" 
            className={`header ${scrolled ? 'scrolled' : ''} ${isOpen ? 'menu-open' : ''}`}
            expand="lg"
        >
            <Container fluid>
                <Navbar.Brand className="d-flex align-items-center">
                    <img className="logo" src="assets/save-planet.png" alt="Logo" />
                    <span className="logo-text ms-2">Save Planet</span>
                </Navbar.Brand>

                {/* Menu Hamburguer Mobile */}
                <button 
                    className="hamburger-button"
                    onClick={toggleMenu}
                    aria-label="Menu"
                    aria-expanded={isOpen}
                >
                    <span className={`hamburger-bar ${isOpen ? 'open' : ''}`} />
                    <span className={`hamburger-bar ${isOpen ? 'open' : ''}`} />
                    <span className={`hamburger-bar ${isOpen ? 'open' : ''}`} />
                </button>

                {/* Menu de Navegação */}
                <div className={`nav-menu ${isOpen ? 'open' : ''}`}>
                    <Nav className="ml-auto">
                        <Nav.Link href="#home" onClick={toggleMenu}>Início</Nav.Link>
                        <Nav.Link href="#about" onClick={toggleMenu}>Sobre</Nav.Link>
                        <Nav.Link href="#services" onClick={toggleMenu}>Serviços</Nav.Link>
                        <Nav.Link href="#contact" onClick={toggleMenu}>Contato</Nav.Link>
                    </Nav>
                    <div className="social-icons-mobile">
                        <a href="#"><i className="bi bi-facebook"></i></a>
                        <a href="#"><i className="bi bi-instagram"></i></a>
                    </div>
                </div>
                <div className="social-icons">
                        <a href="#"><i className="bi bi-facebook"></i></a>
                        <a href="#"><i className="bi bi-instagram"></i></a>
                </div>
            </Container>
        </Navbar>
    );
}

export default Header;