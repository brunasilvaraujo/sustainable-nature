function Hero() {
    return (
        <section className="hero">
            <div className="hero-content">
                <div className="hero-text">
                    <p className="head-text">Bem-Vindos a Save Planet 👋</p>
                    <h1 className="hero-title">Plante uma árvore, ajude a salvar o Planeta.</h1>
                    <p className="hero-description">Junte-se a nós nessa causa! 
                        Descubra como pequenas atitudes podem preservar o meio ambiente e garantir um futuro melhor para todos.</p>
                    <button className="hero-button">
                        <i className="bi bi-arrow-right"></i>
                        <span>Começar</span>
                    </button>
                </div>
                <img className="hero-image" src="/assets/plant-save.png" alt="Mãos juntas segurando broto de árvore" />
                <div className="hero-number">
                    <div className="hero-number-content-1">
                        <p className="hero-number-value">+3.500</p>
                        <p className="hero-number-label">árvores plantadas</p>
                    </div>
                    <span className="hero-number-separator-1"></span>
                    <div className="hero-number-content-2">
                        <p className="hero-number-value">+15</p>
                        <p className="hero-number-label">milhões de árvores no mundo</p>
                    </div>
                    <span className="hero-number-separator-2"></span>
                    <div className="hero-number-content-3">
                        <p className="hero-number-value">+1</p>
                        <p className="hero-number-label">árvore plantada por dia</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;