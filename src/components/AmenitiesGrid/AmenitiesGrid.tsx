import Reveal from '@/components/Reveal/Reveal';
import styles from './AmenitiesGrid.module.css';

const AMENITIES = [
  { num: '01', title: 'Cucina',    em: 'completa',      body: 'Ogni appartamento ha la sua cucina con piano cottura, forno, frigorifero, lavastoviglie e moka.' },
  { num: '02', title: 'Biancheria', em: 'fornita',      body: 'Lenzuola, asciugamani da bagno, asciugamani da doccia e canovacci da cucina. Cambio settimanale incluso.' },
  { num: '03', title: 'Pulizia',   em: 'finale',        body: 'La pulizia finale è inclusa nel prezzo. La pulizia intermedia è disponibile su richiesta a 35 €.' },
  { num: '04', title: 'Wi-Fi',     em: 'veloce',        body: 'Fibra 200 Mbps in tutti gli appartamenti. Una rete separata per chi lavora da remoto.' },
  { num: '05', title: 'Parcheggio', em: 'privato',      body: 'Posto auto coperto per ogni appartamento, oltre al cortile per ospiti aggiuntivi.' },
  { num: '06', title: 'Animali',   em: 'benvenuti',     body: 'Accettiamo cani di qualsiasi taglia, senza supplemento. Il giardino è recintato.' },
  { num: '07', title: 'Colazione', em: 'su richiesta',  body: 'Pane fresco, marmellate, miele, yogurt e frutta di stagione, serviti in cucina o consegnati la mattina (12 € a persona).' },
  { num: '08', title: 'Check-in',  em: 'flessibile',    body: 'Le chiavi le consegnamo a mano dalle 14:00 alle 22:00. Su accordo, possiamo gestire arrivi tardivi.' },
];

export default function AmenitiesGrid() {
  return (
    <section className={`section ${styles.amenities}`}>
      <div className="container">
        <Reveal className={styles.head}>
          <span className="eyebrow">Cosa c&apos;è incluso</span>
          <h2 className="section-title">
            Tutto quello che serve,<br />e nulla che <em>non serva</em>.
          </h2>
        </Reveal>

        <div className={styles.grid}>
          {AMENITIES.map(({ num, title, em, body }) => (
            <Reveal key={num} as="article" className={styles.item}>
              <span className={styles.num}>{num}</span>
              <h3>{title} <em>{em}</em></h3>
              <p>{body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className={styles.foot}>
          <span className="mono-caps">
            Tassa di soggiorno: € 2,00 a persona/notte · Bambini sotto i 12 anni esclusi
          </span>
        </Reveal>
      </div>
    </section>
  );
}
