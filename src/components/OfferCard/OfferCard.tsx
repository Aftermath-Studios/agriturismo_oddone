import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import Reveal from '@/components/Reveal/Reveal';
import styles from './OfferCard.module.css';

export default function OfferCard() {
  return (
    <section className={`section ${styles.section}`} id="offers">
      <div className="container">
        <Reveal className={styles.head}>
          <div>
            <span className="eyebrow">Offerta corrente</span>
            <h2 className="section-title">Pasqua tra i <em>boschi</em>.</h2>
          </div>
          <Link href="/offers" className="text-link" style={{ whiteSpace: 'nowrap' }}>
            Tutte le offerte di stagione <span className="arrow">→</span>
          </Link>
        </Reveal>

        <Reveal className={styles.card}>
          <div className={styles.image}>
            <Image
              src="/images/bike-stone-bridge.jpg"
              alt="Ponte di pietra nel bosco"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className={styles.body}>
            <span className={styles.tag}>
              <span className={styles.dot} />
              Promo · Settimana 12–19 aprile
            </span>
            <h3>Sette notti,<br /><em>una valle intera.</em></h3>
            <p className={styles.desc}>
              Soggiorno di sette notti in appartamento, una cena degustazione, un&apos;escursione
              MTB guidata o passeggiata a cavallo, colazione tutte le mattine.
            </p>

            <div className={styles.priceRow}>
              <span className={styles.from}>A partire da</span>
              <span className={styles.amount}>€ 690</span>
              <span className={styles.per}>/ persona · 7 notti</span>
            </div>

            <div className={styles.countdown} aria-label="Tempo rimanente">
              {[{ n: '12', l: 'Giorni' }, { n: '06', l: 'Ore' }, { n: '42', l: 'Min' }].map(({ n, l }) => (
                <div key={l}>
                  <span className={styles.countNum}>{n}</span>
                  <span className={styles.countLbl}>{l}</span>
                </div>
              ))}
            </div>

            <div className={styles.ctaRow}>
              <a href="#" className="btn btn-light-solid">
                Prenota il pacchetto <span className="arrow">→</span>
              </a>
              <Link href="/offers" className={`text-link ${styles.detailsLink}`}>Dettagli</Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
