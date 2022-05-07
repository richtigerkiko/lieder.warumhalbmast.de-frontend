<template>
  <div class="row">
    <div class="col">
      <ul class="nav ">
        <li class="nav-item">
          <router-link to="/" class="nav-link"><i class="bi bi-arrow-bar-left"></i> Back</router-link>
        </li>
        <li class="nav-item" v-if="!editing && userStore().isLoggedIn">
          <button @click="emit('toggleEdit')" class="nav-link btn btn-link" href="#"><i class="bi bi-pencil-fill"></i>
            Edit</button>
        </li>
        <li class="nav-item" v-if="editing && userStore().isLoggedIn">
          <button @click="emit('toggleEdit')" class="nav-link btn btn-link" href="#"><i
              class="bi bi-cloud-arrow-up-fill"></i> Save</button>
        </li>
        <li class="nav-item" v-if="userStore().isLoggedIn && !isNewSong">
          <button class="nav-link btn btn-link link-danger" data-bs-toggle="modal" data-bs-target="#deleteModal"
            href="#"><i class="bi bi-trash-fill"></i> Delete</button>
        </li>
      </ul>
    </div>
    <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="deleteModalLabel">Delete Song</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            Shure you want to delete?
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-danger" @click="emit('deleteSong')"  data-bs-dismiss="modal">DELETE</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router"
import { userStore } from "@/stores/userStore";

const emit = defineEmits(['toggleEdit', 'deleteSong'])
defineProps({
  editing: Boolean,
  isNewSong: Boolean
})

</script>
