import Nav from '@/components/Nav/Nav';
import PageHero from '@/components/PageHero/PageHero';
import OfferCard from '@/components/OfferCard/OfferCard';
import OffersList from '@/components/OffersList/OffersList';
import HowItWorks from '@/components/HowItWorks/HowItWorks';
import Footer from '@/components/Footer/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Offerte',
  description: 'Sette pacchetti stagionali all\'Agriturismo Oddone in Valle Sabbia. Disponibilità reale, conferma entro 24 ore, cancellazione gratuita entro 72 ore.',
  openGraph: {
    title: 'Offerte — Agriturismo Oddone',
    description: 'Sette pacchetti stagionali in Valle Sabbia. Disponibilità reale, conferma entro 24 ore.',
    images: [{ url: '/images/bike-stone-bridge.jpg', width: 1200, height: 630 }],
  },
};

export default function OffertePage() {
  return (
    <>
      <Nav variant="solid" />
      <PageHero
        crumb="Offerte"
        eyebrow="Pacchetti"
        title={<>Sette <em>offerte</em>,<br />disponibilità reale.</>}
        lede="Niente prezzi gonfiati da scontare poi. Le disponibilità che vedete sono quelle vere, le scadenze sono quelle reali."
        meta={[
          { label: 'Offerte attive', value: '7' },
          { label: 'In scadenza', value: '2' },
          { label: 'Pacchetti family', value: '3' },
          { label: 'Ultimo aggiornamento', value: '15 mag 2026' },
        ]}
      />
      <OfferCard />
      <OffersList />
      <HowItWorks />
      <Footer />
    </>
  );
}
