import Reveal from '@/components/Reveal/Reveal';
import styles from './MenuSample.module.css';

const SECTIONS = [
  {
    num: '— I —', heading: 'Antipasti',
    items: [
      { name: 'Salumi della Valle',      desc: 'Coppa, salame e lardo di Bardineto · giardiniera di casa',          price: '14' },
      { name: 'Asparagi e uovo a 63°',   desc: 'Asparagi verdi locali, uovo morbido, pecorino stagionato',           price: '16' },
      { name: 'Tartare di trota di torrente', desc: 'Trota della Caffaro, agrumi, olio di nocciole della collina',   price: '18' },
    ],
  },
  {
    num: '— II —', heading: 'Primi piatti',
    items: [
      { name: 'Casoncelli alla bresciana',       desc: 'Pasta tirata a mano, ripieno della tradizione, burro fuso e salvia', price: '17' },
      { name: 'Risotto agli asparagi e Bagòss',  desc: 'Carnaroli, asparagi della valle, Bagòss di Bagolino DOP',            price: '19' },
      { name: 'Tagliolini alle erbe spontanee',  desc: 'Pasta fresca all\'uovo, erbe raccolte la mattina nei nostri boschi', price: '16' },
    ],
  },
  {
    num: '— III —', heading: 'Secondi',
    items: [
      { name: 'Agnello da latte al forno',     desc: 'Agnello del Tartufo, patate al rosmarino, sughetto di cottura',             price: '26' },
      { name: 'Spiedo bresciano tradizionale', desc: 'Carni miste sullo spiedo a legna, polenta taragna · min. 2 persone',       price: '28' },
      { name: 'Trota in crosta di nocciole',   desc: 'Filetto di trota di torrente, croccante di nocciole, erbette saltate',      price: '24' },
    ],
  },
  {
    num: '— IV —', heading: 'Dolci',
    items: [
      { name: 'Torta sbrisolona della nonna',      desc: 'Mandorle, farina di mais, sbatutto di mascarpone',  price: '9' },
      { name: 'Tiramisù al caffè della Caffaro',   desc: 'Mascarpone, caffè tostato in valle, cacao amaro',   price: '9' },
    ],
  },
];

export default function MenuSample() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <Reveal className={styles.head}>
          <span className="eyebrow">Un assaggio del menù</span>
          <h2 className="section-title">Il menù di <em>questa settimana</em>.</h2>
          <p className={`lede ${styles.lede}`}>
            Cambia ogni quindici giorni. È una traccia di quello che troverete in tavola,
            non un impegno scritto.
          </p>
        </Reveal>

        <Reveal className={styles.card}>
          <header className={styles.cardHead}>
            <span className="mono-caps">Carta · settimana 20</span>
            <span className="mono-caps">15 — 21 maggio 2026</span>
          </header>

          {SECTIONS.map(({ num, heading, items }) => (
            <div key={heading} className={styles.menuSection}>
              <div className={styles.sectionHead}>
                <span className={styles.sectionNum}>{num}</span>
                <h3>{heading}</h3>
              </div>
              <ul className={styles.items}>
                {items.map(({ name, desc, price }) => (
                  <li key={name}>
                    <div className={styles.itemName}>{name}</div>
                    <div className={styles.itemDesc}>{desc}</div>
                    <div className={styles.itemPrice}>{price}</div>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <footer className={styles.cardFoot}>
            <div>
              <strong>Menù degustazione</strong>
              <p>Cinque portate scelte dalla cucina, abbinamento opzionale di tre calici.</p>
            </div>
            <div className={styles.footPrice}>
              <span>€ 58</span>
              <small>vini abbinati + 22</small>
            </div>
          </footer>
        </Reveal>

        <p className={`mono-caps ${styles.disclaimer}`}>
          I prezzi sono espressi in euro · IVA inclusa · Coperto € 3
        </p>
      </div>
    </section>
  );
}
