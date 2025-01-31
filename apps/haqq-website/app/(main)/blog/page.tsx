import type { Metadata } from 'next';
import { getBlogPosts } from '../../../utils/get-blog-posts';
import { BlogPage } from '@haqq/haqq-website/blog';
import { DEPLOY_URL } from '../../../constants';
import { haqqOpenGraphImages } from '../../shared-metadata';

const title = 'Blog';
const description =
  "Stay updated with the latest news, insights, and trends in the world of ethical and Islamic Finance technology with HAQQ's blog.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title: `${title} | HAQQ`,
    description,
    url: new URL('/blog', DEPLOY_URL).toString(),
    images: haqqOpenGraphImages,
  },
};

export default async function Page() {
  const { posts, tags } = await getBlogPosts();

  let featuredPost;
  const postsToRender = [];

  for (const post of posts) {
    if (!featuredPost && post.isFeatured) {
      featuredPost = post;
    } else {
      postsToRender.push(post);
    }
  }

  return (
    <BlogPage featuredPost={featuredPost} posts={postsToRender} tags={tags} />
  );
}
