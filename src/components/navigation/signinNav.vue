<template>
    <div class="row">
      <div class="col">
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <router-link to="/" class="nav-link"><i class="bi bi-arrow-bar-left"></i> Back</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><i class="bi bi-pencil-fill"></i> Sign Up</a>
          </li>
        </ul>
      </div>
    </div>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>
