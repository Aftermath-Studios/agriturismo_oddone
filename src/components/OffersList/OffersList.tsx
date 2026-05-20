'use client';

import { useState } from 'react';
import Image from 'next/image';
import Reveal from '@/components/Reveal/Reveal';
import styles from './OffersList.module.css';

type Filter = 'Tutte' | 'Coppie' | 'Famiglie' | 'Bike' | 'Stagionali';

const FILTERS: { label: Filter; count: number }[] = [
  { label: 'Tutte', count: 7 },
  { label: 'Coppie', count: 3 },
  { label: 'Famiglie', count: 2 },
  { label: 'Bike', count: 2 },
  { label: 'Stagionali', count: 4 },
];

const OFFERS = [
  {
    id: 'pasqua',
    variant: 'featured' as const,
    image: '/images/bike-stone-bridge.jpg',
    imageAlt: 'Ponte di pietra nel bosco',
    flag: 'In primo piano',
    tagClass: styles.tagSpring,
    tag: 'Primavera · scade 19 apr',
    title: <>Sette notti, <em>una valle intera</em></>,
    body: 'Soggiorno di 7 notti con cena degustazione, escursione MTB guidata e colazione tutte le mattine.',
    price: '€ 690',
    unit: '7 notti',
    categories: ['Tutte', 'Stagionali'] as Filter[],
  },
  {
    id: 'bike-weekend',
    variant: 'default' as const,
    image: '/images/bike-forest.jpg',
    imageAlt: 'Singletrack nel bosco',
    flag: 'Bike',
    flagAccent: true,
    tagClass: styles.tagSummer,
    tag: 'Maggio-giugno · scade 30 giu',
    title: <>Bike <em>Weekend Adventure</em></>,
    body: 'Due notti, due percorsi guidati livello 2, noleggio e-bike, pasta party del sabato sera.',
    price: '€ 420',
    unit: '3 notti',
    categories: ['Tutte', 'Bike', 'Stagionali'] as Filter[],
  },
  {
    id: 'funghi',
    variant: 'default' as const,
    imagePh: true,
    phLabel: 'MUSHROOM-CHESTNUT.JPG',
    phIcon: '◉',
    flag: 'Autunno',
    tagClass: styles.tagAutumn,
    tag: 'Settembre-ottobre · prenotabile',
    title: <>Funghi &amp; <em>Castagne</em></>,
    body: 'Weekend di raccolta guidata con esperto micologo, laboratorio in cucina, cena con i raccolti del giorno.',
    price: '€ 340',
    unit: '2 notti',
    categories: ['Tutte', 'Stagionali'] as Filter[],
  },
  {
    id: 'romantica',
    variant: 'compact' as const,
    tagClass: styles.tagEvergreen,
    tag: "Tutto l'anno",
    title: <>Fuga <em>Romantica</em></>,
    body: "Due notti nell'appartamento Quercia, cena a lume di candela in cucina, colazione in camera.",
    price: '€ 280',
    unit: '2 notti',
    categories: ['Tutte', 'Coppie'] as Filter[],
  },
  {
    id: 'famiglia',
    variant: 'default' as const,
    imagePh: true,
    phLabel: 'FAMILY-COURTYARD.JPG',
    phIcon: '◑',
    flag: 'Famiglie',
    tagClass: styles.tagSummer,
    tag: 'Luglio-agosto · scade 31 ago',
    title: <>Estate in <em>famiglia</em></>,
    body: "Una settimana intera nell'appartamento Tiglio, laboratorio di pasta fresca con i bambini, pony riding, due cene incluse.",
    price: '€ 1.200',
    unit: '7 notti',
    categories: ['Tutte', 'Famiglie', 'Stagionali'] as Filter[],
  },
  {
    id: 'vendemmia',
    variant: 'compact' as const,
    tagClass: styles.tagAutumn,
    tag: '14-22 settembre · 8 posti',
    title: <>Vendemmia in <em>Franciacorta</em></>,
    body: 'Quattro notti, una giornata in vigna con cantina partner, visita oleificio, cena di chiusura con il vignaiolo.',
    price: '€ 520',
    unit: '4 notti',
    categories: ['Tutte', 'Stagionali'] as Filter[],
  },
  {
    id: 'capodanno',
    variant: 'default' as const,
    imagePh: true,
    phLabel: 'WINTER-FIREPLACE.JPG',
    phIcon: '❄',
    flag: 'Posti limitati',
    flagAccent: true,
    tagClass: styles.tagWinter,
    tag: '29 dic – 2 gen · 6 posti',
    title: <>Capodanno in <em>cascina</em></>,
    body: "Cenone della famiglia Oddone, brindisi a mezzanotte nel cortile, escursione del primo gennaio, quattro notti.",
    price: '€ 890',
    unit: '4 notti',
    categories: ['Tutte', 'Coppie', 'Stagionali'] as Filter[],
  },
];

export default function OffersList() {
  const [active, setActive] = useState<Filter>('Tutte');
  const visible = OFFERS.filter((o) => o.categories.includes(active));

  return (
    <section className={`section ${styles.section}`} id="all-offers">
      <div className="container">
        <Reveal className={styles.head}>
          <span className="eyebrow">Pacchetti attivi</span>
          <h2 className="section-title">
            Tutte le offerte<br />di questa <em>stagione</em>.
          </h2>
          <div className={styles.filters} role="tablist" aria-label="Filtra offerte">
            {FILTERS.map(({ label, count }) => (
              <button
                key={label}
                role="tab"
                aria-selected={active === label}
                className={`${styles.filter} ${active === label ? styles.filterActive : ''}`}
                onClick={() => setActive(label)}
              >
                {label} <small>{count}</small>
              </button>
            ))}
          </div>
        </Reveal>

        <div className={styles.grid}>
          {visible.map((offer) => {
            const isFeatured = offer.variant === 'featured';
            const isCompact = offer.variant === 'compact';
            return (
              <a
                key={offer.id}
                href="#"
                className={`${styles.tile} ${isFeatured ? styles.featured : ''} ${isCompact ? styles.compact : ''}`}
              >
                {(offer.image || offer.imagePh) && (
                  <div className={styles.tileImage}>
                    {offer.image ? (
                      <Image src={offer.image} alt={offer.imageAlt ?? ''} fill style={{ objectFit: 'cover' }} />
                    ) : (
                      <div className="ph" data-label={offer.phLabel}>
                        <div className="ph-icon">{offer.phIcon}</div>
                      </div>
                    )}
                    {offer.flag && (
                      <span className={`${styles.tileFlag} ${offer.flagAccent ? styles.tileFlagAccent : ''}`}>
                        {offer.flag}
                      </span>
                    )}
                  </div>
                )}
                <div className={styles.tileBody}>
                  <span className={`${styles.tileTag} ${offer.tagClass}`}>
                    <span className={styles.dot} />
                    {offer.tag}
                  </span>
                  <h3>{offer.title}</h3>
                  <p>{offer.body}</p>
                  <div className={styles.tileFoot}>
                    <div className={styles.tilePrice}>
                      <small>da</small>
                      <strong>{offer.price}</strong>
                      <small>· {offer.unit}</small>
                    </div>
                    <span className={styles.tileArrow}>→</span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        <div className={styles.footnote}>
          <span className="mono-caps">
            Tutte le offerte si intendono per persona, in camera doppia. Tassa di soggiorno non inclusa (€ 2,00 / notte).
          </span>
        </div>
      </div>
    </section>
  );
}
