import type { Metadata } from 'next';

const title = 'IslamicCoin | Our Values';
const description =
  'Discover the heart of Islamic Coin. At the crossroads of Islamic traditions and innovation, we champion a future where ethics take center stage.';

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    images: [{ url: '/opengraph-image.png' }],
  },
};

export { ValuesPage as default } from '@haqq/islamic-website/values-page';
