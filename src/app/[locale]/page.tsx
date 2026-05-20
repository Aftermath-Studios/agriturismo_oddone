import Nav from '@/components/Nav/Nav';
import Hero from '@/components/Hero/Hero';
import Marquee from '@/components/Marquee/Marquee';
import Story from '@/components/Story/Story';
import Experience from '@/components/Experience/Experience';
import Accommodations from '@/components/Accommodations/Accommodations';
import BikeTour from '@/components/BikeTour/BikeTour';
import Restaurant from '@/components/Restaurant/Restaurant';
import OfferCard from '@/components/OfferCard/OfferCard';
import Testimonials from '@/components/Testimonials/Testimonials';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';

export const metadata = {
  title: 'Agriturismo Oddone — Tra Natura e Sapori',
  description: 'Agriturismo di famiglia tra le colline e i boschi della Valle Sabbia. Appartamenti, cucina di territorio ed esperienze in mountain bike.',
};

export default function HomePage() {
  return (
    <>
      <Nav variant="transparent" />
      <Hero />
      <Marquee />
      <Story />
      <Experience />
      <Accommodations />
      <BikeTour />
      <Restaurant />
      <OfferCard />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
