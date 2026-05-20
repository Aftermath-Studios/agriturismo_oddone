import Nav from '@/components/Nav/Nav';
import PageHero from '@/components/PageHero/PageHero';
import BikeTour from '@/components/BikeTour/BikeTour';
import TrailDetails from '@/components/TrailDetails/TrailDetails';
import Guides from '@/components/Guides/Guides';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bike Tour',
  description: 'Tour MTB guidati in Valle Sabbia con guide AMI certificate. Tre livelli: Scenic (22 km), Adventure (38 km), Extreme (54 km). Gruppi di massimo 6 persone.',
  openGraph: {
    title: 'Bike Tour — Agriturismo Oddone',
    description: 'Tour MTB guidati in Valle Sabbia con guide AMI certificate. Tre livelli, massimo 6 persone per gruppo.',
    images: [{ url: '/images/bike-forest.jpg', width: 1200, height: 630 }],
  },
};

export default function BikeTourPage() {
  return (
    <>
      <Nav variant="solid" />
      <PageHero
        crumb="Bike Tour"
        eyebrow="In bici"
        title={<>Tre percorsi,<br />un solo <em>singletrack</em>.</>}
        lede="Guide certificate AMI, gruppi di massimo sei persone, partenza dal cortile. Si torna sempre stanchi nel modo giusto — e con qualche storia da raccontare."
        meta={[
          { label: 'Km di sentieri', value: '100' },
          { label: 'Livelli di percorso', value: '3' },
          { label: 'Guide certificate AMI', value: '3' },
          { label: 'Max partecipanti', value: '6' },
        ]}
      />
      <BikeTour />
      <TrailDetails />
      <Guides />
      <Contact />
      <Footer />
    </>
  );
}
