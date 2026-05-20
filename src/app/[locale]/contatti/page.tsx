import Nav from '@/components/Nav/Nav';
import PageHero from '@/components/PageHero/PageHero';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contatti',
  description: 'Contatta l\'Agriturismo Oddone in Valle Sabbia. Disponibili per prenotazioni, informazioni e WhatsApp. Risposta garantita entro 24 ore.',
  openGraph: {
    title: 'Contatti — Agriturismo Oddone',
    description: 'Contatta l\'Agriturismo Oddone in Valle Sabbia. Risposta entro 24 ore.',
    images: [{ url: '/images/bike-vista.jpg', width: 1200, height: 630 }],
  },
};

export default function ContattiPage() {
  return (
    <>
      <Nav variant="solid" />
      <PageHero
        crumb="Contatti"
        eyebrow="Vieni a trovarci"
        title={<>A trenta minuti<br />dal <em>Lago di Garda</em>.</>}
        lede="Siamo aperti tutto l'anno. Per prenotazioni o per due chiacchiere con la famiglia, scriveteci o chiamateci. Rispondiamo entro 24 ore."
        meta={[
          { label: 'Risposta in', value: '24 h' },
          { label: 'WhatsApp', value: 'Disponibile' },
          { label: 'Aperto', value: "Tutto l'anno" },
          { label: 'Reception', value: '8:00 – 22:00' },
        ]}
      />
      <Contact />
      <Footer />
    </>
  );
}
