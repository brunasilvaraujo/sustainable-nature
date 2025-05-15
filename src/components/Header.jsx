import 'bootstrap-icons/font/bootstrap-icons.css';
import Nav from 'react-bootstrap/Nav';

function Header() {
    return (
        <header className="header">
            <Nav variant="underline" defaultActiveKey="/home" className="nav-menu">
                <p className="logo-text">My Logo</p>
                <ul className="nav-list">
                    <Nav.Item>
                        <li><Nav.Link href="/home" className='nav-link'>Home</Nav.Link></li>
                    </Nav.Item>
                    <Nav.Item>
                        <li><Nav.Link href="/about" className='nav-link'>About</Nav.Link></li>
                    </Nav.Item>
                    <Nav.Item>
                        <li><Nav.Link href="/contact" className='nav-link'>Contact</Nav.Link></li>
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