<template>
  <div>
    <h1>{{ frontmatter.title }}</h1>
    <p style="font-size: smaller; font-style: italic; color: darkcyan">{{ frontmatter.description }}</p>
  </div>
</template>

<script setup>
import { useData } from 'vitepress'

const { frontmatter } = useData()
</script>
