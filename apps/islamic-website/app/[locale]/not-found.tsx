import type { Metadata } from 'next';
import { DEPLOY_URL } from '../../constants';
import { islamicOpenGraphImages } from '../shared-metadata';

const title = 'Not Found';

export const metadata: Metadata = {
  title,
  openGraph: {
    title: `${title} | IslamicCoin`,
    url: new URL(DEPLOY_URL).toString(),
    images: islamicOpenGraphImages,
  },
};

export { NotFound as default } from '@haqq/islamic-website/not-found-page';
