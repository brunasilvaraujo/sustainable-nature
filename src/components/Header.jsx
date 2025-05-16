import 'bootstrap-icons/font/bootstrap-icons.css';
import Nav from 'react-bootstrap/Nav';

function Header() {
    return (
        <header className="header">
            <Nav variant="underline" defaultActiveKey="/home" className="nav-menu">
                <div className="nav-logo">
                    <img className="logo" src="/assets/save-planet.png" alt="Logo" />
                    <p className="logo-text">Save Planet</p>
                </div>
                <ul className="nav-list">
                    <Nav.Item>
                        <li><Nav.Link href="/home" className='nav-link'>Início</Nav.Link></li>
                    </Nav.Item>
                    <Nav.Item>
                        <li><Nav.Link href="/about" className='nav-link'>Sobre</Nav.Link></li>
                    </Nav.Item>
                    <Nav.Item>
                        <li><Nav.Link href="/services" className='nav-link'>Serviços</Nav.Link></li>
                    </Nav.Item>
                    <Nav.Item>
                        <li><Nav.Link href="/contact" className='nav-link'>Contato</Nav.Link></li>
                    </Nav.Item>
                </ul>
                <span className="social-icons">
                    <a href=""><i class="bi bi-facebook"></i></a>
                    <a href=""><i class="bi bi-instagram"></i></a>
                </span>
            </Nav>
        </header>
)}

export default Header