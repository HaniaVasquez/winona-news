<template>
  <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
    <BlogListItem v-for="post in posts" :key="post.slug" :post="post" />
  </div>
</template>

<script setup lang="ts">
  import type { ContentfulPost } from '~/types/contentful'
  import BlogListItem from '~/components/BlogListItem.vue'

  defineProps<{
    posts: ContentfulPost[]
  }>()
</script>
