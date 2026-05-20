import { Link } from '@/i18n/navigation';
import Reveal from '@/components/Reveal/Reveal';
import styles from './Accommodations.module.css';

type Status = 'available' | 'few' | 'closed';

type Room = {
  num: string;
  name: string;
  location: string;
  guests: string;
  details: string;
  amenities: string;
  status: Status;
  statusLabel: string;
  price: string;
  disabled?: boolean;
};

const ROOMS: Room[] = [
  { num: 'N° 01', name: 'La', em: 'Faggeta',         location: 'Borgo nuovo', guests: '4 ospiti', details: '2 camere · 1 bagno', amenities: 'Cucina, camino, terrazza',         status: 'available', statusLabel: 'Disponibile', price: '€ 140' },
  { num: 'N° 02', name: 'Il', em: 'Castagno',        location: 'Borgo nuovo', guests: '4 ospiti', details: '2 camere · 1 bagno', amenities: 'Cucina, balcone, vista bosco',     status: 'few',       statusLabel: 'Ultime date',  price: '€ 140' },
  { num: 'N° 03', name: 'Il', em: 'Tiglio',          location: 'Borgo nuovo', guests: '6 ospiti', details: '3 camere · 2 bagni', amenities: 'Cucina grande, soppalco',          status: 'available', statusLabel: 'Disponibile', price: '€ 190' },
  { num: 'N° 04', name: 'La', em: 'Quercia',         location: 'Borgo nuovo', guests: '2 ospiti', details: '1 camera · 1 bagno', amenities: 'Mansarda, lucernari, romantica',   status: 'available', statusLabel: 'Disponibile', price: '€ 110' },
  { num: 'N° 05', name: 'La', em: 'Vecchia Stalla',  location: 'Borgo antico', guests: '5 ospiti', details: '2 camere · 1 bagno', amenities: 'Pietre a vista, travi originali', status: 'few',       statusLabel: 'Ultime date',  price: '€ 160' },
  { num: 'N° 06', name: 'Il', em: 'Forno',           location: 'Borgo antico', guests: '2 ospiti', details: '1 camera · 1 bagno', amenities: 'Antico forno del villaggio',      status: 'available', statusLabel: 'Disponibile', price: '€ 130' },
] as unknown as Room[];

// Separate type for display
type RowData = {
  num: string; name: string; em: string; location: string; guests: string;
  details: string; amenities: string; status: Status; statusLabel: string;
  price: string; disabled?: boolean;
};

const ROWS: RowData[] = [
  { num: 'N° 01', name: 'La', em: 'Faggeta',        location: 'Borgo nuovo',  guests: '4 ospiti', details: '2 camere · 1 bagno', amenities: 'Cucina, camino, terrazza',         status: 'available', statusLabel: 'Disponibile', price: '€ 140' },
  { num: 'N° 02', name: 'Il', em: 'Castagno',       location: 'Borgo nuovo',  guests: '4 ospiti', details: '2 camere · 1 bagno', amenities: 'Cucina, balcone, vista bosco',     status: 'few',       statusLabel: 'Ultime date',  price: '€ 140' },
  { num: 'N° 03', name: 'Il', em: 'Tiglio',         location: 'Borgo nuovo',  guests: '6 ospiti', details: '3 camere · 2 bagni', amenities: 'Cucina grande, soppalco',          status: 'available', statusLabel: 'Disponibile', price: '€ 190' },
  { num: 'N° 04', name: 'La', em: 'Quercia',        location: 'Borgo nuovo',  guests: '2 ospiti', details: '1 camera · 1 bagno', amenities: 'Mansarda, lucernari, romantica',   status: 'available', statusLabel: 'Disponibile', price: '€ 110' },
  { num: 'N° 05', name: 'La', em: 'Vecchia Stalla', location: 'Borgo antico', guests: '5 ospiti', details: '2 camere · 1 bagno', amenities: 'Pietre a vista, travi originali', status: 'few',       statusLabel: 'Ultime date',  price: '€ 160' },
  { num: 'N° 06', name: 'Il', em: 'Forno',          location: 'Borgo antico', guests: '2 ospiti', details: '1 camera · 1 bagno', amenities: 'Antico forno del villaggio',       status: 'available', statusLabel: 'Disponibile', price: '€ 130' },
  { num: 'N° 07', name: 'La', em: 'Cascina del Nonno', location: 'In restauro', guests: 'riapre estate 2027', details: '8 ospiti · 4 camere', amenities: 'Cascina intera, esclusiva', status: 'closed', statusLabel: 'In restauro', price: '—', disabled: true },
];

export default function Accommodations() {
  return (
    <section className={`section ${styles.accom}`} id="stay">
      <div className="container">
        <Reveal className={styles.head}>
          <div>
            <span className="eyebrow">Gli alloggi</span>
            <h2 className="section-title">
              Sei appartamenti,<br />un solo <em>silenzio</em>.
            </h2>
          </div>
          <div>
            <p className={`lede ${styles.lede}`}>
              Quattro nuovi, due antichi, e una vecchia cascina che riapriremo l&apos;estate
              del 2027. Tutti con cucina, biancheria fornita, parcheggio e wifi.
            </p>
            <Link href="/alloggi" className="text-link" style={{ marginTop: '28px' }}>
              Tutti gli alloggi <span className="arrow">→</span>
            </Link>
          </div>
        </Reveal>

        <div className={styles.grid}>
          {ROWS.map((row) => {
            const RowTag = row.disabled ? 'div' : 'a';
            const rowProps = row.disabled ? {} : { href: '#' };
            return (
              <RowTag
                key={row.num}
                {...rowProps}
                className={`${styles.row} ${row.disabled ? styles.disabled : ''}`}
              >
                <span className={styles.num}>{row.num}</span>
                <div className={styles.title}>
                  <h3>{row.name} <em>{row.em}</em></h3>
                  <small>{row.location} · {row.guests}</small>
                </div>
                <div className={styles.meta}>
                  <strong>{row.details}</strong>
                  {row.amenities}
                </div>
                <div className={styles.meta}>
                  <span className={`${styles.status} ${row.status === 'few' ? styles.few : row.status === 'closed' ? styles.closed : ''}`}>
                    <span className={styles.dot} />
                    {row.statusLabel}
                  </span>
                </div>
                <div className={styles.price}>
                  <strong>{row.price}</strong>
                  <small>{row.disabled ? 'Lista d\'attesa' : 'a notte · da'}</small>
                </div>
                <span className={`${styles.chev} ${row.disabled ? styles.chevFaded : ''}`}>
                  {row.disabled ? '⋯' : '→'}
                </span>
              </RowTag>
            );
          })}
        </div>
      </div>
    </section>
  );
}
