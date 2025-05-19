function Contact() {
    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="contact-container">
                    <div className="contact-content">
                        <h3 className="contact-title">Entre em contato com a gente!</h3>
                        <div className="contact-address">
                            <i className="bi bi-geo-alt"></i>
                            <p className="contact-text">R. Amauri Souza, 346</p>
                        </div>
                        <div className="contact-email">
                            <i className="bi bi-envelope"></i>
                            <p className="contact-text">contato@saveplanet.com</p>
                        </div>
                        <button className="contact-button">
                            <i class="bi bi-whatsapp"></i>
                            Enviar Mensagem
                        </button>
                    </div>
                    <img  className="contact-image" src="assets/contact.jpg" alt="Contato" />
                </div>
            </div>
        </section>
    )
}

export default Contact;