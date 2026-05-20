import { Link } from '@/i18n/navigation';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <header className={styles.hero}>
      <div className={styles.bg} aria-hidden="true" />
      <div className={styles.overlay} aria-hidden="true" />

      <span className={`${styles.corner} ${styles.tl}`}>
        N 45°43′ · E 10°22′<br />Valle Sabbia, Brescia
      </span>
      <span className={`${styles.corner} ${styles.tr}`}>
        Stagione 2026<br />Aperti tutto l&apos;anno
      </span>
      <span className={`${styles.corner} ${styles.bl}`}>
        <span className={styles.dot} />
        Offerta primaverile · 7 notti scontate
      </span>

      <div className="container">
        <div className={styles.inner}>
          <div>
            <span className={`eyebrow ${styles.eyebrow}`}>Agriturismo · dal 1987</span>
            <h1 className={styles.title}>
              Tra<br /><em>natura</em><br />e sapori.
            </h1>
          </div>
          <div className={styles.meta}>
            <p>
              Un casolare di pietra a 720 m, sei appartamenti, una cucina che racconta la valle,
              e cento chilometri di sentieri per chi pedala.
            </p>
            <div className={styles.ctaRow}>
              <Link href="/alloggi" className="btn btn-light-solid">
                Soggiorna con noi <span className="arrow">→</span>
              </Link>
              <Link href="/bike-tour" className="btn btn-light">
                Scopri i Bike Tour
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.scrollCue} aria-hidden="true">
        <span>Scorri</span>
        <div className={styles.scrollCueLine} />
      </div>
    </header>
  );
}
