<template>
      <div class="col text-end">
        <div class="row">
          <div class="col">
            <router-link to="/song/new"><i v-if="(userStore().isLoggedIn)"
                class="h1 text-primary bi bi-plus-circle-fill"></i></router-link>
          </div>
          <div class="col">
            <router-link to="/login"><i class="h1 text-primary bi bi-person-circle"></i></router-link>
          </div>
        </div>
      </div>
</template>

<script setup lang="ts">
import { userStore } from '@/stores/userStore';
</script>
