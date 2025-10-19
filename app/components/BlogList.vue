<template>
  <UPageSection :ui="{ container: '!pt-0' }">
    <UBlogPosts orientation="vertical">
      <UBlogPost
          v-for="(post, index) in posts"
          :key="post.id ?? post.slug ?? index"
          :title="post.title"
          :description="post.description"
          :image="post.image"
          :to="`/blog/${post.slug}`"
          :date="post.date"
          orientation="horizontal"
          variant="outline"
          :author="post.author"
      />
    </UBlogPosts>
  </UPageSection>
</template>

<script setup lang="ts">
  import type { ContentfulPost } from '~/types/contentful'

  defineProps<{ posts: ContentfulPost[] }>()
</script>
