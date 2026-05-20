'use client';

import styles from './Footer.module.css';

export default function NewsletterForm() {
  return (
    <form
      className={styles.newsletter}
      onSubmit={(e) => e.preventDefault()}
    >
      <input type="email" placeholder="la-tua@email.com" aria-label="Email" />
      <button type="submit">Iscriviti</button>
    </form>
  );
}
