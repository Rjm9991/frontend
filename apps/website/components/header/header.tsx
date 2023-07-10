import { Fragment, ReactNode, useCallback, useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import Link from 'next/link';
import logoImageData from '../../assets/images/logo.svg';
import { Button, BurgerButton } from '@haqq/website-ui-kit';
import ScrollLock from 'react-scrolllock';
import { BurgerMenu } from '../burger-menu/burger-menu';

function HeaderNavLink({
  href,
  children,
  isOutLink = false,
}: {
  href: string;
  children: ReactNode;
  isOutLink?: boolean;
}) {
  const additionalProps = isOutLink
    ? {
        target: '_blank',
        rel: 'noopener noreferrer',
      }
    : {};
  return (
    <Link
      href={href}
      className="text-[13px] leading-[20px] sm:text-[15px] sm:leading-[24px]"
      {...additionalProps}
    >
      {children}
    </Link>
  );
}

export function Header() {
  const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);

  const handleMenuOpen = useCallback(() => {
    setBurgerMenuOpen(!isBurgerMenuOpen);
  }, [isBurgerMenuOpen]);

  const handleMenuClose = useCallback(() => {
    setBurgerMenuOpen(false);
  }, []);

  return (
    <Fragment>
      <header
        className={clsx(
          'bg-haqq-black h-[63px] w-full border-b border-t border-[#464647] sm:h-[72px]',
          'sticky top-0 z-50',
        )}
      >
        <div className="relative z-50 mx-auto flex h-full w-full flex-row items-center pr-[16px] sm:pr-[64px] lg:pr-[80px]">
          <div className="flex h-full w-[48px] items-center justify-center border-r border-[#464647] sm:w-[64px] lg:w-[80px]">
            <div className="relative h-[26px] w-[26px] sm:h-[32px] sm:w-[32px]">
              <Link href="/">
                <Image src={logoImageData} alt="HAQQ" fill />
              </Link>
            </div>
          </div>
          <div className="ml-[12px] flex flex-row items-center space-x-[15px] sm:ml-[20px] lg:ml-[32px]">
            <div>
              <Link
                href="/"
                className="font-serif text-[20px] font-medium leading-none sm:text-[24px]"
              >
                HAQQ
              </Link>
            </div>

            <svg width="19" height="16" viewBox="0 0 19 16" fill="none">
              <path
                d="M4.32323 15.6045H0.37561L6.92437 8.07653V7.89292L0.37561 0.395508H4.38443L9.43371 6.14862H9.61732L14.6054 0.395508H18.5836L12.0349 7.83172V8.01533L18.5836 15.6045H14.5748L9.52552 9.79023H9.31131L4.32323 15.6045Z"
                fill="white"
              />
            </svg>

            <Link
              href="https://islamiccoin.net/"
              className="text-white transition-colors duration-150 hover:text-[#01B36E]"
              target="_blank"
              rel="noreferrer noreferrer"
            >
              <svg
                viewBox="0 0 177 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-[26px] w-auto"
              >
                <g clip-path="url(#clip0_506_360)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.9353 0.169678C17.706 0.169678 21.1201 1.69949 23.5913 4.17266C26.0332 6.61658 27.5544 9.98198 27.5901 13.7024V13.7102L27.5905 13.7609L27.591 13.8362L27.5901 13.9621V13.9703C27.5544 17.6908 26.0332 21.0557 23.5913 23.4996C21.1201 25.9728 17.7064 27.5027 13.9353 27.5027C10.1647 27.5027 6.75056 25.9728 4.27945 23.4996C1.80833 21.0265 0.279785 17.6095 0.279785 13.8357C0.279785 10.0619 1.80833 6.6454 4.27945 4.17223C6.75056 1.69907 10.1647 0.169678 13.9353 0.169678ZM21.7839 8.02427C22.3016 8.02427 22.8038 8.09267 23.282 8.21951C21.8737 6.85177 19.9533 6.00948 17.8358 6.00948C15.6761 6.00948 13.721 6.88531 12.3063 8.30165C10.8912 9.71788 10.0161 11.6747 10.0161 13.8362C10.0161 15.9975 10.8912 17.9544 12.3063 19.3702C13.7214 20.7865 15.6766 21.6624 17.8358 21.6624C19.9533 21.6624 21.8741 20.82 23.282 19.4523C22.8042 19.5796 22.302 19.6476 21.7843 19.6476C20.181 19.6476 18.729 18.9971 17.6786 17.9453C16.6277 16.8936 15.9778 15.4403 15.9778 13.8357C15.9778 12.231 16.6277 10.7778 17.6786 9.72611C18.7286 8.67521 20.1801 8.02427 21.7839 8.02427ZM24.5214 11.0964C23.8207 10.3956 22.8528 9.96173 21.7834 9.96173C20.7141 9.96173 19.7462 10.3956 19.0456 11.0964C18.3449 11.7977 17.9118 12.7663 17.9118 13.8366C17.9118 14.9068 18.3453 15.8755 19.0456 16.5767C19.7462 17.2776 20.7141 17.7114 21.7834 17.7114C22.8528 17.7114 23.8207 17.2776 24.5214 16.5767C25.2216 15.8755 25.6551 14.9068 25.6551 13.8366L25.6547 13.7867C25.6418 12.7359 25.2108 11.7865 24.5214 11.0964ZM17.8354 4.07248C19.0516 4.07248 20.2153 4.2952 21.2894 4.70238C19.2784 3.07883 16.7201 2.10667 13.9353 2.10667C10.6991 2.10667 7.76872 3.41979 5.64776 5.5421C3.52721 7.66442 2.21518 10.5972 2.21518 13.8362C2.21518 17.0755 3.52677 20.0079 5.64776 22.1306C7.76872 24.2529 10.6987 25.566 13.9353 25.566C16.7205 25.566 19.2784 24.5939 21.2894 22.9699C20.2153 23.3771 19.0516 23.5998 17.8354 23.5998C15.1417 23.5998 12.7024 22.5069 10.9375 20.7401C9.17227 18.9734 8.08021 16.5324 8.08021 13.8366C8.08021 11.1407 9.17227 8.69934 10.9375 6.93261C12.7024 5.16546 15.1417 4.07248 17.8354 4.07248Z"
                    fill="currentColor"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M114.718 23.4221C112.652 23.4221 110.924 22.738 109.533 21.369C108.162 19.9826 107.476 18.2988 107.476 16.3177C107.476 14.3009 108.162 12.6172 109.533 11.2664C110.924 9.89777 112.651 9.21326 114.718 9.21326C116.052 9.21326 117.269 9.52842 118.366 10.1588C119.464 10.7892 120.286 11.6357 120.835 12.698L118.284 14.1567C117.973 13.5085 117.502 12.9996 116.871 12.6302C116.241 12.261 115.514 12.0765 114.691 12.0765C113.484 12.0765 112.468 12.4818 111.646 13.292C110.841 14.1203 110.439 15.1288 110.439 16.3173C110.439 17.5056 110.841 18.5142 111.646 19.3425C112.468 20.1532 113.484 20.558 114.691 20.558C115.495 20.558 116.222 20.3736 116.871 20.0042C117.52 19.6353 118.01 19.1264 118.338 18.4782L120.89 19.9098C120.305 20.9903 119.458 21.8457 118.352 22.4762C117.246 23.1073 116.035 23.4221 114.718 23.4221Z"
                    fill="currentColor"
                  />
                  <path
                    d="M105.194 9.5647H102.232V23.0708H105.194V9.5647Z"
                    fill="currentColor"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M105.03 6.99896C104.665 7.35899 104.225 7.53921 103.713 7.53921C103.202 7.53921 102.754 7.35899 102.37 6.99896C102.004 6.62075 101.821 6.1795 101.821 5.67521C101.821 5.17093 102.004 4.73898 102.37 4.37853C102.736 4.00033 103.183 3.81122 103.713 3.81122C104.244 3.81122 104.692 4.00033 105.058 4.37853C105.423 4.73856 105.607 5.17093 105.607 5.67521C105.606 6.1795 105.414 6.62075 105.03 6.99896Z"
                    fill="currentColor"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M94.2458 9.21326C95.801 9.21326 97.0534 9.7082 98.0045 10.699C98.9541 11.6894 99.4305 13.0221 99.4305 14.697V23.0705H96.4675V14.8861C96.4675 13.9676 96.2297 13.2471 95.7549 12.7251C95.2793 12.2026 94.6301 11.9415 93.8073 11.9415C92.8742 11.9415 92.1435 12.2432 91.6128 12.8465C91.0829 13.4498 90.8163 14.3365 90.8163 15.5071V23.0705H87.8549V14.8861C87.8549 13.9494 87.6311 13.2248 87.1826 12.7115C86.7342 12.1984 86.099 11.9415 85.2761 11.9415C84.362 11.9415 83.6255 12.2479 83.0677 12.8601C82.5098 13.4721 82.2308 14.3547 82.2308 15.5071V23.0705H79.2686V9.56482H82.2308V11.1855C83.1088 9.87117 84.4163 9.21367 86.1533 9.21367C87.9084 9.21367 89.2076 9.92528 90.0494 11.3476C90.9455 9.92487 92.3443 9.21326 94.2458 9.21326Z"
                    fill="currentColor"
                  />
                  <path
                    d="M59.317 4.16187H56.3545V23.0705H59.317V4.16187Z"
                    fill="currentColor"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M46.9143 13.292C46.9143 13.7062 47.1338 14.0438 47.5724 14.3052C48.0115 14.5662 48.6516 14.8137 49.4923 15.0481C50.1325 15.1919 50.6901 15.3451 51.1657 15.5071C51.6413 15.6692 52.1439 15.9077 52.6745 16.2229C53.2051 16.5381 53.6119 16.9523 53.8951 17.4654C54.1785 17.9786 54.3108 18.5773 54.2924 19.2617C54.2924 20.5584 53.7803 21.5759 52.7565 22.3137C51.7324 23.0519 50.4615 23.4213 48.9437 23.4213C47.5905 23.4213 46.4292 23.142 45.46 22.584C44.4909 22.0261 43.7867 21.2514 43.3481 20.261L45.8991 18.8023C46.3563 20.099 47.371 20.7471 48.9437 20.7471C50.4981 20.7471 51.2752 20.2428 51.2752 19.2342C51.2752 18.496 50.4066 17.9198 48.6692 17.5056C48.0111 17.3436 47.4577 17.1816 47.0097 17.0196C46.5616 16.8575 46.068 16.6231 45.5283 16.3173C44.9888 16.0109 44.5772 15.6061 44.2941 15.1018C44.0106 14.5976 43.8778 14.0124 43.8963 13.3461C43.8963 12.1036 44.3718 11.1043 45.3225 10.3479C46.2917 9.59183 47.4895 9.21326 48.9163 9.21326C50.05 9.21326 51.0605 9.46081 51.9472 9.95616C52.8343 10.4512 53.5152 11.1398 53.9908 12.0224L51.4948 13.3998C51.0377 12.3736 50.1781 11.8603 48.9163 11.8603C48.3311 11.8603 47.8509 11.9864 47.4762 12.2386C47.1016 12.4907 46.9143 12.8418 46.9143 13.292Z"
                    fill="currentColor"
                  />
                  <path
                    d="M40.9842 4.16187H37.8296V23.0705H40.9842V4.16187Z"
                    fill="currentColor"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M73.2291 11.4826V9.56482H76.1919V23.0709H73.2291V21.1262C72.1137 22.6568 70.5135 23.4221 68.4286 23.4221C66.5451 23.4221 64.9358 22.7381 63.6006 21.369C62.2657 20.0004 61.5981 18.3166 61.5981 16.3177C61.5981 14.3187 62.2657 12.635 63.6006 11.2664C64.9358 9.89777 66.5447 9.21326 68.4286 9.21326C70.5135 9.21326 72.1133 9.96967 73.2291 11.4826ZM65.7954 19.4242C66.6186 20.2344 67.6518 20.6396 68.8951 20.6396C70.1383 20.6396 71.1721 20.2344 71.9947 19.4242C72.8179 18.5959 73.2291 17.5602 73.2291 16.3177C73.2291 15.0751 72.8174 14.0488 71.9947 13.2383C71.1721 12.41 70.1383 11.9957 68.8951 11.9957C67.6514 11.9957 66.6186 12.41 65.7954 13.2383C64.9728 14.0488 64.5612 15.0747 64.5612 16.3177C64.5608 17.542 64.9723 18.5777 65.7954 19.4242Z"
                    fill="currentColor"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M154.007 21.5627C152.617 22.9313 150.907 23.6159 148.877 23.6159C146.847 23.6159 145.137 22.9317 143.747 21.5627C142.339 20.1764 141.635 18.4926 141.635 16.5115C141.635 14.5302 142.339 12.8469 143.747 11.4601C145.137 10.0915 146.847 9.40704 148.877 9.40704C150.907 9.40704 152.617 10.0911 154.007 11.4601C155.415 12.8464 156.118 14.5306 156.118 16.5115C156.118 18.4921 155.415 20.1764 154.007 21.5627ZM144.598 16.5119C144.598 17.7366 145.009 18.7536 145.832 19.5642C146.655 20.3743 147.67 20.7797 148.877 20.7797C150.083 20.7797 151.098 20.3743 151.921 19.5642C152.744 18.7536 153.156 17.7366 153.156 16.5119C153.156 15.2875 152.744 14.27 151.921 13.4595C151.098 12.6489 150.083 12.244 148.877 12.244C147.669 12.244 146.655 12.6493 145.832 13.4595C145.009 14.2696 144.598 15.287 144.598 16.5119Z"
                    fill="currentColor"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M171.519 9.21326C173.11 9.21326 174.385 9.71289 175.345 10.7126C176.306 11.7123 176.786 13.0673 176.786 14.7782V23.071H173.823V15.0751C173.823 14.0671 173.549 13.2924 173 12.7521C172.452 12.2119 171.702 11.942 170.751 11.942C169.672 11.942 168.821 12.2707 168.199 12.9277C167.578 13.5851 167.267 14.5531 167.267 15.8316V23.071H164.305V9.56482H167.267V11.2935C168.182 9.90667 169.599 9.21326 171.519 9.21326Z"
                    fill="currentColor"
                  />
                  <path
                    d="M161.254 9.5647H158.291V23.0708H161.254V9.5647Z"
                    fill="currentColor"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M161.089 6.99896C160.724 7.35899 160.285 7.53921 159.773 7.53921C159.26 7.53921 158.812 7.35899 158.428 6.99896C158.063 6.62075 157.879 6.1795 157.879 5.67521C157.879 5.17093 158.063 4.73898 158.428 4.37853C158.794 4.00033 159.242 3.81122 159.773 3.81122C160.303 3.81122 160.751 4.00033 161.116 4.37853C161.482 4.73856 161.665 5.17093 161.665 5.67521C161.665 6.1795 161.474 6.62075 161.089 6.99896Z"
                    fill="currentColor"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M132.004 23.4217C129.115 23.4217 126.72 22.4854 124.818 20.6125C122.916 18.7037 121.966 16.3718 121.966 13.6165C121.966 10.8433 122.916 8.5203 124.818 6.6474C126.701 4.75675 129.097 3.81122 132.004 3.81122C133.742 3.81122 135.347 4.2165 136.82 5.02667C138.292 5.83725 139.439 6.93551 140.262 8.32224L137.519 9.88884C137.006 8.95265 136.262 8.20976 135.283 7.66023C134.304 7.11107 133.211 6.8365 132.004 6.8365C129.975 6.8365 128.311 7.47572 127.012 8.75468C125.751 10.0153 125.12 11.636 125.12 13.6169C125.12 15.5976 125.751 17.2183 127.012 18.4791C128.311 19.7575 129.975 20.3972 132.004 20.3972C133.211 20.3972 134.309 20.1222 135.297 19.5731C136.284 19.024 137.024 18.2811 137.519 17.3448L140.262 18.8844C139.475 20.253 138.333 21.3605 136.833 22.2066C135.388 23.0168 133.779 23.4217 132.004 23.4217Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_506_360">
                    <rect width="176.909" height="28" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Link>
          </div>

          {/* <div className="flex-initial">
            <Image src={islamicCoinImageData} alt="HAQQ" />
          </div> */}

          <div className="flex-1" />
          <nav className="hidden flex-row items-center space-x-[24px] pl-[24px] lg:mr-[40px] lg:flex xl:mr-[60px]">
            <HeaderNavLink href="/#about">About</HeaderNavLink>
            <HeaderNavLink href="/ecosystem">Ecosystem</HeaderNavLink>
            <HeaderNavLink href="/ecosystem-fund">Fund</HeaderNavLink>
            {/* <HeaderNavLink href="/#technology">Technology</HeaderNavLink> */}
            <HeaderNavLink href="/#developers">Developers</HeaderNavLink>
            <HeaderNavLink href="/blog">Blog</HeaderNavLink>
            <HeaderNavLink href="https://docs.haqq.network" isOutLink>
              Docs
            </HeaderNavLink>
            {/* <HeaderNavLink href="/#community">Community</HeaderNavLink> */}
            {/* <HeaderNavLink href="/404">404</HeaderNavLink> */}
          </nav>
          <div className="flex flex-row items-center gap-[16px]">
            <Link href="https://shell.haqq.network" className="hidden md:block">
              <Button>Shell</Button>
            </Link>
            <Link href="/wallet" className="hidden md:block">
              <Button>Wallet</Button>
            </Link>
            <div className="block pl-[8px] leading-[0] lg:hidden">
              <BurgerButton
                isOpen={isBurgerMenuOpen}
                onClick={handleMenuOpen}
                className="h-[24px] w-[24px] sm:h-[30px] sm:w-[30px]"
              />
            </div>
          </div>
        </div>
      </header>
      <BurgerMenuComponent
        isOpen={isBurgerMenuOpen}
        onClose={handleMenuClose}
      />
    </Fragment>
  );
}

function BurgerMenuComponent({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <div className="lg:hidden">
      <ScrollLock isActive={isOpen} />

      <div
        className={clsx(
          'fixed right-0 top-[62px] z-[45] h-[calc(100vh-62px)] w-full sm:top-[72px] sm:h-[calc(100vh-72px)] sm:w-[468px]',
          'transform-gpu transition-transform duration-200 will-change-transform',
          isOpen
            ? 'translate-y-[0px] ease-in-out sm:translate-x-[0px]'
            : 'translate-y-[100%] ease-out sm:translate-x-[100%] sm:translate-y-[0%]',
        )}
      >
        <BurgerMenu onClose={onClose} />
      </div>

      {isOpen && (
        <div
          onClick={onClose}
          className="fixed right-0 top-[0] z-40 h-full w-full bg-black/80"
        />
      )}
    </div>
  );
}
