import "../service.css";

export default function FunghiPage() {
    return (
        <div className="service-container">
            {/* Hero Section */}
            <section className="service-hero">
                <h1>Raccolta Funghi</h1>
                <p>Alla ricerca del pregiato Fungo di Bardineto</p>
                <p className="hero-subtitle">
                    Un'esperienza esclusiva tra i boschi dell'Agriturismo Oddone
                </p>
            </section>

            {/* Overview Section - Il Privilegio */}
            <section className="overview-section">
                <div className="overview-content">
                    <h2>Un Servizio Esclusivo d'Autunno</h2>
                    <p>
                        In autunno, i nostri boschi si trasformano in una meta ambita per gli appassionati. 
                        L'Agriturismo Oddone offre ai suoi ospiti un vero privilegio: la possibilità, 
                        tramite un accesso riservato a pagamento, di cercare funghi direttamente nei boschi di nostra proprietà.
                    </p>
                    <p>
                        Immersi nel silenzio della natura, potrete dedicarvi alla ricerca del celebre 
                        <strong> Fungo di Bardineto</strong>, godendo della tranquillità e dell'esclusività 
                        dei nostri spazi privati.
                    </p>
                </div>
            </section>

            {/* Service Features - I Pilastri */}
            <section className="features-section">
                <h2>L'Esperienza</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <h3>🌲 Il Privilegio</h3>
                        <p>
                            Accedi ai boschi privati dell'Agriturismo. Un'opportunità unica per vivere 
                            la raccolta in un ambiente curato e riservato, lontano dalla folla.
                        </p>
                    </div>

                    <div className="feature-card">
                        <h3>🍽️ Dalla Terra alla Tavola</h3>
                        <p>
                            La soddisfazione continua dopo la raccolta. I frutti del bosco diventano spesso 
                            i protagonisti assoluti della nostra cucina tradizionale, trasformandosi 
                            in piatti deliziosi per le nostre cene rigeneranti.
                        </p>
                    </div>

                    <div className="feature-card">
                        <h3>🌍 Sostenibilità</h3>
                        <p>
                            Promuoviamo una raccolta etica e profondamente rispettosa del bosco e del suo ecosistema, 
                            in perfetta armonia con la nostra filosofia di turismo sostenibile.
                        </p>
                    </div>
                </div>
            </section>

            {/* Gallery (Mantenuta per layout grafico) */}
            <section className="service-gallery">
                <h2>I Colori del Bosco</h2>
                <div className="gallery-grid">
                    <div className="gallery-item">
                        <img src="/IMG-18.PNG" alt="Bosco in Autunno" />
                    </div>
                    <div className="gallery-item">
                        <img src="/IMG-19.JPG" alt="Funghi di Bardineto" />
                    </div>
                    <div className="gallery-item">
                        <img src="/10-1.jpg" alt="Natura Incontaminata" />
                    </div>
                    <div className="gallery-item">
                        <img src="/header.jpg" alt="Cena in Agriturismo" />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="service-cta">
                <h2>Prenota il Tuo Permesso</h2>
                <p>Assicurati l'accesso esclusivo ai nostri boschi per la stagione autunnale.</p>
                <a href="https://wa.me/+39" target="_blank" rel="noopener noreferrer" className="cta-btn">
                    Richiedi Disponibilità
                </a>
            </section>
        </div>
    );
}