import Reveal from '@/components/Reveal/Reveal';
import styles from './TrailDetails.module.css';

const TRAILS = [
  {
    tag: '— L1 —', tagClass: styles.t1, name: 'Scenic', bars: 1,
    blurb: 'Il primo livello è pensato per chi ama pedalare ma non vuole forzare i polpacci. Sterrati larghi, qualche tratto su strada bianca, due o tre punti panoramici dove conviene fermarsi.',
    stats: [
      { label: 'Distanza',        value: '22',    unit: 'km' },
      { label: 'Dislivello',      value: '+400',  unit: 'm' },
      { label: 'Durata',          value: '3',     unit: 'ore' },
      { label: 'Livello',         value: 'Base',  unit: null },
      { label: 'Bici consigliata', value: 'e-MTB', unit: null },
      { label: 'Da',              value: '€ 65',  unit: '/p.' },
    ],
  },
  {
    tag: '— L2 —', tagClass: styles.t2, name: 'Adventure', bars: 2,
    blurb: 'Si entra nei singletrack del bosco di faggi, qualche tratto tecnico ma sempre divertente. Tre salite serie, due discese che ricordano perché si è tornati in bici dopo l\'inverno.',
    stats: [
      { label: 'Distanza',        value: '38',        unit: 'km' },
      { label: 'Dislivello',      value: '+900',       unit: 'm' },
      { label: 'Durata',          value: '5',          unit: 'ore' },
      { label: 'Livello',         value: 'Medio',      unit: null },
      { label: 'Bici consigliata', value: 'MTB / e-MTB', unit: null },
      { label: 'Da',              value: '€ 95',       unit: '/p.' },
    ],
  },
  {
    tag: '— L3 —', tagClass: styles.t3, name: 'Extreme', bars: 3,
    blurb: 'Solo per chi conosce la bici. Si arriva al crinale del Monte Magno, ci sono passaggi esposti su roccia, una discesa di ottocento metri che chiede attenzione. Servono protezioni e onestà.',
    stats: [
      { label: 'Distanza',        value: '54',      unit: 'km' },
      { label: 'Dislivello',      value: '+1.600',  unit: 'm' },
      { label: 'Durata',          value: '7',       unit: 'ore' },
      { label: 'Livello',         value: 'Avanzato', unit: null },
      { label: 'Bici consigliata', value: 'Enduro', unit: null },
      { label: 'Da',              value: '€ 145',   unit: '/p.' },
    ],
  },
];

const INCLUDED = [
  { title: 'Guida certificata',      body: 'Accademia Nazionale Mountain Bike' },
  { title: 'Casco e protezioni',     body: 'Forniti per ogni partecipante' },
  { title: 'Snack & idratazione',    body: 'Una sosta a metà percorso' },
  { title: 'Foto del tour',          body: 'Inviate via WhatsApp la sera stessa' },
  { title: 'Doccia calda',           body: 'E un boccale al ritorno' },
  { title: 'Massimo 6 partecipanti', body: 'Per tour, sempre' },
];

export default function TrailDetails() {
  return (
    <section className={`section ${styles.trails}`}>
      <div className="container">
        <Reveal className={styles.head}>
          <span className="eyebrow">I tre percorsi</span>
          <h2 className="section-title">Tre livelli,<br />un solo <em>territorio</em>.</h2>
          <p className={`lede ${styles.lede}`}>
            Tutti i tour partono dal cortile dell&apos;agriturismo e ritornano in tempo per la cena.
            La guida sceglie il percorso del giorno in base al meteo, ai partecipanti e a cosa è in fiore in valle.
          </p>
        </Reveal>

        {TRAILS.map(({ tag, tagClass, name, bars, blurb, stats }) => (
          <Reveal key={name} as="article" className={styles.trail}>
            <header className={styles.trailHead}>
              <span className={`${styles.trailTag} ${tagClass}`}>{tag}</span>
              <h3>{name}</h3>
              <div className={styles.diff} aria-label={`Difficoltà ${bars} di 3`}>
                {[1, 2, 3].map((n) => (
                  <span key={n} className={n <= bars ? styles.on : undefined} />
                ))}
              </div>
            </header>
            <div className={styles.trailBody}>
              <p className={styles.blurb}>{blurb}</p>
              <dl className={styles.stats}>
                {stats.map(({ label, value, unit }) => (
                  <div key={label}>
                    <dt>{label}</dt>
                    <dd>{value}{unit && <small>{unit}</small>}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        ))}

        <Reveal className={styles.included}>
          <h4 className={styles.includedTitle}>Tutti i tour includono</h4>
          <div className={styles.includedGrid}>
            {INCLUDED.map(({ title, body }) => (
              <div key={title}>
                <strong>{title}</strong>
                {body}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
