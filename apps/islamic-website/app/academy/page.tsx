import { Metadata } from 'next';
import { DEPLOY_URL } from '../../constants';

// export { AcademyPage as default } from '@haqq/islamic-website/academy-page';
export { AvailableSoonPage as default } from '@haqq/islamic-website/academy-page';

export const metadata: Metadata = {
  title: 'IslamicCoin | Academy',
  description:
    'Dive into a world of knowledge. Explore comprehensive guides on Shariah-compliant financial practices and blockchain integration.',
  openGraph: {
    images: [{ url: '/opengraph-image.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: [{ url: '/opengraph-image.png' }],
  },
  metadataBase: new URL(DEPLOY_URL),
};
