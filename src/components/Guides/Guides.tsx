import Image from 'next/image';
import Reveal from '@/components/Reveal/Reveal';
import styles from './Guides.module.css';

const TEAM = [
  { name: 'Marco Oddone',  role: 'Guida AMI · 35 anni di MTB',    label: 'MARCO-PORTRAIT.JPG', body: 'Conosce ogni sentiero della valle dagli anni \'90. La sua specialità sono i percorsi panoramici e le pedalate in famiglia.' },
  { name: 'Pietro Oddone', role: 'Guida AMI · Specialista Enduro', label: 'PIETRO-PORTRAIT.JPG', body: 'Cresciuto sui sentieri della Valle Sabbia. Porta i gruppi più tecnici, le linee del crinale, le discese che si raccontano dopo.' },
  { name: 'Luca Beretta',  role: 'Guida AMI · Bike repair',        label: 'LUCA-PORTRAIT.JPG',  body: 'Si occupa di manutenzione bici, noleggio e-MTB e dei gruppi più piccoli sui percorsi base.' },
];

export default function Guides() {
  return (
    <section className={`section ${styles.guides}`}>
      <div className="container">
        <div className={styles.inner}>
          <Reveal className={styles.copy}>
            <span className={`eyebrow ${styles.eyebrow}`}>Le guide</span>
            <h2 className="section-title">
              Tre persone,<br />cinquant&apos;anni di <em>sentieri</em>.
            </h2>
            <div className={`body-text ${styles.body}`}>
              <p>
                Marco e Pietro Oddone, padre e figlio, sono entrambi guide certificate
                dall&apos;Accademia Nazionale di Mountain Bike — l&apos;unico riconoscimento ufficiale
                per chi accompagna in bici in Italia. Da loro si impara la traiettoria giusta,
                ma anche dove crescono i mirtilli a luglio.
              </p>
              <p>
                Si pedala in gruppi piccoli, massimo sei persone. Si ride. E ogni tanto
                qualcuno si ferma per fotografare un cinghiale.
              </p>
            </div>
          </Reveal>

          <Reveal className={styles.figure}>
            <div className={styles.badge}>
              <Image
                src="/images/badge-guida-mtb.png"
                alt="Accademia Nazionale di Mountain Bike"
                width={120}
                height={120}
                style={{ objectFit: 'contain' }}
              />
              <div className={styles.badgeMeta}>
                <span className="mono-caps">Certificazione · 2019</span>
                <strong>Accademia Nazionale<br />Mountain Bike</strong>
                <span className="mono-caps">N. iscrizione · 0247</span>
              </div>
            </div>
          </Reveal>
        </div>

        <div className={styles.team}>
          {TEAM.map(({ name, role, label, body }) => (
            <Reveal key={name} as="article" className={styles.guide}>
              <div className={`ph dark ${styles.portrait}`} data-label={label}>
                <div className="ph-icon">◷</div>
              </div>
              <div className={styles.guideBody}>
                <h3>{name}</h3>
                <span className={styles.role}>{role}</span>
                <p>{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
