import 'bootstrap-icons/font/bootstrap-icons.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';

function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
    const handleScroll = () => {
        const offset = window.scrollY;
        setScrolled(offset > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
        const yOffset = -70;
        const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      setExpanded(false); // Fecha o menu após clicar
    }
    };

    return (
    <Navbar
        expand="lg"
        fixed="top"
        expanded={expanded}
        className={`header ${scrolled ? 'scrolled' : ''}`}
    >
        <Container>
        <div className="nav-logo d-flex align-items-center">
            <img className="logo" src="assets/save-planet.png" alt="Logo" />
            <p className="logo-text mb-0">Save Planet</p>
        </div>

        {/* Botão customizado para abrir/fechar menu */}
        <button
            aria-label="Toggle menu"
            className="custom-toggler"
            onClick={() => setExpanded(!expanded)}
            style={{
            background: 'none',
            border: 'none',
            fontSize: '28px',
            color: scrolled ? '#fff' : '#0f5210',
            cursor: 'pointer',
            }}
        >
            {expanded ? <i className="bi bi-x-lg"></i> : <i className="bi bi-list"></i>}
        </button>

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
            <Nav className="nav-list">
            <Nav.Item>
                <Nav.Link className="nav-link" onClick={() => scrollToSection('home')}>Início</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="nav-link" onClick={() => scrollToSection('about')}>Sobre</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="nav-link" onClick={() => scrollToSection('services')}>Serviços</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="nav-link" onClick={() => scrollToSection('contact')}>Contato</Nav.Link>
            </Nav.Item>
            <div className="social-icons d-lg-none mt-3">
                <a href="#"><i className="bi bi-facebook"></i></a>
                <a href="#"><i className="bi bi-instagram"></i></a>
            </div>
            </Nav>
        </Navbar.Collapse>

        <span className="social-icons d-none d-lg-flex">
            <a href="#"><i className="bi bi-facebook"></i></a>
            <a href="#"><i className="bi bi-instagram"></i></a>
        </span>
        </Container>
    </Navbar>
    );
}

export default Header;
