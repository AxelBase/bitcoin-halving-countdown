<!-- src/lib/components/ApiFetcher.svelte -->
<script>
  import { onMount } from 'svelte';

  export let url;
  export let parser = (res) => res.text(); // Default to text parser
  export let fallbackData = null; // Optional fallback data if fetch fails
  let data = null;
  let error = null;
  let loading = true;

  onMount(async () => {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      data = await parser(res);
    } catch (e) {
      error = e;
      if (fallbackData !== null) {
        data = fallbackData;
        error = null; // Use fallback silently or with warning
        console.warn('Using fallback data due to fetch error');
      }
    } finally {
      loading = false;
    }
  });
</script>

{#if loading}
  <div class="text-center">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
{:else if error}
  <div class="alert alert-danger" role="alert">
    Error: {error.message}. Please try again later.
  </div>
{:else}
  <slot {data} />
{/if}