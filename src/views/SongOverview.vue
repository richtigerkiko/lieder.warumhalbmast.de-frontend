<template>
  <main class="container pb-5">
    <div class="row">
      <div class="col"></div>
      <form class="d-flex py-3">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <!-- <button class="btn btn-outline-success" type="submit">Search</button> -->
      </form>
    </div>
    <div class="row">
      <div class="col-8">
        <h1>Lieder Übersicht</h1>
      </div>
      <div class="col text-end">
        <div class="row">
        <div class="col">
           <router-link to="/song/new"><i v-if="(userStore().isLoggedIn)" class="h1 text-primary bi bi-plus-circle-fill"></i></router-link>
        </div>
        <div class="col">
          <router-link to="/login"><i class="h1 text-primary bi bi-person-circle"></i></router-link>
        </div>
        </div>
         
      </div>
    </div>
    <div class="row">
      <h4 class="my-3">L</h4>
      <ul v-for="song in songs" class="list-group">
        <li class="list-group-item">
          <router-link :to="'/song/'+song.id">{{song.songname}}</router-link>
        </li>
      </ul>
      <br><br><br>
      <h5>-- DummyData --</h5>
      <h3 class="my-3">A</h3>
      <ul class="list-group">
        <li class="list-group-item">Ade zur guten Nacht</li>
        <li class="list-group-item">Alle Vögel sind schon da</li>
        <li class="list-group-item">An einem Sommermorgen</li>
        <li class="list-group-item">Auf du junger Wandersmann</li>
      </ul>
      <h3 class="my-3">B</h3>
      <ul class="list-group">
        <li class="list-group-item">Backe, backe Kuchen</li>
        <li class="list-group-item">Brüderchen, komm tanz mit mir</li>
        <li class="list-group-item">Bona nox, bis a rechter Ochs</li>
      </ul>
      <h3 class="my-3">D</h3>
      <ul class="list-group">
        <li class="list-group-item">Der Mond ist aufgegangen</li>
        <li class="list-group-item">Der Hampelmann</li>
        <li class="list-group-item">Das bucklige Männlein</li>
        <li class="list-group-item">Die goldene Brücke</li>
        <li class="list-group-item">Die Tiroler sind lustig</li>
        <li class="list-group-item">Dona nobis pacem</li>
      </ul>
      <h3 class="my-3">D</h3>
      <ul class="list-group">
        <li class="list-group-item">Der Mond ist aufgegangen</li>
        <li class="list-group-item">Der Hampelmann</li>
        <li class="list-group-item">Das bucklige Männlein</li>
        <li class="list-group-item">Die goldene Brücke</li>
        <li class="list-group-item">Die Tiroler sind lustig</li>
        <li class="list-group-item">Dona nobis pacem</li>
      </ul>
    </div>
    {{ userStore().isLoggedIn }}
  </main>
</template>
<script setup lang="ts">
import { RouterLink } from "vue-router";
import { onMounted, ref } from "vue";
import {userStore} from '@/stores/userStore'
import { Song } from "@/models";
import { DataStore } from "aws-amplify";

const songs = ref(Array<Song>())

onMounted(async () => {
  songs.value = await DataStore.query(Song)
});
</script>
