import {
  Container,
  GradientText,
  Text,
  WalletDownloadButton,
  RatingBadge,
} from '@haqq/islamic-ui-kit';
import iphoneImgData from '../../assets/images/iphone.png';
import halfIphoneImgData from '../../assets/images/half-iphone.png';
import Image from 'next/image';
import Link from 'next/link';

export function PortfolioBlock() {
  return (
    <Container>
      <div className="mt-[108px] flex flex-col gap-y-[32px] text-white md:mt-[164px] lg:mt-[240px]">
        <div className="block text-[28px] font-[600] leading-[32px] md:text-[44px] md:leading-[48px] lg:hidden lg:text-[64px] lg:leading-[70px]">
          Manage Your <GradientText>Shariah Portfolio </GradientText>
          with HAQQ Wallet
        </div>
        <div className="flex flex-col gap-x-[28px] gap-y-[32px] md:flex-row-reverse lg:gap-x-[36px] xl:gap-x-[54px] 2xl:gap-x-[64px]">
          <div className="bg-islamic-primary-graphite relative block h-[290px] overflow-hidden rounded-[20px] px-[42px] pt-[24px] md:hidden md:h-full md:px-[10px] md:pt-[32px]">
            <Image
              src={halfIphoneImgData}
              alt=""
              className="absolute left-1/2 top-[24px] w-[258px] translate-x-[-50%] translate-y-0 transform"
            />
          </div>
          <div className="flex flex-col items-center justify-between md:flex-row md:gap-x-[28px]">
            <div className="flex flex-col">
              <div className="hidden text-[28px] font-[600] leading-[32px] md:text-[44px] md:leading-[48px] lg:block lg:text-[64px] lg:leading-[70px]">
                Manage Your <GradientText>Shariah Portfolio </GradientText>
                with HAQQ Wallet
              </div>
              <Text isMono>Ethics-First, Non-Custodial Wallet</Text>
              <Text
                size="small"
                className="mt-[20px] text-white/50 md:mt-[24px]"
              >
                Seamlessly navigate Web3 with HAQQ Wallet, your trusted partner
                for a principled DeFi journey. With mnemonicless security and a
                user-friendly interface, managing your digital Shariah-compliant
                assets has never been easier or more secure
              </Text>
              <div className="mt-[24px] flex gap-x-[24px] gap-y-[20px] min-[375px]:gap-x-[32px] md:mt-[36px]">
                <RatingBadge market="app-store" rating={4.5} />
                <RatingBadge market="google-play" rating={5.0} />
              </div>
              <div className="mt-[20px] flex flex-col gap-x-[16px] gap-y-[20px] lg:mt-[24px] lg:flex-row">
                <div className="w-fit">
                  <Link
                    href="https://apps.apple.com/app/haqq-wallet-by-bored-gen/id6443843352"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WalletDownloadButton type="apple" />
                  </Link>
                </div>
                <div className="w-fit">
                  <Link
                    href="https://play.google.com/store/apps/details?id=com.haqq.wallet"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WalletDownloadButton type="google" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-islamic-primary-graphite relative hidden w-1/2 overflow-hidden rounded-[20px] px-[42px] pt-[24px] md:block md:h-[480px] md:min-w-[280px] md:px-[10px] md:pt-[32px] lg:h-[648px] lg:min-w-[380px] xl:min-w-[446px] 2xl:min-w-[526px]">
            <Image
              src={iphoneImgData}
              alt=""
              className="absolute left-1/2 translate-x-[-50%] translate-y-0 transform md:w-[258px] lg:w-[348px]"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}