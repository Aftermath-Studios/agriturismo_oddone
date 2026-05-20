import Reveal from '@/components/Reveal/Reveal';
import styles from './ActivitiesList.module.css';

const ACTIVITIES = [
  {
    num: '— 01 —', label: 'HORSE-RIDING.JPG', icon: '♘',
    season: 'Marzo — Novembre',
    title: <>Passeggiate <em>a cavallo</em></>,
    body: "Uscite di un'ora o mezza giornata con il maneggio Cà Bassa, a tre chilometri da noi. Adatte ai principianti, e per bambini sopra i sei anni.",
    stats: [
      { label: 'Durata', value: '1h – 4h' },
      { label: 'Partecipanti', value: '2 – 8' },
      { label: 'Età minima', value: '6 anni' },
    ],
    price: '€ 35',
  },
  {
    num: '— 02 —', label: 'MUSHROOM-FORAGE.JPG', icon: '◉',
    season: 'Settembre — Ottobre',
    title: <>Raccolta <em>funghi</em></>,
    body: "Mezza giornata in faggeta con il nostro micologo di fiducia. Si parte alle 6:30, si torna con il cestino — e si impara a riconoscere quello che vale la pena raccogliere.",
    stats: [
      { label: 'Durata', value: '4 ore' },
      { label: 'Partecipanti', value: '2 – 6' },
      { label: 'Difficoltà', value: 'Facile' },
    ],
    price: '€ 65',
  },
  {
    num: '— 03 —', label: 'TRUFFLE-FORAGE.JPG', icon: '●',
    season: 'Ottobre — Dicembre',
    title: <>Caccia al <em>tartufo</em></>,
    body: "Con Giordano e i suoi tre Lagotti, attraverso i boschi sul versante sud. Si cerca lo scorzone d'autunno, e qualche volta — se siete fortunati — il bianco.",
    stats: [
      { label: 'Durata', value: '3 ore' },
      { label: 'Partecipanti', value: '2 – 5' },
      { label: 'Difficoltà', value: 'Facile' },
    ],
    price: '€ 85',
  },
  {
    num: '— 04 —', label: 'COOKING-CLASS.JPG', icon: '◐',
    season: "Tutto l'anno",
    title: <>Laboratorio di <em>pasta fresca</em></>,
    body: "Tre ore in cucina con Elena, a tirare la sfoglia per i casoncelli o i tagliolini alle erbe. Si cena con quello che si è fatto, accompagnati da un calice della cantina.",
    stats: [
      { label: 'Durata', value: '3 ore' },
      { label: 'Partecipanti', value: '2 – 8' },
      { label: 'Età minima', value: '10 anni' },
    ],
    price: '€ 75',
  },
  {
    num: '— 05 —', label: 'TREKKING.JPG', icon: '◬',
    season: 'Aprile — Ottobre',
    title: <>Trekking <em>con guida</em></>,
    body: "Tre itinerari di mezza o una giornata sul Monte Magno, con guida ambientale escursionistica. Si torna sempre prima di cena, sempre stanchi nel modo giusto.",
    stats: [
      { label: 'Durata', value: '5 – 8 ore' },
      { label: 'Partecipanti', value: '2 – 10' },
      { label: 'Difficoltà', value: 'Media' },
    ],
    price: '€ 45',
  },
  {
    num: '— 06 —', label: 'WINE-TOUR.JPG', icon: '◔',
    season: "Tutto l'anno",
    title: <>Tour delle <em>cantine</em></>,
    body: "Una giornata in Franciacorta o sulla riviera del Garda. Tre cantine partner, pranzo incluso, navetta dall'agriturismo. Massimo 8 persone per uscita.",
    stats: [
      { label: 'Durata', value: '8 ore' },
      { label: 'Partecipanti', value: '4 – 8' },
      { label: 'Trasporto', value: 'Incluso' },
    ],
    price: '€ 130',
  },
];

export default function ActivitiesList() {
  return (
    <section className={`section ${styles.activities}`}>
      <div className="container">
        <Reveal className={styles.head}>
          <span className="eyebrow">Tutte le attività</span>
          <h2 className="section-title">
            Cose da fare<br />che non sono <em>pedalare</em>.
          </h2>
          <p className={`lede ${styles.lede}`}>
            Esperienze in valle, alcune organizzate da noi, altre da chi conosciamo da vent&apos;anni.
            Tutte prenotabili dal cortile dell&apos;agriturismo.
          </p>
        </Reveal>

        <div className={styles.grid}>
          {ACTIVITIES.map(({ num, label, icon, season, title, body, stats, price }) => (
            <Reveal key={label} as="article" className={styles.activity}>
              <div className={styles.activityImg}>
                <div className="ph" data-label={label}>
                  <div className="ph-icon">{icon}</div>
                </div>
              </div>
              <div className={styles.activityBody}>
                <header className={styles.activityHead}>
                  <div>
                    <span className={styles.activityNum}>{num}</span>
                    <h3>{title}</h3>
                  </div>
                  <span className={styles.activitySeason}>{season}</span>
                </header>
                <p>{body}</p>
                <footer className={styles.activityFoot}>
                  <dl>
                    {stats.map(({ label: dl, value }) => (
                      <div key={dl}>
                        <dt>{dl}</dt>
                        <dd>{value}</dd>
                      </div>
                    ))}
                  </dl>
                  <div className={styles.activityPrice}>
                    <small>da</small>
                    <strong>{price}</strong>
                  </div>
                </footer>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
