import "../service.css";

export default function FunghiPage() {
	return (
		<div className="service-container">
			{/* Hero Section */}
			<section className="service-hero">
				<h1>Escursione Funghi</h1>
				<p>Ricerca e Raccolta di Funghi nella Val Bormida</p>
				<p className="hero-subtitle">
					Scopri i segreti della micologia e i tesori nascosti della natura
				</p>
			</section>

			{/* Overview Section */}
			<section className="overview-section">
				<div className="overview-content">
					<h2>Raccolta di Funghi nei Nostri 93 Ettari</h2>
					<p>
						L'Agriturismo Oddone possiede 93 ettari di terreno dove i nostri ospiti hanno l'opportunità di raccogliere funghi. 
						Vendiamo anche funghi freschi, miele e patate locali, frutto della nostra conoscenza profonda 
						del territorio.
					</p>
					<p>
						La ricerca dei funghi è un'arte antica che richiede pazienza e conoscenza. Con le nostre guide esperte, 
						imparerai a identificare i funghi commestibili della zona, scoprirai la magia di camminare nei boschi 
						con lo sguardo rivolto al terreno. Un'esperienza unica, rigenerante e gustosa!
					</p>
				</div>
			</section>

			{/* Service Features */}
			<section className="features-section">
				<h2>Cosa Offriamo</h2>
				<div className="features-grid">
					<div className="feature-card">
						<h3>🍄 Guide Micologhe Esperte</h3>
						<p>
							Micologi esperti e patentati che conoscono ogni specie presente nella Val Bormida. 
							Condividono la loro passione e il loro sapere con entusiasmo.
						</p>
					</div>

					<div className="feature-card">
						<h3>🔬 Corso Pratico di Identificazione</h3>
						<p>
							Impara a riconoscere i funghi commestibili, i funghi velenosi e gli allucinogeni. 
							Scopri le caratteristiche distintive di ogni specie.
						</p>
					</div>

					<div className="feature-card">
						<h3>🧺 Cestini e Attrezzatura</h3>
						<p>
							Forniamo cestini, coltelli da funghi, lupe d'ingrandimento e libri di identificazione 
							per una raccolta sicura e completa.
						</p>
					</div>

					<div className="feature-card">
						<h3>🍽️ Preparazione Culinaria</h3>
						<p>
							Dopo la raccolta, prepariamo i tuoi funghi in Agriturismo Oddone. 
							Impara ricette tradizionali e gusta i frutti della tua raccolta!
						</p>
					</div>

					<div className="feature-card">
						<h3>📚 Lezioni Teoriche</h3>
						<p>
							Sessioni educative sulla ecologia dei funghi, i cicli biologici, 
							le simbiosi e l'importanza dei funghi nell'ecosistema.
						</p>
					</div>

					<div className="feature-card">
						<h3>🌍 Sostenibilità Ambientale</h3>
						<p>
							Impariamo a raccogliere in modo responsabile, preservando l'ecosistema 
							per le generazioni future.
						</p>
					</div>
				</div>
			</section>

			{/* Seasonal Information */}
			<section className="seasons-section">
				<h2>Calendario della Raccolta</h2>
				<p className="seasons-intro">
					La disponibilità di funghi varia a seconda della stagione. Ecco le migliori epoche per la raccolta:
				</p>

				<div className="seasons-grid">
					<div className="season-card">
						<h3>🌱 Primavera (Marzo - Maggio)</h3>
						<ul>
							<li>Porcini bianchi giovani</li>
							<li>Spugnole (Mitule)</li>
							<li>Ovoli bianchi</li>
							<li>Prataioli selvatici</li>
						</ul>
						<p className="season-note">Periodo migliore: metà aprile a maggio</p>
					</div>

					<div className="season-card">
						<h3>☀️ Estate (Giugno - Agosto)</h3>
						<ul>
							<li>Porcini di bosco</li>
							<li>Chiodini</li>
							<li>Finferli</li>
							<li>Gallinacci</li>
						</ul>
						<p className="season-note">Periodo migliore: dopo piogge estive</p>
					</div>

					<div className="season-card">
						<h3>🍂 Autunno (Settembre - Novembre)</h3>
						<ul>
							<li>Porcini (stagione principale)</li>
							<li>Ovoli rossi</li>
							<li>Tartufi neri (da novembre)</li>
							<li>Funghi di ferula</li>
						</ul>
						<p className="season-note">Periodo migliore: settembre - ottobre</p>
					</div>

					<div className="season-card">
						<h3>❄️ Inverno (Dicembre - Febbraio)</h3>
						<ul>
							<li>Tartufi neri pregiati</li>
							<li>Tartufi bianchi (gennaio-marzo)</li>
							<li>Funghi d'inverno</li>
							<li>Finferli invernali</li>
						</ul>
						<p className="season-note">Periodo migliore: dicembre - gennaio</p>
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
							<li>Durata: 3-4 ore</li>
							<li>Distanza: 6-8 km</li>
							<li>Difficoltà: Bassa</li>
							<li>Focus: Basics della micologia</li>
						</ul>
						<p className="level-description">
							Introduzione alla raccolta funghi con focus su specie sicure e comuni. 
							Perfetto per iniziare questa affascinante avventura.
						</p>
					</div>

					<div className="level-card">
						<h3>🟡 Intermedio</h3>
						<ul>
							<li>Durata: 4-5 ore</li>
							<li>Distanza: 8-10 km</li>
							<li>Difficoltà: Media</li>
							<li>Focus: Identificazione avanzata</li>
						</ul>
						<p className="level-description">
							Escursioni più lunghe con approfondimento su specie rare e identificazione 
							di funghi più sfidanti.
						</p>
					</div>

					<div className="level-card">
						<h3>🔴 Avanzato</h3>
						<ul>
							<li>Durata: 6-8 ore / Multigiorno</li>
							<li>Distanza: 12-15 km</li>
							<li>Difficoltà: Alta</li>
							<li>Focus: Ricerca tartufi e rari</li>
						</ul>
						<p className="level-description">
							Esperienza completa con ricerca di specie pregiate come tartufi, 
							porcini rari e funghi specializzati.
						</p>
					</div>
				</div>
			</section>

			{/* Mushroom Species */}
			<section className="species-section">
				<h2>Principali Specie della Val Bormida</h2>

				<div className="species-grid">
					<div className="species-card edible">
						<h4>🟢 Commestibili Principali</h4>
						<ul>
							<li><strong>Porcino (Boletus edulis)</strong> - Il Re dei Funghi</li>
							<li><strong>Ovolo (Amanita caesarea)</strong> - Delicato e prelibato</li>
							<li><strong>Chiodino (Armillaria mellea)</strong> - Ottimo per zuppe</li>
							<li><strong>Finferlo (Cantharellus)</strong> - Profumato e versatile</li>
						</ul>
					</div>

					<div className="species-card rare">
						<h4>🟡 Specie Rare e Pregiate</h4>
						<ul>
							<li><strong>Tartufo Nero (Tuber melanosporum)</strong> - Ricercato dai collezionisti</li>
							<li><strong>Tartufo Bianco (Tuber magnatum)</strong> - Profumo inebriante</li>
							<li><strong>Cespo di Riviera</strong> - Specialità ligure</li>
							<li><strong>Fungo di Ferula</strong> - Rarità locale</li>
						</ul>
					</div>

					<div className="species-card poisonous">
						<h4>🔴 Funghi Velenosi (Evitare!)</h4>
						<ul>
							<li><strong>Amanita phalloides</strong> - Mortale anche in piccole dosi</li>
							<li><strong>Amanita muscaria</strong> - Allucinogena e tossica</li>
							<li><strong>Boletus satanas</strong> - Causa gravi avvelenamenti</li>
							<li><strong>Lepiota brunneincarnatula</strong> - Veleno mortale</li>
						</ul>
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
							<li>Scarpe da trekking impermeabili</li>
							<li>Pantaloni lunghi e spessi</li>
							<li>Felpa o giacca leggera</li>
							<li>Cappello e guanti (stagioni fredde)</li>
						</ul>
					</div>
					<div className="prep-item">
						<h3>Cosa Portare</h3>
						<ul>
							<li>Bottiglia d'acqua (2-3 litri)</li>
							<li>Snack energetici</li>
							<li>Torcia frontale (mattine presto)</li>
							<li>Telefono per foto</li>
						</ul>
					</div>
					<div className="prep-item">
						<h3>Regole di Sicurezza</h3>
						<ul>
							<li>Raccogliere SOLO sotto guida</li>
							<li>Non assaggiare funghi sconosciuti</li>
							<li>Raccogliere con taglio (non strappo)</li>
							<li>Verificare sempre l'identificazione</li>
						</ul>
					</div>
				</div>
			</section>

			{/* Package Info */}
			<section className="package-section">
				<h2>Escursioni Micologiche Disponibili</h2>
				<div className="package-content">
					<div className="package-col">
						<h3>Opzioni</h3>
						<ul>
							<li>✓ Escursione Mezza Giornata</li>
							<li>✓ Escursione Giornata Intera</li>
							<li>✓ Corso Micologico Completo</li>
							<li>✓ Ricerca Tartufi Specializzata</li>
							<li>✓ Escursione + Cena Funghistica</li>
						</ul>
					</div>
					<div className="package-col">
						<h3>Include</h3>
						<ul>
							<li>+ Guida micologo esperto</li>
							<li>+ Cestino e attrezzatura</li>
							<li>+ Corso pratico</li>
							<li>+ Preparazione culinaria</li>
							<li>+ Assicurazione</li>
						</ul>
					</div>
				</div>
				<div className="pricing-box">
					<span className="price">Da concordare</span>
					<p>Contattaci per date e quotazioni</p>
				</div>
			</section>

			{/* Gallery */}
			<section className="service-gallery">
				<h2>Scopri il Mondo dei Funghi</h2>
				<div className="gallery-grid">
					<div className="gallery-item">
						<img src="/IMG-18.PNG" alt="Bosco di funghi" />
						<p>Boschi Rigogliosi</p>
					</div>
					<div className="gallery-item">
						<img src="/IMG-19.JPG" alt="Raccolta funghi" />
						<p>Raccolta Specializzata</p>
					</div>
					<div className="gallery-item">
						<img src="/10 (1).jpg" alt="Natura" />
						<p>Nel Cuore della Natura</p>
					</div>
					<div className="gallery-item">
						<img src="/header.jpg" alt="Cena" />
						<p>Cena Funghistica</p>
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="service-cta">
				<h2>Scopri il Mondo Affascinante dei Funghi</h2>
				<p>Unisciti alle nostre escursioni micoologiche e impara i segreti della raccolta</p>
				<a href="https://wa.me/+39" target="_blank" className="cta-btn">
					Prenota la Tua Escursione Funghi
				</a>
			</section>
		</div>
	);
}
