import Reveal from '@/components/Reveal/Reveal';
import styles from './Testimonials.module.css';

const REVIEWS = [
  {
    initial: 'G',
    name: 'Giulia & Tommaso',
    source: 'Booking · Maggio 2026',
    quote: 'Abbiamo dormito ascoltando il silenzio. Marco ci ha portato in bici su un sentiero che non avrei mai trovato da solo. La cena della domenica resta in famiglia da sei mesi.',
  },
  {
    initial: 'F',
    name: 'Federico R.',
    source: 'Tripadvisor · Ottobre 2025',
    quote: 'È il posto in cui torno ogni autunno per raccogliere i porcini. Elena conosce ogni faggeta. La cascina è semplice e onesta, esattamente come dovrebbe essere.',
  },
  {
    initial: 'D',
    name: 'Dimitri Vogel',
    source: 'Google · Settembre 2025',
    quote: 'Sono venuto solo per il bike tour Extreme e sono rimasto tre giorni. Pietro è una guida seria, l\'appartamento era pulitissimo, e la polenta della sera è ancora un pensiero fisso.',
  },
];

export default function Testimonials() {
  return (
    <section className={`section ${styles.testimonials}`}>
      <div className="container">
        <Reveal className={styles.head}>
          <div>
            <span className={`eyebrow ${styles.eyebrow}`}>Cosa dicono gli ospiti</span>
            <h2 className="section-title">
              Sette anni di <em>buone recensioni</em>,<br />più di mille ospiti tornati.
            </h2>
          </div>
          <p className={`lede ${styles.lede}`}>
            Punteggio medio 4.92 su Booking, Tripadvisor e Google. Nessuna delle recensioni
            qui sotto è stata modificata.
          </p>
        </Reveal>

        <div className={styles.grid}>
          {REVIEWS.map(({ initial, name, source, quote }) => (
            <Reveal key={name} as="article" className={styles.item}>
              <div className={styles.rating}>★★★★★</div>
              <p className={styles.quote}>{quote}</p>
              <div className={styles.meta}>
                <div className={styles.avatar}>{initial}</div>
                <div>
                  <div className={styles.name}>{name}</div>
                  <div className={styles.source}>{source}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className={styles.trust}>
          <span>★ 4.92 / 5 su Booking</span>
          <span>Tripadvisor — Travelers&apos; Choice 2024</span>
          <span>Riconoscimento Slow Food</span>
          <span>Guida AMI · Mountain Bike</span>
          <span>Agriturismo certificato Lombardia</span>
        </div>
      </div>
    </section>
  );
}
