import { ReactNode } from 'react';
import { Link } from '@/i18n/navigation';
import styles from './PageHero.module.css';

type Meta = { label: string; value: string };

type Props = {
  crumb: string;
  eyebrow: string;
  title: ReactNode;
  lede: string;
  meta: [Meta, Meta, Meta, Meta];
};

export default function PageHero({ crumb, eyebrow, title, lede, meta }: Props) {
  return (
    <header className={styles.hero}>
      <div className="container">
        <div className={styles.crumbs}>
          <Link href="/">Home</Link>
          <span>/</span>
          <span>{crumb}</span>
        </div>
        <div className={styles.inner}>
          <div>
            <span className="eyebrow">{eyebrow}</span>
            <h1 className={styles.title}>{title}</h1>
          </div>
          <p className={`lede ${styles.lede}`}>{lede}</p>
        </div>
        <div className={styles.meta}>
          {meta.map(({ label, value }) => (
            <div key={label}>
              <span className="mono-caps">{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
