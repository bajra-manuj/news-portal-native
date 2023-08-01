import {API_KEY} from '../../env';

let sections =
  'arts, automobiles, books/review, business, fashion, food, health, home, insider, magazine, movies, nyregion, obituaries, opinion, politics, realestate, science, sports, sundayreview, technology, theater, t-magazine, travel, upshot, us,world';
export const SECTIONS = sections.split(',').map(e => e.trim());

export function buildPostUrl(offset = 0, post_limit = 10): string {
  return `https://jsonplaceholder.typicode.com/posts?_start=${offset}&_limit=${post_limit}`;
}

export function buildArticleUrl(category = 'home'): string {
  return `https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=${API_KEY}`;
}
