import Map from '@/components/Map/Map';
import "./location.css";

export default function Location() {
	return (
		<div className="location-container">
			{/* Hero Section */}
			<section className="location-hero">
				<h1>Dove Trovarci</h1>
				<p>Agriturismo Oddone - Nel Cuore della Val Bormida, Bardineto</p>
			</section>

			{/* Map Section */}
			<section className="map-section">
				<Map />
			</section>

			{/* Location Info */}
			<section className="location-info">
				<div className="info-container">
					<div className="info-card">
						<h2>📍 La Nostra Posizione</h2>
						<p>
							Agriturismo Oddone si trova a Bardineto, nel suggestivo entroterra ligure della Val Bormida. 
							Una posizione strategica che ti permette di accedere ai migliori sentieri MTB della regione, 
							immerso nella natura selvaggia della Liguria.
						</p>
						<div className="location-details">
							<p><strong>Comune:</strong> Bardineto, Savona</p>
							<p><strong>Regione:</strong> Liguria, Italia</p>
							<p><strong>Zona:</strong> Val Bormida</p>
						</div>
					</div>

					<div className="info-card">
						<h2>📞 Contattaci</h2>
						<p>Per informazioni, prenotazioni o domande, non esitare a raggiungerci:</p>
						<div className="contact-details">
							<a href="https://wa.me/+39" target="_blank" className="contact-link">
								📱 WhatsApp
							</a>
							<p className="contact-text">Il modo più veloce per contattarci e verificare la disponibilità</p>
						</div>
					</div>

					<div className="info-card">
						<h2>🛣️ Come Raggiungerci</h2>
						<p>
							Bardineto è facilmente raggiungibile dai principali centri liguri e dalle strade nazionali. 
							La struttura è posizionata strategicamente per permetterti di arrivare velocemente ai sentieri 
							più belli e alle location più suggestive della Val Bormida.
						</p>
						<div className="directions">
							<p><strong>Da Genova:</strong> Circa 1 ora e 45 minuti</p>
							<p><strong>Da Torino:</strong> Circa 2 ore</p>
							<p><strong>Da Milano:</strong> Circa 3 ore</p>
						</div>
					</div>
				</div>
			</section>

			{/* Highlights Section */}
			<section className="highlights-section">
				<h2>Perché Scegliere Bardineto e la Val Bormida?</h2>

				<div className="highlights-grid">
					<div className="highlight-card">
						<h3>🚴 Sentieri Epici</h3>
						<p>
							Accesso diretto ai migliori sentieri MTB della Liguria, dalle discese adrenaliniche 
							al single track impegnativo.
						</p>
					</div>

					<div className="highlight-card">
						<h3>🏔️ Panorami Incontaminati</h3>
						<p>
							Viste mozzafiato sulle vallate, montagne e la natura selvaggia dell'entroterra ligure, 
							lontano dalla massa turistica.
						</p>
					</div>

					<div className="highlight-card">
						<h3>🌲 Natura Autentica</h3>
						<p>
							Un ambiente incontaminato dove puoi immergerti completamente nella natura e scoprire 
							la vera Liguria.
						</p>
					</div>

					<div className="highlight-card">
						<h3>🏘️ Comunità Autentica</h3>
						<p>
							Incontra gente locale vera, scopri le tradizioni e vivi un'esperienza di turismo autentico 
							e sostenibile.
						</p>
					</div>

					<div className="highlight-card">
						<h3>🍽️ Gastronomia Locale</h3>
						<p>
							Assaggia i sapori autentici della cucina ligure con ingredienti locali a km0 
							preparati con tradizione.
						</p>
					</div>

					<div className="highlight-card">
						<h3>🌿 Turismo Sostenibile</h3>
						<p>
							Un modo responsabile di viaggiare, dove il turismo attivo incontra il benessere 
							e il rispetto dell'ambiente.
						</p>
					</div>
				</div>
			</section>

			{/* Nearby Attractions */}
			<section className="attractions-section">
				<h2>Cosa Esplorare Nelle Vicinanze</h2>

				<div className="attractions-grid">
					<div className="attraction-card">
						<h3>Finale Ligure</h3>
						<p>
							A circa 30 km: famosa meta per il turismo balneare e la mountain bike, 
							con spiagge bellissime e sentieri epici.
						</p>
					</div>

					<div className="attraction-card">
						<h3>Val Bormida</h3>
						<p>
							Cuore dei nostri sentieri, una valle selvaggia e incontaminata perfetta 
							per MTB e trekking.
						</p>
					</div>

					<div className="attraction-card">
						<h3>Giardini Botanici Hanbury</h3>
						<p>
							A circa 40 km: magnifici giardini botanici sulla costa ligure, 
							ideali per una gita rilassante.
						</p>
					</div>

					<div className="attraction-card">
						<h3>Genova</h3>
						<p>
							A circa 1 ora e 45 minuti: la città di Colombo, con il famoso Acquario 
							e il centro storico affascinante.
						</p>
					</div>
				</div>
			</section>

			{/* Gallery Section */}
			<section className="location-gallery">
				<h2>I Panorami di Bardineto</h2>
				<div className="gallery-grid">
					<div className="gallery-item">
						<img src="/10-1.jpg" alt="Panorama Val Bormida" />
						<p>Panorama Val Bormida</p>
					</div>
					<div className="gallery-item">
						<img src="/10-2.jpg" alt="Sentieri Epici" />
						<p>Sentieri Epici</p>
					</div>
					<div className="gallery-item">
						<img src="/20-1.png" alt="Vista dalla cima" />
						<p>Vista dalla Cima</p>
					</div>
					<div className="gallery-item">
						<img src="/IMG-20.jpg" alt="Natura Selvaggia" />
						<p>Natura Selvaggia</p>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="location-cta">
				<h2>Visita Bardineto</h2>
				<p>Scopri la bellezza della Val Bormida e vivi un'esperienza indimenticabile</p>
				<a href="/services" className="cta-button">Prenota la Tua Avventura</a>
			</section>
		</div>
	);
}