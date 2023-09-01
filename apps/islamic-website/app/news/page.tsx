import type { Metadata } from 'next';
import { NewsPage } from '@haqq/islamic-website/news-page';
import { getNewsPageContent } from '../../utils/get-news-data';
import { DEPLOY_URL, TURNSTILE_SITEKEY } from '../../constants';

const title = 'IslamicCoin | News';
const description =
  'Stay in the loop with the latest breakthroughs, announcements, and milestones from Islamic Coin.';

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    images: [{ url: '/opengraph-image.png' }],
    locale: 'en-US',
    url: `${new URL('/news', DEPLOY_URL).toString()}`,
    type: 'website',
  },
};

export default async function Page() {
  const news = await getNewsPageContent();

  return <NewsPage news={news} turnstileSiteKey={TURNSTILE_SITEKEY} />;
}
