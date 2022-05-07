<template>
  <main class="container pt-3">
    <div class="row">
      <div class="col-8">
        <h1>Lieder Übersicht</h1>
      </div>
      <SongOverviewNav />
    </div>
    <div v-for="letter in alphabetSongArray" class="row">
      <div v-show="letter.songs.length > 0">
        <h4 class="my-3">{{ letter.letter }}</h4>
        <ul v-for="song in letter.songs" class="list-group">
          <li class="list-group-item">
            <router-link :to="'/song/' + song.id">{{ song.title }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
import { RouterLink } from "vue-router";
import { onMounted, ref } from "vue";
import { userStore } from '@/stores/userStore'
import { Song } from "@/models";
import { DataStore } from "aws-amplify";
import { convertSongsToAlphabetArray, type AlphabeticalSong } from "@/helper/converts";
import SongOverviewNav from "@/components/navigation/songOverviewNav.vue";
const alphabetSongArray = ref(Array<AlphabeticalSong>())

onMounted(async () => {
  alphabetSongArray.value = convertSongsToAlphabetArray(await DataStore.query(Song))
});
</script>
