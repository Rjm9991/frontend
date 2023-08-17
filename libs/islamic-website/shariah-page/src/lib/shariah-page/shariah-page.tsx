import { FatwaBlock } from '../fatwa-block/fatwa-block';
import fatwaStarsImgData from '../../assets/images/fatwa-stars.webp';
import Image from 'next/image';
import {
  Container,
  MemberCard,
  MemberModalCard,
  Modal,
  Text,
} from '@haqq/islamic-ui-kit';
import clsx from 'clsx';
import Link from 'next/link';
import { PropsWithChildren, useCallback, useEffect, useState } from 'react';
import { FoundationsBlock } from '../foundations-block/foundations-block';
import { ShariahBlock } from '../shariah-block/shariah-block';
import { ShariPageMobileNav } from '../sharia-page-mobile-nav/sharia-page-mobile-nav';
import { ScrollSpySection } from './scrollspy';
import { useRouter } from 'next/navigation';
import mockMemberImgData from '../../assets/images/mock_member.png';

interface Member {
  image: string;
  title: string;
  description: string;
  url?: string;
}

const mockMembers: Member[] = [
  {
    image: mockMemberImgData.src,
    title: '1Sheikh Dr. Hazza bin Sultan bin Zayed Al Nahyan',
    description:
      "His Highness Sheikh Dr. Hazza Bin Sultan Bin Zayed Al Nahyan is Chairman of the Board of Directors of the Management of H. H. Sheikh Sultan Bin Zayed Al Nahyan. He also chairs the Board of Directors of holding companies concerned with Real Estate and Economic Development. Sheikh Dr. Hazza completed his Ph.D. in natural resources, Economic Development and Security in the United Arab Emirates from Bangor University in the United Kingdom in 2009. This is after completing his master's thesis in the philosophy of modern societies and global transformation from the University of Cambridge, United Kingdom, in 2007.",
    url: 'https://google.com',
  },
  {
    image: mockMemberImgData.src,
    title: '2Sheikh Dr. Hazza bin Sultan bin Zayed Al Nahyan',
    description:
      "His Highness Sheikh Dr. Hazza Bin Sultan Bin Zayed Al Nahyan is Chairman of the Board of Directors of the Management of H. H. Sheikh Sultan Bin Zayed Al Nahyan. He also chairs the Board of Directors of holding companies concerned with Real Estate and Economic Development. Sheikh Dr. Hazza completed his Ph.D. in natural resources, Economic Development and Security in the United Arab Emirates from Bangor University in the United Kingdom in 2009. This is after completing his master's thesis in the philosophy of modern societies and global transformation from the University of Cambridge, United Kingdom, in 2007.",
  },
  {
    image: mockMemberImgData.src,
    title: '3Sheikh Dr. Hazza bin Sultan bin Zayed Al Nahyan',
    description:
      "His Highness Sheikh Dr. Hazza Bin Sultan Bin Zayed Al Nahyan is Chairman of the Board of Directors of the Management of H. H. Sheikh Sultan Bin Zayed Al Nahyan. He also chairs the Board of Directors of holding companies concerned with Real Estate and Economic Development. Sheikh Dr. Hazza completed his Ph.D. in natural resources, Economic Development and Security in the United Arab Emirates from Bangor University in the United Kingdom in 2009. This is after completing his master's thesis in the philosophy of modern societies and global transformation from the University of Cambridge, United Kingdom, in 2007.",
  },
  {
    image: mockMemberImgData.src,
    title: '4Sheikh Dr. Hazza bin Sultan bin Zayed Al Nahyan',
    description:
      "His Highness Sheikh Dr. Hazza Bin Sultan Bin Zayed Al Nahyan is Chairman of the Board of Directors of the Management of H. H. Sheikh Sultan Bin Zayed Al Nahyan. He also chairs the Board of Directors of holding companies concerned with Real Estate and Economic Development. Sheikh Dr. Hazza completed his Ph.D. in natural resources, Economic Development and Security in the United Arab Emirates from Bangor University in the United Kingdom in 2009. This is after completing his master's thesis in the philosophy of modern societies and global transformation from the University of Cambridge, United Kingdom, in 2007.",
  },
  {
    image: mockMemberImgData.src,
    title: '5Sheikh Dr. Hazza bin Sultan bin Zayed Al Nahyan',
    description:
      "His Highness Sheikh Dr. Hazza Bin Sultan Bin Zayed Al Nahyan is Chairman of the Board of Directors of the Management of H. H. Sheikh Sultan Bin Zayed Al Nahyan. He also chairs the Board of Directors of holding companies concerned with Real Estate and Economic Development. Sheikh Dr. Hazza completed his Ph.D. in natural resources, Economic Development and Security in the United Arab Emirates from Bangor University in the United Kingdom in 2009. This is after completing his master's thesis in the philosophy of modern societies and global transformation from the University of Cambridge, United Kingdom, in 2007.",
  },
  {
    image: mockMemberImgData.src,
    title: '6Sheikh Dr. Hazza bin Sultan bin Zayed Al Nahyan',
    description:
      "His Highness Sheikh Dr. Hazza Bin Sultan Bin Zayed Al Nahyan is Chairman of the Board of Directors of the Management of H. H. Sheikh Sultan Bin Zayed Al Nahyan. He also chairs the Board of Directors of holding companies concerned with Real Estate and Economic Development. Sheikh Dr. Hazza completed his Ph.D. in natural resources, Economic Development and Security in the United Arab Emirates from Bangor University in the United Kingdom in 2009. This is after completing his master's thesis in the philosophy of modern societies and global transformation from the University of Cambridge, United Kingdom, in 2007.",
  },
  {
    image: mockMemberImgData.src,
    title: '7Sheikh Dr. Hazza bin Sultan bin Zayed Al Nahyan',
    description:
      "His Highness Sheikh Dr. Hazza Bin Sultan Bin Zayed Al Nahyan is Chairman of the Board of Directors of the Management of H. H. Sheikh Sultan Bin Zayed Al Nahyan. He also chairs the Board of Directors of holding companies concerned with Real Estate and Economic Development. Sheikh Dr. Hazza completed his Ph.D. in natural resources, Economic Development and Security in the United Arab Emirates from Bangor University in the United Kingdom in 2009. This is after completing his master's thesis in the philosophy of modern societies and global transformation from the University of Cambridge, United Kingdom, in 2007.",
  },
  {
    image: mockMemberImgData.src,
    title: '8Sheikh Dr. Hazza bin Sultan bin Zayed Al Nahyan',
    description:
      "His Highness Sheikh Dr. Hazza Bin Sultan Bin Zayed Al Nahyan is Chairman of the Board of Directors of the Management of H. H. Sheikh Sultan Bin Zayed Al Nahyan. He also chairs the Board of Directors of holding companies concerned with Real Estate and Economic Development. Sheikh Dr. Hazza completed his Ph.D. in natural resources, Economic Development and Security in the United Arab Emirates from Bangor University in the United Kingdom in 2009. This is after completing his master's thesis in the philosophy of modern societies and global transformation from the University of Cambridge, United Kingdom, in 2007.",
  },
];

const sections: Array<{ id: string; title: string }> = [
  { id: 'fatwa', title: 'Fatwa' },
  { id: 'foundations', title: 'Foundations of Halal Investing' },
  { id: 'shariah-oracle', title: 'Shariah Oracle' },
  { id: 'shariah-board', title: 'Shariah Board' },
  { id: 'advisory-board', title: 'Advisory Board' },
  { id: 'executive-board', title: 'Executive Board' },
];

const activeSectionsDefaultState = sections.map(() => {
  return false;
});

function MembersContainer({
  members,
  className,
  onMemberSelect,
}: {
  members: Member[];
  className?: string;
  onMemberSelect: (member: Member) => void;
}) {
  return (
    <div
      className={clsx(
        'grid grid-cols-1 gap-[32px] md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3',
        className,
      )}
    >
      {members.map((member, idx) => {
        return (
          <MemberCard
            image={member.image}
            title={member.title}
            url={member.url}
            onClick={() => {
              onMemberSelect(member);
            }}
            key={idx}
            className="float-left min-w-[200px] snap-center md:float-none md:max-w-none"
          />
        );
      })}
    </div>
  );
}

export function ShariahPage() {
  const { replace } = useRouter();
  const [activeSections, setActiveSections] = useState(
    activeSectionsDefaultState,
  );
  const [activeSection, setActiveSection] = useState('fatwa');
  const [boardMember, setBoardMemeber] = useState<undefined | Member>(
    undefined,
  );

  const handleSectionInView = useCallback((id: string, inView: boolean) => {
    const sectionIndex = sections.findIndex(({ id: sectionId }) => {
      return sectionId === id;
    });

    setActiveSections((prevActiveSessions) => {
      const newActiveSessions = [...prevActiveSessions];
      newActiveSessions[sectionIndex] = inView;
      return newActiveSessions;
    });
  }, []);

  useEffect(() => {
    const activeIndex = activeSections.findIndex((inView) => {
      return inView;
    });

    if (activeIndex > 0) {
      setActiveSection(sections[activeIndex].id);
    } else {
      setActiveSection(sections[0].id);
    }
  }, [activeSections]);

  // useEffect(() => {
  //   replace(`#${activeSection}`);
  // }, [activeSection, replace]);

  const handleSectionSelect = useCallback(
    (id: string) => {
      replace(`#${id}`);
      setActiveSection(id);
    },
    [replace],
  );

  return (
    <section className="max-w-full overflow-clip py-[32px] md:py-[52px] lg:py-[68px]">
      <Container className="relative">
        <div>
          <h1 className="text-[46px] font-[600] leading-[52px] md:text-[60px] md:leading-none lg:text-[80px]">
            Sharia-Compliance
          </h1>

          <div className="mt-[18px] max-w-[1000px] md:mt-[28px]">
            <Text size="small" className="text-white/50">
              Islamic Coin harmonizes tradition with modernity, uniting Sharia
              compliance with blockchain technology to forge a pioneering
              platform in Islamic finance. Upheld by Halal Investing principles
              and safeguarded by our innovative Sharia Oracle, Islamic Coin
              stands as a testament to the thriving of traditional Islamic
              values in the digital world.
            </Text>
          </div>
        </div>

        <div
          className={clsx(
            'flex flex-row pt-[40px] md:pt-[58px]',
            'md:gap-[32px] lg:gap-[48px] xl:gap-[72px] xl:pr-[72px]',
          )}
        >
          <div className="relative hidden w-[292px] flex-none lg:block">
            <div className="sticky top-[112px] pb-[80px]">
              <ShariPageDesktopNav
                sections={sections}
                activeSection={activeSection}
              />
            </div>
          </div>
          <div className="md:flex-1">
            <div>
              <div className="lg:hidden">
                <ShariPageMobileNav
                  sections={sections}
                  activeSection={activeSection}
                  onSectionSelect={handleSectionSelect}
                />
              </div>

              <div className="flex flex-col divide-y-[1px] divide-[#2F2F2F] lg:max-w-[844px]">
                <ScrollSpySection
                  id="fatwa"
                  onSectionInView={handleSectionInView}
                  initialInView
                >
                  <div className="pb-[32px] pt-[32px] md:pb-[60px] lg:pb-[80px]">
                    <FatwaBlock />
                  </div>
                </ScrollSpySection>
                <ScrollSpySection
                  id="foundations"
                  onSectionInView={handleSectionInView}
                >
                  <div className="py-[32px] md:py-[60px] lg:py-[80px]">
                    <FoundationsBlock />
                  </div>
                </ScrollSpySection>
                <ScrollSpySection
                  id="shariah-oracle"
                  onSectionInView={handleSectionInView}
                >
                  <div className="py-[32px] md:py-[60px] lg:py-[80px]">
                    <ShariahBlock />
                  </div>
                </ScrollSpySection>
                <ScrollSpySection
                  id="shariah-board"
                  onSectionInView={handleSectionInView}
                >
                  <div className="py-[32px] md:py-[60px] lg:py-[80px]">
                    <div className="flex flex-col gap-y-[24px] lg:gap-y-[28px] xl:gap-y-[32px]">
                      <div>
                        <h2 className="text-[22px] font-[600] leading-[24px] md:text-[32px] md:leading-[36px] lg:text-[48px] lg:leading-[54px]">
                          Shariah Board
                        </h2>
                      </div>

                      <div className="max-w-full flex-1 overflow-auto">
                        <MembersContainer
                          members={mockMembers}
                          onMemberSelect={(member) => {
                            setBoardMemeber(member);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </ScrollSpySection>
                <ScrollSpySection
                  id="advisory-board"
                  onSectionInView={handleSectionInView}
                >
                  <div className="py-[32px] md:py-[60px] lg:py-[80px]">
                    <div className="flex flex-col gap-y-[24px] lg:gap-y-[28px] xl:gap-y-[32px]">
                      <h2 className="text-[22px] font-[600] leading-[24px] md:text-[32px] md:leading-[36px] lg:text-[48px] lg:leading-[54px]">
                        Advisory Board
                      </h2>
                      <MembersContainer
                        members={mockMembers}
                        onMemberSelect={(member) => {
                          setBoardMemeber(member);
                        }}
                      />
                    </div>
                  </div>
                </ScrollSpySection>
                <ScrollSpySection
                  id="executive-board"
                  onSectionInView={handleSectionInView}
                >
                  <div className="py-[32px] md:py-[60px] lg:py-[80px]">
                    <div className="flex flex-col gap-y-[24px] lg:gap-y-[28px] xl:gap-y-[32px]">
                      <h2 className="text-[22px] font-[600] leading-[24px] md:text-[32px] md:leading-[36px] lg:text-[48px] lg:leading-[54px]">
                        Executive Board
                      </h2>
                      <MembersContainer
                        members={mockMembers}
                        onMemberSelect={(member) => {
                          setBoardMemeber(member);
                        }}
                      />
                    </div>
                  </div>
                </ScrollSpySection>
              </div>
            </div>
          </div>
        </div>

        <div
          className={clsx(
            'absolute z-[-1]',
            'right-[-100px] top-[-80px] h-[400px] w-[236px]',
            'md:right-[-120px] md:top-[-100px] md:h-[742px] md:w-[437px]',
            'lg:right-[-280px] lg:top-[-510px] lg:h-[1483px] lg:w-[874px]',
          )}
        >
          <Image
            src={fatwaStarsImgData}
            alt=""
            fill
            className="opacity-[30%]"
          />
        </div>
      </Container>

      <Modal
        isOpen={Boolean(boardMember)}
        onClose={() => {
          setBoardMemeber(undefined);
        }}
      >
        {boardMember && (
          <MemberModalCard
            description={boardMember.description}
            image={boardMember.image}
            title={boardMember.title}
            url={boardMember.url}
            onClick={() => {
              setBoardMemeber(undefined);
            }}
          />
        )}
      </Modal>
    </section>
  );
}

function ShariPageDesktopNavLink({
  href,
  isActive,
  children,
}: PropsWithChildren<{
  href: string;
  isActive?: boolean;
}>) {
  return (
    <Link
      href={href}
      className={clsx(
        'hover:text-islamic-primary-green-hover inline-flex cursor-pointer items-center justify-between gap-x-[8px] font-mono uppercase',
        'transition-colors duration-300',
        isActive ? 'text-islamic-primary-green' : 'text-white',
      )}
    >
      <span>{children}</span>

      {isActive && (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={clsx(
            isActive ? 'text-islamic-primary-green' : 'text-transparent',
          )}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.7071 5.29289C14.3166 4.90237 13.6834 4.90237 13.2929 5.29289C12.9024 5.68342 12.9024 6.31658 13.2929 6.70711L17.5858 11H3C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13H17.5858L13.2929 17.2929C12.9024 17.6834 12.9024 18.3166 13.2929 18.7071C13.6834 19.0976 14.3166 19.0976 14.7071 18.7071L21.4142 12L14.7071 5.29289Z"
            fill="currentColor"
          />
        </svg>
      )}
    </Link>
  );
}

function ShariPageDesktopNav({
  sections,
  activeSection,
}: {
  sections: Array<{ id: string; title: string }>;
  activeSection: string;
}) {
  return (
    <nav className="flex flex-col gap-y-[16px] rounded-[20px] bg-[#181E25b3] p-[28px]">
      {sections.map(({ id, title }) => {
        return (
          <ShariPageDesktopNavLink
            href={`#${id}`}
            key={`sharia-nav-${id}`}
            isActive={activeSection === id}
          >
            {title}
          </ShariPageDesktopNavLink>
        );
      })}
    </nav>
  );
}
