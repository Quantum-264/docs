<template>
  <div>
    <h1>{{ frontmatter.title }}</h1>
    <p style="font-size: smaller; font-style: italic; color: darkcyan">{{ frontmatter.description }}</p>
    <p style="font-size: smaller; font-style: italic; color: gray">Published: {{ format(frontmatter.date) }}</p>
  </div>
</template>

<script setup>
import { useData } from 'vitepress'

const { frontmatter } = useData()

const format = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(date).toLocaleDateString(undefined, options)
}
</script>
