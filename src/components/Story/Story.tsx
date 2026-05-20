import Reveal from '@/components/Reveal/Reveal';
import styles from './Story.module.css';

export default function Story() {
  return (
    <section className={`section ${styles.story}`} id="story">
      <div className="container">
        <div className={styles.inner}>
          <Reveal className={styles.figure}>
            <div className={`ph ${styles.ph}`} data-label="FAMILY-PORTRAIT.JPG · Famiglia Oddone, cortile">
              <div className="ph-icon">◷</div>
            </div>
            <div className={styles.caption}>
              <strong>La Famiglia Oddone</strong>
              Tre generazioni nella stessa cascina.
            </div>
          </Reveal>

          <Reveal className={styles.copy}>
            <span className="eyebrow">La nostra storia</span>
            <h2 className="section-title">
              Una <em>cascina di famiglia</em><br />che ha imparato ad accogliere.
            </h2>
            <div className={`body-text ${styles.body}`}>
              <p>
                Tutto è iniziato nel 1987, quando i fratelli Oddone hanno deciso di trasformare
                la cascina dei nonni — sei stanze, un orto, qualche capra — in un luogo dove gli
                ospiti potessero finalmente fermarsi. Da allora abbiamo cambiato molto, ma non
                l&apos;essenziale: la cucina ancora a legna, il pane impastato la mattina, le chiavi
                consegnate a mano.
              </p>
              <p>
                Oggi siamo sei appartamenti, un ristorante che lavora solo con i produttori della
                valle, e una scuola di mountain bike riconosciuta a livello nazionale. Tutto attorno:
                i boschi del Monte Magno, il torrente, e il silenzio che si trova solo a settecento
                metri d&apos;altitudine.
              </p>
            </div>
            <p className={styles.signature}>— Marco, Elena &amp; Pietro Oddone</p>
          </Reveal>
        </div>

        <Reveal className={styles.facts}>
          {[
            { num: '1987', unit: null,       label: 'Anno di fondazione' },
            { num: '720',  unit: 'm s.l.m.', label: 'Altitudine' },
            { num: '6',    unit: 'unità',    label: 'Appartamenti' },
            { num: '100',  unit: 'km',       label: 'Sentieri MTB' },
          ].map(({ num, unit, label }) => (
            <div key={label} className={styles.fact}>
              <div className={styles.factNum}>
                {num}
                {unit && <span className={styles.unit}>{unit}</span>}
              </div>
              <div className={styles.factLabel}>{label}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
