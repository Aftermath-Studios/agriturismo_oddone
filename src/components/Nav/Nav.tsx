'use client';

import { useState, useEffect } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import styles from './Nav.module.css';

type NavVariant = 'transparent' | 'solid';

type Props = {
  variant?: NavVariant;
};

const NAV_ROUTES = [
  { href: '/alloggi',    route: 'alloggi',    labelKey: 'alloggi',    subKey: 'alloggiSub' },
  { href: '/ristorante', route: 'ristorante', labelKey: 'ristorante', subKey: 'ristoranteSub' },
  { href: '/bike-tour',  route: 'bike-tour',  labelKey: 'bikeTour',   subKey: 'bikeTourSub' },
  { href: '/attivita',   route: 'attivita',   labelKey: 'attivita',   subKey: 'attivitaSub' },
  { href: '/offerte',    route: 'offerte',    labelKey: 'offerte',    subKey: 'offerteSub' },
  { href: '/contatti',   route: 'contatti',   labelKey: 'contatti',   subKey: 'contattiSub' },
] as const;

export default function Nav({ variant = 'transparent' }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations('nav');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const close = () => setMobileOpen(false);

  const navClass = [
    styles.nav,
    variant === 'solid' ? styles.solid : '',
    scrolled ? styles.scrolled : '',
  ].filter(Boolean).join(' ');

  const activeRoute = NAV_ROUTES.find(l => pathname.startsWith('/' + l.route))?.route;

  return (
    <>
      <nav className={navClass} id="nav">
        <Link href="/" className={styles.navBrand}>
          <span className={styles.navBrandMark}>O</span>
          <span className={styles.navBrandText}>
            Agriturismo Oddone
            <small>Tra Natura e Sapori · Est. 1987</small>
          </span>
        </Link>

        <div className={styles.navLinks}>
          {NAV_ROUTES.map(({ href, route, labelKey }) => (
            <Link
              key={route}
              href={href}
              className={activeRoute === route ? styles.active : undefined}
            >
              {t(labelKey)}
            </Link>
          ))}
        </div>

        <div className={styles.navTools}>
          <LangToggle pathname={pathname} />
          <Link
            href="/contatti"
            className={`${styles.navCta} btn ${variant === 'transparent' ? 'btn-light' : ''}`}
          >
            {t('prenota')} <span className="arrow">→</span>
          </Link>
          <button
            className={styles.navBurger}
            aria-label={t('apriMenu')}
            aria-expanded={mobileOpen}
            aria-controls="mobileMenu"
            onClick={() => setMobileOpen(true)}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <aside
        className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileOpen : ''}`}
        id="mobileMenu"
        aria-hidden={!mobileOpen}
      >
        <div className={styles.mobileHead}>
          <Link href="/" className={styles.mobileBrand} onClick={close}>
            <span className={styles.mobileMark}>O</span>
            <span>Agriturismo Oddone</span>
          </Link>
          <button className={styles.mobileClose} aria-label={t('chiudiMenu')} onClick={close}>
            <span /><span />
          </button>
        </div>

        <nav className={styles.mobileLinks} aria-label="Navigazione principale">
          {NAV_ROUTES.map(({ href, route, labelKey, subKey }, i) => (
            <Link
              key={route}
              href={href}
              className={activeRoute === route ? styles.active : undefined}
              onClick={close}
            >
              <span className={styles.mobileLinkNum}>— 0{i + 1}</span>
              <span className={styles.mobileLinkTitle}>{t(labelKey)}</span>
              <span className={styles.mobileLinkSub}>{t(subKey)}</span>
            </Link>
          ))}
        </nav>

        <div className={styles.mobileFoot}>
          <LangToggle pathname={pathname} dark />
          <a href="tel:+390365123456" className={styles.mobilePhone}>+39 0365 12 34 56</a>
          <Link href="/contatti" className={`${styles.mobileCta} btn`} onClick={close}>
            {t('prenotaSoggiorno')} <span className="arrow">→</span>
          </Link>
        </div>
      </aside>

      <div
        className={`${styles.backdrop} ${mobileOpen ? styles.backdropOpen : ''}`}
        aria-hidden="true"
        onClick={close}
      />
    </>
  );
}

function LangToggle({ pathname, dark = false }: { pathname: string; dark?: boolean }) {
  const locale = useLocale();
  const t = useTranslations('nav');

  return (
    <div
      className={`${styles.langToggle} ${dark ? styles.langDark : ''}`}
      role="tablist"
      aria-label={t('lingua')}
    >
      <Link
        href={pathname}
        locale="it"
        role="tab"
        aria-selected={locale === 'it'}
        className={`${styles.langBtn} ${locale === 'it' ? styles.langActive : ''}`}
      >
        <span>IT</span>
      </Link>
      <Link
        href={pathname}
        locale="en"
        role="tab"
        aria-selected={locale === 'en'}
        className={`${styles.langBtn} ${locale === 'en' ? styles.langActive : ''}`}
      >
        <span>EN</span>
      </Link>
    </div>
  );
}
