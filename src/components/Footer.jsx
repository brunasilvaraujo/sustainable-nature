function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <img className="logo-image" src="/assets/save-planet.png" alt="Logo" />
                        <p className="footer-logo-text">Save Planet</p>
                        <p className="footer-text">© 2025 Save Planet. <br /> Todos os direitos reservados.</p>
                    </div>
                    <div className="footer-social">
                        <a href="#" className="social-icon"><i className="bi bi-facebook"></i></a>
                        <a href="#" className="social-icon"><i className="bi bi-instagram"></i></a>
                        <a href="#" className="social-icon"><i className="bi bi-twitter"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;  