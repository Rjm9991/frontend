import {
  Container,
  DiscordIcon,
  FacebookIcon,
  GithubIcon,
  LinkedinIcon,
  MediumIcon,
  TelegramIcon,
  Text,
  TwitterIcon,
  YoutubeIcon,
} from '@haqq/islamic-website-ui-kit';
import { ReactNode } from 'react';
import Link from 'next/link';
import bgImgData from '../../assets/images/bg-image.svg';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import clsx from 'clsx';

const SOCIAL_ICONS: Record<string, ReactNode> = {
  youtube: <YoutubeIcon />,
  discord: <DiscordIcon />,
  facebook: <FacebookIcon />,
  github: <GithubIcon />,
  linkedin: <LinkedinIcon />,
  medium: <MediumIcon />,
  telegram: <TelegramIcon />,
  twitter: <TwitterIcon />,
};

interface SocialIconLink {
  id: string;
  url: string;
  title: string;
}
function SocialIconLink({ id, title, url }: SocialIconLink) {
  const icon = SOCIAL_ICONS[id];

  return (
    <Link
      title={title}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="cursor-pointer rounded-[12px] bg-[#2F2F2F] p-[16px] transition-colors duration-300 hover:bg-[#585858]"
    >
      {icon}
    </Link>
  );
}

export function CommunityHubPage({
  socialLinks,
}: {
  socialLinks: SocialIconLink[];
}) {
  const t = useTranslations('community-hub-page');
  return (
    <section>
      <Container className="overflow-x-clip">
        <div className="relative pb-[60px] pt-[32px] md:pb-[120px] md:pt-[52px] lg:pb-[180px] lg:pt-[68px]">
          <div className="flex flex-col">
            <div className="max-w-[340px] md:max-w-[400px] lg:max-w-[480px] xl:max-w-[740px] min-[1440px]:max-w-[800px]">
              <h1 className="text-[46px] font-[600] leading-[52px] md:text-[60px] md:leading-none lg:text-[80px]">
                {t('title')}
              </h1>
              <div className="mt-[24px] md:mt-[32px] lg:mt-[40px]">
                <Text size="small">{t('text')}</Text>
              </div>
            </div>
            <div className="mt-[32px] md:mt-[44px] lg:mt-[60px]">
              <Text isMono>{t('subtitle')}</Text>
            </div>
            <div className="mt-[16px] flex flex-wrap gap-[16px] md:mt-[20px] lg:mt-[24px]">
              {socialLinks.map(({ id, title, url }) => {
                return (
                  <SocialIconLink id={id} key={title} url={url} title={title} />
                );
              })}
            </div>
          </div>
          <div
            className={clsx(
              'absolute z-[-1] translate-y-1/2 ltr:translate-x-1/2 rtl:-translate-x-1/2',
              'top-[-435px] ltr:right-[-75px] rtl:left-[-75px]',
              'md:top-[-535px] ltr:md:right-[110px] rtl:md:left-[110px]',
              'lg:top-[-580px] ltr:lg:right-[175px] rtl:lg:left-[175px]',
              'rtl:lx:left-[145px] ltr:xl:right-[145px]',
              'min-[1440px]:top-[-585px] ltr:min-[1440px]:right-[275px] rtl:min-[1440px]:left-[275px]',
            )}
          >
            <div className="h-[741px] w-[1044px]">
              <Image src={bgImgData} alt="" fill className="rtl:scale-x-[-1]" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
