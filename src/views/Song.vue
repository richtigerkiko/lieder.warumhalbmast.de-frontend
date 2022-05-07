<template>
  <main class="container">
    <songNav @toggleEdit="ToggleEditSong" :editing="isEditing" />
    <div class="row">
      <div class="col">
        <div class="my-5" v-if="isEditing">
          <input type="text" class="form-control" placeholder="SongTitle" v-model="test.songname"/>
        </div>
        <h1 v-else class="mt-2">{{ song.songname }}</h1>
      </div>
    </div>
    <div class="row">
      <div class="col" ref="editor"></div>
    </div>  
  </main>
</template>
<script setup lang="ts">
import songNav from "@/components/navigation/songNav.vue";
import { computed, onMounted, ref  } from "vue";
import EditorJS from "@editorjs/editorjs";
import { useRoute, useRouter } from "vue-router";
import { userStore } from "@/stores/userStore";
import { DataStore } from "aws-amplify";
// import { Song, Verse } from "@/models";
import { convertApiVerseToEditorJsBlocks, convertEditorJsBlocksToApiVerse } from "@/helper/converts";
import { Song, Verse } from "@/models";

const editor = ref(null);
let edit: EditorJS | null = null;
const router = useRouter()

const isNewSong = ref(true)

// const writableSongTilte = ref("Dödel Song Title")

const song = ref(new Song({
  songname: "Dödel Song Title",
  editor: userStore().displayName
}))

const test = ref({
  songname: "asd",
  test2: 0
})

const verses = ref([] as Verse[])

const isEditing = ref(true)

onMounted(() => {
  if(useRoute().params.id as string === 'new'){
    isNewSong.value = true
  }
  getPageData();
});



async function SaveSong() {
  const data = await edit?.save()
  const s = await DataStore.save(song.value)
  const newverses = convertEditorJsBlocksToApiVerse(data!.blocks, s.id);
  verses.value.forEach((v) => DataStore.delete(Verse, todelete => todelete.id("eq", v.id)));
  newverses.forEach((v) => DataStore.save(v));
  router.push("/song/" + song.value.id)
}

function ToggleEditSong() {
  if(isEditing.value){
    SaveSong()
  }
  
  isEditing.value = !isEditing.value
  edit?.readOnly.toggle();
}

async function getPageData() {
  const searchedSong = await DataStore.query(Song, useRoute().params.id as string)
  if(searchedSong){
    song.value = searchedSong
    isEditing.value = false
  } 
  verses.value = (await DataStore.query(Verse))
    .filter((v) => v.songID === song.value.id)
    .sort((a, b) => a.position! - b.position!);
  initEditorJs();
}

function initEditorJs() {
  edit = new EditorJS({
    holder: editor.value!,
    readOnly: !(isNewSong.value),
    placeholder: "write your Song BUDDY",
    data:{
      blocks: convertApiVerseToEditorJsBlocks(verses.value)
    }
  });
}


</script>
