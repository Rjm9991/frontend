import { Heading, NewsCard, BlogTabs } from '@haqq/website/ui-kit';
import Link from 'next/link';
import { useMemo, useState } from 'react';

export function PostsBlock({ posts, tags }: { posts: any[]; tags: string[] }) {
  const [tab, setTab] = useState<string>('All posts');

  const filteredPosts = useMemo(() => {
    if (tab === 'All posts') {
      return posts;
    }

    return posts.filter((post) => {
      return post.tags.includes(tab);
    });
  }, [posts, tab]);

  return (
    <section className="flex flex-col py-[60px]">
      <div className="overflow-clip px-[16px] sm:px-[63px] lg:px-[79px]">
        <div className="mb-[28px] flex flex-row items-center gap-x-[38px] md:mb-[42px] md:gap-x-[48px] lg:mb-[56px]">
          <Heading>Recent posts</Heading>
          <div className="relative flex items-center">
            <div className="h-[16px] w-[16px] bg-white" />
            <div className="bg-haqq-border absolute h-[1px] w-[3000px]" />
          </div>
        </div>

        <BlogTabs
          tabs={['All posts', ...tags]}
          current={tab}
          onChange={setTab}
        />

        <div className="mt-[28px] grid grid-cols-1 gap-[28px] md:mt-[36px] md:grid-cols-2 md:gap-[38px] xl:grid-cols-3">
          {filteredPosts.length > 0 ? (
            filteredPosts?.map((post) => {
              return (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <NewsCard
                    date={new Date(post.date)}
                    description={post.description}
                    image={post.image}
                    title={post.title}
                    tags={post.tags}
                  />
                </Link>
              );
            })
          ) : (
            <div>no posts</div>
          )}
        </div>
      </div>
    </section>
  );
}