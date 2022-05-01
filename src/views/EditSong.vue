<template>
  <main class="container">
    <songNav />
    <div class="row">
      <div class="col">
        <h1 class="mt-2">La Paloma</h1>
      </div>
    </div>
    <div class="row">
      <div class="col" ref="editor"></div>
    </div>
    <button @click="getEditorData">lololol</button>
    <p>
      Ein Wind weht von Süd <br />
      Und zieht mich hinaus auf See. <br />
      Mein Kind, sei nicht traurig, <br />
      Tut der Abschied auch weh. <br />
      Mein Herz geht an Bord <br />
      Und fort muß die Reise geh'n, <br />
      Dein Schmerz wird vergeh'n <br />
      Und schön wird das Wiederseh'n.
    </p>

    <p>
      Mich trägt die Sehnsucht fort <br />
      In die blaue Ferne, <br />
      Unter mir Meer <br />
      Und über mir Nacht und Sterne. <br />
      Vor mir die Welt, so treibt mich <br />
      Der Wind des Lebens. <br />
      Wein nicht, mein Kind, <br />
      Die Tränen, die sind vergebens!
    </p>

    <p>
      Wie blau ist das Meer, Wie groß kann der Himmel sein? Ich schau hoch vom
      Mastkorb Weit in die Welt hinein. Nach vorn geht mein Blick, Zurück darf
      kein Seemann schau'n. Kap Horn liegt auf Lee, Jetzt heißt es Gott
      vertrau'n. Seemann, gib acht. im Strahl Da als Gruß des Friedens Hell in
      die Nacht Das leuchtende Kreuz des Südens. Schroff ist das Riff, Und
      schnell geht ein Schiff zugrunde, Früh oder spät Schlägt jedem von uns die
      Stunde.
    </p>
    <p>
      Auf, Matrosen, ohe! Einmal muß es vorbei sein. Einmal holt uns die See Und
      das Meer gibt keinen von uns zurück. Seemanns Braut ist die See Und nur
      ihr kann er treu sein. Wenn der Sturmwind sein Lied singt, Dann winkt mir
      der Großen Freiheit Glück.
    </p>
  </main>
</template>
<script setup lang="ts">
import songNav from "@/components/navigation/songNav.vue";
import { onMounted, ref } from "vue";
import EditorJS from "@editorjs/editorjs";

const editor = ref(null);
let edit: EditorJS | null = null;

function getEditorData() {
  edit?.save().then((data) => {
    console.log(data);
  });
}

onMounted(() => {
  edit = new EditorJS({
    holderId: editor.value!,
    readOnly: false,
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
