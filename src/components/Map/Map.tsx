import './Map.css'; 

export default function Map() {
	return (
		<section className="location_section" id="location">
			<div className="location_container">
				<div className="location_header">
					<h2>Dove Trovarci</h2>
					<p>
						lorem ipsum me lo so scordato<br />
					</p>
					</div>

					<div className="map_frame_wrapper">
					<iframe
						title="Mappa Agriturismo Oddone"
						width="100%" height="100%"
						style={{ border: 0 }} loading="lazy"
						allowFullScreen referrerPolicy="no-referrer-when-downgrade"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d425.24359179134143!2d8.130799011948916!3d44.192925660138236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d28cac4d5216c3%3A0x44a151307ae4e694!2sFratelli%20Oddone!5e0!3m2!1sit!2sit!4v1769959952778!5m2!1sit!2sit"
					></iframe>
				</div>
			</div>
		</section>
	);
}