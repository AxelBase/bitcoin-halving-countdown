// svelte.config.js
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter({
      pages: 'docs',
      assets: 'docs',
      fallback: undefined,
      precompress: false
    }),

    paths: {
      base: '/bitcoin-halving-countdown'
    },

    prerender: {
      crawl: false, // 🔥 CRITICAL FIX
      entries: [
        '/',
        '/next-halving',
        '/past-halvings',
        '/halving-calculator',
        '/block-height',
        '/reward-schedule',
        '/impact-on-price',
        '/mining-difficulty',
        '/halving-timeline',
        '/subsidy-reduction',
        '/privacy',
        '/terms',
        '/blog',
        '/404',
        '/blog/posts/post1',
        '/blog/posts/post2',
        '/blog/posts/post3',
        '/blog/posts/post4',
        '/blog/posts/post5',
        '/blog/posts/post6',
        '/blog/posts/post7'
      ]
    }
  }
};

export default config;
