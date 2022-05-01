<template>
  <main class="container">
    <songNav @toggleEdit="ToggleEditSong" />
    <div class="row">
      <div class="col">
        <h1 class="mt-2">La Paloma</h1>
      </div>
    </div>
    <div class="row">
      <div class="col" ref="editor"></div>
    </div>
  </main>
</template>
<script setup lang="ts">
import songNav from "@/components/navigation/songNav.vue";
import { onMounted, ref } from "vue";
import EditorJS from "@editorjs/editorjs";
import { useRoute } from "vue-router";


const editor = ref(null);
let edit: EditorJS | null = null;

function SaveSong() {
  edit?.save().then((data) => {
    console.log(data);
  });
}
function ToggleEditSong () {
  console.log(edit?.readOnly.isEnabled)
  edit?.readOnly.toggle()  
}

onMounted(() => {
  console.log(useRoute().params.id)
  edit = new EditorJS({
    holder: editor.value!,
    readOnly: true,
    data: {
      blocks: [
        {
          id: "I6mog6MU1T",
          type: "paragraph",
          data: {
            text: "Ein Wind weht von Süd<br>Und zieht mich hinaus auf See.<br>Mein Kind, sei nicht traurig,<br>Tut der Abschied auch weh.<br>Mein Herz geht an Bord<br>Und fort muß die Reise geh'n,<br>Dein Schmerz wird vergeh'n<br>Und schön wird das Wiederseh'n.&nbsp;&nbsp;",
          },
        },
        {
          id: "2HoEED1UBj",
          type: "paragraph",
          data: {
            text: "Mich trägt die Sehnsucht fort<br>In die blaue Ferne,<br>Unter mir Meer<br>Und über mir Nacht und Sterne.<br>Vor mir die Welt, so treibt mich<br>Der Wind des Lebens.<br>Wein nicht, mein Kind,<br>Die Tränen, die sind vergebens!&nbsp;&nbsp;",
          },
        },
      ],
    },
  });
});
</script>
