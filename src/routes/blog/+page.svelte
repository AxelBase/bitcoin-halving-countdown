<!-- blog/+page.svelte (Blog Index) -->
<script lang="ts">
  import { base } from '$app/paths';

  const posts = [
    { href: '/blog/posts/post1', title: 'Understanding Bitcoin Halving Events', description: 'An introduction to what Bitcoin halvings are, why they occur every 210,000 blocks, and their role in Bitcoin\'s monetary policy.' },
    { href: '/blog/posts/post2', title: 'How the Countdown Timer Works', description: 'Explore the real-time calculation of blocks remaining until the next halving using live block height data from mempool.space.' },
    { href: '/blog/posts/post3', title: 'Tracking Current Block Height and Progress', description: 'Learn how the utility fetches and displays the latest Bitcoin block height along with progress percentage toward the next halving.' },
    { href: '/blog/posts/post4', title: 'Using the Halving Calculator', description: 'A guide to estimating future dates from block heights or vice versa, based on average 10-minute block times.' },
    { href: '/blog/posts/post5', title: 'Visualizing the Reward Schedule', description: 'Detailed explanation of the fixed halving schedule and how block rewards decrease over epochs until nearing zero.' },
    { href: '/blog/posts/post6', title: 'Historical Price Impacts of Past Halvings', description: 'Overview of observed price movements around previous halvings, illustrated with approximate historical data.' },
    { href: '/blog/posts/post7', title: 'Mining Difficulty and Network Security', description: 'How Bitcoin\'s difficulty adjustment maintains consistent block times and its exponential growth over time.' },
  ];
</script>

<svelte:head>
  <title>Blog | Bitcoin Halving Countdown Insights</title>
  <meta name="description" content="In-depth articles on Bitcoin halvings, countdown mechanics, block height tracking, reward schedules, historical impacts, and more." />
</svelte:head>

<div class="container fade-in blog-index">
  <header class="blog-header">
    <h1><i class="bi bi-journal-richtext"></i> Blog: Halving Insights</h1>
    <p class="subtitle">
      Deep dives into the technical mechanics of Bitcoin halvings, real-time data fetching, reward schedules, historical trends, and how this utility helps track the next event expected around March–April 2028 at block 1,050,000.
    </p>
  </header>

  <div class="posts-grid">
    {#each posts as post}
      <a href="{base}{post.href}" class="card post-card">
        <div class="card-body">
          <h2 class="post-title">{post.title}</h2>
          <p class="post-description">{post.description}</p>
          <span class="read-more">Read Article &rarr;</span>
        </div>
      </a>
    {/each}
  </div>
</div>

<style>
  .blog-index {
    padding-top: 2rem;
    padding-bottom: 4rem;
  }

  .blog-header {
    text-align: center;
    margin-bottom: 3rem;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 2rem;
  }

  .blog-header h1 {
    font-size: 2.8rem;
    margin-bottom: 1rem;
  }

  .subtitle {
    font-size: 1.1rem;
    color: var(--text-secondary);
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.7;
  }

  .posts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
  }

  .post-card {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .post-card .card-body {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .post-title {
    font-size: 1.25rem;
    color: var(--accent-secondary);
    margin-bottom: 0.75rem;
  }

  .post-description {
    color: var(--text-secondary);
    flex-grow: 1;
    margin-bottom: 1rem;
  }

  .read-more {
    color: var(--accent-primary);
    font-weight: 600;
    align-self: flex-start;
    transition: var(--transition-fast);
  }

  .post-card:hover .read-more {
    transform: translateX(5px);
  }
</style>