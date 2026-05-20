import Reveal from '@/components/Reveal/Reveal';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section className={`section ${styles.contact}`} id="contact">
      <div className="container">
        <div className={styles.inner}>
          <Reveal className={styles.side}>
            <span className="eyebrow">Vieni a trovarci</span>
            <h2 className="section-title">
              A trenta minuti<br />dal <em>Lago di Garda</em>.
            </h2>
            <p className={`body-text ${styles.blurb}`}>
              Siamo aperti tutto l&apos;anno. Per prenotazioni o per due chiacchiere con la
              famiglia, scriveteci o passate a trovarci. Rispondiamo entro 24 ore.
            </p>

            {[
              {
                label: 'Indirizzo',
                content: <><span>Via dei Faggi 12<br />25070 Bardineto (BS)</span><small>Valle Sabbia · Lombardia · Italia</small></>,
              },
              {
                label: 'Telefono',
                content: <><a href="tel:+390365123456">+39 0365 12 34 56</a><small>WhatsApp disponibile</small></>,
              },
              {
                label: 'Email',
                content: <><a href="mailto:ciao@agriturismooddone.com">ciao@agriturismooddone.com</a><small>Risposta entro 24 ore</small></>,
              },
              {
                label: 'Stagione',
                content: <>Aperti tutto l&apos;anno<small>Reception 8:00 – 22:00</small></>,
              },
            ].map(({ label, content }) => (
              <div key={label} className={styles.detail}>
                <span className={styles.lbl}>{label}</span>
                <div className={styles.val}>{content}</div>
              </div>
            ))}

            <a href="#" className={`btn ${styles.btn}`}>
              Richiedi disponibilità <span className="arrow">→</span>
            </a>
          </Reveal>

          <Reveal
            className={styles.map}
            aria-label="Mappa stilizzata di Agriturismo Oddone"
          >
            <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice">
              <defs>
                <pattern id="contour" patternUnits="userSpaceOnUse" width="60" height="60" patternTransform="rotate(20)">
                  <circle cx="30" cy="30" r="28" fill="none" stroke="oklch(0.70 0.04 80)" strokeWidth="0.6" opacity="0.6" />
                  <circle cx="30" cy="30" r="20" fill="none" stroke="oklch(0.70 0.04 80)" strokeWidth="0.5" opacity="0.5" />
                  <circle cx="30" cy="30" r="12" fill="none" stroke="oklch(0.70 0.04 80)" strokeWidth="0.4" opacity="0.4" />
                </pattern>
              </defs>
              <rect width="400" height="500" fill="url(#contour)" opacity="0.6" />
              <path d="M -10 380 Q 80 340 140 360 T 280 320 T 420 280" stroke="oklch(0.62 0.07 220)" strokeWidth="3" fill="none" opacity="0.5" />
              <path d="M 20 460 L 180 280 L 240 250 L 380 60" stroke="oklch(0.40 0.02 60)" strokeWidth="1.2" fill="none" strokeDasharray="4 6" />
              <g fontFamily="JetBrains Mono, monospace" fontSize="9" fill="oklch(0.40 0.02 60)" letterSpacing="1.5">
                <text x="30" y="450">LAGO DI GARDA →</text>
                <text x="280" y="80">M. MAGNO 1.487m</text>
                <text x="60" y="200">BOSCO DEI FAGGI</text>
                <text x="240" y="420">VALLE SABBIA</text>
              </g>
            </svg>
            <div className={styles.pin}>
              <div className={styles.pinMarker} />
              <div className={styles.pinLabel}>Agriturismo Oddone</div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
