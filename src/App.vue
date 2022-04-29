<script setup lang="ts">
// import WelcomeItem from './WelcomeItem.vue'
import { RouterLink, RouterView } from "vue-router";
import navIndex from '@/components/navigation/navIndex.vue'
</script>

<template>
  <header class="container">
    <navIndex />
  </header>
  <RouterView />
</template>
