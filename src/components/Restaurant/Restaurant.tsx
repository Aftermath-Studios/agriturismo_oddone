import { Link } from '@/i18n/navigation';
import Reveal from '@/components/Reveal/Reveal';
import styles from './Restaurant.module.css';

export default function Restaurant() {
  return (
    <section className={`section ${styles.restaurant}`} id="restaurant">
      <div className="container">
        <div className={styles.inner}>
          <Reveal className={styles.copy}>
            <span className="eyebrow">Il ristorante</span>
            <h2 className="section-title">
              Il menù lo scrive<br />la <em>stagione</em>.
            </h2>
            <div className={`body-text ${styles.body}`}>
              <p>
                Apriamo la cucina a colazione, pranzo e cena per i nostri ospiti, e su
                prenotazione il venerdì e sabato sera per chi viene da fuori. La carta cambia
                ogni quindici giorni — segue il calendario della valle, non il nostro.
              </p>
              <p>
                I formaggi vengono dalla malga di Pasini, il pane lo facciamo noi al mattino,
                e l&apos;olio extravergine arriva da una collina che si vede dal cortile.
              </p>
            </div>
            <div className={styles.ctaRow}>
              <a href="#" className="btn btn-outline">
                Prenota un tavolo <span className="arrow">→</span>
              </a>
              <Link href="/ristorante" className="text-link">Vedi il menu di stagione</Link>
            </div>
            <div className={styles.menuStrip}>
              {[
                { season: 'Primavera', desc: 'Asparagi, erbe spontanee, agnello, formaggi freschi della valle.' },
                { season: 'Estate',    desc: 'Pomodori del nostro orto, casoncelli al burro fuso e salvia, pesce di lago.' },
                { season: 'Autunno',   desc: 'Funghi porcini, castagne, spiedo, polenta taragna, vini rossi del Garda.' },
              ].map(({ season, desc }) => (
                <div key={season}>
                  <h5>{season}</h5>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className={styles.figures}>
            <div className={`ph ${styles.figTall}`} data-label="DINING-ROOM-WIDE.JPG"><div className="ph-icon">◰</div></div>
            <div className="ph" data-label="PASTA-FRESH.JPG"><div className="ph-icon">◓</div></div>
            <div className="ph" data-label="CHEESE-WHEEL.JPG"><div className="ph-icon">◑</div></div>
            <div className="ph" data-label="WINE-CELLAR.JPG"><div className="ph-icon">◔</div></div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
