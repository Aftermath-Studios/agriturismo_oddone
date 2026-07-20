import Link from "next/link";

export const metadata = {
  title: "Offerte di stagione — Agriturismo Oddone",
  description:
    "Pacchetti e offerte stagionali per il vostro soggiorno in Val Bormida.",
};

export default function OffersPage() {
  return (
    <div className="route-offers">
      <header className="section container offers-empty reveal">
        <div className="page-hero-crumbs">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Offerte</span>
        </div>
        <span className="eyebrow">Offerte</span>
        <h1 className="offers-empty-title">Nessuna offerta <em>al momento</em>.</h1>
        <p className="lede offers-empty-lede">Non ci sono offerte attive in questo periodo. Per disponibilità e tariffe scriveteci: saremo felici di costruire il soggiorno su misura per voi.</p>
        <div className="offers-empty-cta">
          <Link href="/contatti" className="btn">Contattaci <span className="arrow">→</span></Link>
        </div>
      </header>
    </div>
  );
}
