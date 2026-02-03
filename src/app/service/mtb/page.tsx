import "../service.css";

export default function MTBPage() {
	return (
		<div className="service-container">
			{/* Hero Section */}
			<section className="service-hero">
				<h1>Escursione MTB</h1>
				<p>Avventure in Mountain Bike a Bardineto</p>
				<p className="hero-subtitle">
					Scopri i sentieri epici della Val Bormida con una guida certificata ANMB
				</p>
			</section>

			{/* Overview Section */}
			<section className="overview-section">
				<div className="overview-content">
					<h2>Escursioni MTB Panoramiche</h2>
					<p>
						L'Agriturismo Oddone offre escursioni in Mountain Bike sceniche e panoramiche attraverso la bellissima Val Bormida. 
						Situati a 20 km sia dal mare che dalle montagne, nel cuore di Bardineto ai piedi del Monte Carmo (1393 m), 
						siamo il punto di partenza ideale per chi ama le due ruote e la natura incontaminata.
					</p>
					<p>
						Esplora i sentieri dell'entroterra ligure con percorsi adatti a qualsiasi livello. 
						Da principianti ad esperti, scopri la bellezza paesaggistica della regione senza perdere un momento di adrenalina.
					</p>
				</div>
			</section>

			{/* Service Features */}
			<section className="features-section">
				<h2>Cosa Offriamo</h2>
				<div className="features-grid">
					<div className="feature-card">
						<h3>🏆 Guida Certificata ANMB</h3>
						<p>
							Affidati a una guida certificata dall'Accademia Nazionale di Mountain Bike. 
							Totale padronanza della tecnica e massima sicurezza su ogni traccia.
						</p>
					</div>

					<div className="feature-card">
						<h3>👥 Gruppi Ristretti (6-10 persone)</h3>
						<p>
							Attenzione totale alla tua preparazione, percorsi personalizzati in base al tuo livello 
							e un'esperienza di gruppo autentica e profonda.
						</p>
					</div>

					<div className="feature-card">
						<h3>🚴 Percorsi su Misura</h3>
						<p>
							Scegli il livello adatto a te: da principiante a esperto. Ogni percorso è progettato 
							per massimizzare il divertimento e l'adrenalina.
						</p>
					</div>

					<div className="feature-card">
						<h3>🚐 Shuttle Service</h3>
						<p>
							Massimizza il tempo sul single track! Il nostro servizio navetta professionale ti porta 
							dove vuoi, per percorsi ancora più epici.
						</p>
					</div>

					<div className="feature-card">
						<h3>⚡ E-Bike Disponibili</h3>
						<p>
							Su richiesta, noleggia una mountain bike elettrica per affrontare qualsiasi percorso 
							con un sorriso, indipendentemente dal tuo livello di fitness.
						</p>
					</div>

					<div className="feature-card">
						<h3>🔧 Supporto Tecnico</h3>
						<p>
							Deposito bici sicuro, area lavaggio e supporto tecnico durante l'escursione 
							per garantire la massima tranquillità.
						</p>
					</div>
				</div>
			</section>

			{/* Trail Levels */}
			<section className="levels-section">
				<h2>I Nostri Livelli di Difficoltà</h2>

				<div className="levels-grid">
					<div className="level-card">
						<h3>🟢 Principiante</h3>
						<ul>
							<li>Distanza: 15-20 km</li>
							<li>Dislivello: 300-500 m</li>
							<li>Difficoltà: Bassa</li>
							<li>Perfetto per: Famiglie e principianti</li>
						</ul>
						<p className="level-description">
							Sentieri facili e panoramici per scoprire la bellezza della Val Bormida senza sforzi eccessivi.
						</p>
					</div>

					<div className="level-card">
						<h3>🟡 Intermedio</h3>
						<ul>
							<li>Distanza: 25-35 km</li>
							<li>Dislivello: 700-1000 m</li>
							<li>Difficoltà: Media</li>
							<li>Perfetto per: Ciclisti esperti</li>
						</ul>
						<p className="level-description">
							Percorsi tecnici con bei panorami e sezioni single track impegnative ma divertenti.
						</p>
					</div>

					<div className="level-card">
						<h3>🔴 Avanzato</h3>
						<ul>
							<li>Distanza: 30-40 km</li>
							<li>Dislivello: 1000-1500 m</li>
							<li>Difficoltà: Alta</li>
							<li>Perfetto per: Esperti cercano adrenalina</li>
						</ul>
						<p className="level-description">
							Single track epici e tecnici per chi vuole l'adrenalina vera con panorami mozzafiato.
						</p>
					</div>
				</div>
			</section>

			{/* Popular Trails */}
			<section className="trails-section">
				<h2>Sentieri Popolare</h2>

				<div className="trails-grid">
					<div className="trail-card">
						<img src="/Discesa_da_Bardineto.mp4" alt="Discesa da Bardineto" />
						<h3>Discesa da Bardineto</h3>
						<p>Un'esperienza adrenalinica con vista spettacolare sulla Val Bormida. 
						Perfetto per chi ama la velocità e la tecnica.</p>
						<span className="difficulty">Livello: Intermedio</span>
					</div>

					<div className="trail-card">
						<img src="/Discesa_sentiero_7_Bardineto.mp4" alt="Sentiero 7" />
						<h3>Sentiero 7 Bardineto</h3>
						<p>Un affascinante percorso che serpeggia tra i boschi della Val Bormida 
						con panorami nascosti e passaggi tecnici.</p>
						<span className="difficulty">Livello: Intermedio</span>
					</div>

					<div className="trail-card">
						<img src="/Intermedio_di_Catalano.mp4" alt="Intermedio Catalano" />
						<h3>Intermedio Catalano</h3>
						<p>Un percorso che combina single track tecnico con viste panoramiche 
						della Liguria. Un must per chi ama le sfide.</p>
						<span className="difficulty">Livello: Avanzato</span>
					</div>
				</div>
			</section>

			{/* Package Info */}
			<section className="package-section">
				<h2>Pacchetto "Wild Weekender"</h2>
				<div className="package-content">
					<div className="package-col">
						<h3>Include</h3>
						<ul>
							<li>✓ 2 Giorni di Escursioni Guidate</li>
							<li>✓ 2 Notti Alloggio</li>
							<li>✓ Pensione Completa</li>
							<li>✓ Assicurazione R.C.</li>
							<li>✓ Deposito Bici & Area Lavaggio</li>
							<li>✓ Guida Certificata ANMB</li>
						</ul>
					</div>
					<div className="package-col">
						<h3>Extra Disponibili</h3>
						<ul>
							<li>+ Shuttle Locale (50€)</li>
							<li>+ Shuttle Litorale (90€)</li>
							<li>+ Noleggio E-Bike (40-50€/giorno)</li>
							<li>+ Trasporto Bici Privato</li>
							<li>+ Guide Private</li>
							<li>+ Lezioni Tecniche</li>
						</ul>
					</div>
				</div>
				<div className="pricing-box">
					<span className="price">270 €</span>
					<p>per persona (base doppia)</p>
				</div>
			</section>

			{/* Gallery */}
			<section className="service-gallery">
				<h2>Scopri l'Avventura</h2>
				<div className="gallery-grid">
					<div className="gallery-item">
						<img src="/10 (1).jpg" alt="Panorama MTB" />
						<p>Paesaggi Spettacolari</p>
					</div>
					<div className="gallery-item">
						<img src="/IMG-18.jpg" alt="Sentiero" />
						<p>Single Track Tecnici</p>
					</div>
					<div className="gallery-item">
						<img src="/20 (6).jpg" alt="Natura" />
						<p>Natura Incontaminata</p>
					</div>
					<div className="gallery-item">
						<img src="/IMG-20.jpg" alt="Avventura" />
						<p>Momenti Indimenticabili</p>
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="service-cta">
				<h2>Pronto per l'Avventura MTB?</h2>
				<p>Prenota la tua escursione oggi e scopri i sentieri epici di Bardineto</p>
				<a href="https://wa.me/+39" target="_blank" className="cta-btn">
					Contattaci su WhatsApp
				</a>
			</section>
		</div>
	);
}
