import 'bootstrap-icons/font/bootstrap-icons.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';

function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

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
            setMenuOpen(false); // Fecha menu após clique
        }
    };

    return (
        <Navbar
            id="home"
            expand="lg"
            fixed="top"
            className={`header ${scrolled ? 'scrolled' : ''}`}
        >
            <Container>
                <Navbar.Brand className="d-flex align-items-center">
                    <img className="logo" src="assets/save-planet.png" alt="Logo" />
                    <p className="logo-text mb-0 ms-2">Save Planet</p>
                </Navbar.Brand>

                {/* Custom Toggle Button */}
                <button
                    className={`hamburger ${menuOpen ? 'open' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <Navbar.Collapse className={`${menuOpen ? 'show' : ''}`}>
                    <Nav className="ms-auto align-items-center nav-list">
                        <Nav.Item><Nav.Link className="nav-link" onClick={() => scrollToSection('home')}>Início</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link className="nav-link" onClick={() => scrollToSection('about')}>Sobre</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link className="nav-link" onClick={() => scrollToSection('services')}>Serviços</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link className="nav-link" onClick={() => scrollToSection('contact')}>Contato</Nav.Link></Nav.Item>

                        <span className="social-icons d-flex gap-3 ms-lg-4 mt-3 mt-lg-0">
                            <a href="#"><i className="bi bi-facebook"></i></a>
                            <a href="#"><i className="bi bi-instagram"></i></a>
                        </span>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
