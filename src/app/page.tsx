import Image from "next/image";
import "./page.css";

export default function Home() {
	return (
		<div className="home-container">
			{/* Hero Section */}
			<section className="hero-section">
				<div className="hero-content">
					<h1>Tour An E-Bike a Bardineto</h1>
					<p className="hero-subtitle">Agriturismo Oddone Wild Weekender</p>
					<p className="hero-description">
						Sei pronto per un'esperienza MTB vera, lontano dalla folla dei bike park?
					</p>
					<a href="https://wa.me/+39" target="_blank" className="cta-button">
						Prenota Ora
					</a>
				</div>
				<div className="hero-image">
					<img src="/header.jpg" alt="Mountain Bike Adventure" />
				</div>
			</section>

			{/* Main Content Section */}
			<section className="content-section">
				<div className="section-container">
					<h2>Ti aspettiamo a Bardineto</h2>
					<p>
						Nel cuore dell'entroterra ligure, per scoprire sentieri epici e panorami nascosti che solo una guida locale conosce. 
						Esplora le vallate della Val Bormida, con percorsi adatti a qualsiasi livello, da principianti ad esperti, 
						non perdendo mai la bellezza dei panorami e dei posti che offrono.
					</p>
				</div>
			</section>

			{/* Gallery Section */}
			<section className="gallery-section">
				<h2>Scopri i Nostri Sentieri</h2>
				<div className="gallery-grid">
					<div className="gallery-item">
						<img src="/Discesa_da_Bardineto.mp4" alt="Discesa da Bardineto" />
						<p>Discesa da Bardineto</p>
					</div>
					<div className="gallery-item">
						<img src="/10 (1).jpg" alt="Panorama Val Bormida" />
						<p>Panorama Val Bormida</p>
					</div>
					<div className="gallery-item">
						<img src="/IMG-18.jpg" alt="Sentieri Epici" />
						<p>Sentieri Epici</p>
					</div>
					<div className="gallery-item">
						<img src="/20 (6).jpg" alt="Vista Panoramica" />
						<p>Vista Panoramica</p>
					</div>
				</div>
			</section>

			{/* Services Highlight */}
			<section className="services-highlight">
				<h2>I Nostri Servizi Bike-Friendly</h2>
				<div className="services-grid">
					<div className="service-card">
						<h3>🏆 Certificazione & Sicurezza</h3>
						<p>Affidati unicamente a una Guida Certificata ANMB (Accademia Nazionale di Mountain Bike)</p>
					</div>
					<div className="service-card">
						<h3>👥 Gruppi Ristretti</h3>
						<p>Massimo 6-10 persone per un'esperienza autentica e personalizzata</p>
					</div>
					<div className="service-card">
						<h3>⚡ E-Bike Friendly</h3>
						<p>Noleggio di mountain bike elettriche per affrontare qualsiasi percorso con un sorriso</p>
					</div>
					<div className="service-card">
						<h3>🚐 Shuttle Service</h3>
						<p>Massimizza il tempo sul single track con il nostro servizio navetta professionale</p>
					</div>
				</div>
			</section>

			{/* Call to Action */}
			<section className="cta-section">
				<h2>Il Tuo Weekend "Pensa solo a pedalare"</h2>
				<p>
					All'Agriturismo Oddone, non ti offriamo solo l'avventura, ma anche il recupero perfetto. 
					Ti proponiamo il pacchetto weekend completo con alloggio, escursioni guidate e ottima cucina.
				</p>
				<a href="/offers" className="cta-button">Scopri i Dettagli</a>
			</section>

			{/* Social Section */}
			<section className="social-section">
				<h2>Seguici sui Social</h2>
				<p>Vedi i luoghi epici, i video dei sentieri e l'atmosfera dell'Agriturismo Oddone</p>
				<div className="hashtags">
					<span>#AgriturismoOddone</span>
					<span>#Bardineto</span>
					<span>#LiguriaMTB</span>
					<span>#EbikeLife</span>
					<span>#AgriturismoBikeFriendly</span>
				</div>
			</section>
		</div>
	);
}
