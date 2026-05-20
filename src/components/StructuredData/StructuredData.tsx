export default function StructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LodgingBusiness',
        '@id': 'https://agriturismooddone.com/#lodging',
        name: 'Agriturismo Oddone',
        description: 'Agriturismo di famiglia a 720 m sul livello del mare, in Valle Sabbia (Brescia). Sei appartamenti, ristorante di territorio e tour MTB guidati.',
        url: 'https://agriturismooddone.com',
        telephone: '+390365123456',
        email: 'info@agriturismooddone.com',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Via Valle Sabbia',
          addressLocality: 'Valle Sabbia',
          addressRegion: 'Brescia',
          postalCode: '25070',
          addressCountry: 'IT',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 45.75,
          longitude: 10.45,
        },
        priceRange: '€€',
        servesCuisine: 'Italian, Regional',
        numberOfRooms: 6,
        amenityFeature: [
          { '@type': 'LocationFeatureSpecification', name: 'Wi-Fi', value: true },
          { '@type': 'LocationFeatureSpecification', name: 'Parking', value: true },
          { '@type': 'LocationFeatureSpecification', name: 'Kitchen', value: true },
          { '@type': 'LocationFeatureSpecification', name: 'Pets allowed', value: true },
        ],
        image: 'https://agriturismooddone.com/images/bike-vista.jpg',
        sameAs: [
          'https://www.instagram.com/agriturismooddone',
          'https://www.facebook.com/agriturismooddone',
        ],
      },
      {
        '@type': 'Restaurant',
        '@id': 'https://agriturismooddone.com/#restaurant',
        name: 'Ristorante Agriturismo Oddone',
        url: 'https://agriturismooddone.com/it/ristorante',
        servesCuisine: ['Italian', 'Regional', 'Farm-to-table'],
        priceRange: '€€',
        hasMenu: 'https://agriturismooddone.com/it/ristorante',
        openingHoursSpecification: [
          { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Friday', 'Saturday', 'Sunday'], opens: '12:30', closes: '14:30' },
          { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Friday', 'Saturday', 'Sunday'], opens: '19:30', closes: '21:30' },
        ],
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Valle Sabbia',
          addressRegion: 'Brescia',
          addressCountry: 'IT',
        },
      },
      {
        '@type': 'Organization',
        '@id': 'https://agriturismooddone.com/#org',
        name: 'Agriturismo Oddone',
        url: 'https://agriturismooddone.com',
        logo: 'https://agriturismooddone.com/images/badge-guida-mtb.png',
        foundingDate: '1987',
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+390365123456',
          contactType: 'reservations',
          availableLanguage: ['Italian', 'English'],
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
