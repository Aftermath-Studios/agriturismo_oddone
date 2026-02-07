import "./services.css";

export default function Services() {
	return (
		<div className="services-container">
			{/* Hero Section */}
			<section className="services-hero">
				<h1>Tour An E-Bike a Bardineto</h1>
				<p>Escursioni Guidate Certificate ANMB con Agriturismo Oddone</p>
			</section>

			{/* Main Services */}
			<section className="main-services">
				<h2>I Nostri Servizi Bike-Friendly</h2>

				<div className="services-list">
					<div className="service-item">
						<h3>🏆 Certificazione & Sicurezza Zero Pensieri</h3>
						<p>
							Affidati unicamente a una Guida Certificata ANMB (Accademia Nazionale di Mountain Bike). 
							Non ti offriamo solo divertimento, ma la totale padronanza della tecnica e la massima sicurezza 
							su ogni traccia, dalla salita più impegnativa al single track più adrenalinico.
						</p>
					</div>

					<div className="service-item">
						<h3>👥 Gruppi Ristretti: L'Avventura su Misura</h3>
						<p>
							Dimentica i gruppi infiniti. Manteniamo il numero di partecipanti a un massimo di 6-10 persone. 
							Questo significa attenzione totale alla tua preparazione, percorsi personalizzati in base al tuo livello 
							e un'esperienza di gruppo autentica e profonda.
						</p>
					</div>

					<div className="service-item">
						<h3>⚡ Massimo Divertimento & ZERO Sforzi Inutili</h3>
						<p>
							Non sprecare energie sui trasferimenti! Garantiamo percorsi epici e spettacolari. 
							Per massimizzare il tempo che passi sul single track, puoi richiedere il nostro servizio navetta (shuttle) 
							professionale, quotato a parte in base all'itinerario scelto (Locale o Litorale).
						</p>
					</div>

					<div className="service-item">
						<h3>🚴 E-Bike Friendly: Turismo Attivo e Sostenibile</h3>
						<p>
							L'Agriturismo Oddone arricchisce l'esperienza per un turismo attivo e sostenibile offrendo esperienze 
							in mountain bike e, su richiesta, organizziamo Tour An E-Bike (MTB elettriche) per affrontare qualsiasi 
							percorso con un sorriso.
						</p>
					</div>
				</div>
			</section>

			{/* Wild Weekender Package */}
			<section className="package-section">
				<h2>Il Pacchetto Wild Weekender</h2>
				<p className="package-intro">
					Il Tuo Weekend "Pensa solo a pedalare" all'Agriturismo Oddone
				</p>

				<div className="package-content">
					<div className="package-highlights">
						<h3>Cosa Include</h3>
						<ul className="highlights-list">
							<li>✓ 2 Notti in Alloggi Confortevoli (Base doppia o Condivisione)</li>
							<li>✓ Pensione Completa: 2 Cene, 2 Colazioni, 2 Pranzi</li>
							<li>✓ Ottima Cucina di Tradizione Ligure</li>
							<li>✓ 2 Giorni di Escursioni con Guida Certificata ANMB</li>
							<li>✓ Assicurazione: Copertura R.C. professionale</li>
							<li>✓ Deposito Bici Sicuro e Area Lavaggio</li>
						</ul>
					</div>

					<div className="package-price">
						<h3>Prezzo Base</h3>
						<div className="price-box">
							<span className="price">270 €</span>
							<p>per persona</p>
							<p className="small">(Base doppia)</p>
						</div>
					</div>
				</div>

				<div className="note-box">
					<h4>Nota per i Singoli</h4>
					<p>
						Se viaggi da solo, puoi scegliere l'opzione "Condivisione Stanza" per essere abbinato a un altro partecipante 
						del gruppo (stesso costo del duo). Se desideri una stanza tutta per te, si applica il supplemento singola 
						(pagando la tariffa adeguata singolo della stanza).
					</p>
				</div>
			</section>

			{/* Extra Services */}
			<section className="extra-services">
				<h2>Servizi Extra e Opzionali</h2>

				<div className="extra-grid">
					<div className="extra-item">
						<h4>🚐 Shuttle Locale</h4>
						<p>Val Bormida - 3 corse</p>
						<span className="price-small">50 € (a persona)</span>
					</div>

					<div className="extra-item">
						<h4>🚐 Shuttle Litorale</h4>
						<p>Es. Finale Ligure - 2 corse</p>
						<span className="price-small">90 € (a persona)</span>
					</div>

					<div className="extra-item">
						<h4>⚡ Noleggio E-Bike</h4>
						<p>Mountain Bike Elettriche</p>
						<span className="price-small">40 - 50 € (al giorno)</span>
					</div>

					<div className="extra-item">
						<h4>🐴 Esperienza a Cavallo</h4>
						<p>Avventura Alternativa</p>
						<span className="price-small">Da concordare</span>
					</div>
				</div>
			</section>

			{/* Booking Details */}
			<section className="booking-section">
				<h2>Dettagli di Prenotazione e Acconto</h2>

				<div className="booking-steps">
					<div className="step">
						<h3>1. Verifica Disponibilità</h3>
						<p>Scrivici su WhatsApp per controllare le date disponibili</p>
					</div>

					<div className="step">
						<h3>2. Acconto (30%)</h3>
						<p>Versamento del 30% del costo totale per confermare la prenotazione</p>
					</div>

					<div className="step">
						<h3>3. Saldo (70%)</h3>
						<p>Il restante 70% da versare il giorno dell'arrivo all'Agriturismo Oddone</p>
					</div>
				</div>

				<div className="cta-box">
					<p>Per garantirti il posto nel gruppo ristretto e confermare l'alloggio,</p>
					<p className="bold">è richiesta la massima serietà nella prenotazione.</p>
					<a href="https://wa.me/+39" target="_blank" className="booking-cta">
						Contattaci su WhatsApp
					</a>
				</div>
			</section>

			{/* Dates and Validity */}
			<section className="dates-section">
				<h2>Date e Validità Pacchetto</h2>

				<div className="dates-content">
					<div className="date-item">
						<h3>📅 Lancio Ufficiale</h3>
						<p>
							Il pacchetto standard Wild Weekender (2 Notti / 2 Giorni) partirà ufficialmente dal 
							<strong> 15 Marzo 2026</strong> e sarà disponibile tutti i weekend standard successivi.
						</p>
					</div>

					<div className="date-item alert">
						<h3>⚠️ Nota Importante</h3>
						<p>
							I ponti festivi e le festività raccomandate (come Pasqua, 1° Maggio, 2 Giugno) sono esclusi 
							dalla tariffa base di 270 €. Per queste date speciali, verranno proposti dei pacchetti dedicati 
							all'evento festivo con tariffe specifiche.
						</p>
					</div>
				</div>
			</section>

			{/* Gallery Images */}
			<section className="services-gallery">
				<h2>Scopri i Sentieri</h2>
				<div className="gallery-grid">
					<div className="gallery-item">
						<img src="/IMG-20.jpg" alt="Discesa da Bardineto" />
						<p>Discesa da Bardineto</p>
					</div>
					<div className="gallery-item">
						<img src="/10-2.jpg" alt="Sentiero 7" />
						<p>Sentiero 7</p>
					</div>
					<div className="gallery-item">
						<img src="/IMG-17.PNG" alt="Intermedio Catalano" />
						<p>Intermedio Catalano</p>
					</div>
					<div className="gallery-item">
						<img src="/IMG-19.JPG" alt="Panorama" />
						<p>Panorami Suggestivi</p>
					</div>
				</div>
			</section>

			{/* Call to Action */}
			<section className="final-cta">
				<h2>Pronto per l'Avventura?</h2>
				<a href="https://wa.me/+39" target="_blank" className="cta-button-large">
					Prenota il Tuo Wild Weekender
				</a>
			</section>
		</div>
	);
}