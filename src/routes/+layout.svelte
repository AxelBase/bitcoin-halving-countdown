<script lang="ts">
  import '../app.css';
  import { base } from '$app/paths';
  import { fade, slide } from 'svelte/transition';

  // --- Theme Toggle Logic ---
  let isDarkMode = false;
  function toggleTheme() {
    isDarkMode = !isDarkMode;
    document.body.dataset.bsTheme = isDarkMode ? 'dark' : 'light';
  }

  // --- Buy Me A Coffee Logic ---
  const paypalUsername = '';
  const donationAmounts = [1, 3, 5, 10];
  let isDropdownOpen = false;

  const toggleDropdown = () => isDropdownOpen = !isDropdownOpen;
  const closeDropdown = () => isDropdownOpen = false;

  function clickOutside(node: HTMLElement) {
    const handleClick = (event: MouseEvent) => {
      if (node && !node.contains(event.target as Node)) {
        node.dispatchEvent(new CustomEvent('click_outside'));
      }
    };
    document.addEventListener('click', handleClick, true);
    return { destroy() { document.removeEventListener('click', handleClick, true); } };
  }
</script>

<header class="fixed-top p-3">
  <nav class="container glass rounded-pill px-4 py-2 d-flex justify-content-between align-items-center shadow-sm" style="max-width: 1200px;">
    
    <div class="d-flex align-items-center gap-3">
      <a href="{base}/" class="d-flex align-items-center gap-2 text-decoration-none logo-group">
        <img src="{base}/AxelLab-Logo.ico" alt="Logo" class="nav-logo" />
        <span class="fw-bold fs-5 brand-name">AxelBase</span>
      </a>

      <div class="position-relative" use:clickOutside on:click_outside={closeDropdown}>
        <button class="btn btn-coffee" on:click={toggleDropdown}>
          <i class="bi bi-cup-hot-fill steam-anim"></i>
          <span class="d-none d-md-inline">Support</span>
        </button>

        {#if isDropdownOpen}
          <div class="coffee-dropdown glass p-2 mt-2" transition:slide>
            {#each donationAmounts as amount}
              <a href="https://paypal.me/{paypalUsername}/{amount}" target="_blank" class="donation-item" on:click={closeDropdown}>
                ${amount}
              </a>
            {/each}
          </div>
        {/if}
      </div>
    </div>

    <div class="d-flex align-items-center gap-2">
      <ul class="nav d-none d-lg-flex gap-1 me-3 align-items-center">
        <li><a class="nav-link-custom" href="{base}/">Home</a></li>
        <li><a class="nav-link-custom" href="{base}/#about">About</a></li>
        <li><a class="nav-link-custom" href="{base}/#how-to">How to use</a></li>
        <li><a class="nav-link-custom" href="{base}/#faq">FAQ</a></li>
        
        <li class="tools-parent">
          <span class="nav-link-custom">Tools <i class="bi bi-chevron-down small"></i></span>
          <ul class="tools-menu glass">
             <li><a href="{base}/next-halving">Next Halving</a></li>
             <li><a href="{base}/past-halvings">Past Halvings</a></li>
             <li><a href="{base}/halving-calculator">Calculator</a></li>
             <li><a href="{base}/block-height">Block Height</a></li>
             <li><a href="{base}/reward-schedule">Reward Schedule</a></li>
             <li><a href="{base}/impact-on-price">Price Impact</a></li>
             <li><a href="{base}/mining-difficulty">Difficulty</a></li>
             <li><a href="{base}/halving-timeline">Timeline</a></li>
             <li><a href="{base}/subsidy-reduction">Subsidy</a></li>
          </ul>
        </li>

        <li><a class="btn-gold ms-2" href="{base}/blog">Blog</a></li>
      </ul>

      <button class="theme-toggle" on:click={toggleTheme} aria-label="Toggle Theme">
        <i class="bi {isDarkMode ? 'bi-sun-fill' : 'bi-moon-stars-fill'}"></i>
      </button>
    </div>
  </nav>
</header>

<main class="container" style="padding-top: 100px; padding-bottom: 80px;" in:fade={{ duration: 600 }}>
  <slot />
</main>

<footer class="fixed-bottom glass py-2 text-center">
  <div class="container d-flex flex-column flex-sm-row justify-content-between align-items-center small text-muted">
    <span>&copy; {new Date().getFullYear()} AxelBase Bitcoin Halving Countdown</span>
    <div class="d-flex gap-3">
      <a href="{base}/privacy" class="footer-link">Privacy</a>
      <a href="{base}/terms" class="footer-link">Terms</a>
    </div>
  </div>
</footer>

<style>
  .nav-logo { height: 32px; transition: transform 0.3s; }
  .logo-group:hover .nav-logo { transform: rotate(15deg) scale(1.1); }
  .brand-name { color: var(--primary-gold); }

  .nav-link-custom {
    padding: 0.5rem 0.8rem;
    color: var(--text-muted);
    font-weight: 600;
    text-decoration: none;
    transition: color 0.3s;
    position: relative;
    cursor: pointer;
    display: inline-block;
  }
  .nav-link-custom:hover { color: var(--primary-gold); }
  
  /* Restored Tools Menu Styling */
  .tools-parent { position: relative; }
  .tools-menu {
    position: absolute;
    top: 100%;
    right: 0;
    min-width: 200px;
    padding: 1rem;
    border-radius: 20px;
    list-style: none;
    opacity: 0;
    visibility: hidden;
    transform: translateY(15px);
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    z-index: 1100;
  }
  .tools-parent:hover .tools-menu {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
  .tools-menu li { margin-bottom: 0.5rem; }
  .tools-menu a {
    text-decoration: none;
    color: var(--text-main);
    display: block;
    padding: 6px 12px;
    border-radius: 10px;
    font-size: 0.9rem;
    transition: background 0.2s;
  }
  .tools-menu a:hover {
    background: var(--primary-gold);
    color: white !important;
  }

  /* ... remaining styles (btn-coffee, btn-gold, theme-toggle, etc.) ... */
  .btn-gold {
    background: var(--primary-gold);
    color: white !important;
    border-radius: 50px;
    padding: 0.5rem 1.2rem;
    font-weight: 600;
    border: none;
    text-decoration: none;
  }
  .btn-coffee {
    background: #ffdd00; color: #3d3d3d; font-weight: 700; border: none;
    border-radius: 50px; padding: 0.4rem 1rem; font-size: 0.85rem;
    transition: all 0.3s;
  }
  .theme-toggle {
    width: 40px; height: 40px; border-radius: 50%; border: none;
    background: var(--glass-border); color: var(--primary-gold);
    transition: all 0.3s;
  }
  .coffee-dropdown { position: absolute; top: 100%; left: 0; width: 100px; border-radius: 15px; z-index: 1000; }
  .donation-item { display: block; padding: 5px; text-align: center; color: var(--text-main); text-decoration: none; font-weight: bold; border-radius: 8px; }
  .donation-item:hover { background: var(--primary-gold); color: white; }
  .steam-anim { display: inline-block; animation: steam 2s infinite ease-in-out; }
  @keyframes steam { 0% { transform: translateY(0); opacity: 1; } 100% { transform: translateY(-4px); opacity: 0; } }
</style>