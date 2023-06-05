import Image from 'next/image';
import { Heading } from '../heading/heading';
import { MarkdownText } from '../markdown-text/markdown-text';
// import { TelegramIcon, TwitterIcon } from '../icons';
import { CopyIcon } from '../icons/copy-icon';

export function NewsArticle({
  image,
  content,
  title,
  date,
  tags,
  onLinkCopy,
}: {
  image: {
    src: string;
    width: number;
    height: number;
  } | null;
  title: string;
  content: string;
  date: string;
  tags: string[];
  className?: string;
  onLinkCopy?: () => void;
}) {
  return (
    <section className="flex flex-col items-start py-[48px] md:py-[68px] lg:py-[100px]">
      <div className="w-full overflow-clip px-[16px] sm:px-[63px] lg:px-[79px]">
        <div className="mx-auto max-w-4xl">
          <article>
            {image && (
              <div className="relative mb-[28px] w-full md:mb-[32px] lg:mb-[36px]">
                <Image
                  src={image.src}
                  alt=""
                  width={image.width}
                  height={image.height}
                  role="img"
                  className="object-cover"
                />
              </div>
            )}

            <div className="mb-[8px] text-[12px] leading-[1.5em] text-white/50 md:text-[13px] md:leading-[22px] lg:text-[14px]">
              {new Intl.DateTimeFormat('en-US', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
              }).format(new Date(date))}
            </div>

            <Heading className="mb-[24px]">{title}</Heading>

            <MarkdownText>{content}</MarkdownText>
          </article>

          <div className="mt-[20px] flex flex-row flex-wrap gap-[6px] md:mt-[24px] lg:mt-[32px]">
            {tags.map((tag) => {
              return (
                <div
                  key={tag}
                  className="border-haqq-border max-w-fit rounded-[2px] border px-[10px] py-[6px] text-center text-[11px] leading-[1.55em] md:leading-[18px] lg:text-[12px]"
                >
                  {tag}
                </div>
              );
            })}
          </div>

          <div className="mt-[20px] md:mt-[24px] lg:mt-[32px]">
            <div className="flex w-full flex-row items-center gap-x-[26px] border-y border-dashed border-[#ffffff26] px-[10px] py-[17px]">
              <span className="font-serif text-[14px] uppercase leading-none tracking-[0.01em] text-white">
                Share the article
              </span>
              <div className="flex items-center gap-x-[16px] text-white/50">
                {/* <TwitterIcon className="hover:text-white cursor-pointer transition-colors duration-100 ease-out" /> */}
                {/* <TelegramIcon className="hover:text-white cursor-pointer transition-colors duration-100 ease-out" /> */}
                <div className="leading-[0]">
                  <button aria-label="Copy" onClick={onLinkCopy}>
                    <CopyIcon className="cursor-pointer transition-colors duration-100 ease-out hover:text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
