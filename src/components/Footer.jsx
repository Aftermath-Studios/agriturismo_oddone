import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="footer-brand">Agriturismo<br />
            <em>Oddone</em>
          </div>
          <p className="footer-blurb">
            Tra natura e sapori, dal 1996. Una cascina di famiglia a Bardineto, in Val Bormida.
          </p>
        </div>
        <div>
          <h4>Esperienza</h4>
          <ul>
            <li><Link href="/alloggi">Alloggi</Link></li>
            <li><Link href="/ristorante">Ristorante</Link></li>
            <li><Link href="/bike-tour">Bike Tour</Link></li>
            <li><Link href="/attivita">Attività</Link></li>
            <li><Link href="/offers">Offerte</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 1996–2026 Agriturismo Oddone · P.IVA 02784560983</span>
      </div>
    </footer>
  );
}
