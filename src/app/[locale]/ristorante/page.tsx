import Nav from '@/components/Nav/Nav';
import PageHero from '@/components/PageHero/PageHero';
import Restaurant from '@/components/Restaurant/Restaurant';
import MenuSample from '@/components/MenuSample/MenuSample';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ristorante',
  description: 'Cucina di territorio in Valle Sabbia. Menu stagionale con prodotti dell\'orto, carne degli allevamenti locali e vini della cantina.',
  openGraph: {
    title: 'Ristorante — Agriturismo Oddone',
    description: 'Cucina di territorio in Valle Sabbia. Menu stagionale con prodotti dell\'orto e carne degli allevamenti locali.',
    images: [{ url: '/images/bike-vista.jpg', width: 1200, height: 630 }],
  },
};

export default function RistorantePage() {
  return (
    <>
      <Nav variant="solid" />
      <PageHero
        crumb="Ristorante"
        eyebrow="A tavola"
        title={<>Cucina di territorio,<br />ogni <em>stagione</em>.</>}
        lede="Il menu cambia con quello che cresce. In primavera asparagi e ortiche, in estate pomodori e fiori di zucca, in autunno funghi e selvaggina, in inverno polenta e stracotto."
        meta={[
          { label: 'Coperti', value: '32' },
          { label: 'Portate stagionali', value: '24' },
          { label: 'Produttori locali', value: '14' },
          { label: 'Cambio menù', value: '15 gg' },
        ]}
      />
      <Restaurant />
      <MenuSample />
      <Contact />
      <Footer />
    </>
  );
}
