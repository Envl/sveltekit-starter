<script lang="ts">
  import Footer from '$lib/component/Footer.svelte'
</script>

<main class="px-8 py-8 flex flex-col h-full">
  <h1 class="text-3xl font-bold  mb-2">
    <a href="https://kit.svelte.dev" class="!text-violet-500"> SvelteKit</a> Starter
  </h1>
  <p>
    This is an opinionated PWA ready sveltekit starter project with folders structured in favor of
    the <a href="https://github.com/bespoyasov/frontend-clean-architecture"> Clean Architecture</a>.
  </p>
  <div>
    <a href="https://github.com/Envl/sveltekit-starte">Github</a>
  </div>

  <h2 class="text-xl font-bold mt-4 mb-2 ">Features</h2>
  <ul>
    <li>
      <a href="https://www.joshwcomeau.com/snippets/html/html-skeleton/">HTML template</a> by Joshua
      Comeau for basic SEO support
    </li>
    <li>
      <a href="https://tailwindcss.com/docs/guides/sveltekit"> tailwindcss </a> setup
    </li>
    <li><a href="https://sass-lang.com/">SASS</a> setup (it's useful sometimes)</li>
    <li>
      CSS reset based on <a href="https://www.joshwcomeau.com/css/custom-css-reset/"
        >Joshua Comeau's article</a
      >
    </li>
    <li>
      <a href="https://prettier.io/">Prettier</a> setup
    </li>
    <li>
      <a href="https://vitest.dev/">Vitest</a> installed
    </li>
    <li>TypeScript support</li>
    <li>
      QR Code for localhost URL printed in terminal with the support of <a
        href="https://www.npmjs.com/package/qrcode-terminal"
        target="_blank"
        rel="noopener noreferrer">qrcode-terminal</a
      >
    </li>
    <li>
      utilities
      <ul>
        <li>device detection</li>
        <li>
          2 frequently used Svelte actions:
          <ul>
            <li>clickoutside</li>
            <li>pannable</li>
          </ul>
        </li>
        <li>
          more useful actions and utils from
          <a href="https://www.svelteui.org/installation"> @svelteuidev/composables</a>
        </li>
      </ul>
    </li>
  </ul>
  <Footer />
</main>

<style lang="scss">
  ul {
    @apply list-disc;
    li {
      @apply ml-5;
    }
  }

  a {
    @apply text-violet-600;
  }

  p {
    @apply my-4;
  }
</style>
