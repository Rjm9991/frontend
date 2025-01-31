import type { Metadata } from 'next';
import { DEPLOY_URL } from '../../../../../../constants';
import { islamicOpenGraphImages } from '../../../../../shared-metadata';
import { AcademyModulesPage } from '@haqq/islamic-website/academy-page';

const title = 'Academy';
const description =
  'Dive into a world of knowledge. Explore comprehensive guides on Shariah-compliant financial practices and blockchain integration.';

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title: `${title} | IslamicCoin`,
    description,
    images: islamicOpenGraphImages,
    url: new URL('/academy-lessons', DEPLOY_URL).toString(),
  },
};

export default async function Page({
  params,
}: {
  params: { moduleIndex: string; lessonIndex: string };
}) {
  return (
    <AcademyModulesPage
      lessonIndex={Number(params.lessonIndex)}
      moduleIndex={Number(params.moduleIndex)}
    />
  );
}
