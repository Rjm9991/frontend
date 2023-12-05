'use client';
import {
  Container,
  GradientText,
  Modal,
  ModalCloseButton,
  PlayVideoIcon,
  Text,
} from '@haqq/islamic-website-ui-kit';
import styles from './academy-preview-page.module.css';
import clsx from 'clsx';
import { useCallback, useState } from 'react';
import Image from 'next/image';
import { SubscribeForm } from '@haqq/islamic-website/forms';

export function AcademyPreviewPage({
  turnstileSiteKey,
}: {
  turnstileSiteKey?: string;
}) {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const openVideoModal = useCallback(() => {
    setIsVideoModalOpen(true);
  }, []);
  const closeVideoModal = useCallback(() => {
    setIsVideoModalOpen(false);
  }, []);
  return (
    <section>
      <Container>
        <div className="relative pb-[60px] pt-[32px] md:pt-[52px] lg:pb-[140px] lg:pt-[68px]">
          <div className="absolute left-1/2 top-[-11.5%] -translate-x-1/2 -translate-y-1/2">
            <BgImage />
          </div>
          <div className="mx-auto flex max-w-[880px] flex-col items-center">
            <h1
              className={clsx(
                'font-vcr text-haqq-black text-[46px] font-[400] leading-[52px] md:text-[60px] md:leading-none lg:text-[80px]',
                styles['stroke__heading'],
              )}
            >
              HAQQ ACADEMY
            </h1>
            <h2 className="mt-[12px] text-[28px] font-[600] uppercase leading-[32px] md:text-[44px] md:leading-[48px] lg:text-[64px] lg:leading-[70px]">
              <span>season 1:&nbsp;</span>
              <span className="text-[#EB9226]">start 12.12</span>
            </h2>
            <div className="group mt-[64px] w-fit" onClick={openVideoModal}>
              <div className="relative h-[160px] w-[300px] brightness-50 transition-all duration-300 group-hover:cursor-pointer group-hover:brightness-100 md:h-[200px] md:w-[340px] lg:h-[300px] lg:w-[540px]">
                <Image
                  src="/assets/images/academy/haqq-academy-preview-1.webp"
                  alt=""
                  className="rounded-lg"
                  fill
                />
                <PlayVideoIcon className="absolute left-[36.5%] top-[28%] h-[78px] w-[78px] transform transition-all duration-300 group-hover:scale-110 md:left-[37.5%] md:top-[35%] lg:left-[42.5%] lg:top-[38%]" />
              </div>
            </div>
            <div className="mt-[68px] text-center">
              <Text isMono>
                Master The Basics of Crypto Through The Lens of Islamic Finance
                in 19 <br /> Insightful Lessons. Graduate from HAQQ Academy with
                Your&nbsp;
              </Text>
              <GradientText className="font-vcr text-[15px] uppercase leading-[22px] md:text-base lg:text-[18px] lg:leading-[26px]">
                NFT certificate
              </GradientText>
            </div>

            {turnstileSiteKey && (
              <div>
                <SubscribeForm
                  className="mt-[28px] flex w-full flex-col gap-[16px] lg:flex-row"
                  inputClassName="lg:min-w-[280px]"
                  turnstileSiteKey={turnstileSiteKey}
                />
              </div>
            )}
          </div>
        </div>
      </Container>
      <Modal isOpen={isVideoModalOpen} onClose={closeVideoModal}>
        <div className="relative mx-auto w-[288px] min-[375px]:w-[340px] min-[500px]:w-[460px] sm:w-[600px] md:w-[676px] lg:w-[928px]">
          <iframe
            title="Islamic Coin Academy"
            src={`https://www.youtube.com/embed/JfGu0t2x84E`}
            allow="autoplay"
            allowFullScreen
            width="100%"
            className="mx-auto aspect-video rounded-[20px]"
          />

          <ModalCloseButton
            onClick={closeVideoModal}
            className="absolute right-[-24px] top-[-24px] outline-none lg:right-[-32px]"
          />
        </div>
      </Modal>
    </section>
  );
}

function BgImage() {
  return (
    <svg
      width="801"
      height="756"
      viewBox="0 0 801 756"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.2">
        <mask
          id="path-1-outside-1_53_842"
          maskUnits="userSpaceOnUse"
          x="2.63181"
          y="136.023"
          width="798"
          height="619"
          fill="black"
        >
          <rect fill="white" x="2.63181" y="136.023" width="798" height="619" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M47.847 314.563L47.847 270.985L47.847 270.612L47.847 227.911L47.847 227.034L47.847 183.961L3.63181 183.961L3.63181 227.034L3.63181 227.911L3.63181 270.612L3.63181 270.985L3.63182 314.563L3.63182 358.513L3.63182 402.465L3.63182 446.403L3.63182 490.355L47.847 490.355L47.847 534.305L47.847 578.256L92.0623 578.243L92.0623 622.195L136.277 622.195L136.277 666.146L180.493 666.146L180.496 710.085L224.711 710.073L224.711 754.023L268.926 754.023L313.145 754.023L357.359 754.023L401.576 754.023L445.79 754.023L490.008 754.023L534.221 754.023L578.439 754.023L578.439 710.073L622.655 710.085L622.658 666.146L666.872 666.146L666.872 622.195L711.087 622.195L711.087 578.243L755.303 578.256L755.303 534.305L755.303 490.355L799.518 490.355L799.518 446.403L799.518 402.465L799.518 358.513L799.518 314.563L799.518 270.985L799.518 270.612L799.518 227.911L799.518 227.034L799.518 183.961L755.303 183.961L755.303 227.034L755.303 227.911L755.303 270.612L755.303 270.985L755.303 314.563L755.303 358.513L755.303 402.465L755.303 446.403L755.303 490.355L711.087 490.355L711.087 534.305L711.087 578.243L666.872 578.243L666.872 622.195L622.658 622.195L622.658 666.146L578.439 666.134L578.439 710.073L534.221 710.073L490.008 710.073L445.79 710.073L401.576 710.073L357.359 710.073L313.145 710.073L268.926 710.073L224.711 710.073L224.711 666.134L180.493 666.146L180.493 622.195L136.277 622.195L136.277 578.243L92.0623 578.243L92.0623 534.305L92.0623 490.355L47.847 490.355L47.847 446.403L47.847 402.465L47.847 358.513L47.847 314.563ZM47.1276 181.761L47.1276 137.149L92.014 137.149L92.014 178.48L136.12 178.48L136.12 222.432L136.12 265.108L136.12 309.059L91.905 309.059L91.8567 266.37L91.905 222.432L91.905 181.761L47.1276 181.761ZM756.484 137.149L756.484 181.761L711.598 181.761L711.598 137.149L756.484 137.149ZM534.687 442.414L534.687 486.365L578.901 486.365L578.901 442.414L621.825 442.425L621.825 398.475L577.611 398.475L577.611 442.425L534.687 442.414ZM711.598 266.37L711.55 309.059L667.335 309.059L667.335 265.108L667.335 222.432L667.335 178.48L711.55 178.48L711.55 222.432L711.598 266.37ZM667.64 398.667L667.64 309.443L622.754 309.443L622.754 398.667L667.64 398.667ZM534.687 530.964L534.687 487.014L269.439 487.014L269.439 530.964L534.687 530.964ZM268.769 486.365L268.769 442.414L225.844 442.425L225.844 398.475L181.629 398.475L181.629 442.425L224.553 442.414L224.553 486.365L268.769 486.365ZM135.815 309.443L135.815 398.667L180.701 398.667L180.701 309.443L135.815 309.443Z"
          />
        </mask>
        <path
          d="M47.847 183.961L48.847 183.961L48.847 182.961L47.847 182.961L47.847 183.961ZM3.63181 183.961L3.63181 182.961L2.63181 182.961L2.63181 183.961L3.63181 183.961ZM3.63182 490.355L2.63182 490.355L2.63182 491.355L3.63182 491.355L3.63182 490.355ZM47.847 578.256L46.847 578.256L46.847 579.256L47.8473 579.256L47.847 578.256ZM92.0623 622.195L91.0623 622.195L91.0623 623.195L92.0623 623.195L92.0623 622.195ZM136.277 666.146L135.277 666.146L135.277 667.146L136.277 667.146L136.277 666.146ZM180.496 710.085L179.496 710.085L179.496 711.085L180.497 711.085L180.496 710.085ZM224.711 754.023L223.711 754.023L223.711 755.023L224.711 755.023L224.711 754.023ZM578.439 754.023L578.439 755.023L579.439 755.023L579.439 754.023L578.439 754.023ZM622.655 710.085L622.655 711.085L623.655 711.085L623.655 710.085L622.655 710.085ZM666.872 666.146L666.872 667.146L667.872 667.146L667.872 666.146L666.872 666.146ZM711.087 622.195L711.087 623.195L712.087 623.195L712.087 622.195L711.087 622.195ZM755.303 578.256L755.303 579.256L756.303 579.256L756.303 578.256L755.303 578.256ZM799.518 490.355L799.518 491.355L800.518 491.355L800.518 490.355L799.518 490.355ZM799.518 183.961L800.518 183.961L800.518 182.961L799.518 182.961L799.518 183.961ZM755.303 183.961L755.303 182.961L754.303 182.961L754.303 183.961L755.303 183.961ZM711.087 490.355L711.087 489.355L710.087 489.355L710.087 490.355L711.087 490.355ZM666.872 578.243L666.872 577.243L665.872 577.243L665.872 578.243L666.872 578.243ZM622.658 622.195L622.658 621.195L621.658 621.195L621.658 622.195L622.658 622.195ZM578.439 666.134L578.439 665.134L577.439 665.133L577.439 666.134L578.439 666.134ZM224.711 666.134L225.711 666.134L225.711 665.133L224.711 665.134L224.711 666.134ZM180.493 622.195L181.493 622.195L181.493 621.195L180.493 621.195L180.493 622.195ZM136.277 578.243L137.277 578.243L137.277 577.243L136.277 577.243L136.277 578.243ZM92.0623 490.355L93.0623 490.355L93.0623 489.355L92.0623 489.355L92.0623 490.355ZM47.1276 181.761L46.1276 181.761L46.1276 182.761L47.1276 182.761L47.1276 181.761ZM47.1276 137.149L47.1276 136.149L46.1276 136.149L46.1276 137.149L47.1276 137.149ZM92.014 137.149L93.014 137.149L93.014 136.149L92.014 136.149L92.014 137.149ZM92.014 178.48L91.014 178.48L91.014 179.48L92.014 179.48L92.014 178.48ZM136.12 178.48L137.12 178.48L137.12 177.48L136.12 177.48L136.12 178.48ZM136.12 309.059L136.12 310.059L137.12 310.059L137.12 309.059L136.12 309.059ZM91.905 309.059L90.905 309.06L90.9061 310.059L91.905 310.059L91.905 309.059ZM91.8567 266.37L90.8567 266.369L90.8567 266.371L91.8567 266.37ZM91.905 222.432L92.905 222.433L92.905 222.432L91.905 222.432ZM91.905 181.761L92.905 181.761L92.905 180.761L91.905 180.761L91.905 181.761ZM756.484 137.149L757.484 137.149L757.484 136.149L756.484 136.149L756.484 137.149ZM756.484 181.761L756.484 182.761L757.484 182.761L757.484 181.761L756.484 181.761ZM711.598 181.761L710.598 181.761L710.598 182.761L711.598 182.761L711.598 181.761ZM711.598 137.149L711.598 136.149L710.598 136.149L710.598 137.149L711.598 137.149ZM534.687 487.014L535.687 487.014L535.687 486.014L534.687 486.014L534.687 487.014ZM534.687 530.964L534.687 531.964L535.687 531.964L535.687 530.964L534.687 530.964ZM534.687 442.414L534.687 441.414L533.687 441.414L533.687 442.414L534.687 442.414ZM534.687 486.365L533.687 486.365L533.687 487.365L534.687 487.365L534.687 486.365ZM578.901 486.365L578.901 487.365L579.901 487.365L579.901 486.365L578.901 486.365ZM578.901 442.414L578.902 441.414L577.901 441.414L577.901 442.414L578.901 442.414ZM621.825 442.425L621.825 443.425L622.825 443.425L622.825 442.425L621.825 442.425ZM621.825 398.475L622.825 398.475L622.825 397.475L621.825 397.475L621.825 398.475ZM577.611 398.475L577.611 397.475L576.611 397.475L576.611 398.475L577.611 398.475ZM577.611 442.425L577.61 443.425L578.611 443.425L578.611 442.425L577.611 442.425ZM711.598 266.37L712.598 266.371L712.598 266.369L711.598 266.37ZM711.55 309.059L711.55 310.059L712.549 310.059L712.55 309.06L711.55 309.059ZM667.335 309.059L666.335 309.059L666.335 310.059L667.335 310.059L667.335 309.059ZM667.335 178.48L667.335 177.48L666.335 177.48L666.335 178.48L667.335 178.48ZM711.55 178.48L712.55 178.48L712.55 177.48L711.55 177.48L711.55 178.48ZM711.55 222.432L710.55 222.432L710.55 222.433L711.55 222.432ZM667.64 398.667L667.64 399.667L668.64 399.667L668.64 398.667L667.64 398.667ZM667.64 309.443L668.64 309.443L668.64 308.443L667.64 308.443L667.64 309.443ZM622.754 309.443L622.754 308.443L621.754 308.443L621.754 309.443L622.754 309.443ZM622.754 398.667L621.754 398.667L621.754 399.667L622.754 399.667L622.754 398.667ZM269.439 487.014L269.439 486.014L268.439 486.014L268.439 487.014L269.439 487.014ZM269.439 530.964L268.439 530.964L268.439 531.964L269.439 531.964L269.439 530.964ZM268.769 486.365L268.769 487.365L269.769 487.365L269.769 486.365L268.769 486.365ZM268.769 442.414L269.769 442.414L269.769 441.414L268.769 441.414L268.769 442.414ZM225.844 442.425L224.844 442.425L224.844 443.425L225.844 443.425L225.844 442.425ZM225.844 398.475L226.844 398.475L226.844 397.475L225.844 397.475L225.844 398.475ZM181.629 398.475L181.629 397.475L180.629 397.475L180.629 398.475L181.629 398.475ZM181.629 442.425L180.629 442.425L180.629 443.425L181.63 443.425L181.629 442.425ZM224.553 442.414L225.553 442.414L225.553 441.414L224.553 441.414L224.553 442.414ZM224.553 486.365L223.553 486.365L223.553 487.365L224.553 487.365L224.553 486.365ZM135.815 309.443L135.815 308.443L134.815 308.443L134.815 309.443L135.815 309.443ZM135.815 398.667L134.815 398.667L134.815 399.667L135.815 399.667L135.815 398.667ZM180.701 398.667L180.701 399.667L181.701 399.667L181.701 398.667L180.701 398.667ZM180.701 309.443L181.701 309.443L181.701 308.443L180.701 308.443L180.701 309.443ZM48.847 314.563L48.847 270.985L46.847 270.985L46.847 314.563L48.847 314.563ZM48.847 270.985L48.847 270.612L46.847 270.612L46.847 270.985L48.847 270.985ZM48.847 270.612L48.847 227.911L46.847 227.911L46.847 270.612L48.847 270.612ZM48.847 227.911L48.847 227.034L46.847 227.034L46.847 227.911L48.847 227.911ZM48.847 227.034L48.847 183.961L46.847 183.961L46.847 227.034L48.847 227.034ZM47.847 182.961L3.63181 182.961L3.63181 184.961L47.847 184.961L47.847 182.961ZM2.63181 183.961L2.63181 227.034L4.63181 227.034L4.63181 183.961L2.63181 183.961ZM2.63181 227.034L2.63181 227.911L4.63181 227.911L4.63181 227.034L2.63181 227.034ZM2.63181 227.911L2.63181 270.612L4.63181 270.612L4.63181 227.911L2.63181 227.911ZM2.63181 270.612L2.63181 270.985L4.63181 270.985L4.63181 270.612L2.63181 270.612ZM2.63181 270.985L2.63182 314.563L4.63182 314.563L4.63181 270.985L2.63181 270.985ZM2.63182 314.563L2.63182 358.513L4.63182 358.513L4.63182 314.563L2.63182 314.563ZM2.63182 358.513L2.63182 402.465L4.63182 402.465L4.63182 358.513L2.63182 358.513ZM2.63182 402.465L2.63182 446.403L4.63182 446.403L4.63182 402.465L2.63182 402.465ZM2.63182 446.403L2.63182 490.355L4.63182 490.355L4.63182 446.403L2.63182 446.403ZM3.63182 491.355L47.847 491.355L47.847 489.355L3.63182 489.355L3.63182 491.355ZM46.847 490.355L46.847 534.305L48.847 534.305L48.847 490.355L46.847 490.355ZM46.847 534.305L46.847 578.256L48.847 578.256L48.847 534.305L46.847 534.305ZM47.8473 579.256L92.0625 579.243L92.062 577.243L47.8468 577.256L47.8473 579.256ZM91.0623 578.243L91.0623 622.195L93.0623 622.195L93.0623 578.243L91.0623 578.243ZM92.0623 623.195L136.277 623.195L136.277 621.195L92.0623 621.195L92.0623 623.195ZM135.277 622.195L135.277 666.146L137.277 666.146L137.277 622.195L135.277 622.195ZM136.277 667.146L180.493 667.146L180.493 665.146L136.277 665.146L136.277 667.146ZM179.493 666.146L179.496 710.085L181.496 710.085L181.493 666.146L179.493 666.146ZM180.497 711.085L224.711 711.073L224.711 709.073L180.496 709.085L180.497 711.085ZM223.711 710.073L223.711 754.023L225.711 754.023L225.711 710.073L223.711 710.073ZM224.711 755.023L268.926 755.023L268.926 753.023L224.711 753.023L224.711 755.023ZM268.926 755.023L313.145 755.023L313.145 753.023L268.926 753.023L268.926 755.023ZM313.145 755.023L357.359 755.023L357.359 753.023L313.145 753.023L313.145 755.023ZM357.359 755.023L401.576 755.023L401.576 753.023L357.359 753.023L357.359 755.023ZM401.576 755.023L445.79 755.023L445.79 753.023L401.576 753.023L401.576 755.023ZM445.79 755.023L490.008 755.023L490.008 753.023L445.79 753.023L445.79 755.023ZM490.008 755.023L534.221 755.023L534.221 753.023L490.008 753.023L490.008 755.023ZM534.221 755.023L578.439 755.023L578.439 753.023L534.221 753.023L534.221 755.023ZM579.439 754.023L579.439 710.073L577.439 710.073L577.439 754.023L579.439 754.023ZM578.438 711.073L622.655 711.085L622.655 709.085L578.439 709.073L578.438 711.073ZM623.655 710.085L623.658 666.146L621.658 666.146L621.655 710.085L623.655 710.085ZM622.658 667.146L666.872 667.146L666.872 665.146L622.658 665.146L622.658 667.146ZM667.872 666.146L667.872 622.195L665.872 622.195L665.872 666.146L667.872 666.146ZM666.872 623.195L711.087 623.195L711.087 621.195L666.872 621.195L666.872 623.195ZM712.087 622.195L712.087 578.243L710.087 578.243L710.087 622.195L712.087 622.195ZM711.087 579.243L755.303 579.256L755.304 577.256L711.087 577.243L711.087 579.243ZM756.303 578.256L756.303 534.305L754.303 534.305L754.303 578.256L756.303 578.256ZM756.303 534.305L756.303 490.355L754.303 490.355L754.303 534.305L756.303 534.305ZM755.303 491.355L799.518 491.355L799.518 489.355L755.303 489.355L755.303 491.355ZM800.518 490.355L800.518 446.403L798.518 446.403L798.518 490.355L800.518 490.355ZM800.518 446.403L800.518 402.465L798.518 402.465L798.518 446.403L800.518 446.403ZM800.518 402.465L800.518 358.513L798.518 358.513L798.518 402.465L800.518 402.465ZM800.518 358.513L800.518 314.563L798.518 314.563L798.518 358.513L800.518 358.513ZM800.518 314.563L800.518 270.985L798.518 270.985L798.518 314.563L800.518 314.563ZM800.518 270.985L800.518 270.612L798.518 270.612L798.518 270.985L800.518 270.985ZM800.518 270.612L800.518 227.911L798.518 227.911L798.518 270.612L800.518 270.612ZM800.518 227.911L800.518 227.034L798.518 227.034L798.518 227.911L800.518 227.911ZM800.518 227.034L800.518 183.961L798.518 183.961L798.518 227.034L800.518 227.034ZM799.518 182.961L755.303 182.961L755.303 184.961L799.518 184.961L799.518 182.961ZM754.303 183.961L754.303 227.034L756.303 227.034L756.303 183.961L754.303 183.961ZM754.303 227.034L754.303 227.911L756.303 227.911L756.303 227.034L754.303 227.034ZM754.303 227.911L754.303 270.612L756.303 270.612L756.303 227.911L754.303 227.911ZM754.303 270.612L754.303 270.985L756.303 270.985L756.303 270.612L754.303 270.612ZM754.303 270.985L754.303 314.563L756.303 314.563L756.303 270.985L754.303 270.985ZM754.303 314.563L754.303 358.513L756.303 358.513L756.303 314.563L754.303 314.563ZM754.303 358.513L754.303 402.465L756.303 402.465L756.303 358.513L754.303 358.513ZM754.303 402.465L754.303 446.403L756.303 446.403L756.303 402.465L754.303 402.465ZM754.303 446.403L754.303 490.355L756.303 490.355L756.303 446.403L754.303 446.403ZM755.303 489.355L711.087 489.355L711.087 491.355L755.303 491.355L755.303 489.355ZM710.087 490.355L710.087 534.305L712.087 534.305L712.087 490.355L710.087 490.355ZM710.087 534.305L710.087 578.243L712.087 578.243L712.087 534.305L710.087 534.305ZM711.087 577.243L666.872 577.243L666.872 579.243L711.087 579.243L711.087 577.243ZM665.872 578.243L665.872 622.195L667.872 622.195L667.872 578.243L665.872 578.243ZM666.872 621.195L622.658 621.195L622.658 623.195L666.872 623.195L666.872 621.195ZM621.658 622.195L621.658 666.146L623.658 666.146L623.658 622.195L621.658 622.195ZM622.658 665.146L578.439 665.134L578.438 667.134L622.658 667.146L622.658 665.146ZM577.439 666.134L577.439 710.073L579.439 710.073L579.439 666.134L577.439 666.134ZM578.439 709.073L534.221 709.073L534.221 711.073L578.439 711.073L578.439 709.073ZM534.221 709.073L490.008 709.073L490.008 711.073L534.221 711.073L534.221 709.073ZM490.008 709.073L445.79 709.073L445.79 711.073L490.008 711.073L490.008 709.073ZM445.79 709.073L401.576 709.073L401.576 711.073L445.79 711.073L445.79 709.073ZM401.576 709.073L357.359 709.073L357.359 711.073L401.576 711.073L401.576 709.073ZM357.359 709.073L313.145 709.073L313.145 711.073L357.359 711.073L357.359 709.073ZM313.145 709.073L268.926 709.073L268.926 711.073L313.145 711.073L313.145 709.073ZM268.926 709.073L224.711 709.073L224.711 711.073L268.926 711.073L268.926 709.073ZM225.711 710.073L225.711 666.134L223.711 666.134L223.711 710.073L225.711 710.073ZM224.711 665.134L180.493 665.146L180.494 667.146L224.711 667.134L224.711 665.134ZM181.493 666.146L181.493 622.195L179.493 622.195L179.493 666.146L181.493 666.146ZM180.493 621.195L136.277 621.195L136.277 623.195L180.493 623.195L180.493 621.195ZM137.277 622.195L137.277 578.243L135.277 578.243L135.277 622.195L137.277 622.195ZM136.277 577.243L92.0623 577.243L92.0623 579.243L136.277 579.243L136.277 577.243ZM93.0623 578.243L93.0623 534.305L91.0623 534.305L91.0623 578.243L93.0623 578.243ZM93.0623 534.305L93.0623 490.355L91.0623 490.355L91.0623 534.305L93.0623 534.305ZM92.0623 489.355L47.847 489.355L47.847 491.355L92.0623 491.355L92.0623 489.355ZM48.847 490.355L48.847 446.403L46.847 446.403L46.847 490.355L48.847 490.355ZM48.847 446.403L48.847 402.465L46.847 402.465L46.847 446.403L48.847 446.403ZM48.847 402.465L48.847 358.513L46.847 358.513L46.847 402.465L48.847 402.465ZM48.847 358.513L48.847 314.563L46.847 314.563L46.847 358.513L48.847 358.513ZM48.1276 181.761L48.1276 137.149L46.1276 137.149L46.1276 181.761L48.1276 181.761ZM47.1276 138.149L92.014 138.149L92.014 136.149L47.1276 136.149L47.1276 138.149ZM91.014 137.149L91.014 178.48L93.014 178.48L93.014 137.149L91.014 137.149ZM92.014 179.48L136.12 179.48L136.12 177.48L92.014 177.48L92.014 179.48ZM135.12 178.48L135.12 222.432L137.12 222.432L137.12 178.48L135.12 178.48ZM135.12 222.432L135.12 265.108L137.12 265.108L137.12 222.432L135.12 222.432ZM135.12 265.108L135.12 309.059L137.12 309.059L137.12 265.108L135.12 265.108ZM136.12 308.059L91.905 308.059L91.905 310.059L136.12 310.059L136.12 308.059ZM92.905 309.057L92.8567 266.369L90.8567 266.371L90.905 309.06L92.905 309.057ZM92.8567 266.371L92.905 222.433L90.905 222.431L90.8567 266.369L92.8567 266.371ZM92.905 222.432L92.905 181.761L90.905 181.761L90.905 222.432L92.905 222.432ZM91.905 180.761L47.1276 180.761L47.1276 182.761L91.905 182.761L91.905 180.761ZM755.484 137.149L755.484 181.761L757.484 181.761L757.484 137.149L755.484 137.149ZM756.484 180.761L711.598 180.761L711.598 182.761L756.484 182.761L756.484 180.761ZM712.598 181.761L712.598 137.149L710.598 137.149L710.598 181.761L712.598 181.761ZM711.598 138.149L756.484 138.149L756.484 136.149L711.598 136.149L711.598 138.149ZM533.687 487.014L533.687 530.964L535.687 530.964L535.687 487.014L533.687 487.014ZM533.687 442.414L533.687 486.365L535.687 486.365L535.687 442.414L533.687 442.414ZM534.687 487.365L578.901 487.365L578.901 485.365L534.687 485.365L534.687 487.365ZM579.901 486.365L579.901 442.414L577.901 442.414L577.901 486.365L579.901 486.365ZM578.901 443.414L621.825 443.425L621.825 441.425L578.902 441.414L578.901 443.414ZM622.825 442.425L622.825 398.475L620.825 398.475L620.825 442.425L622.825 442.425ZM621.825 397.475L577.611 397.475L577.611 399.475L621.825 399.475L621.825 397.475ZM576.611 398.475L576.611 442.425L578.611 442.425L578.611 398.475L576.611 398.475ZM577.611 441.425L534.687 441.414L534.687 443.414L577.61 443.425L577.611 441.425ZM710.598 266.369L710.55 309.057L712.55 309.06L712.598 266.371L710.598 266.369ZM711.55 308.059L667.335 308.059L667.335 310.059L711.55 310.059L711.55 308.059ZM668.335 309.059L668.335 265.108L666.335 265.108L666.335 309.059L668.335 309.059ZM668.335 265.108L668.335 222.432L666.335 222.432L666.335 265.108L668.335 265.108ZM668.335 222.432L668.335 178.48L666.335 178.48L666.335 222.432L668.335 222.432ZM667.335 179.48L711.55 179.48L711.55 177.48L667.335 177.48L667.335 179.48ZM710.55 178.48L710.55 222.432L712.55 222.432L712.55 178.48L710.55 178.48ZM710.55 222.433L710.598 266.371L712.598 266.369L712.55 222.43L710.55 222.433ZM668.64 398.667L668.64 309.443L666.64 309.443L666.64 398.667L668.64 398.667ZM667.64 308.443L622.754 308.443L622.754 310.443L667.64 310.443L667.64 308.443ZM621.754 309.443L621.754 398.667L623.754 398.667L623.754 309.443L621.754 309.443ZM622.754 399.667L667.64 399.667L667.64 397.667L622.754 397.667L622.754 399.667ZM534.687 486.014L269.439 486.014L269.439 488.014L534.687 488.014L534.687 486.014ZM268.439 487.014L268.439 530.964L270.439 530.964L270.439 487.014L268.439 487.014ZM269.439 531.964L534.687 531.964L534.687 529.964L269.439 529.964L269.439 531.964ZM269.769 486.365L269.769 442.414L267.769 442.414L267.769 486.365L269.769 486.365ZM268.769 441.414L225.844 441.425L225.844 443.425L268.77 443.414L268.769 441.414ZM226.844 442.425L226.844 398.475L224.844 398.475L224.844 442.425L226.844 442.425ZM225.844 397.475L181.629 397.475L181.629 399.475L225.844 399.475L225.844 397.475ZM180.629 398.475L180.629 442.425L182.629 442.425L182.629 398.475L180.629 398.475ZM181.63 443.425L224.553 443.414L224.553 441.414L181.629 441.425L181.63 443.425ZM223.553 442.414L223.553 486.365L225.553 486.365L225.553 442.414L223.553 442.414ZM224.553 487.365L268.769 487.365L268.769 485.365L224.553 485.365L224.553 487.365ZM134.815 309.443L134.815 398.667L136.815 398.667L136.815 309.443L134.815 309.443ZM135.815 399.667L180.701 399.667L180.701 397.667L135.815 397.667L135.815 399.667ZM181.701 398.667L181.701 309.443L179.701 309.443L179.701 398.667L181.701 398.667ZM180.701 308.443L135.815 308.443L135.815 310.443L180.701 310.443L180.701 308.443Z"
          fill="white"
          mask="url(#path-1-outside-1_53_842)"
        />
        <mask
          id="path-3-outside-2_53_842"
          maskUnits="userSpaceOnUse"
          x="210.042"
          y="-0.336931"
          width="382"
          height="380"
          fill="black"
        >
          <rect
            fill="white"
            x="210.042"
            y="-0.336931"
            width="382"
            height="380"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M211.042 204.638L211.042 175.638L240.224 175.638L240.224 204.638L211.042 204.638ZM269.406 233.639L240.224 233.639L240.224 204.638L269.406 204.638L269.406 233.639ZM356.959 320.651L327.772 320.651L298.59 320.651L269.406 320.651L269.406 291.639L269.406 262.651L269.406 233.639L298.59 233.651L298.59 262.651L298.59 291.639L327.772 291.651L356.959 291.651L356.959 320.651ZM386.144 349.651L356.959 349.651L356.959 320.651L386.144 320.651L386.144 349.651ZM415.775 349.663L415.775 378.663L415.328 378.663L386.591 378.663L386.144 378.663L386.144 349.651L386.591 349.663L415.328 349.663L415.775 349.663ZM444.961 320.651L444.961 349.651L415.775 349.663L415.775 320.651L444.961 320.651ZM532.514 233.639L532.514 262.651L532.514 291.639L532.514 320.651L503.33 320.651L474.148 320.651L444.961 320.651L444.961 291.651L474.148 291.651L503.33 291.639L503.33 262.651L503.33 233.651L532.514 233.639ZM561.696 204.638L561.696 233.639L532.514 233.639L532.514 204.638L561.696 204.638ZM561.696 204.638L561.696 175.638L590.877 175.638L590.877 204.638L561.696 204.638ZM561.696 146.614L561.696 175.615L532.514 175.615L532.514 146.614L561.696 146.614ZM444.961 59.6145L474.148 59.6021L503.33 59.6021L532.514 59.6021L532.514 88.6014L532.514 117.602L532.514 146.614L503.33 146.614L503.33 117.602L503.33 88.6014L474.148 88.6137L444.961 88.6137L444.961 59.6145ZM415.775 30.6014L444.961 30.6014L444.961 59.6145L415.775 59.6145L415.775 30.6014ZM386.144 30.6014L386.144 1.58982L386.591 1.58982L415.328 1.58982L415.775 1.58982L415.775 30.6014L415.328 30.6014L386.591 30.6014L386.144 30.6014ZM356.959 59.6145L386.144 59.6145L386.144 30.6014L356.959 30.6014L356.959 59.6145ZM327.772 88.6137L356.959 88.6137L356.959 59.6145L327.772 59.6022L298.59 59.6022L269.406 59.6022L269.406 88.6014L269.406 117.602L269.406 146.614L240.224 146.614L240.224 175.615L269.406 175.615L269.406 146.614L298.59 146.614L298.59 117.602L298.59 88.6014L327.772 88.6137Z"
          />
        </mask>
        <path
          d="M211.042 204.638L210.042 204.638L210.042 205.638L211.042 205.638L211.042 204.638ZM211.042 175.638L211.042 174.638L210.042 174.638L210.042 175.638L211.042 175.638ZM240.224 175.638L241.224 175.638L241.224 174.638L240.224 174.638L240.224 175.638ZM240.224 233.639L239.224 233.639L239.224 234.639L240.224 234.639L240.224 233.639ZM269.406 204.638L270.406 204.638L270.406 203.638L269.406 203.638L269.406 204.638ZM269.406 320.651L268.406 320.651L268.406 321.651L269.406 321.651L269.406 320.651ZM298.59 233.651L299.59 233.651L299.59 232.651L298.591 232.651L298.59 233.651ZM298.59 291.639L297.59 291.639L297.59 292.638L298.59 292.639L298.59 291.639ZM327.772 291.651L327.771 292.651L327.772 292.651L327.772 291.651ZM356.959 291.651L357.959 291.651L357.959 290.651L356.959 290.651L356.959 291.651ZM356.959 349.651L355.959 349.651L355.959 350.651L356.959 350.651L356.959 349.651ZM386.144 320.651L387.144 320.651L387.144 319.651L386.144 319.651L386.144 320.651ZM415.775 378.663L415.775 379.663L416.775 379.663L416.775 378.663L415.775 378.663ZM386.144 378.663L385.144 378.663L385.144 379.663L386.144 379.663L386.144 378.663ZM386.591 349.663L386.565 350.663L386.578 350.663L386.591 350.663L386.591 349.663ZM444.961 349.651L444.961 350.651L445.961 350.65L445.961 349.651L444.961 349.651ZM415.775 320.651L415.775 319.651L414.775 319.651L414.775 320.651L415.775 320.651ZM532.514 320.651L532.514 321.651L533.514 321.651L533.514 320.651L532.514 320.651ZM444.961 291.651L444.961 290.651L443.961 290.651L443.961 291.651L444.961 291.651ZM474.148 291.651L474.148 292.651L474.148 292.651L474.148 291.651ZM503.33 291.639L503.33 292.639L504.33 292.638L504.33 291.639L503.33 291.639ZM503.33 233.651L503.33 232.651L502.33 232.651L502.33 233.651L503.33 233.651ZM561.696 233.639L561.696 234.639L562.696 234.639L562.696 233.639L561.696 233.639ZM532.514 204.638L532.514 203.638L531.514 203.638L531.514 204.638L532.514 204.638ZM561.696 175.638L561.696 174.638L560.696 174.638L560.696 175.638L561.696 175.638ZM590.877 175.638L591.877 175.638L591.877 174.638L590.877 174.638L590.877 175.638ZM590.877 204.638L590.877 205.638L591.877 205.638L591.877 204.638L590.877 204.638ZM561.696 146.614L562.696 146.614L562.696 145.614L561.696 145.614L561.696 146.614ZM561.696 175.615L561.696 176.615L562.696 176.615L562.696 175.615L561.696 175.615ZM532.514 175.615L531.514 175.615L531.514 176.615L532.514 176.615L532.514 175.615ZM474.148 59.6021L474.148 58.6021L474.147 58.6021L474.148 59.6021ZM532.514 59.6021L533.514 59.6021L533.514 58.6021L532.514 58.6021L532.514 59.6021ZM503.33 146.614L502.33 146.614L502.33 147.614L503.33 147.614L503.33 146.614ZM503.33 88.6014L504.33 88.6014L504.33 87.601L503.33 87.6014L503.33 88.6014ZM474.148 88.6137L474.148 89.6137L474.148 89.6137L474.148 88.6137ZM444.961 88.6137L443.961 88.6137L443.961 89.6137L444.961 89.6137L444.961 88.6137ZM444.961 30.6014L445.961 30.6014L445.961 29.6014L444.961 29.6014L444.961 30.6014ZM415.775 59.6145L414.775 59.6145L414.775 60.6145L415.775 60.6145L415.775 59.6145ZM386.144 1.58982L386.144 0.589822L385.144 0.589822L385.144 1.58982L386.144 1.58982ZM415.775 1.58982L416.775 1.58982L416.775 0.58982L415.775 0.58982L415.775 1.58982ZM386.144 59.6145L386.144 60.6145L387.144 60.6145L387.144 59.6145L386.144 59.6145ZM356.959 30.6014L356.959 29.6014L355.959 29.6014L355.959 30.6014L356.959 30.6014ZM327.772 88.6137L327.771 89.6137L327.772 89.6137L327.772 88.6137ZM356.959 88.6137L356.959 89.6137L357.959 89.6137L357.959 88.6137L356.959 88.6137ZM327.772 59.6022L327.772 58.6022L327.772 58.6022L327.772 59.6022ZM269.406 59.6022L269.406 58.6022L268.406 58.6022L268.406 59.6022L269.406 59.6022ZM240.224 146.614L240.224 145.614L239.224 145.614L239.224 146.614L240.224 146.614ZM240.224 175.615L239.224 175.615L239.224 176.615L240.224 176.615L240.224 175.615ZM269.406 175.615L269.406 176.615L270.406 176.615L270.406 175.615L269.406 175.615ZM298.59 146.614L298.59 147.614L299.59 147.614L299.59 146.614L298.59 146.614ZM298.59 88.6014L298.591 87.6014L297.59 87.601L297.59 88.6014L298.59 88.6014ZM212.042 204.638L212.042 175.638L210.042 175.638L210.042 204.638L212.042 204.638ZM211.042 176.638L240.224 176.638L240.224 174.638L211.042 174.638L211.042 176.638ZM239.224 175.638L239.224 204.638L241.224 204.638L241.224 175.638L239.224 175.638ZM240.224 203.638L211.042 203.638L211.042 205.638L240.224 205.638L240.224 203.638ZM269.406 232.639L240.224 232.639L240.224 234.639L269.406 234.639L269.406 232.639ZM241.224 233.639L241.224 204.638L239.224 204.638L239.224 233.639L241.224 233.639ZM240.224 205.638L269.406 205.638L269.406 203.638L240.224 203.638L240.224 205.638ZM268.406 204.638L268.406 233.639L270.406 233.639L270.406 204.638L268.406 204.638ZM356.959 319.651L327.772 319.651L327.772 321.651L356.959 321.651L356.959 319.651ZM327.772 319.651L298.59 319.651L298.59 321.651L327.772 321.651L327.772 319.651ZM298.59 319.651L269.406 319.651L269.406 321.651L298.59 321.651L298.59 319.651ZM270.406 320.651L270.406 291.639L268.406 291.639L268.406 320.651L270.406 320.651ZM270.406 291.639L270.406 262.651L268.406 262.651L268.406 291.639L270.406 291.639ZM270.406 262.651L270.406 233.639L268.406 233.639L268.406 262.651L270.406 262.651ZM269.405 234.639L298.59 234.651L298.591 232.651L269.406 232.639L269.405 234.639ZM297.59 233.651L297.59 262.651L299.59 262.651L299.59 233.651L297.59 233.651ZM297.59 262.651L297.59 291.639L299.59 291.639L299.59 262.651L297.59 262.651ZM298.59 292.639L327.771 292.651L327.772 290.651L298.591 290.639L298.59 292.639ZM327.772 292.651L356.959 292.651L356.959 290.651L327.772 290.651L327.772 292.651ZM355.959 291.651L355.959 320.651L357.959 320.651L357.959 291.651L355.959 291.651ZM386.144 348.651L356.959 348.651L356.959 350.651L386.144 350.651L386.144 348.651ZM357.959 349.651L357.959 320.651L355.959 320.651L355.959 349.651L357.959 349.651ZM356.959 321.651L386.144 321.651L386.144 319.651L356.959 319.651L356.959 321.651ZM385.144 320.651L385.144 349.651L387.144 349.651L387.144 320.651L385.144 320.651ZM414.775 349.663L414.775 378.663L416.775 378.663L416.775 349.663L414.775 349.663ZM415.775 377.663L415.328 377.663L415.328 379.663L415.775 379.663L415.775 377.663ZM415.328 377.663L386.591 377.663L386.591 379.663L415.328 379.663L415.328 377.663ZM386.591 377.663L386.144 377.663L386.144 379.663L386.591 379.663L386.591 377.663ZM387.144 378.663L387.144 349.651L385.144 349.651L385.144 378.663L387.144 378.663ZM386.117 350.651L386.565 350.663L386.618 348.663L386.171 348.651L386.117 350.651ZM386.591 350.663L415.328 350.663L415.328 348.663L386.591 348.663L386.591 350.663ZM415.328 350.663L415.775 350.663L415.775 348.663L415.328 348.663L415.328 350.663ZM443.961 320.651L443.961 349.651L445.961 349.651L445.961 320.651L443.961 320.651ZM444.96 348.651L415.775 348.663L415.776 350.663L444.961 350.651L444.96 348.651ZM416.775 349.663L416.775 320.651L414.775 320.651L414.775 349.663L416.775 349.663ZM415.775 321.651L444.961 321.651L444.961 319.651L415.775 319.651L415.775 321.651ZM531.514 233.639L531.514 262.651L533.514 262.651L533.514 233.639L531.514 233.639ZM531.514 262.651L531.514 291.639L533.514 291.639L533.514 262.651L531.514 262.651ZM531.514 291.639L531.514 320.651L533.514 320.651L533.514 291.639L531.514 291.639ZM532.514 319.651L503.33 319.651L503.33 321.651L532.514 321.651L532.514 319.651ZM503.33 319.651L474.148 319.651L474.148 321.651L503.33 321.651L503.33 319.651ZM474.148 319.651L444.961 319.651L444.961 321.651L474.148 321.651L474.148 319.651ZM445.961 320.651L445.961 291.651L443.961 291.651L443.961 320.651L445.961 320.651ZM444.961 292.651L474.148 292.651L474.148 290.651L444.961 290.651L444.961 292.651ZM474.148 292.651L503.33 292.639L503.33 290.639L474.147 290.651L474.148 292.651ZM504.33 291.639L504.33 262.651L502.33 262.651L502.33 291.639L504.33 291.639ZM504.33 262.651L504.33 233.651L502.33 233.651L502.33 262.651L504.33 262.651ZM503.33 234.651L532.514 234.639L532.513 232.639L503.33 232.651L503.33 234.651ZM560.696 204.638L560.696 233.639L562.696 233.639L562.696 204.638L560.696 204.638ZM561.696 232.639L532.514 232.639L532.514 234.639L561.696 234.639L561.696 232.639ZM533.514 233.639L533.514 204.638L531.514 204.638L531.514 233.639L533.514 233.639ZM532.514 205.638L561.696 205.638L561.696 203.638L532.514 203.638L532.514 205.638ZM562.696 204.638L562.696 175.638L560.696 175.638L560.696 204.638L562.696 204.638ZM561.696 176.638L590.877 176.638L590.877 174.638L561.696 174.638L561.696 176.638ZM589.877 175.638L589.877 204.638L591.877 204.638L591.877 175.638L589.877 175.638ZM590.877 203.638L561.696 203.638L561.696 205.638L590.877 205.638L590.877 203.638ZM560.696 146.614L560.696 175.615L562.696 175.615L562.696 146.614L560.696 146.614ZM561.696 174.615L532.514 174.615L532.514 176.615L561.696 176.615L561.696 174.615ZM533.514 175.615L533.514 146.614L531.514 146.614L531.514 175.615L533.514 175.615ZM532.514 147.614L561.696 147.614L561.696 145.614L532.514 145.614L532.514 147.614ZM444.961 60.6145L474.148 60.6021L474.147 58.6021L444.96 58.6145L444.961 60.6145ZM474.148 60.6021L503.33 60.6021L503.33 58.6021L474.148 58.6021L474.148 60.6021ZM503.33 60.6021L532.514 60.6021L532.514 58.6021L503.33 58.6021L503.33 60.6021ZM531.514 59.6021L531.514 88.6014L533.514 88.6014L533.514 59.6021L531.514 59.6021ZM531.514 88.6014L531.514 117.602L533.514 117.602L533.514 88.6014L531.514 88.6014ZM531.514 117.602L531.514 146.614L533.514 146.614L533.514 117.602L531.514 117.602ZM532.514 145.614L503.33 145.614L503.33 147.614L532.514 147.614L532.514 145.614ZM504.33 146.614L504.33 117.602L502.33 117.602L502.33 146.614L504.33 146.614ZM504.33 117.602L504.33 88.6014L502.33 88.6014L502.33 117.602L504.33 117.602ZM503.33 87.6014L474.147 87.6137L474.148 89.6137L503.33 89.6014L503.33 87.6014ZM474.148 87.6137L444.961 87.6137L444.961 89.6137L474.148 89.6137L474.148 87.6137ZM445.961 88.6137L445.961 59.6145L443.961 59.6145L443.961 88.6137L445.961 88.6137ZM415.775 31.6014L444.961 31.6014L444.961 29.6014L415.775 29.6014L415.775 31.6014ZM443.961 30.6014L443.961 59.6145L445.961 59.6145L445.961 30.6014L443.961 30.6014ZM444.961 58.6145L415.775 58.6145L415.775 60.6145L444.961 60.6145L444.961 58.6145ZM416.775 59.6145L416.775 30.6014L414.775 30.6014L414.775 59.6145L416.775 59.6145ZM387.144 30.6014L387.144 1.58982L385.144 1.58982L385.144 30.6014L387.144 30.6014ZM386.144 2.58982L386.591 2.58982L386.591 0.589822L386.144 0.589822L386.144 2.58982ZM386.591 2.58982L415.328 2.58982L415.328 0.58982L386.591 0.589822L386.591 2.58982ZM415.328 2.58982L415.775 2.58982L415.775 0.58982L415.328 0.58982L415.328 2.58982ZM414.775 1.58982L414.775 30.6014L416.775 30.6014L416.775 1.58982L414.775 1.58982ZM415.775 29.6014L415.328 29.6014L415.328 31.6014L415.775 31.6014L415.775 29.6014ZM415.328 29.6014L386.591 29.6014L386.591 31.6014L415.328 31.6014L415.328 29.6014ZM386.591 29.6014L386.144 29.6014L386.144 31.6014L386.591 31.6014L386.591 29.6014ZM356.959 60.6145L386.144 60.6145L386.144 58.6145L356.959 58.6145L356.959 60.6145ZM387.144 59.6145L387.144 30.6014L385.144 30.6014L385.144 59.6145L387.144 59.6145ZM386.144 29.6014L356.959 29.6014L356.959 31.6014L386.144 31.6014L386.144 29.6014ZM355.959 30.6014L355.959 59.6145L357.959 59.6145L357.959 30.6014L355.959 30.6014ZM327.772 89.6137L356.959 89.6137L356.959 87.6137L327.772 87.6137L327.772 89.6137ZM357.959 88.6137L357.959 59.6145L355.959 59.6145L355.959 88.6137L357.959 88.6137ZM356.96 58.6145L327.772 58.6022L327.771 60.6022L356.959 60.6145L356.96 58.6145ZM327.772 58.6022L298.59 58.6022L298.59 60.6022L327.772 60.6022L327.772 58.6022ZM298.59 58.6022L269.406 58.6022L269.406 60.6022L298.59 60.6022L298.59 58.6022ZM268.406 59.6022L268.406 88.6014L270.406 88.6014L270.406 59.6022L268.406 59.6022ZM268.406 88.6014L268.406 117.602L270.406 117.602L270.406 88.6014L268.406 88.6014ZM268.406 117.602L268.406 146.614L270.406 146.614L270.406 117.602L268.406 117.602ZM269.406 145.614L240.224 145.614L240.224 147.614L269.406 147.614L269.406 145.614ZM239.224 146.614L239.224 175.615L241.224 175.615L241.224 146.614L239.224 146.614ZM240.224 176.615L269.406 176.615L269.406 174.615L240.224 174.615L240.224 176.615ZM270.406 175.615L270.406 146.614L268.406 146.614L268.406 175.615L270.406 175.615ZM269.406 147.614L298.59 147.614L298.59 145.614L269.406 145.614L269.406 147.614ZM299.59 146.614L299.59 117.602L297.59 117.602L297.59 146.614L299.59 146.614ZM299.59 117.602L299.59 88.6014L297.59 88.6014L297.59 117.602L299.59 117.602ZM298.59 89.6014L327.771 89.6137L327.772 87.6137L298.591 87.6014L298.59 89.6014Z"
          fill="white"
          mask="url(#path-3-outside-2_53_842)"
        />
      </g>
    </svg>
  );
}