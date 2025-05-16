import 'bootstrap-icons/font/bootstrap-icons.css';
import { Navbar, Nav } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';

function Header() {

    const [scrolled, setScrolled] = useState(false);

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
        }
    };

    return (
        <Navbar 
            id="home"
            expand="lg"
            fixed="top"
            className={`header ${scrolled ? 'scrolled' : ''}`}
        >
            <div className='container d-block'>
                <Nav className="nav-menu" >
                    <div className="nav-logo">
                        <img className="logo" src="/assets/save-planet.png" alt="Logo" />
                        <p className="logo-text mb-md-0">Save Planet</p>
                    </div>
                    <ul className="nav-list mb-md-0">
                        <Nav.Item>
                            <li><Nav.Link className='nav-link' onClick={() => scrollToSection('home')}>Início</Nav.Link></li>
                        </Nav.Item>
                        <Nav.Item>
                            <li><Nav.Link className='nav-link' onClick={() => scrollToSection('about')}>Sobre</Nav.Link></li>
                        </Nav.Item>
                        <Nav.Item>
                            <li><Nav.Link  className='nav-link' onClick={() => scrollToSection('services')}>Serviços</Nav.Link></li>
                        </Nav.Item>
                        <Nav.Item>
                            <li><Nav.Link  className='nav-link' onClick={() => scrollToSection('contact')}>Contato</Nav.Link></li>
                        </Nav.Item>
                    </ul>
                    <span className="social-icons">
                        <a href="#"><i class="bi bi-facebook"></i></a>
                        <a href="#"><i class="bi bi-instagram"></i></a>
                    </span>
                </Nav>
            </div>
        </Navbar>
    );
}

export default Header