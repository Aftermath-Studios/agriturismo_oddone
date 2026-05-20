import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import Reveal from '@/components/Reveal/Reveal';
import styles from './Experience.module.css';

const PILLARS = [
  {
    num: '— 01',
    img: null,
    label: 'STAY-APARTMENT.JPG',
    icon: '⌂',
    title: <>Alloggi <em>in pietra</em></>,
    body: 'Sei appartamenti tra il nuovo e il vecchio borgo, con cucina, camino e vista sui boschi. Pulizia inclusa, prima colazione su richiesta.',
    href: '/alloggi',
    cta: 'Scopri gli alloggi',
  },
  {
    num: '— 02',
    img: null,
    label: 'RESTAURANT-PLATE.JPG',
    icon: '◐',
    title: <>Cucina <em>di valle</em></>,
    body: 'Casoncelli, polenta taragna, spiedo bresciano. La cantina lavora solo etichette del Garda e della Franciacorta.',
    href: '/ristorante',
    cta: 'Scopri il ristorante',
  },
  {
    num: '— 03',
    img: '/images/bike-ridge.png',
    label: null,
    icon: null,
    title: <>Bike Tour <em>guidati</em></>,
    body: 'Tre livelli di percorso: scenic, adventure, extreme. Guida certificata AMI, noleggio e-bike, e una doccia calda al ritorno.',
    href: '/bike-tour',
    cta: 'Esplora i percorsi',
  },
  {
    num: '— 04',
    img: null,
    label: 'HORSE-RIDING.JPG',
    icon: '♘',
    title: <>Attività <em>in natura</em></>,
    body: 'Passeggiate a cavallo, raccolta di funghi e castagne, trekking con guida, laboratori di pasta fresca per famiglie.',
    href: '/attivita',
    cta: 'Tutte le attività',
  },
];

export default function Experience() {
  return (
    <section className={`section ${styles.experience}`}>
      <div className="container">
        <Reveal className={styles.head}>
          <div>
            <span className={`eyebrow ${styles.eyebrow}`}>L&apos;esperienza</span>
            <h2 className="section-title">
              Quattro modi di <em>stare</em><br />nella nostra valle.
            </h2>
          </div>
          <p className={`lede ${styles.lede}`}>
            Si può venire per dormire, per mangiare, per pedalare, o per perdersi.
            Quasi sempre si finisce per fare tutte e quattro le cose.
          </p>
        </Reveal>

        <div className={styles.pillars}>
          {PILLARS.map(({ num, img, label, icon, title, body, href, cta }) => (
            <Reveal key={num} as="article" className={styles.pillar}>
              <span className={styles.pillarNum}>{num}</span>
              <div className={styles.pillarImg}>
                {img ? (
                  <Image src={img} alt={cta} fill style={{ objectFit: 'cover' }} />
                ) : (
                  <div className={`ph dark ${styles.ph}`} data-label={label}>
                    <div className="ph-icon">{icon}</div>
                  </div>
                )}
              </div>
              <h3>{title}</h3>
              <p>{body}</p>
              <Link href={href} className={styles.pillarLink}>
                {cta} <span className="arrow">→</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
