import { Link } from '@/i18n/navigation';
import NewsletterForm from './NewsletterForm';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        {/* Col 1 — Brand */}
        <div>
          <div className={styles.brand}>
            Agriturismo<br /><em>Oddone</em>
          </div>
          <p className={styles.blurb}>
            Tra natura e sapori, dal 1987. Una cascina di famiglia in Valle Sabbia.
          </p>
          <div className={styles.social}>
            <a href="#" aria-label="Instagram">IG</a>
            <a href="#" aria-label="Facebook">FB</a>
            <a href="#" aria-label="WhatsApp">WA</a>
          </div>
        </div>

        {/* Col 2 — Esperienza */}
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

        {/* Col 3 — Informazioni */}
        <div>
          <h4>Informazioni</h4>
          <ul>
            <li><Link href="/#story">La nostra storia</Link></li>
            <li><Link href="/#contact">Contatti</Link></li>
            <li><a href="#">FAQ ospiti</a></li>
            <li><a href="#">Politiche di cancellazione</a></li>
            <li><a href="#">Lavora con noi</a></li>
          </ul>
        </div>

        {/* Col 4 — Newsletter */}
        <div>
          <h4>Newsletter</h4>
          <p className={styles.newsletterBlurb}>
            Stagione, raccolti, offerte. Quattro volte l&apos;anno, non di più.
          </p>
          <NewsletterForm />
        </div>
      </div>

      <div className={styles.bottom}>
        <span>© 1987–2026 Agriturismo Oddone · P.IVA 02784560983</span>
        <span>
          <a href="#">Privacy</a> · <a href="#">Cookie</a> · <a href="#">Termini</a>
        </span>
      </div>
    </footer>
  );
}
