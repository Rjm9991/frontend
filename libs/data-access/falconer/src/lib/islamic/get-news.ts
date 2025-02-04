import { FALCONER_ENDPOINT } from '../../constants';
import { FalconerRequestInit } from '../../types';
import { mapFalconerNews } from '../../utils/map-news';

export interface FalconerNewsPost {
  image: {
    src: string;
    width: number;
    height: number;
  } | null;
  title: string;
  description: string;
  date: string;
  source: string;
  content_type: string;
  url: string;
}

export interface NewsPost {
  image: {
    src: string;
    width: number;
    height: number;
  } | null;
  title: string;
  description: string;
  date: Date;
  source: string;
  type: string;
  isFeatured?: boolean;
  url: string;
}

export async function getNewsData(
  options: Partial<FalconerRequestInit>,
  limit?: number,
) {
  const requestUrl = new URL('/islamic/news', FALCONER_ENDPOINT);
  const response = await fetch(requestUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ limit }),
    ...options,
  });

  if (!response.ok) {
    throw new Error('chain stats fetch failed');
  }

  const responseJson: FalconerNewsPost[] = await response.json();

  return mapFalconerNews(responseJson);
}
