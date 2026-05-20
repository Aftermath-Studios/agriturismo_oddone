import Nav from '@/components/Nav/Nav';
import PageHero from '@/components/PageHero/PageHero';
import Accommodations from '@/components/Accommodations/Accommodations';
import AmenitiesGrid from '@/components/AmenitiesGrid/AmenitiesGrid';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Alloggi',
  description: 'Sei appartamenti immersi nella Valle Sabbia a 720 m sul livello del mare. Ogni spazio è diverso dagli altri — per dimensione, per vista, per il legno che ha sul soffitto.',
  openGraph: {
    title: 'Alloggi — Agriturismo Oddone',
    description: 'Sei appartamenti immersi nella Valle Sabbia a 720 m sul livello del mare.',
    images: [{ url: '/images/bike-vista.jpg', width: 1200, height: 630 }],
  },
};

export default function AlloggiPage() {
  return (
    <>
      <Nav variant="solid" />
      <PageHero
        crumb="Alloggi"
        eyebrow="Dove dormirete"
        title={<>Sei appartamenti,<br />un solo <em>silenzio</em>.</>}
        lede="Ogni spazio è diverso dagli altri — per dimensione, per vista, per il legno che ha sul soffitto. Tutti con cucina, tutti con una finestra che vale il viaggio."
        meta={[
          { label: 'Disponibili', value: '6' },
          { label: 'Ultime date', value: '2' },
          { label: 'Per famiglie', value: '3' },
          { label: 'Ultimo aggiornamento', value: '15 mag 2026' },
        ]}
      />
      <Accommodations />
      <AmenitiesGrid />
      <Contact />
      <Footer />
    </>
  );
}
