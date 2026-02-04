import "../service.css";

export default function EquitazionePage() {
    return (
        <div className="service-container">
            {/* Hero Section */}
            <section className="service-hero">
                <h1>Escursioni a Cavallo</h1>
                <p>Un modo antico e nobile di vivere la montagna</p>
                <p className="hero-subtitle">
                    Scopri l'entroterra ligure al ritmo del passo del cavallo
                </p>
            </section>

            {/* L'Atmosfera & L'Abbinamento */}
            <section className="overview-section">
                <div className="overview-content">
                    <h2>L'Atmosfera</h2>
                    <p>
                        Scoprire l'entroterra ligure al ritmo del passo del cavallo è un'esperienza unica. 
                        È un modo antico e nobile di vivere la montagna, riconnettendosi con la natura 
                        attraverso una prospettiva lenta e affascinante.
                    </p>
                    
                    <div className="highlight-box" style={{marginTop: '2rem', padding: '2rem', backgroundColor: '#f9f9f9', borderRadius: '8px'}}>
                        <h3>L'Abbinamento Perfetto</h3>
                        <p style={{fontStyle: 'italic', fontSize: '1.1rem'}}>
                            "È l'attività perfetta per chi vuole vivere l'avventura senza lo sforzo fisico della MTB, 
                            ma con la stessa dose di meraviglia."
                        </p>
                    </div>
                </div>
            </section>

            {/* Il Servizio */}
            <section className="features-section">
                <h2>Il Servizio</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <h3>📅 Su Richiesta</h3>
                        <p>
                            Le uscite non sono standardizzate, ma vengono organizzate specificamente 
                            su richiesta per garantire un'esperienza dedicata.
                        </p>
                    </div>

                    <div className="feature-card">
                        <h3>🤠 Personale Esperto</h3>
                        <p>
                            Ogni uscita è coordinata da personale esperto e qualificato, 
                            che vi accompagnerà alla scoperta del territorio.
                        </p>
                    </div>

                    <div className="feature-card">
                        <h3>🛡️ Massima Sicurezza</h3>
                        <p>
                            Grazie alla supervisione delle nostre guide, garantiamo la massima 
                            sicurezza durante l'escursione, rendendo l'attività adatta anche ai principianti assoluti.
                        </p>
                    </div>
                </div>
            </section>

            {/* Galleria */}
            <section className="service-gallery">
                <h2>Scorci dell'Entroterra</h2>
                <div className="gallery-grid">
                    <div className="gallery-item">
                        <img src="/IMG-17.PNG" alt="Cavalli" />
                    </div>
                    <div className="gallery-item">
                        <img src="/IMG-18.jpg" alt="Panorama Ligure" />
                    </div>
                    <div className="gallery-item">
                        <img src="/Oddone-1.png" alt="Natura" />
                    </div>
                    <div className="gallery-item">
                        <img src="/header.jpg" alt="Avventura" />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="service-cta">
                <h2>Prenota la tua Uscita</h2>
                <p>Contattaci per organizzare la tua avventura a cavallo su misura.</p>
                <a href="https://wa.me/+39" target="_blank" rel="noopener noreferrer" className="cta-btn">
                    Richiedi Informazioni
                </a>
            </section>
        </div>
    );
}