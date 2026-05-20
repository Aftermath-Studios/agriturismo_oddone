import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import Reveal from '@/components/Reveal/Reveal';
import styles from './BikeTour.module.css';

const LEVELS = [
  { code: 'L1', name: 'Scenic',    desc: '22 km · +400 m · 3h · panorami e sterrati morbidi',    bars: 1 },
  { code: 'L2', name: 'Adventure', desc: '38 km · +900 m · 5h · singletrack tecnici nel bosco',  bars: 2 },
  { code: 'L3', name: 'Extreme',   desc: '54 km · +1.600 m · 7h · crinali esposti, solo esperti', bars: 3 },
];

export default function BikeTour() {
  return (
    <section className={`section ${styles.bike}`} id="bike">
      <div className="container">
        <div className={styles.inner}>
          <Reveal className={styles.image}>
            <Image
              src="/images/bike-forest.jpg"
              alt="Sentiero MTB nel bosco di faggi"
              fill
              style={{ objectFit: 'cover' }}
            />
            <div className={styles.badge}>
              <Image
                src="/images/badge-guida-mtb.png"
                alt="Accademia Nazionale di Mountain Bike"
                width={64}
                height={64}
                style={{ objectFit: 'contain' }}
              />
            </div>
          </Reveal>

          <Reveal className={styles.copy}>
            <span className={`eyebrow ${styles.eyebrow}`}>Mountain bike</span>
            <h2 className="section-title">
              Cento chilometri<br />di <em>singletrack</em>,<br />dal sentiero al crinale.
            </h2>
            <p className={`lede ${styles.lede}`}>
              Tre livelli di percorso disegnati da guide certificate, tracciati sul nostro
              territorio. Si parte dal cortile, si torna in tempo per cena.
            </p>

            <div className={styles.levels}>
              {LEVELS.map(({ code, name, desc, bars }) => (
                <a key={code} href="#" className={styles.level}>
                  <span className={styles.lvlNum}>{code}</span>
                  <div className={styles.lvlBody}>
                    <h4>{name}</h4>
                    <p>{desc}</p>
                  </div>
                  <div className={styles.lvlDiff} aria-label={`Difficoltà ${bars} di 3`}>
                    {[1, 2, 3].map((n) => (
                      <span key={n} className={n <= bars ? styles.on : undefined} />
                    ))}
                  </div>
                </a>
              ))}
            </div>

            <div className={styles.ctaRow}>
              <Link href="/bike-tour" className="btn btn-light">
                Prenota un tour <span className="arrow">→</span>
              </Link>
              <a href="#" className="text-link light">Noleggio e-bike</a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
