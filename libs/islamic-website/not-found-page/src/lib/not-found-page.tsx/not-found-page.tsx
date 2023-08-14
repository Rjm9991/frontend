import Link from 'next/link';
import notFoundBgImgData from '../../assets/images/not-found-bg.webp';
import Image from 'next/image';
import { Container } from '@haqq/islamic-ui-kit';

export function NotFound() {
  return (
    <div className="relative">
      <Container className="pb-[265px] pt-[245px] lg:py-[312px]">
        <div className="flex flex-col items-center justify-center">
          <div className="font-mono text-[46px] font-[600] leading-[52px] md:text-[60px] md:leading-none lg:text-[80px]">
            404
          </div>
          <div className="font-mono text-[17px] uppercase leading-[26px] lg:text-[20px] lg:leading-[28px]">
            page not found
          </div>
          <Link
            href="/"
            className="text-islamic-primary-green hover:text-islamic-primary-green-hover transition-colors duration-300"
          >
            Go to main page
          </Link>
        </div>
      </Container>

      <Image
        src={notFoundBgImgData}
        alt="Not Found"
        className="user-select-none absolute left-1/2 top-[16%] z-[-1] h-[400px] w-[400px] -translate-x-1/2 object-cover lg:top-[2%] lg:h-[720px] lg:w-[720px]"
      />
    </div>
  );
}