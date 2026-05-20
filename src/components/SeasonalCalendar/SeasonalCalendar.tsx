import Reveal from '@/components/Reveal/Reveal';
import styles from './SeasonalCalendar.module.css';

type CellState = 'peak' | 'on' | 'light' | 'off';

const MONTHS = ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic'];

const ROWS: { label: string; cells: CellState[] }[] = [
  {
    label: 'Bike Tour',
    cells: ['off','off','light','on','peak','peak','peak','peak','peak','on','light','off'],
  },
  {
    label: 'Cavallo',
    cells: ['off','off','light','on','peak','peak','on','on','peak','peak','light','off'],
  },
  {
    label: 'Funghi & castagne',
    cells: ['off','off','off','off','off','off','off','off','peak','peak','light','off'],
  },
  {
    label: 'Tartufo',
    cells: ['off','off','off','off','off','off','off','off','off','peak','peak','on'],
  },
  {
    label: 'Trekking',
    cells: ['off','off','light','on','peak','peak','peak','peak','peak','on','off','off'],
  },
  {
    label: 'Laboratori cucina',
    cells: ['on','on','on','on','on','on','light','light','on','on','on','peak'],
  },
];

export default function SeasonalCalendar() {
  return (
    <section className={`section ${styles.seasons}`}>
      <div className="container">
        <Reveal className={styles.head}>
          <span className="eyebrow">Quando venire</span>
          <h2 className="section-title">
            Ogni mese ha la <em>sua</em><br />ragione per esserci.
          </h2>
        </Reveal>

        <div className={styles.table}>
          <header className={`${styles.row} ${styles.header}`}>
            <div className={`${styles.cell} ${styles.label}`}>Attività</div>
            {MONTHS.map((m) => (
              <div key={m} className={`${styles.cell} ${styles.month}`}>{m}</div>
            ))}
          </header>

          {ROWS.map(({ label, cells }) => (
            <Reveal key={label} className={styles.row}>
              <div className={`${styles.cell} ${styles.label}`}>{label}</div>
              {cells.map((state, i) => (
                <div
                  key={i}
                  className={`${styles.cell} ${state !== 'off' ? styles.on : ''} ${state === 'peak' ? styles.peak : ''} ${state === 'light' ? styles.light : ''}`}
                />
              ))}
            </Reveal>
          ))}
        </div>

        <Reveal className={styles.legend}>
          <span className={`${styles.legendDot} ${styles.peak}`} /><span>Stagione di punta</span>
          <span className={styles.legendDot} /><span>Disponibile</span>
          <span className={`${styles.legendDot} ${styles.light}`} /><span>Su richiesta / meteo permettendo</span>
          <span className={`${styles.legendDot} ${styles.off}`} /><span>Chiusa</span>
        </Reveal>
      </div>
    </section>
  );
}
