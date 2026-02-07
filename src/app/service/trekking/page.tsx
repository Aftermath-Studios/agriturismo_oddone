import "../service.css";

export default function TrekkingPage() {
	return (
		<div className="service-container">
			{/* Hero Section */}
			<section className="service-hero">
				<h1>Escursione Trekking</h1>
				<p>Bardineto, una crocevia incredibile di sentieri.</p>
				<p className="hero-subtitle">
					Esplora i panorami mozzafiato di Bardinto, dove si possono fare delle semplici cammionate, ma con un'immersione totale tra i faggi secolari e i resti delle fortificazioni napoleoniche che circondano la vallata.
				</p>
			</section>

			{/* Overview Section */}
			<section className="overview-section">
				<div className="overview-content">
					<h2>Passeggiate Panoramiche Guidate</h2>
					<p>
						L'Agriturismo Oddone è il luogo perfetto per persone che amano il relax, le lunghe passeggiate e i panorami scenici. 
						Situati a 20 km dal mare e dalle montagne, offriamo camminate guidate attraverso l'incantevole paesaggio di Bardineto, 
						ai piedi del Monte Carmo.
					</p>
					<p>
						A piedi, al tuo ritmo, scopri panorami mozzafiato, borghi autentici e la cultura della Val Bormida. 
						Le nostre guide ti accompagnano lungo sentieri ben mantenuti, condividendo storie della regione, 
						della flora e fauna locale, fermandosi nei punti panoramici più suggestivi.
					</p>
				</div>
			</section>

			{/* Service Features */}
			<section className="features-section">
				<h2>Cosa Offriamo</h2>
				<div className="features-grid">
					<div className="feature-card">
						<h3>🥾 Guide Esperte</h3>
						<p>
							Guide locali appassionate che conoscono ogni sentiero, storia e paesaggio. 
							Condividono la loro conoscenza e amore per la regione.
						</p>
					</div>

					<div className="feature-card">
						<h3>🗺️ Percorsi Differenziati</h3>
						<p>
							Escursioni adatte a tutti i livelli: dai principianti agli escursionisti esperti. 
							Scegli il tuo ritmo e il tuo livello di difficoltà.
						</p>
					</div>

					<div className="feature-card">
						<h3>🍽️ Pause Gastronomiche</h3>
						<p>
							Degustazioni di prodotti locali durante il trekking. 
							Assaggia piatti tradizionali in location suggestive.
						</p>
					</div>

					<div className="feature-card">
						<h3>📷 Momenti Fotografici</h3>
						<p>
							Fermate nei punti panoramici più importanti per catturare foto indimenticabili. 
							Condivisione di immagini professionali dopo l'escursione.
						</p>
					</div>

					<div className="feature-card">
						<h3>🎒 Zaini e Equipaggiamento</h3>
						<p>
							Forniamo zaini ergonomici, bastoni da trekking e tutto l'equipaggiamento necessario 
							per un'escursione confortevole e sicura.
						</p>
					</div>

					<div className="feature-card">
						<h3>🚌 Trasporti Organizzati</h3>
						<p>
							Transfer da Agriturismo Oddone ai punti di partenza dei trekking. 
							Nessuno stress logistico, solo divertimento!
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
							<li>Distanza: 8-12 km</li>
							<li>Dislivello: 200-400 m</li>
							<li>Durata: 3-4 ore</li>
							<li>Perfetto per: Famiglie, bambini</li>
						</ul>
						<p className="level-description">
							Camminate facili e tranquille attraverso sentieri ben mantenuti 
							con viste panoramiche della vallata.
						</p>
					</div>

					<div className="level-card">
						<h3>🟡 Intermedio</h3>
						<ul>
							<li>Distanza: 12-18 km</li>
							<li>Dislivello: 500-800 m</li>
							<li>Durata: 5-6 ore</li>
							<li>Perfetto per: Escursionisti regolari</li>
						</ul>
						<p className="level-description">
							Percorsi più impegnativi con salite gradualmente più ripide 
							e paesaggi sempre più suggestivi.
						</p>
					</div>

					<div className="level-card">
						<h3>🔴 Avanzato</h3>
						<ul>
							<li>Distanza: 18-25 km</li>
							<li>Dislivello: 900-1200 m</li>
							<li>Durata: 7-8 ore</li>
							<li>Perfetto per: Escursionisti esperti</li>
						</ul>
						<p className="level-description">
							Trekking impegnativi con viste panoramiche a 360° dalla cima. 
							Per chi ama le sfide e la montagna vera.
						</p>
					</div>
				</div>
			</section>

			{/* Popular Routes */}
			<section className="trails-section">
				<h2>Percorsi Trekking Disponibili</h2>

				<div className="trails-grid">
					<div className="trail-card">
						<img src="/10-2.jpg" alt="Trekking Val Bormida" />
						<h3>Trekking della Val Bormida</h3>
						<p>Un affascinante percorso che segue il corso del fiume dal fondovalle, 
						attraversando boschi di castagni e scoprendo borghi caratteristici.</p>
						<span className="difficulty">Livello: Principiante - Intermedio</span>
					</div>

					<div className="trail-card">
						<img src="/IMG-18.PNG" alt="Crinale delle Montagne" />
						<h3>Crinale delle Montagne Liguri</h3>
						<p>Un trekking lungo lo spartiacque tra mare e montagna, 
						con viste panoramiche a 360° della Liguria al tramonto.</p>
						<span className="difficulty">Livello: Intermedio - Avanzato</span>
					</div>

					<div className="trail-card">
						<img src="/IMG-19.JPG" alt="Sentieri Storici" />
						<h3>Sentieri Storici Via dell'Olio</h3>
						<p>Cammina lungo gli antichi sentieri che collegavano i terrazzi di ulivi, 
						scoprendo la storia agricola della Liguria e degustando oli locali.</p>
						<span className="difficulty">Livello: Principiante - Intermedio</span>
					</div>
				</div>
			</section>

			{/* Flora and Fauna */}
			<section className="nature-section">
				<h2>Scopri la Biodiversità Locale</h2>
				<div className="nature-grid">
					<div className="nature-card">
						<h3>🌿 Flora Ligure</h3>
						<p>
							Camminerai tra castagni centenari, faggi, lecci e orchidee selvatiche. 
							Le nostre guide ti insegneranno le proprietà delle piante locali.
						</p>
					</div>
					<div className="nature-card">
						<h3>🦌 Fauna Locale</h3>
						<p>
							Scopri i caprioli, i cinghiali, gli sparvieri e moltissimi uccelli. 
							Prova il brivido di avvistare la fauna selvatica nel suo habitat naturale.
						</p>
					</div>
					<div className="nature-card">
						<h3>🏞️ Geologia e Paesaggi</h3>
						<p>
							Impara come l'azione dei fiumi ha modellato le valli liguri. 
							Scopri le rocce affioranti e la formazione geologica della regione.
						</p>
					</div>
				</div>
			</section>

			{/* What to Bring */}
			<section className="preparation-section">
				<h2>Come Prepararsi</h2>
				<div className="preparation-grid">
					<div className="prep-item">
						<h3>Abbigliamento Consigliato</h3>
						<ul>
							<li>Scarpe da trekking robuste e comode</li>
							<li>Pantaloni lunghi (evita shorts)</li>
							<li>Giacca impermeabile leggera</li>
							<li>Maglietta traspirante (lana merino)</li>
						</ul>
					</div>
					<div className="prep-item">
						<h3>Cosa Portare</h3>
						<ul>
							<li>Bottiglia d'acqua (2-3 litri)</li>
							<li>Snack energetici (frutta secca, barrette)</li>
							<li>Protezione solare e repellente insetti</li>
							<li>Documento di identità</li>
						</ul>
					</div>
					<div className="prep-item">
						<h3>Consigli Utili</h3>
						<ul>
							<li>Arriva riposato e idratato</li>
							<li>Allenati la settimana prima (per livelli alti)</li>
							<li>Scarpe già collaudate, non nuove!</li>
							<li>Carica il telefono per foto meravigliose</li>
						</ul>
					</div>
				</div>
			</section>

			{/* Package Info */}
			<section className="package-section">
				<h2>Escursioni Trekking Disponibili</h2>
				<div className="package-content">
					<div className="package-col">
						<h3>Opzioni</h3>
						<ul>
							<li>✓ Trekking Mezza Giornata (3-4 ore)</li>
							<li>✓ Trekking Giornata Intera (7-8 ore)</li>
							<li>✓ Trekking Multigiorno</li>
							<li>✓ Trekking + Cena</li>
							<li>✓ Trekking + Alloggio Oddone</li>
						</ul>
					</div>
					<div className="package-col">
						<h3>Include</h3>
						<ul>
							<li>+ Guida esperta locale</li>
							<li>+ Zaino e bastoni trekking</li>
							<li>+ Snack durante il percorso</li>
							<li>+ Assicurazione</li>
							<li>+ Foto della giornata</li>
						</ul>
					</div>
				</div>
				<div className="pricing-box">
					<span className="price">Da concordare</span>
					<p>Contattaci per quotazioni personalizzate</p>
				</div>
			</section>

			{/* Gallery */}
			<section className="service-gallery">
				<h2>Scopri i Nostri Sentieri</h2>
				<div className="gallery-grid">
					<div className="gallery-item">
						<img src="/10-1.jpg" alt="Panorama Trekking" />
						<p>Panorami Mozzafiato</p>
					</div>
					<div className="gallery-item">
						<img src="/20-6.jpg" alt="Sentieri" />
						<p>Sentieri Ben Mantenuti</p>
					</div>
					<div className="gallery-item">
						<img src="/IMG-20.jpg" alt="Natura" />
						<p>Immersione nella Natura</p>
					</div>
					<div className="gallery-item">
						<img src="/header.jpg" alt="Gruppo" />
						<p>Esperienze di Gruppo</p>
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="service-cta">
				<h2>Vieni a Camminare con Noi</h2>
				<p>Scopri i sentieri più belli della Liguria con le nostre guide esperte</p>
				<a href="https://wa.me/+39" target="_blank" className="cta-btn">
					Prenota il Tuo Trekking
				</a>
			</section>
		</div>
	);
}
