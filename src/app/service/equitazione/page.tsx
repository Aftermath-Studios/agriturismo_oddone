import "../service.css";

export default function EquitazionePage() {
	return (
		<div className="service-container">
			{/* Hero Section */}
			<section className="service-hero">
				<h1>Escursione Equitazione</h1>
				<p>Avventure a Cavallo nella Val Bormida</p>
				<p className="hero-subtitle">
					Scopri i sentieri liguri da una prospettiva completamente nuova
				</p>
			</section>

			{/* Overview Section */}
			<section className="overview-section">
				<div className="overview-content">
					<h2>Cavalcate Guidate Tailor-Made</h2>
					<p>
						L'Agriturismo Oddone organizza cavalcate guidate su richiesta, completamente personalizzate in base alle tue esigenze. 
						Immergiti nella natura della Val Bormida a ritmo lento e consapevole, scoprendo i paesaggi più suggestivi 
						dell'entroterra ligure.
					</p>
					<p>
						Immagina una romantica cavalcata nella neve, seguita da una cena a lume di candela davanti al caminetto. 
						Organizziamo anche cavalcate per matrimoni e occasioni speciali. I nostri cavalli ben addestrati 
						garantiscono un'esperienza sicura e indimenticabile per tutti i livelli.
					</p>
				</div>
			</section>

			{/* Service Features */}
			<section className="features-section">
				<h2>Cosa Offriamo</h2>
				<div className="features-grid">
					<div className="feature-card">
						<h3>🐴 Cavalli Selezionati</h3>
						<p>
							Cavalli docili, ben addestrati e perfetti per principianti e esperti. 
							Ogni cavallo è selezionato con cura per garantire una ride sicura e piacevole.
						</p>
					</div>

					<div className="feature-card">
						<h3>👨‍🏫 Guide Esperte</h3>
						<p>
							Istruttori qualificati e appassionati di equitazione ti accompagnano 
							durante tutta l'escursione per garantire sicurezza e divertimento.
						</p>
					</div>

					<div className="feature-card">
						<h3>🛣️ Percorsi Panoramici</h3>
						<p>
							Sentieri appositamente selezionati che offrono viste mozzafiato della Liguria, 
							passando per boschi, prati e zone di interesse storico-naturalistico.
						</p>
					</div>

					<div className="feature-card">
						<h3>🌄 Ritmo Rilassante</h3>
						<p>
							Un'esperienza pensata per rilassarsi e connettersi con la natura. 
							Perfetto per chi vuole evadere dal caos quotidiano.
						</p>
					</div>

					<div className="feature-card">
						<h3>👥 Gruppi Intimi</h3>
						<p>
							Piccoli gruppi garantiscono attenzione personalizzata e un'atmosfera 
							tranquilla durante la vostra avventura equestre.
						</p>
					</div>

					<div className="feature-card">
						<h3>🥾 Equipaggiamento Completo</h3>
						<p>
							Forniamo tutto l'attrezzatura necessaria: sella, briglie, casco di sicurezza 
							e indumenti protettivi se necessario.
						</p>
					</div>
				</div>
			</section>

			{/* Experience Levels */}
			<section className="levels-section">
				<h2>Livelli di Esperienza</h2>

				<div className="levels-grid">
					<div className="level-card">
						<h3>🟢 Principiante</h3>
						<ul>
							<li>Durata: 2-3 ore</li>
							<li>Distanza: 8-10 km</li>
							<li>Esperienza: Nessuna richiesta</li>
							<li>Adatto a: Famiglie, bambini (dai 6 anni)</li>
						</ul>
						<p className="level-description">
							Lezioni di base sulla gestione del cavallo, camminate tranquille 
							per imparare le basi dell'equitazione.
						</p>
					</div>

					<div className="level-card">
						<h3>🟡 Intermedio</h3>
						<ul>
							<li>Durata: 3-4 ore</li>
							<li>Distanza: 12-15 km</li>
							<li>Esperienza: Alcune precedenti</li>
							<li>Adatto a: Cavalieri con esperienza</li>
						</ul>
						<p className="level-description">
							Escursioni più lunghe con piccoli tratti al trotto e galoppo, 
							esplorando zone più affascinanti della Val Bormida.
						</p>
					</div>

					<div className="level-card">
						<h3>🔴 Avanzato</h3>
						<ul>
							<li>Durata: Mezza giornata/Giornata intera</li>
							<li>Distanza: 20-30 km</li>
							<li>Esperienza: Richiesta esperienza</li>
							<li>Adatto a: Cavalieri esperti</li>
						</ul>
						<p className="level-description">
							Avventure a cavallo estese con galoppi adrenalinici e sentieri 
							più impegnativi per veri appassionati di equitazione.
						</p>
					</div>
				</div>
			</section>

			{/* Popular Routes */}
			<section className="trails-section">
				<h2>Percorsi Disponibili</h2>

				<div className="trails-grid">
					<div className="trail-card">
						<img src="/IMG-18.PNG" alt="Vallata della Bormida" />
						<h3>Vallata della Bormida</h3>
						<p>Un percorso rilassante che segue il corso del fiume Bormida, 
						passando per borghi caratteristici e panorami suggestivi.</p>
						<span className="difficulty">Livello: Principiante - Intermedio</span>
					</div>

					<div className="trail-card">
						<img src="/IMG-19.JPG" alt="Sentieri Storici" />
						<h3>Sentieri Storici della Liguria</h3>
						<p>Cavalca lungo antichi sentieri che collegavano i villaggi liguri, 
						scoprendo la storia e la cultura locale.</p>
						<span className="difficulty">Livello: Intermedio</span>
					</div>

					<div className="trail-card">
						<img src="/20 (1).png" alt="Montagne Liguri" />
						<h3>Crinale delle Montagne</h3>
						<p>Un'escursione adatta a cavalieri esperti che offre viste panoramiche 
						a 360° della Liguria, da mare a montagna.</p>
						<span className="difficulty">Livello: Avanzato</span>
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
							<li>Pantaloni lunghi e comodi (jeans o pantaloni da trekking)</li>
							<li>Scarpe chiuse con suola robusta</li>
							<li>Giacca impermeabile leggera</li>
							<li>Berretto o cappello (consigliato)</li>
						</ul>
					</div>
					<div className="prep-item">
						<h3>Cosa Portare</h3>
						<ul>
							<li>Protector solare e crema labbra</li>
							<li>Bottiglia d'acqua (consigliamo 2-3 litri)</li>
							<li>Snack leggeri (frutta, barrette)</li>
							<li>Documento di identità</li>
						</ul>
					</div>
					<div className="prep-item">
						<h3>Altre Informazioni</h3>
						<ul>
							<li>Nessuna esperienza precedente necessaria (ad eccezione livello avanzato)</li>
							<li>Forniamo casco e equipaggiamento di sicurezza</li>
							<li>Montiamo i partecipanti su cavalli adeguati al loro peso e altezza</li>
							<li>Lezione di sicurezza prima di iniziare</li>
						</ul>
					</div>
				</div>
			</section>

			{/* Package Info */}
			<section className="package-section">
				<h2>Escursioni Equestri Disponibili</h2>
				<div className="package-content">
					<div className="package-col">
						<h3>Opzioni</h3>
						<ul>
							<li>✓ Escursione Breve (2-3 ore)</li>
							<li>✓ Escursione Mezza Giornata (4-5 ore)</li>
							<li>✓ Escursione Giornata Intera (7-8 ore)</li>
							<li>✓ Lezioni Private</li>
							<li>✓ Escursioni a Cavallo + Alloggio</li>
						</ul>
					</div>
					<div className="package-col">
						<h3>Include</h3>
						<ul>
							<li>+ Cavallo selezionato</li>
							<li>+ Guida esperta</li>
							<li>+ Casco e equipaggiamento</li>
							<li>+ Assicurazione</li>
							<li>+ Foto ricordo dell'escursione</li>
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
				<h2>Scopri l'Avventura Equestre</h2>
				<div className="gallery-grid">
					<div className="gallery-item">
						<img src="/IMG-17.PNG" alt="Cavalli" />
						<p>I Nostri Cavalli</p>
					</div>
					<div className="gallery-item">
						<img src="/IMG-18.jpg" alt="Panorama" />
						<p>Paesaggi Suggestivi</p>
					</div>
					<div className="gallery-item">
						<img src="/Oddone-1.png" alt="Struttura" />
						<p>Strutture Equestri</p>
					</div>
					<div className="gallery-item">
						<img src="/header.jpg" alt="Natura" />
						<p>Nella Natura</p>
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="service-cta">
				<h2>Vieni a Cavallo con Noi</h2>
				<p>Scopri la magia dell'equitazione nella bellissima Val Bormida</p>
				<a href="https://wa.me/+39" target="_blank" className="cta-btn">
					Prenota la Tua Escursione
				</a>
			</section>
		</div>
	);
}
