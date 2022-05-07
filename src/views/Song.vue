<template>
  <main class="container">
    <songNav @toggleEdit="ToggleEditSong" @deleteSong="deleteSong" :editing="isEditing" :isNewSong="isNewSong"/>
    <div class="row">
      <div class="col">
        <div class="my-5" v-if="isEditing">
          <input type="text" class="form-control" placeholder="SongTitle" v-model="editSong.songTitle"/>
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
import { onMounted, ref  } from "vue";
import EditorJS from "@editorjs/editorjs";
import { useRoute, useRouter } from "vue-router";
import { userStore } from "@/stores/userStore";
import { DataStore } from "aws-amplify";
import { convertApiVerseToEditorJsBlocks, convertEditorJsBlocksToApiVerse } from "@/helper/converts";
import { Song, Verse } from "@/models";

const editor = ref(null);
let edit: EditorJS | null = null;
const router = useRouter()

const isNewSong = ref(false)

const editSong = ref({
  songTitle: "",
  editor: userStore().displayName
})

const song = ref(new Song({}))

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
  if(isNewSong){
    song.value = new Song({
      songname: editSong.value.songTitle,
      editor: userStore().displayName
    })
  }
  const s = await DataStore.save(Song.copyOf(song.value, updateSong => {
    updateSong.songname = editSong.value.songTitle
    updateSong.editor = editSong.value.editor
  }))

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
    editSong.value.songTitle = song.value.songname!
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
  })
}

async function deleteSong(){
  await DataStore.delete(song.value)
  router.push('/')
}
</script>
