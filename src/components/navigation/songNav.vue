<template>
    <div class="row">
      <div class="col">
        <ul class="nav ">
          <li class="nav-item">
            <router-link to="/" class="nav-link"><i class="bi bi-arrow-bar-left"></i> Back</router-link>
          </li>
          <li class="nav-item" v-if="!editing && userStore().isLoggedIn">
            <button  @click="toggleedit" class="nav-link btn btn-link" href="#"><i class="bi bi-pencil-fill"></i> Edit</button>
          </li>
          <li class="nav-item" v-if="editing && userStore().isLoggedIn">
            <button @click="toggleedit" class="nav-link btn btn-link" href="#"><i class="bi bi-cloud-arrow-up-fill"></i> Save</button>
          </li>
          <li class="nav-item" v-if="userStore().isLoggedIn">
            <a class="nav-link text-danger" href="#"><i class="bi bi-trash-fill"></i> Delete</a>
          </li>
        </ul>
      </div>
    </div>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router"
import { ref } from 'vue'

import { userStore } from "@/stores/userStore";

const emit = defineEmits(['toggleEdit'])

const editing = ref(false)

function toggleedit () {
  editing.value = !editing.value
  emit('toggleEdit')
}
</script>
