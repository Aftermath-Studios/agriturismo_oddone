import "./Header.css";

export default function Header() {
	return (
		<div className="header_container">
			<div className="header_inner">
				<div className="brand">
					<img src="/Logo Italy Bike Tours.svg" alt="Italy Bike Tours Logo" style={{ height: '60px' }}/>
				</div>
				<div className="brand"> Agriturismo Oddone </div>
				<nav className="nav_links">
					<a href="/">Home</a>
					<div className="nav_dropdown">
						<a href="/services" className="dropdown-toggle">Offerte Azienda</a>
						<div className="dropdown-menu">
							<a href="/service/mtb">Escursione MTB</a>
							<a href="/service/equitazione">Escursione Equitazione</a>
							<a href="/service/trekking">Escursione Trekking</a>
							<a href="/service/funghi">Escursione Funghi</a>
						</div>
					</div>
					<a href="/offers">Alloggi e ristorazione</a>
					<a href="/location">Dove trovarci</a>
				</nav>
				<a href="https://wa.me/+39" target="blank"> <button className="cta">Prenota</button> </a>
			</div>
		</div>
	);
}
