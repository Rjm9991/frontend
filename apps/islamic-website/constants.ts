const DEPLOY_URL = `https://${process.env['NEXT_PUBLIC_VERCEL_URL']}`;
const STORYBLOK_ACCESS_TOKEN = process.env['STORYBLOK_ACCESS_TOKEN'];
const VERCEL_ENV = process.env['VERCEL_ENV'];
const REVALIDATE_TIME = 3600;

export { DEPLOY_URL, STORYBLOK_ACCESS_TOKEN, VERCEL_ENV, REVALIDATE_TIME };
