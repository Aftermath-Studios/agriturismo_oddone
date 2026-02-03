import "./offers.css";

export default function Offers() {
	return (
		<div className="offers-container">
			{/* Hero Section */}
			<section className="offers-hero">
				<h1>Agriturismo Oddone</h1>
				<p>Il Tuo Rifugio Completo in Val Bormida</p>
			</section>

			{/* Main Description */}
			<section className="main-description">
				<div className="description-content">
					<h2>Benvenuto al Tuo Rifugio Ideale</h2>
					<p>
						Oddone non è solo un punto di partenza per le tue avventure MTB, è una struttura rigenerante 
						dove l'avventura incontra il gusto autentico della Liguria.
					</p>
					<p>
						Dopo l'adrenalina dei sentieri, ti aspettano alloggi confortevoli dove la semplicità è sinonimo 
						di benessere e un risveglio rigenerato è garantito.
					</p>
				</div>
			</section>

			{/* Accommodation Section */}
			<section className="accommodation-section">
				<h2>I Nostri Alloggi</h2>

				<div className="accommodation-grid">
					<div className="accommodation-card">
						<div className="card-image">
							<img src="/Oddone-1.png" alt="Camera confortevole" />
						</div>
						<div className="card-content">
							<h3>Camere Confortevoli</h3>
							<p>
								Riposa in un ambiente semplice ma accogliente, progettato per il tuo massimo conforto. 
								Ogni camera è dotata di tutto ciò di cui hai bisogno per un soggiorno rigenerante.
							</p>
							<ul>
								<li>Biancheria di qualità</li>
								<li>Riscaldamento confortevole</li>
								<li>Arredamento semplice e funzionale</li>
								<li>Atmosfera serena</li>
							</ul>
						</div>
					</div>

					<div className="accommodation-card">
						<div className="card-image">
							<img src="/IMG-18.PNG" alt="Aree comuni" />
						</div>
						<div className="card-content">
							<h3>Aree Comuni Accoglienti</h3>
							<p>
								Spazi comuni dove puoi rilassarti, conversare con altri ospiti e immergerti nell'atmosfera 
								autentica dell'agriturismo ligure.
							</p>
							<ul>
								<li>Zona living rilassante</li>
								<li>Giardino panoramico</li>
								<li>Spazi per socializzare</li>
								<li>Wifi disponibile</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* Dining Section */}
			<section className="dining-section">
				<h2>Gastronomia: La Cucina della Tradizione</h2>

				<div className="dining-intro">
					<p>
						La nostra Pensione Completa è il recupero perfetto dopo un'intensa giornata di avventure. 
						Pranzi e cene sono un momento conviviale di sapori della tradizione, ideali per ricaricare i muscoli!
					</p>
				</div>

				<div className="dining-grid">
					<div className="dining-card">
						<h3>🌅 Colazioni Energizzanti</h3>
						<p>
							Inizia la giornata con una colazione abbondante e nutriente, preparata con ingredienti locali 
							e freschi per darti l'energia giusta per l'avventura.
						</p>
						<ul>
							<li>Pane tostato fresco</li>
							<li>Marmellate fatte in casa</li>
							<li>Formaggi locali</li>
							<li>Caffè e bevande calde</li>
						</ul>
					</div>

					<div className="dining-card">
						<h3>🍝 Pranzi Rigeneranti</h3>
						<p>
							Piatti autentici della cucina ligure e italiana, preparati con ricette tradizionali 
							e ingredienti a km0 per una rigenerazione muscolare ottimale.
						</p>
						<ul>
							<li>Pasti equilibrati</li>
							<li>Piatti della tradizione</li>
							<li>Vini regionali</li>
							<li>Ingredienti freschi locali</li>
						</ul>
					</div>

					<div className="dining-card">
						<h3>🍷 Cene Conviviali</h3>
						<p>
							Cene in compagnia dove condividere le emozioni della giornata. Un momento di relax 
							con piatti deliziosi e l'ospitalità autentica ligure.
						</p>
						<ul>
							<li>Menu variato</li>
							<li>Specialità locali</li>
							<li>Dessert homemade</li>
							<li>Atmosfera calorosa</li>
						</ul>
					</div>
				</div>

				<div className="dining-highlight">
					<h3>Cos'è la Pensione Completa?</h3>
					<p>
						La nostra Pensione Completa include colazione, pranzo e cena per ogni giorno del tuo soggiorno. 
						Ogni pasto è preparato con cura, rispettando gli ingredienti stagionali e le tradizioni culinarie 
						della Liguria. Che tu sia vegano, vegetariano o con esigenze specifiche, comunica pure e adatteremo 
						i nostri piatti alle tue necessità.
					</p>
				</div>
			</section>

			{/* Beyond Biking Section */}
			<section className="beyond-biking">
				<h2>Oltre la Bici: Esperienze Complete</h2>

				<div className="experiences-grid">
					<div className="experience-card">
						<h3>🚴 Mountain Bike Guidate</h3>
						<p>
							Escursioni adatte a qualsiasi livello con guide certificate ANMB. 
							Scopri i sentieri più belli della Val Bormida e del Bardineto.
						</p>
					</div>

					<div className="experience-card">
						<h3>🥾 Passeggiate Panoramiche</h3>
						<p>
							Camminate relax nella natura ligure, perfette per chi vuole scoprire il territorio 
							a un ritmo più lento senza la bicicletta.
						</p>
					</div>

					<div className="experience-card">
						<h3>🐴 Avventure a Cavallo</h3>
						<p>
							Su richiesta, organizziamo cavalcate tra i sentieri e i panorami più suggestivi 
							della Val Bormida.
						</p>
					</div>

					<div className="experience-card">
						<h3>🧘 Relax e Benessere</h3>
						<p>
							Spazi tranquilli dove rigenerarti, fare yoga al tramonto o semplicemente rilassarti 
							immerso nella natura.
						</p>
					</div>
				</div>
			</section>

			{/* Sustainability Section */}
			<section className="sustainability-section">
				<h2>Turismo Attivo e Sostenibile</h2>

				<div className="sustainability-content">
					<p>
						Siamo il rifugio ideale per un turismo attivo e sostenibile che va oltre la bici. 
						Offriamo esperienze di relax, passeggiate panoramiche, avventure a cavallo e, 
						ovviamente, le migliori escursioni in mountain bike della zona.
					</p>

					<div className="sustainability-list">
						<div className="sustainability-item">
							<h4>♻️ Impatto Ambientale Minimo</h4>
							<p>Pratiche eco-friendly e ingredienti a km0</p>
						</div>

						<div className="sustainability-item">
							<h4>🌱 Comunità Locale</h4>
							<p>Supportiamo i produttori e i servizi locali</p>
						</div>

						<div className="sustainability-item">
							<h4>🏞️ Protezione del Territorio</h4>
							<p>Promuoviamo il turismo responsabile e consapevole</p>
						</div>
					</div>
				</div>
			</section>

			{/* Gallery Section */}
			<section className="offers-gallery">
				<h2>Scopri l'Atmosfera di Oddone</h2>
				<div className="gallery-grid">
					<div className="gallery-item">
						<img src="/Oddone-1.png" alt="Struttura Oddone" />
						<p>Struttura Accogliente</p>
					</div>
					<div className="gallery-item">
						<img src="/IMG-18.jpg" alt="Paesaggio" />
						<p>Panorami Liguri</p>
					</div>
					<div className="gallery-item">
						<img src="/IMG-20.jpg" alt="Natura" />
						<p>Natura Incontaminata</p>
					</div>
					<div className="gallery-item">
						<img src="/header.jpg" alt="Avventura" />
						<p>Avventure in MTB</p>
					</div>
				</div>
			</section>

			{/* Booking CTA */}
			<section className="offers-cta">
				<h2>Prenota il Tuo Soggiorno</h2>
				<p>Scopri i nostri pacchetti weekend "Wild Weekender" con alloggio, pasti completi e avventure guidate</p>
				<div className="cta-buttons">
					<a href="/services" className="btn-primary">Scopri i Pacchetti</a>
					<a href="https://wa.me/+39" target="_blank" className="btn-secondary">Contattaci</a>
				</div>
			</section>
		</div>
	);
}
