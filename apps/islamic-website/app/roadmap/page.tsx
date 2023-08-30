import type { Metadata } from 'next';
import { RoadmapPage } from '@haqq/islamic-website/roadmap-page';
import { getRoadmapContent } from '../../utils/get-roadmap-data';
import { TURNSTILE_SITEKEY } from '../../constants';

const title = 'IslamicCoin | Roadmap';
const description =
  'Chart the evolution of Islamic Coin as we pioneer the melding of Islamic traditions with blockchain technology.';

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    images: [{ url: '/opengraph-image.png' }],
  },
};

export default async function Page() {
  const roadmap = await getRoadmapContent();

  return <RoadmapPage roadmap={roadmap} turnstileSiteKey={TURNSTILE_SITEKEY} />;
}
