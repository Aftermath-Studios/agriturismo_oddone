import Nav from '@/components/Nav/Nav';
import PageHero from '@/components/PageHero/PageHero';
import ActivitiesList from '@/components/ActivitiesList/ActivitiesList';
import SeasonalCalendar from '@/components/SeasonalCalendar/SeasonalCalendar';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Attività',
  description: 'Passeggiate a cavallo, raccolta funghi, caccia al tartufo, laboratori di cucina, trekking e tour delle cantine in Valle Sabbia. Sei esperienze, tutto l\'anno.',
  openGraph: {
    title: 'Attività — Agriturismo Oddone',
    description: 'Sei esperienze outdoor e gastronomiche in Valle Sabbia. Disponibili tutto l\'anno.',
    images: [{ url: '/images/bike-vista.jpg', width: 1200, height: 630 }],
  },
};

export default function AttivitaPage() {
  return (
    <>
      <Nav variant="solid" />
      <PageHero
        crumb="Attività"
        eyebrow="Cosa fare"
        title={<>Cose da fare,<br />che <em>non</em> sono pedalare.</>}
        lede="La valle ha ritmi propri — i funghi in settembre, il tartufo in ottobre, la vendemmia a fine estate. Noi vi accompagniamo in ognuno di questi."
        meta={[
          { label: 'Esperienze', value: '6' },
          { label: "Tutto l'anno", value: '2' },
          { label: 'Da', value: '€ 35 /p.' },
          { label: 'Partner locali', value: '8' },
        ]}
      />
      <ActivitiesList />
      <SeasonalCalendar />
      <Contact />
      <Footer />
    </>
  );
}
