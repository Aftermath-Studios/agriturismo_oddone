import { Fragment } from 'react';
import styles from './Marquee.module.css';

const ITEMS = [
  'Cucina di stagione',
  'Sei appartamenti',
  '100 km di sentieri MTB',
  'Guide certificate AMI',
  'Boschi di faggio',
];

export default function Marquee() {
  const all = [...ITEMS, ...ITEMS];

  return (
    <div className={styles.marquee} aria-hidden="true">
      <div className={styles.track}>
        {all.map((item, i) => (
          <Fragment key={i}>
            <span>{item}</span>
            <span className={styles.sep}>✦</span>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
