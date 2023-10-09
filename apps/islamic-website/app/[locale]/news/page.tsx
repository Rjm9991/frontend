import type { Metadata } from 'next';
import { NewsPage } from '@haqq/islamic-website/news-page';
import { getNewsPageContent } from '../../../utils/get-news-data';
import { DEPLOY_URL, TURNSTILE_SITEKEY } from '../../../constants';
import { islamicOpenGraphImages } from '../../shared-metadata';

const title = 'News';
const description =
  'Stay in the loop with the latest breakthroughs, announcements, and milestones from Islamic Coin.';

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title: `${title} | IslamicCoin`,
    description,
    images: islamicOpenGraphImages,
    url: new URL('/news', DEPLOY_URL).toString(),
  },
};

export default async function Page() {
  const news = await getNewsPageContent();

  return <NewsPage news={news} turnstileSiteKey={TURNSTILE_SITEKEY} />;
}