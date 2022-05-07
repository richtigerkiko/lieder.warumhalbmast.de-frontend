<script setup lang="ts">
// import WelcomeItem from './WelcomeItem.vue'
import { RouterLink, RouterView } from "vue-router";
import navIndex from '@/components/navigation/navIndex.vue'
</script>

<template>
  <header class="container">
    <!-- <navIndex /> -->
  </header>
    <RouterView v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <component :is="Component"></component>
      </Transition>
    </RouterView>
</template>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.35s ease;
}

.fade-enter-from,
.fade-leave-active {
  opacity: 0;
}
</style>