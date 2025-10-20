<template>
  <UApp>
    <UHeader>
      <template #left>
        <NuxtLink to="/">
          <div class="app-logo">
            <NuxtImg
              alt="By Winona"
              class="h-10 w-auto transition-all duration-300 dark:invert dark:brightness-0"
              src="https://bywinona.com/svg/winona-icon.svg"
            />
          </div>
        </NuxtLink>
      </template>

      <template #right>
        <UColorModeButton />

        <UButton
          aria-label="GitHub"
          color="neutral"
          icon="i-simple-icons-github"
          target="_blank"
          to="https://github.com/HaniaVasquez/winona-news"
          variant="ghost"
        />
      </template>
    </UHeader>

    <UMain>
      <NuxtPage />
    </UMain>

    <USeparator icon="i-lucide-newspaper" />

    <UFooter>
      <template #left>
        <p class="text-sm text-muted">
          Built with Nuxt UI for Winona Technical Assessment • © {{ new Date().getFullYear() }} •
          <a
            href="https://github.com/HaniaVasquez/winona-news"
            target="_blank"
            class="hover:text-primary transition-colors"
          >
            Hania Vasquez
          </a>
        </p>
      </template>
    </UFooter>
  </UApp>
</template>

<script setup>
useHead({
  link: [{ rel: 'icon', type: 'image/png', href: '/winona_icon.png' }],
  meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
  htmlAttrs: {
    lang: 'en',
  },
})

const title = 'Winona News – A Nuxt Blog Example'
const description =
    'A technical assessment project built with Nuxt 4 and Nuxt UI. It demonstrates content integration with Contentful, SEO optimization, and responsive and dark mode front-end rendering through a simple blog with articles, images, and metadata.'

useSeoMeta({
  title,
  description,
  ogTitle: 'Winona News – Company Blog',
  ogDescription: 'Explore articles and updates from By Winona.',
  ogImage: 'https://bywinona.com/svg/winona-icon.svg',
  ogType: 'website',
  ogSiteName: 'By Winona',
  twitterCard: 'summary_large_image',
  twitterSite: '@bywinona',
  twitterCreator: '@bywinona',
  twitterImage: 'https://bywinona.com/svg/winona-icon.svg',
})
</script>
