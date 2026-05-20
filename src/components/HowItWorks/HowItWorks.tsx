import Reveal from '@/components/Reveal/Reveal';
import styles from './HowItWorks.module.css';

const STEPS = [
  { num: '01', title: 'Scegli', body: 'Seleziona il pacchetto e le date. Ti mostriamo subito la disponibilità reale dei nostri appartamenti.' },
  { num: '02', title: 'Richiedi', body: 'Compili una breve richiesta — nessuna carta richiesta in questo momento. Ti rispondiamo via email o WhatsApp.' },
  { num: '03', title: 'Confermi', body: 'Una volta accettata la quotazione, lasci una caparra del 30% per bloccare le date.' },
  { num: '04', title: 'Arrivi', body: 'Ti aspettiamo nel cortile con le chiavi, una bottiglia di vino della valle, e qualche istruzione sui sentieri.' },
];

const TRUST = [
  { value: '24 h', label: 'Tempo massimo di risposta' },
  { value: '0 €', label: 'Niente costi nascosti' },
  { value: '72 h', label: 'Cancellazione gratuita' },
  { value: '4,92 / 5', label: 'Valutazione media ospiti' },
];

export default function HowItWorks() {
  return (
    <section className={`section ${styles.how}`}>
      <div className="container">
        <Reveal className={styles.head}>
          <div>
            <span className="eyebrow">Come funziona</span>
            <h2 className="section-title">
              Quattro passi,<br />e una <em>conferma</em>.
            </h2>
          </div>
          <p className={`lede ${styles.lede}`}>
            Le offerte qui sopra hanno scadenze reali e disponibilità limitata.
            Prenotare richiede pochi minuti, e la conferma arriva entro le 24 ore.
          </p>
        </Reveal>

        <div className={styles.steps}>
          {STEPS.map(({ num, title, body }) => (
            <Reveal key={num} as="article" className={styles.step}>
              <span className={styles.num}>{num}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className={styles.trust}>
          {TRUST.map(({ value, label }) => (
            <div key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
