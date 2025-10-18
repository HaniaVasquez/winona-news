<script setup lang="ts">
  import BlogList from '~/components/BlogList.vue'

  const { data: posts, error } = await usePosts()
  if (error.value) throw error.value
</script>

<template>
  <section class="max-w-4xl mx-auto py-12 px-4">
    <h1 class="text-4xl font-bold mb-8">Latest Stories</h1>
    <BlogList :posts="posts || []" />
  </section>
</template>
